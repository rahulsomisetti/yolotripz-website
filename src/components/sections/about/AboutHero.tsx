"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { aboutHero } from "@/content/about";
import { SITE } from "@/lib/constants";

export function AboutHero() {
  const reduce = useReducedMotion() === true;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/90 via-surface to-surface pb-20 pt-24 md:pb-28 md:pt-32 lg:pb-32 lg:pt-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--gold)/0.08),transparent)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs"
          >
            {aboutHero.eyebrow}
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-5 font-display text-[1.85rem] font-semibold leading-[1.1] tracking-tight text-navy sm:text-5xl sm:leading-[1.08]"
          >
            {aboutHero.headline}
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto mt-8 max-w-2xl text-base leading-[1.65] text-muted-foreground sm:text-lg"
          >
            {aboutHero.subheadline}
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-10 text-sm text-muted-foreground/90"
          >
            {SITE.city}, {SITE.state} · Est. {SITE.foundedYear}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
