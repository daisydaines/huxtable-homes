"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Turnstile } from "@marsidev/react-turnstile";
import type { TurnstileInstance } from "@marsidev/react-turnstile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    if (!turnstileToken) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          turnstileToken,
          website: "", // honeypot — always empty for real users
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        // Reset Turnstile so user can retry
        turnstileRef.current?.reset();
        setTurnstileToken(null);
      }
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <h3 className="font-serif text-2xl font-normal mb-4">Thank You</h3>
        <p className="text-muted-foreground">
          We&apos;ve received your message and will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Honeypot — hidden from real users, bots fill it in */}
      <div style={{ display: "none" }} aria-hidden="true">
        <input name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            placeholder="Your full name"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(555) 000-0000"
            {...register("phone")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectType">Project Type</Label>
          <Input
            id="projectType"
            placeholder="e.g. New Build, Renovation"
            {...register("projectType")}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us about your project vision..."
          rows={6}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button
          type="submit"
          size="lg"
          disabled={submitting || !turnstileToken}
          className="bg-bronze hover:bg-bronze-dark text-white px-10"
        >
          {submitting ? "Sending..." : "Send Message"}
        </Button>
        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""}
          onSuccess={(token) => setTurnstileToken(token)}
          onExpire={() => setTurnstileToken(null)}
          options={{ appearance: "interaction-only" }}
        />
      </div>
    </form>
  );
}
