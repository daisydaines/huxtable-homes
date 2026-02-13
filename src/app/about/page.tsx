import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { StorySection } from "@/components/about/story-section";
import { ValuesSection } from "@/components/about/values-section";
import { TeamSection } from "@/components/about/team-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Huxtable Homes — our story, values, and the team behind Utah's finest luxury residences.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Huxtable Homes"
        subtitle="Designing and building bespoke luxury residences since 1995. Our passion is crafting homes that stand the test of time."
      />
      <StorySection />
      <ValuesSection />
      <TeamSection />
    </>
  );
}
