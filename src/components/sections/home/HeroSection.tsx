"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SiteFigureImage } from "@/components/images/SiteFigureImage";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { SITE, getWhatsAppLink } from "@/lib/constants";
import { hero } from "@/content/home";
import { siteImages } from "@/lib/site-images";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const reduce = reduceMotion === true;

  return (
    <section className="border-b border-navy/[0.06] bg-gradient-to-b from-muted/50 via-background to-background">
      <Container className="py-20 sm:py-24 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-x-14 xl:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] xl:gap-x-20">
          <div className="min-w-0 lg:max-w-[44rem]">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold sm:text-xs sm:tracking-[0.2em]"
            >
              {SITE.name} · Overseas education
            </motion.p>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.03, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-3 text-sm font-medium text-muted-foreground sm:text-[0.9375rem]"
            >
              {SITE.city}, {SITE.state} · Coastal Karnataka · Est. {SITE.foundedYear}
            </motion.p>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-6 text-balance font-display text-[1.875rem] font-semibold leading-[1.08] tracking-[-0.02em] text-navy sm:text-5xl sm:leading-[1.06] lg:text-[3.35rem] lg:leading-[1.06]"
            >
              {hero.headline}
            </motion.h1>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-8 max-w-xl text-pretty text-base leading-[1.68] text-muted-foreground sm:max-w-[36rem] sm:text-lg sm:leading-[1.62]"
            >
              {hero.subheadline}
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:gap-4"
            >
              <ButtonLink href="/contact#book" variant="primary" className="w-full sm:w-auto">
                Book free counselling
              </ButtonLink>
              <ButtonLink href={getWhatsAppLink()} variant="secondary" className="w-full sm:w-auto">
                WhatsApp us
              </ButtonLink>
            </motion.div>
            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.22 }}
              className="mt-4 max-w-xl text-center text-xs leading-snug text-muted-foreground sm:text-left sm:text-[0.8125rem]"
            >
              First conversation is free · No obligation · Most calls are ~20 minutes
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="mt-12 sm:mt-14"
            >
              <div className="relative rounded-xl border border-navy/[0.08] bg-card p-6 shadow-ring sm:p-7">
                <div
                  className="absolute left-0 top-0 h-full w-[3px] rounded-l-xl bg-gradient-to-b from-gold/75 to-gold/35"
                  aria-hidden
                />
                <p className="pl-4 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[0.8125rem] sm:tracking-[0.15em]">
                  Typical planning band
                </p>
                <p className="mt-3 max-w-prose pl-4 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem] sm:leading-[1.62]">
                  Many PG families we work with plan roughly{" "}
                  <span className="font-medium text-navy">₹25–50 lakhs</span> all-in (tuition,
                  living, contingencies). We align your shortlist to that band early so decisions stay
                  grounded.
                </p>
              </div>
            </motion.div>
            <aside className="mt-10 border-t border-navy/[0.08] pt-8 lg:hidden">
              <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                How we operate
              </p>
              <p className="mt-4 max-w-md text-sm leading-[1.65] text-muted-foreground">
                Advisory-led planning — not a course marketplace. Conversations stay confidential,
                documented, and paced to your intake calendar.
              </p>
            </aside>
          </div>
          <div className="min-w-0 space-y-8">
            <SiteFigureImage
              src={siteImages.hero.home}
              alt="Counselling discussion in a calm office environment"
              priority
              aspectClassName="aspect-[5/4] sm:aspect-[4/3]"
              objectClassName="object-cover object-[center_28%] sm:object-center"
              sizes="(max-width: 1024px) 100vw, 30rem"
            />
            <aside className="hidden border-t border-navy/[0.08] pt-8 lg:block">
              <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                How we operate
              </p>
              <p className="mt-4 text-sm leading-[1.65] text-muted-foreground">
                Advisory-led planning — not a course marketplace. Conversations stay confidential,
                documented, and paced to your intake calendar.
              </p>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
