import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ProjectGrid } from "@/components/portfolio/project-grid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of luxury custom homes — from modern mountain estates to Mediterranean villas and ranch compounds across Utah.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Our Portfolio"
        subtitle="Every project tells a story. Explore our collection of bespoke luxury residences crafted across Utah."
      />
      <ProjectGrid />
    </>
  );
}
