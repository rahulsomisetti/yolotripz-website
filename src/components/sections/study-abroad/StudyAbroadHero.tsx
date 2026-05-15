"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SiteFigureImage } from "@/components/images/SiteFigureImage";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { getWhatsAppLink, SITE } from "@/lib/constants";
import { studyAbroadHero } from "@/content/study-abroad";
import { siteImages } from "@/lib/site-images";

export function StudyAbroadHero() {
  const reduce = useReducedMotion() === true;
  const ease = [0.22, 0.08, 0.24, 1] as const;

  return (
    <section className="border-b border-navy/[0.06] bg-gradient-to-b from-muted/45 via-background to-background">
      <Container className="py-20 sm:py-24 md:py-28 lg:py-32">
        <SiteFigureImage
          src={siteImages.studyAbroad.hero}
          alt="Students planning postgraduate study abroad"
          priority
          aspectClassName="aspect-[21/9] sm:aspect-[2.4/1]"
          figureClassName="mb-12 md:mb-14"
          sizes="100vw"
        />
        <div className="mx-auto max-w-3xl text-center lg:max-w-[40rem]">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
            className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs"
          >
            {studyAbroadHero.eyebrow}
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease }}
            className="mt-6 text-balance font-display text-[1.875rem] font-semibold leading-[1.08] tracking-[-0.02em] text-navy sm:text-5xl sm:leading-[1.06]"
          >
            {studyAbroadHero.headline}
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="mt-8 text-pretty text-base leading-[1.68] text-muted-foreground sm:text-lg sm:leading-[1.62]"
          >
            {studyAbroadHero.subheadline}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease }}
            className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
          >
            <ButtonLink href="/contact#book" variant="primary" className="w-full sm:w-auto">
              Book free PG counselling
            </ButtonLink>
            <ButtonLink href={getWhatsAppLink()} variant="secondary" className="w-full sm:w-auto">
              WhatsApp us
            </ButtonLink>
          </motion.div>
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="mt-5 text-xs leading-relaxed text-muted-foreground sm:text-sm"
          >
            {studyAbroadHero.reassurance}
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.28 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            {SITE.city}, {SITE.state} · Serving PG students & parents across Coastal Karnataka
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
