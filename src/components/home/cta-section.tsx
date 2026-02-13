import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function CTASection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="relative rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 py-20 md:py-28 px-8 md:px-16 text-center">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Ready to Build Your Dream Home?
              </h2>
              <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                Every great home begins with a conversation. Tell us about your
                vision, and let&apos;s explore how we can bring it to life.
              </p>
              <div className="mt-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-bronze hover:bg-bronze-dark text-white text-base px-10"
                >
                  <Link href="/contact">Start the Conversation</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
