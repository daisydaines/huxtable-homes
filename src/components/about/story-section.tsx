import Image from "next/image";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { COMPANY } from "@/lib/constants";

export function StorySection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <AnimateOnScroll>
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-bronze mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight">
                A Legacy of Craftsmanship
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">

                <p>
                  Huxtable Homes started in St. George, UT in {COMPANY.founded}. Now
                  based in Holladay we have designed and built custom homes
                  in the most venerable areas across the state of Utah and
                  beyond. From Ogden to the Provo Riverwoods, Alpine,
                  Highland, Draper, Cottonwood Heights and Holladay
                  we have built or remodeled 50+ homes over the years.
                </p>
                <p>
                  Outside of the Wasatch Front, we have completed projects in
                  Oakley, Huntsville, Park City, Glen Wild, Midway, Wolf Creek
                  Ranches, plus projects across the country in New Canaan, CT.
                  We have also built commercial properties in Salt Lake City,
                  Ogden, Provo, Orem, Midvale and four locations in Chicago, IL.
                </p>
                <p>
                  Our home design process begins with assessing the site
                  topography, then creating a footprint that maximizes space,
                  light, and views. We have longstanding partnerships with a high
                  caliber team of engineers and architects that make our concepts a
                  reality by developing the construction drawings and delivering
                  our customers high resolution conceptual renderings that give
                  a vision of the finished product before we even break ground.
                </p>
                <p>
                  Our design team works intimately with homeowners on
                  furnishings to create a turn key operation that incorporates
                  their personal touch making their house a home.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/marcella-lot-68/compressed/Cam_01.jpg"
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
