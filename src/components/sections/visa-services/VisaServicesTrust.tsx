"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { visaServicesTrust } from "@/content/visa-services";

export function VisaServicesTrust() {
  return (
    <Section
      id="trust"
      variant="navy"
      align="center"
      eyebrow="Trust"
      title={visaServicesTrust.title}
      description={visaServicesTrust.intro}
    >
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {visaServicesTrust.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.07}>
            <Card className="h-full border border-white/12 bg-white/[0.055] p-7 text-left shadow-none backdrop-blur-sm md:p-8">
              <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-[1.65] text-white/75">{item.detail}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
