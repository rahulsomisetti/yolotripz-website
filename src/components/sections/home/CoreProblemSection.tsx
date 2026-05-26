"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/constants";
import { problemCards } from "@/content/home";
import { Compass, Hourglass, HeartHandshake } from "lucide-react";

const icons = [Compass, Hourglass, HeartHandshake];

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
        {problemCards.map((card, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={card.title} delay={i * 0.06}>
              <Card className="group relative h-full overflow-hidden border border-navy/[0.05] bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-navy/[0.09] hover:shadow-soft-hover md:p-8">
                <div
                  className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-gold via-gold/50 to-transparent"
                  aria-hidden
                />
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors duration-300">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-gold/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold leading-snug text-navy md:text-xl group-hover:text-primary transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-[1.7] text-muted-foreground md:text-[0.9375rem]">
                  {card.body}
                </p>
              </Card>
            </Reveal>
          );
        })}
      </div>
      <Reveal className="mt-16 md:mt-20" delay={0.2}>
        <div className="flex flex-col items-start justify-between gap-8 border border-navy/[0.05] bg-card/65 backdrop-blur-md px-7 py-8 shadow-soft sm:flex-row sm:items-center sm:px-10 sm:py-9 rounded-2xl">
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

