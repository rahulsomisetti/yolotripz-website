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
      <Container className="flex h-[3.75rem] items-center justify-between gap-3 md:h-[4.5rem] md:gap-4">
        <SiteLogo variant="primary" priority />

        <nav
          className="hidden items-center gap-0.5 lg:flex relative"
          aria-label="Primary"
          onMouseLeave={() => setHoveredId(null)}
        >
          {renderDesktopNav(hoveredId, setHoveredId)}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={getWhatsAppLink()} variant="ghost" className="px-4">
            WhatsApp
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
