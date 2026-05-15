"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { countries } from "@/content/home";

export function StudyAbroadCountries() {
  return (
    <Section
      id="countries"
      variant="muted"
      eyebrow="Where we guide most often"
      title="Core destinations — different strengths, same standard of honesty."
      description="Tap a country for a concise guide. In counselling we go deeper: fit, budget, visa reality, and what your profile can support for the next intake."
    >
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {countries.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.05}>
            <Link href={c.href} className="group block h-full">
              <Card className="flex h-full flex-col border border-navy/[0.07] bg-card p-7 shadow-ring transition-colors duration-300 ease-premium hover:border-gold/35 md:p-8">
                <div className="min-w-0">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Destination
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-navy group-hover:text-primary md:text-xl">
                    {c.name}
                  </h3>
                </div>
                <dl className="mt-6 space-y-4 text-sm">
                  <div>
                    <dt className="font-medium text-navy">Intakes</dt>
                    <dd className="mt-1 text-muted-foreground">{c.intakes}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-navy">Work rights (overview)</dt>
                    <dd className="mt-1 text-muted-foreground">{c.work}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-navy">Often fits</dt>
                    <dd className="mt-1 text-muted-foreground">{c.profile}</dd>
                  </div>
                </dl>
                <span className="mt-auto pt-8 text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-primary">
                  Open guide →
                </span>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-14 md:mt-16" delay={0.1}>
        <div className="flex flex-col items-start justify-between gap-6 border border-navy/[0.08] bg-card px-7 py-8 sm:flex-row sm:items-center sm:px-10 sm:py-9">
          <p className="max-w-xl text-sm leading-[1.7] text-muted-foreground md:text-[0.9375rem]">
            Not sure which country matches your budget and timeline? Book counselling — we will
            shortlist before you spend on scattered applications.
          </p>
          <ButtonLink href="/contact#book" variant="primary" className="w-full shrink-0 sm:w-auto">
            Shortlist with us
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
