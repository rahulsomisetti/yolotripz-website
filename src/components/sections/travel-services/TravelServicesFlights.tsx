"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { travelServicesFlights } from "@/content/travel-services";

export function TravelServicesFlights() {
  const { title, intro, bullets } = travelServicesFlights;

  return (
    <Section
      id="flights"
      variant="muted"
      eyebrow="Flights"
      title={title}
      description={intro}
    >
      <Reveal>
        <Card className="border-navy/[0.08] bg-card p-8 shadow-soft md:p-10">
          <ul className="space-y-6">
            {bullets.map((line, i) => (
              <li
                key={i}
                className="flex gap-4 border-b border-border pb-6 text-sm leading-[1.65] text-muted-foreground last:border-0 last:pb-0 md:text-[0.9375rem]"
              >
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy/10 bg-muted/50 font-display text-xs font-semibold text-navy"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>
    </Section>
  );
}
