"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { visaServicesTimeline } from "@/content/visa-services";

export function VisaServicesTimeline() {
  return (
    <Section
      id="timeline"
      variant="default"
      eyebrow="Planning window"
      title="A sensible timeline — so appointments do not ambush you."
      description="Exact dates depend on your destination and consulate. Use this as a planning spine; in counselling we map it to your real enrolment or travel month."
    >
      <div className="relative mx-auto max-w-3xl pl-2 sm:pl-0">
        <div
          className="absolute bottom-3 left-[0.4rem] top-3 w-px bg-gradient-to-b from-gold/45 via-border to-transparent sm:left-0"
          aria-hidden
        />
        <ol className="space-y-12 sm:space-y-14">
          {visaServicesTimeline.map((row, i) => (
            <Reveal key={row.phase} delay={i * 0.08}>
              <li className="relative pl-10 sm:pl-12">
                <span
                  className="absolute left-0 top-2 flex h-3 w-3 items-center justify-center rounded-full border-2 border-gold/40 bg-background sm:-left-1.5"
                  aria-hidden
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold/70" />
                </span>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {row.label}
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-navy sm:text-xl">{row.phase}</p>
                <p className="mt-3 max-w-prose text-sm leading-[1.7] text-muted-foreground sm:text-[0.9375rem]">
                  {row.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
