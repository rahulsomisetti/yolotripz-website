"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { OFFICE, SITE } from "@/lib/constants";

export function ContactMapOffice() {
  const mapTitle = `Map · ${SITE.city}, ${SITE.state}`;

  return (
    <Section
      id="visit"
      variant="default"
      eyebrow="Visit"
      title="Office & map"
      description="Find us in Moodbidri — appointments help us protect uninterrupted counselling time for families."
      edge
      className="!py-16 md:!py-20"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-10">
        <Reveal className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-navy/[0.07] bg-muted/25 shadow-ring">
            <iframe
              title={mapTitle}
              src={OFFICE.mapEmbedUrl}
              className="aspect-[4/3] min-h-[220px] w-full sm:aspect-video sm:min-h-[280px] lg:min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground lg:text-left">
            <Link
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE.city}, ${SITE.state}, India`)}`}
              className="font-medium text-primary underline-offset-[5px] transition-colors hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </Link>
          </p>
        </Reveal>
        <Reveal className="lg:col-span-5" delay={0.08}>
          <Card className="flex h-full flex-col justify-center border border-navy/[0.07] bg-card p-8 shadow-ring md:p-10">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {SITE.name}
            </p>
            <h2 className="mt-4 font-display text-xl font-semibold tracking-tight text-navy sm:text-2xl">
              Office details
            </h2>
            <address className="mt-6 space-y-1 text-sm not-italic leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
              {OFFICE.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <div className="mt-8 border-t border-navy/[0.08] pt-8">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {OFFICE.hoursLabel}
              </p>
              <p className="mt-2 text-sm font-medium text-navy">{OFFICE.hoursDetail}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{OFFICE.note}</p>
            </div>
            <div className="mt-8 space-y-3 text-sm">
              <a className="block font-medium text-primary hover:underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              <p className="text-muted-foreground">
                WhatsApp:{" "}
                <span className="font-medium text-navy">+{SITE.whatsappE164.replace(/^\+/, "")}</span>
              </p>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
