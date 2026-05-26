"use client";

import { Container } from "@/components/layout/Container";
import { trustBarIntro, trustItems } from "@/content/home";
import { Calendar, GraduationCap, ShieldCheck, HeartHandshake } from "lucide-react";

const icons = [Calendar, GraduationCap, ShieldCheck, HeartHandshake];

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
        <p className="mx-auto max-w-3xl text-pretty text-center font-display text-lg leading-[1.55] text-navy/95 md:text-xl md:leading-snug lg:text-[1.375rem] lg:leading-relaxed">
          {trustBarIntro}
        </p>
        <div className="mx-auto mt-12 max-w-6xl md:mt-16">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, idx) => {
              const Icon = icons[idx];
              return (
                <div
                  key={item.label}
                  className="group relative rounded-2xl border border-navy/[0.05] bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-soft-hover hover:border-gold/35 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors duration-300">
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-[0.8125rem] font-bold uppercase tracking-[0.14em] text-navy">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground leading-normal">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </aside>
  );
}
