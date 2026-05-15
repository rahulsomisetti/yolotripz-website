"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { aboutMilestones } from "@/content/about";

export function AboutTimeline() {
  return (
    <Section
      id="timeline"
      variant="default"
      eyebrow="Milestones"
      title="A quiet arc — built with families, not billboards."
      description="We grow when referrals come home from campus — not when we shout the loudest."
    >
      <div className="relative mx-auto max-w-3xl">
        <div
          className="absolute left-[0.65rem] top-2 bottom-2 w-px bg-gradient-to-b from-gold/40 via-border to-transparent md:left-4"
          aria-hidden
        />
        <ol className="relative space-y-10 md:space-y-12">
          {aboutMilestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 0.06}>
              <li className="relative flex gap-6 md:gap-10">
                <div className="flex shrink-0 flex-col items-center pt-1">
                  <span className="relative z-[1] flex h-5 w-5 items-center justify-center rounded-full border-2 border-gold/60 bg-surface md:h-6 md:w-6" />
                </div>
                <Card className="min-w-0 flex-1 border-navy/[0.08] bg-card px-5 py-6 shadow-soft md:px-7 md:py-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {m.year}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-navy md:text-xl">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.65] text-muted-foreground md:text-[0.9375rem]">
                    {m.detail}
                  </p>
                </Card>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
