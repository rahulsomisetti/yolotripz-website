"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { travelServicesHoliday } from "@/content/travel-services";

export function TravelServicesHoliday() {
  const { title, intro, highlights } = travelServicesHoliday;

  return (
    <Section
      id="holidays"
      variant="default"
      eyebrow="Holidays"
      title={title}
      description={intro}
    >
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {highlights.map((h, i) => (
          <Reveal key={h.title} delay={i * 0.07}>
            <Card className="relative h-full overflow-hidden border-navy/[0.08] bg-gradient-to-b from-card to-muted/25 p-7 shadow-soft md:p-8">
              <div
                className="absolute right-0 top-0 h-24 w-24 translate-x-1/3 -translate-y-1/3 rounded-full bg-gold/[0.06]"
                aria-hidden
              />
              <h3 className="relative font-display text-lg font-semibold text-navy">{h.title}</h3>
              <p className="relative mt-4 text-sm leading-[1.65] text-muted-foreground">{h.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
