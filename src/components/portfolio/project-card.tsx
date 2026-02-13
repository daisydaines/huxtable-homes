import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
        <Image
          src={project.coverImage}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
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
          <p className="text-sm text-white/70 mt-1">{project.location}</p>
        </div>
      </div>
    </Link>
  );
}
