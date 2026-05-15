"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { travelServicesTestimonials } from "@/content/travel-services";

export function TravelServicesTestimonials() {
  return (
    <Section
      id="testimonials"
      variant="muted"
      eyebrow="Reflections"
      title="Travel enquiries — handled with restraint."
      description="We hear often from families who wanted help without the hard-sell energy. A few notes from recent journeys."
    >
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {travelServicesTestimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.07}>
            <Card className="flex h-full flex-col border-navy/[0.08] bg-card p-6 shadow-soft md:p-8">
              <blockquote className="flex-1 text-[0.9375rem] leading-[1.65] text-navy/95 md:text-base">
                “{t.quote}”
              </blockquote>
              <footer className="mt-8 border-t border-border pt-6">
                <p className="text-sm font-semibold text-navy">{t.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t.meta}</p>
              </footer>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
