"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { processSteps } from "@/content/home";
import { getWhatsAppLink } from "@/lib/constants";

export function ProcessSection() {
  return (
    <Section
      id="process"
      variant="muted"
      eyebrow="How we work"
      title="A calm five-step path from first conversation to departure."
      description="You will always know what is happening now — and what should happen next. No mystery stages, no duplicate work."
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {processSteps.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.05}>
            <Card className="flex h-full flex-col border-navy/[0.07] bg-card p-7 shadow-ring md:p-8">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/45 bg-muted/45 font-display text-xs font-semibold tabular-nums text-navy">
                {s.step}
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold leading-snug text-navy">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-[1.7] text-muted-foreground">{s.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-16 text-center md:mt-20" delay={0.15}>
        <div className="mx-auto max-w-3xl border border-navy/[0.08] bg-background px-8 py-10 md:px-12 md:py-12">
          <p className="mx-auto max-w-measure text-pretty text-sm leading-[1.7] text-muted-foreground md:text-[0.9375rem]">
            Ready to see how this maps to your intake year? Message us on WhatsApp with your CV or
            transcript summary — we will tell you if a call is the right next step.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
            <ButtonLink href="/contact#book" variant="primary" className="w-full sm:w-auto">
              Start with counselling
            </ButtonLink>
            <ButtonLink
              href={getWhatsAppLink()}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              WhatsApp us first
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
