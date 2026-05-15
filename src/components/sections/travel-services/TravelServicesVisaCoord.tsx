"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { travelServicesVisaCoord } from "@/content/travel-services";

export function TravelServicesVisaCoord() {
  const { title, intro, body, visaLinkLabel } = travelServicesVisaCoord;

  return (
    <Section
      id="visa-coordination"
      variant="muted"
      eyebrow="Coordination"
      title={title}
      description={intro}
    >
      <Reveal>
        <Card className="border-navy/[0.08] bg-card p-8 shadow-soft md:flex md:items-center md:justify-between md:gap-10 md:p-10">
          <div className="max-w-2xl">
            <p className="text-sm leading-[1.65] text-muted-foreground md:text-[0.9375rem]">{body}</p>
            <p className="mt-6 text-sm text-muted-foreground">
              <Link
                href="/visa-services"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                {visaLinkLabel}
              </Link>
              <span className="text-muted-foreground"> · </span>
              <Link href="/study-abroad" className="font-semibold text-primary underline-offset-4 hover:underline">
                Study abroad counselling
              </Link>
            </p>
          </div>
          <div className="mt-8 shrink-0 md:mt-0">
            <ButtonLink href="/contact#book" variant="secondary" className="w-full md:w-auto">
              Coordinate my dates
            </ButtonLink>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
