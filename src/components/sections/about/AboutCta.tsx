"use client";

import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { getWhatsAppLink } from "@/lib/constants";
import { aboutCta } from "@/content/about";

export function AboutCta() {
  return (
    <section className="border-t border-border bg-surface py-20 md:py-28 lg:py-32">
      <Container>
        <Reveal>
          <Card className="border-navy/10 bg-gradient-to-br from-muted/60 via-card to-card px-6 py-12 shadow-soft sm:px-10 md:px-14 md:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">
                Speak with us
              </p>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-[1.15] tracking-tight text-navy sm:text-3xl">
                {aboutCta.title}
              </h2>
              <p className="mx-auto mt-5 text-base leading-[1.65] text-muted-foreground sm:text-[1.0625rem]">
                {aboutCta.body}
              </p>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
                <ButtonLink href="/contact#book" variant="primary" className="w-full sm:w-auto">
                  Book free counselling
                </ButtonLink>
                <ButtonLink
                  href={getWhatsAppLink("Hi, I read your About page and would like to connect.")}
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  WhatsApp Veronica’s team
                </ButtonLink>
              </div>
              <p className="mx-auto mt-8 max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
                First call is free · Parents welcome · We reply on WhatsApp during working hours
              </p>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
