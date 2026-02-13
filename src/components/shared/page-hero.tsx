interface PageHeroProps {
  title: string;
  subtitle: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-warm-beige">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
