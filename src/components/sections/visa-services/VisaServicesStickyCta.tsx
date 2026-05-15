"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { getWhatsAppLink } from "@/lib/constants";
import { visaServicesSticky, visaServicesWhatsAppPresets } from "@/content/visa-services";

export function VisaServicesStickyCta() {
  const reduce = useReducedMotion() === true;
  const wa = getWhatsAppLink(visaServicesWhatsAppPresets.sticky);

  return (
    <motion.div
      initial={reduce ? false : { y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, delay: 0.55, ease: [0.22, 0.08, 0.24, 1] }}
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-0 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 sm:px-4"
    >
      <Container className="pointer-events-auto max-w-content pr-16 sm:pr-20 md:pr-8">
        <div className="flex flex-col gap-3 rounded-2xl border border-navy/[0.08] bg-background/95 p-3 shadow-ring backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-4">
          <p className="hidden text-sm font-medium text-navy sm:block sm:max-w-md lg:max-w-lg">
            <span className="text-muted-foreground">Visa services ·</span> {visaServicesSticky.line}
          </p>
          <div className="flex w-full gap-2 sm:w-auto sm:justify-end">
            <ButtonLink
              href="/contact#book"
              variant="primary"
              size="sm"
              className="min-h-11 flex-1 sm:flex-initial"
            >
              Book discussion
            </ButtonLink>
            <ButtonLink href={wa} variant="secondary" size="sm" className="min-h-11 flex-1 sm:flex-initial">
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}
