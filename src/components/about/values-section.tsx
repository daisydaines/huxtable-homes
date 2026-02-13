import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";

const values = [
  {
    title: "Uncompromising Quality",
    description:
      "We select the finest materials and partner with master craftsmen who share our exacting standards. Every joint, every finish, every detail is held to the highest measure.",
  },
  {
    title: "Thoughtful Design",
    description:
      "Great homes begin with great listening. We take the time to understand how you live, what inspires you, and what home means to you — then translate that into architecture.",
  },
  {
    title: "Enduring Value",
    description:
      "We build homes that stand the test of time — architecturally, structurally, and aesthetically. Our designs transcend trends, creating spaces that grow more beautiful with age.",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
