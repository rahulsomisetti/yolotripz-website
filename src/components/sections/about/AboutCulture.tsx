"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { aboutCulture } from "@/content/about";

export function AboutCulture() {
  return (
    <Section
      id="culture"
      variant="muted"
      eyebrow="Inside the practice"
      title={aboutCulture.title}
      description={aboutCulture.description}
    >
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {aboutCulture.values.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.07}>
            <Card className="h-full border-navy/[0.08] bg-card/95 p-7 shadow-soft backdrop-blur-sm md:p-8">
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
