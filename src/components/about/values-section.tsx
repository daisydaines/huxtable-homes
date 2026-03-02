import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";

const values = [
  {
    title: "Our Craft",
    description:
      "Our creative passion is rooted in purposeful details with solid intent for use of light & space. We combine the finest building materials and intentional craftsmanship with a rare attention to detail, making each project a unique experience for all who enter.",
  },
  {
    title: "Our Vision",
    description:
      "Our vision originates from the belief that a home is a place of inspiration where our clients forge bonds of connection and love while gathering with family and friends to celebrate life. We create spaces for peaceful living.",
  },
];

export function ValuesSection() {
  return (
    <section className="py-24 md:py-32 bg-warm-beige">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide every project we undertake."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, i) => (
            <AnimateOnScroll key={value.title} delay={i * 0.15}>
              <Card className="bg-white/80 border-0 shadow-none h-full">
                <CardContent className="pt-8 pb-8 px-8">
                  <h3 className="font-serif text-xl font-semibold mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
