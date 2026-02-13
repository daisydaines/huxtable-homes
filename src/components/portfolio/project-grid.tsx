import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function ProjectGrid() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
