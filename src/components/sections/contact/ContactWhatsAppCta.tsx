"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/button";
import { contactWhatsAppBand } from "@/content/contact";
import { getWhatsAppLink, SITE } from "@/lib/constants";

export function ContactWhatsAppCta() {
  const reduce = useReducedMotion() === true;
  const wa = getWhatsAppLink(
    `Hi ${SITE.name}, I would like to connect on WhatsApp about study abroad, visas, or travel.`,
  );

  return (
    <Section variant="muted" className="!py-14 md:!py-16" aria-labelledby="contact-wa-heading">
      <Reveal>
        <div className="relative overflow-hidden border border-navy/[0.08] bg-gradient-to-b from-muted/35 via-card to-card shadow-ring md:flex md:items-stretch md:justify-between md:gap-12">
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-gold/75 via-gold/40 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-12 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.07),transparent_68%)]"
            aria-hidden
          />
          <div className="relative flex flex-1 flex-col justify-center p-8 sm:p-10 md:max-w-xl md:p-12">
            <motion.h2
              id="contact-wa-heading"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.46, ease: [0.22, 0.08, 0.24, 1] }}
              className="text-balance font-display text-2xl font-semibold leading-snug tracking-[-0.02em] text-navy sm:text-3xl"
            >
              {contactWhatsAppBand.title}
            </motion.h2>
            <p className="mt-4 text-sm leading-[1.7] text-muted-foreground sm:text-base sm:leading-[1.65]">
              {contactWhatsAppBand.body}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {contactWhatsAppBand.secondaryLabel}
            </p>
          </div>
          <div className="relative flex w-full shrink-0 flex-col justify-center gap-3 border-t border-navy/[0.06] p-8 sm:p-10 md:mt-0 md:w-[min(100%,22rem)] md:border-l md:border-t-0 md:p-12">
            <ButtonLink href={wa} variant="primary" className="w-full">
              {contactWhatsAppBand.primaryLabel}
            </ButtonLink>
            <ButtonLink
              href={`mailto:${SITE.email}?subject=${encodeURIComponent(`${SITE.name} enquiry`)}`}
              variant="secondary"
              className="w-full"
            >
              Email {SITE.name}
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
