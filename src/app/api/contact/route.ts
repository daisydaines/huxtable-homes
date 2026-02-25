import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendContactEmail } from "@/lib/email";

// --- Rate limiting (in-memory) ---
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

// --- Turnstile verification ---
async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.warn("TURNSTILE_SECRET_KEY not set — skipping verification");
    return true;
  }

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    }
  );

  const data = await res.json();
  return data.success === true;
}

// --- Schema ---
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email({ message: "Invalid email" }),
  phone: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().min(10),
  turnstileToken: z.string().min(1, "Missing CAPTCHA token"),
  // Honeypot — must be empty
  website: z.string().max(0, "Bot detected").optional(),
});

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();

    // Honeypot check (fast reject before Zod)
    if (body.website) {
      return NextResponse.json({ success: true, message: "Message received" });
    }

    const data = contactSchema.parse(body);

    // Turnstile verification
    const turnstileOk = await verifyTurnstile(data.turnstileToken);
    if (!turnstileOk) {
      return NextResponse.json(
        { success: false, message: "CAPTCHA verification failed." },
        { status: 400 }
      );
    }

    const { turnstileToken: _, website: __, ...submission } = data;

    let dbSuccess = false;
    let emailSuccess = false;

    try {
      await prisma.contactSubmission.create({ data: submission });
      dbSuccess = true;
    } catch (err) {
      console.error("Failed to save contact submission to database:", err);
    }

    try {
      await sendContactEmail(submission);
      emailSuccess = true;
    } catch (err) {
      console.error("Failed to send contact notification email:", err);
    }

    if (!dbSuccess && !emailSuccess) {
      return NextResponse.json(
        { success: false, message: "Internal server error" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message received" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
