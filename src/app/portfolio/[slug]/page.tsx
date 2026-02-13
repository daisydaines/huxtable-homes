import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject, getAdjacentProjects } from "@/data/projects";
import { ProjectGallery } from "@/components/portfolio/project-gallery";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: `${project.name} | Huxtable Homes`,
      description: project.description,
      images: [{ url: project.coverImage, width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <>
      {/* Cover Hero */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src={project.coverImage}
          alt={project.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-12 md:pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Badge
              variant="secondary"
              className="mb-4 bg-white/20 text-white backdrop-blur-sm border-0"
            >
              {project.category}
            </Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              {project.name}
            </h1>
            <p className="mt-3 text-lg text-white/80">{project.location}</p>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <AnimateOnScroll className="lg:col-span-2">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                About This Project
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.longDescription}
              </p>

              {/* Features */}
              <h3 className="font-serif text-xl font-semibold mt-10 mb-4">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="text-bronze mt-1 shrink-0">&#9670;</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            {/* Quick Facts Sidebar */}
            <AnimateOnScroll delay={0.2}>
              <div className="bg-warm-beige rounded-lg p-8">
                <h3 className="font-serif text-lg font-semibold mb-6">
                  Project Details
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Location", value: project.location },
                    { label: "Year", value: project.year.toString() },
                    { label: "Category", value: project.category },
                    {
                      label: "Size",
                      value: `${project.sqft.toLocaleString()} sq ft`,
                    },
                  ].map((fact, i) => (
                    <div key={fact.label}>
                      <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                        {fact.label}
                      </p>
                      <p className="mt-1 font-medium">{fact.value}</p>
                      {i < 3 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
              Gallery
            </h2>
          </AnimateOnScroll>
          <ProjectGallery images={project.images} projectName={project.name} />
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-border">
            <div className="py-8 pr-8">
              {prev ? (
                <Link
                  href={`/portfolio/${prev.slug}`}
                  className="group block"
                >
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                    Previous Project
                  </p>
                  <p className="font-serif text-lg font-semibold group-hover:text-bronze transition-colors">
                    {prev.name}
                  </p>
                </Link>
              ) : (
                <div />
              )}
            </div>
            <div className="py-8 pl-8 text-right">
              {next ? (
                <Link
                  href={`/portfolio/${next.slug}`}
                  className="group block"
                >
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                    Next Project
                  </p>
                  <p className="font-serif text-lg font-semibold group-hover:text-bronze transition-colors">
                    {next.name}
                  </p>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-warm-beige">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">
              Inspired by This Project?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Let&apos;s discuss how we can create something equally extraordinary
              for you.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-bronze hover:bg-bronze-dark text-white"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
