"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { whyPoints } from "@/content/home";

export function WhyYolotripzSection() {
  return (
    <Section
      id="why-yolotripz"
      eyebrow="Why families choose us"
      title="Thoughtful advisors — not a loud marketplace."
      description="We are intentionally small-team, high-touch, and focused on outcomes that still feel right six months after you land."
      edge
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        {whyPoints.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <Card
              className={cn(
                "h-full space-y-0 border-navy/[0.07] bg-card p-8 shadow-ring md:p-9",
                i === 0 &&
                  "border-l-[3px] border-l-gold/65 bg-gradient-to-br from-card to-muted/50 lg:col-span-2 lg:flex lg:items-start lg:gap-12 lg:p-10",
                i === 3 && "lg:col-span-2 lg:mx-auto lg:max-w-2xl",
              )}
            >
              <div className={cn(i === 0 && "lg:max-w-xl")}>
                <h3 className="font-display text-xl font-semibold leading-snug text-navy md:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="mt-5 text-sm leading-[1.7] text-muted-foreground md:text-[0.9375rem]">
                  {item.body}
                </p>
              </div>
              {i === 0 && (
                <p className="mt-8 hidden font-display text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-gold/90 lg:mt-0 lg:block lg:max-w-[12rem] lg:text-right lg:text-xs lg:leading-relaxed">
                  Principles we apply before recommending any intake or destination.
                </p>
              )}
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
