"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { visaServicesMistakes } from "@/content/visa-services";

export function VisaServicesMistakes() {
  return (
    <Section
      id="mistakes"
      variant="default"
      edge
      eyebrow="Avoid self-sabotage"
      title="Common visa mistakes we see — early enough to fix."
      description="None of these require talent — they require sequencing. When you fix them quietly, the whole household breathes easier."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
        {visaServicesMistakes.map((m, i) => (
          <Reveal key={m.title} delay={i * 0.06}>
            <Card className="relative h-full overflow-hidden border border-navy/[0.07] bg-card p-7 shadow-ring md:p-8">
              <div
                className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-gold/75 to-gold/25"
                aria-hidden
              />
              <div className="pl-4">
                <h3 className="font-display text-lg font-semibold leading-snug text-navy">{m.title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-muted-foreground md:text-[0.9375rem]">
                  {m.body}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
