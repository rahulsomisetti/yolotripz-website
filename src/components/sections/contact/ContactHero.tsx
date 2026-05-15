"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { contactHero } from "@/content/contact";
import { SITE } from "@/lib/constants";

export function ContactHero() {
  const reduce = useReducedMotion() === true;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/40 to-background pb-20 pt-24 md:pb-24 md:pt-28 lg:pb-28 lg:pt-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_-10%,hsl(var(--primary)/0.055),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 0.08, 0.24, 1] }}
            className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs"
          >
            {contactHero.eyebrow}
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 0.08, 0.24, 1] }}
            className="mt-6 text-balance font-display text-[1.875rem] font-semibold leading-[1.08] tracking-[-0.02em] text-navy sm:text-5xl sm:leading-[1.06]"
          >
            {contactHero.headline}
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 0.08, 0.24, 1] }}
            className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-[1.7] text-muted-foreground sm:text-lg sm:leading-[1.62]"
          >
            {contactHero.subheadline}
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-10 text-xs text-muted-foreground sm:text-sm"
          >
            {SITE.name} · {SITE.city}, {SITE.state} · Since {SITE.foundedYear}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
