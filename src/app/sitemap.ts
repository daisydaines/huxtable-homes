import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const BASE_URL = "https://huxtablehomes.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((project) => ({
    url: `${BASE_URL}/portfolio/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: BASE_URL, lastModified: new Date() },
    { url: `${BASE_URL}/about`, lastModified: new Date() },
    { url: `${BASE_URL}/portfolio`, lastModified: new Date() },
    { url: `${BASE_URL}/contact`, lastModified: new Date() },
    ...projectRoutes,
  ];
}
