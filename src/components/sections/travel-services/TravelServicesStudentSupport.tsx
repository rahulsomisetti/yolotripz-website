"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { travelServicesStudentSupport } from "@/content/travel-services";

export function TravelServicesStudentSupport() {
  const { title, intro, points } = travelServicesStudentSupport;

  return (
    <Section
      id="student-travel"
      variant="default"
      eyebrow="For students & parents"
      title={title}
      description={intro}
    >
      <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
        {points.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.07}>
            <Card className="h-full border-navy/[0.08] bg-card p-7 shadow-soft transition-all duration-300 ease-out hover:border-navy/12 hover:shadow-soft-hover md:p-8">
              <p className="font-display text-lg font-semibold leading-snug text-navy">{p.title}</p>
              <p className="mt-4 text-sm leading-[1.65] text-muted-foreground md:text-[0.9375rem]">{p.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
