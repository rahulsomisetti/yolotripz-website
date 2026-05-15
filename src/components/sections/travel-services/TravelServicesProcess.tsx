"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { travelServicesProcess } from "@/content/travel-services";

export function TravelServicesProcess() {
  return (
    <Section
      id="process"
      variant="default"
      eyebrow="How it works"
      title="A quiet, five-step travel process."
      description="No theatrics — just a sequence you can follow whether you are booking one ticket or planning a full holiday."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {travelServicesProcess.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.05}>
            <Card className="h-full border-navy/[0.08] bg-card p-6 shadow-soft md:p-7">
              <span className="font-display text-sm font-semibold text-navy/45">{s.step}</span>
              <h3 className="mt-4 font-display text-base font-semibold leading-snug text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-[1.65] text-muted-foreground">{s.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
