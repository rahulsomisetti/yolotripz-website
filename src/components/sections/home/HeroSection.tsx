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
    <section className="relative overflow-hidden border-b border-navy/[0.06] bg-gradient-to-b from-muted/40 via-background to-background bg-mesh-gradient">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40 -z-10" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10" aria-hidden="true">
        {/* Glow 1 - Primary HSL hue (dominant forest green) */}
        <div className="absolute -top-[10%] -left-[10%] w-[45rem] h-[45rem] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.08)_0%,transparent_70%)] blur-[100px]" />
        {/* Glow 2 - Accent HSL hue (secondary warm/rose gold accent) */}
        <div className="absolute top-[30%] -right-[10%] w-[40rem] h-[40rem] rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.06)_0%,transparent_70%)] blur-[100px]" />
      </div>
      <Container className="py-20 sm:py-24 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-x-16">
          <div className="min-w-0">
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
              Free opportunity mapping call · Parents are encouraged to join · Start with clarity in mind
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              className="mt-12 sm:mt-14 grid grid-cols-2 gap-4"
            >
              <div className="group relative rounded-2xl border border-navy/[0.05] bg-card/65 backdrop-blur-md p-5 shadow-soft transition-all duration-300 hover:shadow-soft-hover hover:border-navy/[0.1] hover:-translate-y-0.5">
                <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-gradient-to-b from-gold via-gold/50 to-transparent opacity-80" aria-hidden />
                <p className="pl-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">2017</p>
                <p className="mt-1 pl-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Established</p>
                <p className="mt-2 pl-2 text-xs text-muted-foreground leading-normal">Coastal Karnataka’s trusted advisory practice.</p>
              </div>
              <div className="group relative rounded-2xl border border-navy/[0.05] bg-card/65 backdrop-blur-md p-5 shadow-soft transition-all duration-300 hover:shadow-soft-hover hover:border-navy/[0.1] hover:-translate-y-0.5">
                <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-gradient-to-b from-primary via-primary/50 to-transparent opacity-80" aria-hidden />
                <p className="pl-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">UG & PG</p>
                <p className="mt-1 pl-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Specialized</p>
                <p className="mt-2 pl-2 text-xs text-muted-foreground leading-normal">Admissions shortlists mapped to realistic ROI goals.</p>
              </div>
              <div className="group relative rounded-2xl border border-navy/[0.05] bg-card/65 backdrop-blur-md p-5 shadow-soft transition-all duration-300 hover:shadow-soft-hover hover:border-navy/[0.1] hover:-translate-y-0.5">
                <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-gradient-to-b from-primary via-primary/50 to-transparent opacity-80" aria-hidden />
                <p className="pl-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">8 Hubs</p>
                <p className="mt-1 pl-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Global Focus</p>
                <p className="mt-2 pl-2 text-xs text-muted-foreground leading-normal">Top global student destinations supported.</p>
              </div>
              <div className="group relative rounded-2xl border border-navy/[0.05] bg-card/65 backdrop-blur-md p-5 shadow-soft transition-all duration-300 hover:shadow-soft-hover hover:border-navy/[0.1] hover:-translate-y-0.5">
                <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-gradient-to-b from-gold via-gold/50 to-transparent opacity-80" aria-hidden />
                <p className="pl-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">100%</p>
                <p className="mt-1 pl-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Unbiased</p>
                <p className="mt-2 pl-2 text-xs text-muted-foreground leading-normal">No commission-driven steering. Honest advice.</p>
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
              sizes="(max-width: 1024px) 100vw, 38rem"
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
