"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { aboutTrustReasons } from "@/content/about";

export function AboutTrust() {
  return (
    <Section
      id="trust"
      variant="muted"
      eyebrow={aboutTrustReasons.eyebrow}
      title={aboutTrustReasons.title}
      description={aboutTrustReasons.description}
    >
      <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
        {aboutTrustReasons.reasons.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <Card className="h-full border-navy/[0.08] bg-card p-7 shadow-soft md:p-8">
              <h3 className="font-display text-lg font-semibold leading-snug text-navy">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-[1.65] text-muted-foreground md:text-[0.9375rem]">
                {item.body}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
