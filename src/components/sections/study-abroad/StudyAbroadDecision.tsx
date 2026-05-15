"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { studyAbroadDecision } from "@/content/study-abroad";

export function StudyAbroadDecision() {
  return (
    <Section
      id="why-it-matters"
      variant="default"
      edge
      eyebrow="The decision"
      title={studyAbroadDecision.title}
      description={studyAbroadDecision.intro}
    >
      <div className="grid gap-8 md:grid-cols-3 md:gap-10">
        {studyAbroadDecision.points.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.07}>
            <Card className="h-full border border-navy/[0.07] border-l-[3px] border-l-gold/55 bg-card p-7 shadow-ring md:p-8">
              <h3 className="font-display text-lg font-semibold leading-snug text-navy">{item.title}</h3>
              <p className="mt-4 text-sm leading-[1.7] text-muted-foreground md:text-[0.9375rem]">
                {item.body}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
