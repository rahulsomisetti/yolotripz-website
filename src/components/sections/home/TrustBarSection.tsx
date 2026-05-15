"use client";

import { Container } from "@/components/layout/Container";
import { trustBarIntro, trustItems } from "@/content/home";

export function TrustBarSection() {
  return (
    <aside
      className="relative border-b border-navy/[0.06] bg-background"
      aria-label="Why families trust this practice"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        aria-hidden
      />
      <Container className="py-14 md:py-16 lg:py-20">
        <p className="mx-auto max-w-3xl text-pretty text-center font-display text-lg leading-[1.55] text-navy/95 md:text-left md:text-xl md:leading-snug lg:text-[1.375rem] lg:leading-relaxed">
          {trustBarIntro}
        </p>
        <div className="mx-auto mt-12 max-w-6xl md:mt-16">
          <div className="grid grid-cols-1 divide-y divide-border/70 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="px-1 py-9 first:pt-0 md:px-8 md:py-6 md:first:pl-0 lg:px-10 lg:first:pl-2"
              >
                <p className="font-display text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-navy">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-[1.65] text-muted-foreground md:max-w-none">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </aside>
  );
}
