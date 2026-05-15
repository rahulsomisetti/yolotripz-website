"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { visaServicesChecklists } from "@/content/visa-services";

export function VisaServicesChecklists() {
  const { student, tourist } = visaServicesChecklists;

  return (
    <Section
      id="checklist"
      variant="muted"
      eyebrow="Documentation"
      title="Checklists — student visas and tourist visas."
      description="Two lanes, two narratives. We help you stay in the correct lane from day one."
    >
      <div className="grid gap-9 lg:grid-cols-2 lg:gap-10">
        <Reveal>
          <Card className="h-full border border-navy/[0.07] bg-card p-8 shadow-ring md:p-9">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Student visas
            </p>
            <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-navy">{student.title}</h3>
            <p className="mt-4 text-sm leading-[1.7] text-muted-foreground">{student.intro}</p>
            <ul className="mt-8 space-y-4">
              {student.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-[1.65] text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
        <Reveal delay={0.08}>
          <Card className="h-full border border-navy/[0.07] bg-card p-8 shadow-ring md:p-9">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Tourist visas
            </p>
            <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-navy">{tourist.title}</h3>
            <p className="mt-4 text-sm leading-[1.7] text-muted-foreground">{tourist.intro}</p>
            <ul className="mt-8 space-y-4">
              {tourist.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-[1.65] text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
