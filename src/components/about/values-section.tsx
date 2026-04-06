import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";

export function ValuesSection() {
  return (
    <section className="py-24 md:py-32 bg-warm-beige">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            title="Mission Statement"
            subtitle="The principles that guide every project we undertake."
          />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Our creative passion is rooted in purposeful details with solid
              intent for use of light & space. We combine the finest building
              materials and intentional craftsmanship with a rare attention to
              detail, making each project a unique experience for all who enter.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our vision originates from the belief that a home is a place of
              inspiration where our clients forge bonds of connection and love
              while gathering with family and friends to celebrate life. We
              create spaces for peaceful living.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
