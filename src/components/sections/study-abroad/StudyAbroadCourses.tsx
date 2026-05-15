"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { studyAbroadCourses } from "@/content/study-abroad";

export function StudyAbroadCourses() {
  return (
    <Section
      id="courses"
      variant="default"
      eyebrow="Popular PG pathways"
      title="Courses we plan with most often — always matched to your transcript."
      description="This is not an exhaustive catalogue. It is a map of where PG demand clusters — and where counselling quality matters most."
    >
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {studyAbroadCourses.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05}>
            <Card className="flex h-full flex-col border border-navy/[0.07] bg-card p-6 shadow-ring transition-colors duration-300 hover:border-gold/35 md:p-7">
              <h3 className="font-display text-lg font-semibold leading-snug text-navy">{c.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-[1.7] text-muted-foreground">{c.blurb}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.markets.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-navy/[0.1] bg-muted/45 px-3 py-1 text-xs font-medium text-navy"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
