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
          <Reveal key={s.step} delay={i * 0.05} className="relative">
            {i < processSteps.length - 1 && (
              <div
                className="hidden lg:block absolute top-[3rem] left-[3rem] right-[-2.5rem] h-px border-t border-dashed border-navy/15 -z-10"
                aria-hidden="true"
              />
            )}
            <Card className="group relative flex h-full flex-col border-navy/[0.05] bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-navy/[0.09] hover:shadow-soft-hover md:p-8">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/45 bg-muted/45 font-display text-xs font-semibold tabular-nums text-navy transition-all duration-300 group-hover:scale-105 group-hover:border-gold group-hover:bg-gold/10">
                {s.step}
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold leading-snug text-navy group-hover:text-primary transition-colors duration-200">
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
