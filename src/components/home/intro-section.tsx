import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";

export function IntroSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            title="Building Beyond Expectations"
            subtitle="For over thirty years, Huxtable Homes has been crafting extraordinary residences across Utah. We bring together world-class architects, master craftsmen, and visionary designers to create homes that are as unique as the families who inhabit them."
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                number: "75+",
                label: "Luxury Homes Built",
              },
              {
                number: "30+",
                label: "Years of Excellence",
              },
              {
                number: "12",
                label: "Industry Awards",
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-5xl md:text-6xl font-bold text-bronze">
                  {stat.number}
                </p>
                <p className="mt-2 text-muted-foreground text-sm tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
