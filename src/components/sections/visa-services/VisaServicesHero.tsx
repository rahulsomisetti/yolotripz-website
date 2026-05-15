"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SiteFigureImage } from "@/components/images/SiteFigureImage";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { getWhatsAppLink } from "@/lib/constants";
import { visaServicesHero, visaServicesWhatsAppPresets } from "@/content/visa-services";
import { siteImages } from "@/lib/site-images";

const ease = [0.22, 0.08, 0.24, 1] as const;

export function VisaServicesHero() {
  const reduce = useReducedMotion() === true;
  const wa = getWhatsAppLink(visaServicesWhatsAppPresets.hero);

  return (
    <section className="border-b border-navy/[0.06] bg-gradient-to-b from-muted/40 via-background to-background pb-24 pt-28 md:pb-32 md:pt-32 lg:pb-36 lg:pt-40">
      <Container>
        <SiteFigureImage
          src={siteImages.visa.hero}
          alt="Organised visa documentation"
          aspectClassName="aspect-[21/9] sm:aspect-[2.2/1]"
          objectClassName="object-cover object-[72%_22%] sm:object-[68%_30%]"
          figureClassName="mx-auto mb-12 max-w-4xl md:mb-14"
          sizes="(max-width: 768px) 100vw, 56rem"
        />
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
            className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs"
          >
            {visaServicesHero.eyebrow}
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease }}
            className="mt-6 text-balance font-display text-[1.875rem] font-semibold leading-[1.08] tracking-[-0.02em] text-navy sm:text-5xl sm:leading-[1.06]"
          >
            {visaServicesHero.headline}
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="mt-8 text-pretty text-base leading-[1.7] text-muted-foreground sm:text-lg sm:leading-[1.62]"
          >
            {visaServicesHero.subheadline}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16, ease }}
            className="mt-11 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center"
          >
            <ButtonLink href="/contact#book" variant="primary" className="w-full sm:w-auto">
              Book a visa discussion
            </ButtonLink>
            <ButtonLink href={wa} variant="secondary" className="w-full sm:w-auto">
              WhatsApp us
            </ButtonLink>
          </motion.div>
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.22 }}
            className="mx-auto mt-9 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]"
          >
            {visaServicesHero.reassurance}
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.28 }}
            className="mt-9 text-xs text-muted-foreground/90 sm:text-sm"
          >
            {visaServicesHero.footnote}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
