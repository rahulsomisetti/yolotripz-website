"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SiteFigureImage } from "@/components/images/SiteFigureImage";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { getWhatsAppLink } from "@/lib/constants";
import { travelServicesHero, travelServicesWhatsAppPresets } from "@/content/travel-services";
import { siteImages } from "@/lib/site-images";

export function TravelServicesHero() {
  const reduce = useReducedMotion() === true;
  const wa = getWhatsAppLink(travelServicesWhatsAppPresets.hero);

  return (
    <section className="border-b border-navy/[0.06] bg-gradient-to-b from-muted/40 via-background to-background pb-20 pt-24 md:pb-28 md:pt-32 lg:pb-32 lg:pt-36">
      <Container>
        <SiteFigureImage
          src={siteImages.travel.hero}
          alt="Premium travel support for students"
          aspectClassName="aspect-[21/9] sm:aspect-[2.2/1]"
          objectClassName="object-cover object-[18%_40%] sm:object-[22%_35%]"
          figureClassName="mx-auto mb-12 max-w-4xl md:mb-14"
          sizes="(max-width: 768px) 100vw, 56rem"
        />
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs"
          >
            {travelServicesHero.eyebrow}
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-5 font-display text-[1.85rem] font-semibold leading-[1.1] tracking-tight text-navy sm:text-5xl sm:leading-[1.06]"
          >
            {travelServicesHero.headline}
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8 text-base leading-[1.65] text-muted-foreground sm:text-lg"
          >
            {travelServicesHero.subheadline}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center"
          >
            <ButtonLink href="/contact#book" variant="primary" className="w-full sm:w-auto">
              Plan travel with us
            </ButtonLink>
            <ButtonLink href={wa} variant="secondary" className="w-full sm:w-auto">
              WhatsApp us
            </ButtonLink>
          </motion.div>
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.22 }}
            className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]"
          >
            {travelServicesHero.reassurance}
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.28 }}
            className="mt-8 text-xs text-muted-foreground/90 sm:text-sm"
          >
            {travelServicesHero.footnote}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
