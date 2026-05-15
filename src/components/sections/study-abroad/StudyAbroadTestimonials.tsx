"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/content/home";

export function StudyAbroadTestimonials() {
  return (
    <Section
      id="testimonials"
      variant="muted"
      eyebrow="Voices from families"
      title="Students want clarity. Parents want peace of mind."
      description="A few notes from the kind of PG journeys we support — tight timelines, real budgets, and decisions taken together."
      edge
    >
      <div className="grid gap-8 md:grid-cols-3 md:gap-10">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.07}>
            <Card className="flex h-full flex-col border border-navy/[0.07] bg-card p-0 shadow-ring">
              <figure className="flex h-full flex-col p-8 md:p-9">
                <blockquote className="relative flex-1 pl-5 text-[0.9375rem] font-normal leading-[1.7] text-navy/95 before:absolute before:left-0 before:top-1 before:h-[calc(100%-0.25rem)] before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-gold/70 before:to-gold/25 md:text-base md:leading-[1.65]">
                  <span className="text-pretty">“{t.quote}”</span>
                </blockquote>
                <figcaption className="mt-10 border-t border-border/80 pt-8">
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{t.meta}</p>
                </figcaption>
              </figure>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
