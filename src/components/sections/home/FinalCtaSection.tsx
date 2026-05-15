"use client";

import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { getWhatsAppLink } from "@/lib/constants";

export function FinalCtaSection() {
  return (
    <section className="border-t border-navy/[0.06] bg-background py-24 md:py-32 lg:py-40">
      <Container>
        <Reveal>
          <div className="relative mx-auto max-w-4xl overflow-hidden border border-navy/[0.08] bg-gradient-to-b from-muted/40 via-card to-card px-8 py-16 shadow-ring sm:px-12 md:px-16 md:py-20 lg:px-20 lg:py-24">
            <div
              className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-gold/70 via-gold/40 to-transparent"
              aria-hidden
            />
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs sm:tracking-[0.2em]">
                Next step
              </p>
              <h2 className="mx-auto mt-6 max-w-2xl text-balance font-display text-[1.875rem] font-semibold leading-[1.1] tracking-[-0.02em] text-navy sm:text-[2.25rem] sm:leading-[1.12] lg:text-[2.5rem]">
                Book a free counselling call — bring your questions, transcripts, and a rough
                budget band.
              </h2>
              <p className="mx-auto mt-7 max-w-xl text-pretty text-base leading-[1.7] text-muted-foreground sm:text-[1.0625rem]">
                We will tell you what looks realistic for your timeline, what needs more
                preparation, and what should wait until the next intake — without pressure to
                commit on day one.
              </p>
              <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
                <ButtonLink href="/contact#book" variant="primary" className="w-full sm:w-auto">
                  Book free counselling
                </ButtonLink>
                <ButtonLink
                  href={getWhatsAppLink()}
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  WhatsApp a counsellor
                </ButtonLink>
              </div>
              <p className="mx-auto mt-8 max-w-lg text-xs leading-relaxed text-muted-foreground sm:text-[0.8125rem]">
                We respond to WhatsApp during working hours. If you are a parent, you are welcome
                on the call — many families prefer a joint first conversation.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
