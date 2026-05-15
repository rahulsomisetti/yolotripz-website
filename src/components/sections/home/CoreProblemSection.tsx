"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/constants";
import { problemCards } from "@/content/home";

export function CoreProblemSection() {
  return (
    <Section
      id="why-planning-matters"
      eyebrow="The real risk"
      title="Choosing the wrong country or course can cost ₹30–50 lakhs — and one to two years."
      description="Studying abroad is not a single decision. It is a chain of decisions. When the chain is weak, families feel it first in stress — and later in time and money."
      variant="default"
      edge
    >
      <div className="grid gap-8 md:grid-cols-3 md:gap-10 lg:gap-12">
        {problemCards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.06}>
            <Card className="h-full space-y-0 border border-navy/[0.07] border-l-[3px] border-l-gold/60 bg-card p-7 shadow-ring md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/90">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 font-display text-lg font-semibold leading-snug text-navy md:text-xl">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-[1.7] text-muted-foreground md:text-[0.9375rem]">
                {card.body}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-16 md:mt-20" delay={0.2}>
        <div className="flex flex-col items-start justify-between gap-8 border border-navy/[0.09] bg-muted/30 px-7 py-8 sm:flex-row sm:items-center sm:px-10 sm:py-9">
          <p className="max-w-xl text-sm leading-[1.7] text-muted-foreground md:text-[0.9375rem]">
            If this resonates, the fastest way to reduce uncertainty is a structured conversation —
            not more forum threads.
          </p>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href="/contact#book" variant="primary" className="w-full sm:w-auto">
              Book free counselling
            </ButtonLink>
            <ButtonLink
              href={getWhatsAppLink()}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              WhatsApp a question
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
