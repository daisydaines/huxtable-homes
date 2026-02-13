import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Huxtable Homes. Tell us about your project vision and let's explore how we can bring it to life.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Every great home begins with a conversation. Tell us about your vision, and let's explore how we can bring it to life."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <AnimateOnScroll className="lg:col-span-2">
              <ContactForm />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <ContactInfo />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
