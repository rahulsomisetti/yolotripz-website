"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { intakeTimelines } from "@/content/study-abroad";

export function StudyAbroadIntakes() {
  return (
    <Section
      id="intakes"
      variant="default"
      eyebrow="Intake planning"
      title="Timelines that look boring on paper — and save lakhs in real life."
      description="Exact deadlines vary by university and course. What does not vary is the direction: earlier clarity beats last-minute heroics."
    >
      <div className="space-y-4">
        {intakeTimelines.map((row, i) => (
          <Reveal key={row.country} delay={i * 0.05}>
            <Card className="border border-navy/[0.07] bg-card p-6 shadow-ring md:p-7 lg:grid lg:grid-cols-12 lg:gap-6 lg:p-8">
              <div className="lg:col-span-3">
                <h3 className="font-display text-lg font-semibold text-navy">{row.country}</h3>
                <p className="mt-2 text-sm font-medium text-primary">{row.primary}</p>
              </div>
              <div className="mt-4 border-t border-navy/[0.08] pt-4 lg:col-span-5 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Planning window
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{row.window}</p>
              </div>
              <div className="mt-4 border-t border-navy/[0.08] pt-4 lg:col-span-4 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Note
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{row.notes}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
