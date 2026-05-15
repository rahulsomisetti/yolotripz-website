"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { studyAbroadScholarships } from "@/content/study-abroad";

export function StudyAbroadScholarships() {
  return (
    <Section
      id="scholarships"
      variant="muted"
      eyebrow="Funding"
      title={studyAbroadScholarships.title}
      description={studyAbroadScholarships.intro}
    >
      <Reveal>
        <Card className="border border-navy/[0.07] bg-card p-8 shadow-ring md:p-10">
          <ul className="space-y-4">
            {studyAbroadScholarships.bullets.map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-[1.65] text-muted-foreground md:text-[0.9375rem]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/80" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>
    </Section>
  );
}
