import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";

const team = [
  {
    name: "Ken Huxtable",
    role: "Co-Founder & Lead Architect",
    bio: "With over 30 years of experience in luxury residential architecture, Ken brings a rare blend of artistic vision and technical precision to every project.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Michelle Huxtable",
    role: "Co-Founder & Design Director",
    bio: "Michelle's background in fine art and interior architecture informs her holistic approach to residential design, where every material and detail tells a story.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Tyson Green",
    role: "Director of Construction",
    bio: "Tyson oversees every build with an unwavering commitment to quality and schedule. His hands-on leadership ensures that our designs are realized exactly as envisioned.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <AnimateOnScroll key={member.name} delay={i * 0.15}>
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-bronze text-sm mt-1">{member.role}</p>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
