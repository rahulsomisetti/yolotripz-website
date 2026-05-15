"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/constants";
import { visaServicesWhatsappCta, visaServicesWhatsAppPresets } from "@/content/visa-services";

export function VisaServicesWhatsAppCta() {
  const reduce = useReducedMotion() === true;
  const wa = getWhatsAppLink(visaServicesWhatsAppPresets.cta);

  return (
    <section className="border-t border-navy/[0.06] bg-muted/25 py-24 md:py-28 lg:py-32">
      <Container>
        <Reveal>
          <div className="relative mx-auto max-w-4xl overflow-hidden border border-navy/[0.08] bg-gradient-to-b from-muted/40 via-card to-card px-8 py-14 shadow-ring sm:px-12 md:px-14 md:py-16 lg:px-16 lg:py-20">
            <div
              className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-gold/70 via-gold/40 to-transparent"
              aria-hidden
            />
            <div className="relative mx-auto max-w-2xl text-center">
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.46, ease: [0.22, 0.08, 0.24, 1] }}
                className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs"
              >
                WhatsApp
              </motion.p>
              <h2 className="mt-6 text-balance font-display text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.02em] text-navy sm:text-3xl sm:leading-[1.14]">
                {visaServicesWhatsappCta.title}
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-base leading-[1.7] text-muted-foreground sm:text-[1.0625rem]">
                {visaServicesWhatsappCta.body}
              </p>
              <div className="mt-11 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
                <ButtonLink href="/contact#book" variant="primary" className="w-full sm:w-auto">
                  {visaServicesWhatsappCta.primaryLabel}
                </ButtonLink>
                <ButtonLink href={wa} variant="secondary" className="w-full sm:w-auto">
                  {visaServicesWhatsappCta.secondaryLabel}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
