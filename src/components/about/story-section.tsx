import Image from "next/image";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function StorySection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll>
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-bronze mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">
                A Legacy of Craftsmanship
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1995 by Ken and Michelle Huxtable, our firm was
                  born from a shared belief that a home should be more than a
                  structure — it should be a living expression of the people who
                  inhabit it.
                </p>
                <p>
                  What began as a boutique design-build practice in St George
                  has grown into one of Utah&apos;s most respected luxury
                  residential firms. Over thirty years, we&apos;ve completed
                  more than 75 bespoke homes across the state, each one a unique
                  collaboration between our team and our clients.
                </p>
                <p>
                  We believe that great architecture emerges from a deep
                  understanding of place, purpose, and the craft of building.
                  Our approach is unhurried and meticulous — we take on only a
                  handful of projects each year, ensuring that every home
                  receives our full creative attention.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Huxtable Homes craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
