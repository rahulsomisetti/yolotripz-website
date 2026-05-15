"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { aboutPhilosophy } from "@/content/about";

export function AboutPhilosophy() {
  return (
    <Section
      id="philosophy"
      variant="default"
      eyebrow="How we counsel"
      title={aboutPhilosophy.title}
      description={aboutPhilosophy.description}
    >
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {aboutPhilosophy.pillars.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.07}>
            <Card className="h-full border-navy/[0.08] bg-card p-7 shadow-soft transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-navy/12 hover:shadow-soft-hover md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-navy">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-[1.65] text-muted-foreground md:text-[0.9375rem]">
                {item.body}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
