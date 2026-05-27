"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SiteLogo } from "@/components/brand/SiteLogo";
import { NavCountriesMenu } from "@/components/layout/NavCountriesMenu";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { NAV_COUNTRIES_AFTER_HREF, NAV_ITEMS, SITE, getWhatsAppLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navLinkClass =
  "relative rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-navy";

function renderDesktopNav(hoveredId: string | null, setHoveredId: (id: string | null) => void) {
  return NAV_ITEMS.map((item) => (
    <span key={item.href} className="contents">
      <Link
        href={item.href}
        className={navLinkClass}
        onMouseEnter={() => setHoveredId(item.href)}
      >
        {hoveredId === item.href && (
          <motion.span
            layoutId="desktopNavHoverPill"
            className="absolute inset-0 rounded-lg bg-muted/70"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
        <span className="relative z-10">{item.label}</span>
      </Link>
      {item.href === NAV_COUNTRIES_AFTER_HREF ? (
        <NavCountriesMenu
          variant="desktop"
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
        />
      ) : null}
    </span>
  ));
}

function renderMobileNav(onNavigate: () => void) {
  return NAV_ITEMS.map((item) => (
    <span key={item.href} className="contents">
      <Link
        href={item.href}
        className="min-h-12 rounded-xl px-3 py-3 text-sm font-medium text-navy transition-colors hover:bg-muted/80"
        onClick={onNavigate}
      >
        {item.label}
      </Link>
      {item.href === NAV_COUNTRIES_AFTER_HREF ? (
        <NavCountriesMenu variant="mobile" onNavigate={onNavigate} />
      ) : null}
    </span>
  ));
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const reduce = useReducedMotion() === true;

  return (
    <header className="sticky top-0 z-50 border-b border-navy/[0.06] bg-background/88 backdrop-blur-md supports-[backdrop-filter]:bg-background/78">
      {/* Premium Notification Ribbon */}
      <div className="bg-gradient-to-r from-gold/10 via-gold/15 to-gold/5 border-b border-gold/10 py-1.5 text-center">
        <p className="text-[10px] sm:text-xs font-semibold text-gold tracking-wide flex items-center justify-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse shrink-0" />
          <span>Fall 2026 application deadlines are active. Secure your university fee waivers through our priority counsellors.</span>
          <Link href="/contact#book" className="underline hover:text-navy transition-colors ml-1">
            Apply Now →
          </Link>
        </p>
      </div>

      <Container className="flex h-[3.75rem] items-center justify-between gap-3 md:h-[4.5rem] md:gap-4">
        <SiteLogo variant="primary" priority />

        <nav
          className="hidden items-center gap-0.5 lg:flex relative"
          aria-label="Primary"
          onMouseLeave={() => setHoveredId(null)}
        >
          {renderDesktopNav(hoveredId, setHoveredId)}
        </nav>

        <div className="hidden items-center gap-3.5 lg:flex">
          <Link
            href="/compare"
            className="text-xs font-semibold text-muted-foreground hover:text-navy transition-colors"
          >
            Compare
          </Link>
          <Link
            href="/calculator"
            className="text-xs font-semibold text-muted-foreground hover:text-navy transition-colors"
          >
            Calculator
          </Link>
          <ButtonLink
            href="/discover"
            variant="secondary"
            className="px-3.5 py-1.5 text-xs font-semibold border-gold/30 text-gold hover:bg-gold/5 rounded-full"
          >
            Course Finder
          </ButtonLink>
          <ButtonLink href="/contact#book" variant="primary" className="px-5">
            Book counselling
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ButtonLink href="/contact#book" variant="primary" className="px-4 sm:px-5">
            <span className="sm:hidden">Book call</span>
            <span className="hidden sm:inline">Book counselling</span>
          </ButtonLink>
          <button
            type="button"
            className="inline-flex min-h-12 min-w-12 touch-manipulation items-center justify-center rounded-xl border border-navy/[0.1] bg-background/80 text-navy shadow-ring"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-4">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-4 rounded-full bg-navy transition-transform",
                  open && "translate-y-1.5 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-0.5 w-4 rounded-full bg-navy transition-opacity",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3 h-0.5 w-4 rounded-full bg-navy transition-transform",
                  open && "-translate-y-1.5 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 0.08, 0.24, 1] }}
            className="border-t border-navy/[0.06] bg-background lg:hidden"
          >
            <Container className="flex flex-col gap-0.5 py-3 pb-5">
              <div className="mb-2 flex items-center gap-3 border-b border-navy/[0.06] px-1 pb-3">
                <Link
                  href="/"
                  className="flex shrink-0 items-center rounded-lg outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                  onClick={() => setOpen(false)}
                  aria-label={`${SITE.name} — home`}
                >
                  <SiteLogo variant="mark" markSize="lg" />
                </Link>
                <span className="min-w-0 font-display text-base font-semibold tracking-tight text-navy">
                  {SITE.name}
                </span>
              </div>

              {/* Thumb-friendly mobile quick actions dashboard */}
              <div className="grid grid-cols-3 gap-2 py-2 my-1 border-b border-navy/[0.06]">
                <Link
                  href="/compare"
                  className="flex flex-col items-center justify-center p-2 rounded-xl bg-muted/40 hover:bg-muted/80 text-center"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-base select-none">🔄</span>
                  <span className="text-[10px] font-semibold text-navy mt-1">Compare</span>
                </Link>
                <Link
                  href="/calculator"
                  className="flex flex-col items-center justify-center p-2 rounded-xl bg-muted/40 hover:bg-muted/80 text-center"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-base select-none">🧮</span>
                  <span className="text-[10px] font-semibold text-navy mt-1">Calculator</span>
                </Link>
                <Link
                  href="/discover"
                  className="flex flex-col items-center justify-center p-2 rounded-xl bg-muted/40 hover:bg-muted/80 text-center"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-base select-none">🎯</span>
                  <span className="text-[10px] font-semibold text-navy mt-1">Finder</span>
                </Link>
              </div>

              {renderMobileNav(() => setOpen(false))}
              <Link
                href={getWhatsAppLink()}
                className="min-h-12 rounded-xl px-3 py-3 text-sm font-medium text-primary transition-colors hover:bg-muted/80"
                onClick={() => setOpen(false)}
              >
                WhatsApp us
              </Link>
              <div className="mt-4 grid gap-2 border-t border-navy/[0.06] pt-4">
                <ButtonLink
                  href="/contact#book"
                  variant="primary"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Book free counselling
                </ButtonLink>
                <ButtonLink
                  href={getWhatsAppLink()}
                  variant="secondary"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  WhatsApp instead
                </ButtonLink>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
