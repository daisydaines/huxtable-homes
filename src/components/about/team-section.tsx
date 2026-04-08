import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";

const team = [
  {
    name: "Ken & Michelle Huxtable",
    role: "Presidents / Founders",
    bio: [
      "Building their business through dedication and grit, Ken and Michelle have honed their design and construction expertise by taking on varied and challenging projects over the course of 30+ years. Merging Ken's vision for architectural design and execution with Michelle's masterful eye for aesthetics, they have found success from humble beginnings. As a team they compliment each other's strengths to deliver home after home that leave their clients in awe.",
      "Starting as a painting contractor in St. George, UT, Ken earned his General Contractors license in 1993 and has taken on more and more complex projects each year. From building homes cross-country in New Canaan, CT, to developing 160 acre mountain estates, he is a leader that picks up a paint-brush or shovel with his crews and does whatever it takes to meet client expectations.",
      "Gifted with design abilities that are always leading edge, Michelle has been designing spaces for over 40 years. From owning retail design boutiques to furnishing multi-million dollar estates, Michelle is gifted in coordinating the countless aspects of projects from start to finish. Her ability to mix beauty, functionality and quality is unparalleled. She has countless repeat clients that seek her services with the purchase of every new home or investment property knowing she consistently delivers beyond their expectations.",
    ],
  },
  {
    name: "Tyson Green P.E. MBA",
    role: "Senior Project Manager",
    bio: [
      "Joining Huxtable Homes two years ago as a project manager, Tyson has been managing teams and projects for over 14 years. Prior to joining us he led operations, compliance, and project execution teams for a Fortune 500 energy company. He has Master's Degrees in Business Administration and Civil Engineering from Brigham Young University and the University of Utah, respectively.",
    ],
  },
];

export function TeamSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            title="Our Team"
            subtitle="Led by a passionate team of architects, designers, and builders who share a commitment to excellence."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {team.map((member, i) => (
            <AnimateOnScroll key={member.name} delay={i * 0.15}>
              <div className="border-t border-border pt-8">
                <p className="text-bronze text-xs uppercase tracking-widest mb-2">
                  {member.role}
                </p>
                <h3 className="font-serif text-2xl font-normal mb-6">
                  {member.name}
                </h3>
                <div className="space-y-4">
                  {member.bio.map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-muted-foreground text-sm leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
