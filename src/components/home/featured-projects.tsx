import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { Badge } from "@/components/ui/badge";

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-warm-beige">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            title="Featured Projects"
            subtitle="A selection of our most recent work — each project a unique expression of our clients' vision and our commitment to excellence."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <AnimateOnScroll key={project.slug} delay={i * 0.15}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src={project.coverImage}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge
                      variant="secondary"
                      className="mb-3 bg-white/20 text-white backdrop-blur-sm border-0"
                    >
                      {project.category}
                    </Badge>
                    <h3 className="font-serif text-xl font-semibold text-white">
                      {project.name}
                    </h3>
                    <p className="text-sm text-white/70 mt-1">
                      {project.location}
                    </p>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-bronze hover:text-bronze-dark font-medium tracking-wide transition-colors"
            >
              View All Projects
              <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
