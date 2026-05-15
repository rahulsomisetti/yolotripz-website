"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/constants";
import { travelServicesCta, travelServicesWhatsAppPresets } from "@/content/travel-services";

export function TravelServicesCta() {
  const reduce = useReducedMotion() === true;
  const wa = getWhatsAppLink(travelServicesWhatsAppPresets.cta);

  return (
    <section className="border-t border-border bg-surface pb-24 pt-16 md:pb-28 md:pt-20">
      <Container>
        <Reveal>
          <Card className="relative overflow-hidden border-navy/10 bg-gradient-to-br from-navy/[0.03] via-card to-muted/20 px-6 py-14 shadow-soft sm:px-10 md:px-14 md:py-16">
            <div
              className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,hsl(var(--gold)/0.08),transparent_68%)]"
              aria-hidden
            />
            <div className="relative mx-auto max-w-2xl text-center">
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4 }}
                className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-xs"
              >
                Enquiries
              </motion.p>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-[1.15] tracking-tight text-navy sm:text-3xl">
                {travelServicesCta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-[1.65] text-muted-foreground sm:text-[1.0625rem]">
                {travelServicesCta.body}
              </p>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
                <ButtonLink href="/contact#book" variant="primary" className="w-full sm:w-auto">
                  {travelServicesCta.primaryLabel}
                </ButtonLink>
                <ButtonLink href={wa} variant="secondary" className="w-full sm:w-auto">
                  {travelServicesCta.secondaryLabel}
                </ButtonLink>
              </div>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
