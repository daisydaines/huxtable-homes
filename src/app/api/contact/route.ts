import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendContactEmail } from "@/lib/email";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    let dbSuccess = false;
    let emailSuccess = false;

    try {
      await prisma.contactSubmission.create({ data });
      dbSuccess = true;
    } catch (err) {
      console.error("Failed to save contact submission to database:", err);
    }

    try {
      await sendContactEmail(data);
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
        { success: false, errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
