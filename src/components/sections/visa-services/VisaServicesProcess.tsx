"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { visaServicesProcess } from "@/content/visa-services";

export function VisaServicesProcess() {
  return (
    <Section
      id="process"
      variant="muted"
      eyebrow="How we work"
      title="The visa process — explained simply."
      description="Think of it as five quiet stages. You always know what we are doing now, and what comes next."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {visaServicesProcess.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.05}>
            <Card className="h-full border border-navy/[0.07] bg-card p-7 shadow-ring md:p-8">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/45 bg-muted/45 font-display text-xs font-semibold tabular-nums text-navy">
                {s.step}
              </span>
              <h3 className="mt-6 font-display text-base font-semibold leading-snug text-navy">{s.title}</h3>
              <p className="mt-3 text-sm leading-[1.7] text-muted-foreground">{s.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
