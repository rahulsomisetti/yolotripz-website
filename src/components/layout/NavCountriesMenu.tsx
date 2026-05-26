"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Globe, MapPin } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type NavCountriesMenuProps = {
  variant: "desktop" | "mobile";
  onNavigate?: () => void;
  hoveredId?: string | null;
  setHoveredId?: (id: string | null) => void;
};

const regions = [
  {
    name: "North America",
    countries: [
      { slug: "usa", name: "United States", highlight: "STEM OPT · Research & MBA", href: "/countries/usa" },
      { slug: "canada", name: "Canada", highlight: "Co-op & Post-Study Work", href: "/countries/canada" },
    ],
  },
  {
    name: "Europe & UK",
    countries: [
      { slug: "uk", name: "United Kingdom", highlight: "Russell Group · 1-Year PG", href: "/countries/uk" },
      { slug: "ireland", name: "Ireland", highlight: "Tech & Pharma Hub", href: "/countries/ireland" },
      { slug: "germany", name: "Germany", highlight: "Public Value · STEM Focus", href: "/countries/germany" },
      { slug: "emerging-europe-asia", name: "Emerging Europe", highlight: "Low-Cost MBBS & Nursing", href: "/countries/emerging-europe-asia" },
    ],
  },
  {
    name: "Oceania",
    countries: [
      { slug: "australia", name: "Australia", highlight: "Structured PG · High Employability", href: "/countries/australia" },
      { slug: "new-zealand", name: "New Zealand", highlight: "Focused Learners · High Quality of Life", href: "/countries/new-zealand" },
    ],
  },
];

export function NavCountriesMenu({ variant, onNavigate, hoveredId, setHoveredId }: NavCountriesMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const reduceMotion = useReducedMotion();
  const reduce = reduceMotion === true;

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function close() {
    setOpen(false);
    onNavigate?.();
  }

  if (variant === "mobile") {
    return (
      <div className="flex flex-col">
        <button
          type="button"
          className="flex min-h-12 items-center justify-between gap-2 rounded-xl px-3 py-3 text-left text-sm font-medium text-navy transition-colors hover:bg-muted/80"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex items-center gap-2">
            <Globe className="size-4 text-muted-foreground" />
            Countries
          </span>
          <ChevronDown
            className={cn("size-4 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")}
            aria-hidden
          />
        </button>
        {open ? (
          <div id={menuId} className="flex flex-col gap-0.5 pb-2 pl-6 pr-2" role="menu">
            {regions.map((reg) => (
              <div key={reg.name} className="mt-3 first:mt-1">
                <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-gold/90">{reg.name}</p>
                <div className="mt-1 flex flex-col gap-1 border-l border-navy/5 pl-2">
                  {reg.countries.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      role="menuitem"
                      className="flex min-h-10 items-center rounded-lg px-3 py-2 text-xs text-muted-foreground transition-colors hover:bg-muted/80 hover:text-navy"
                      onClick={close}
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setHoveredId?.("countries")}
    >
      <button
        type="button"
        className={cn(
          "relative inline-flex items-center gap-1 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-300",
          open ? "text-navy" : "text-muted-foreground hover:text-navy",
        )}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      >
        {(hoveredId === "countries" || open) && (
          <motion.span
            layoutId="desktopNavHoverPill"
            className="absolute inset-0 rounded-lg bg-muted/70"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1">
          Countries
          <ChevronDown
            className={cn("size-3.5 shrink-0 opacity-70 transition-transform duration-300", open && "rotate-180")}
            aria-hidden
          />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            role="menu"
            initial={reduce ? false : { opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute left-1/2 z-50 mt-3.5 w-[42rem] -translate-x-[45%] rounded-2xl border border-navy/[0.08] bg-card p-7 shadow-soft"
          >
            <div className="absolute left-[45%] top-0 h-3 w-3 -translate-y-1.5 rotate-45 border-l border-t border-navy/[0.08] bg-card" />
            <div className="grid grid-cols-3 gap-6">
              {regions.map((reg) => (
                <div key={reg.name} className="flex flex-col">
                  <p className="mb-3 flex items-center gap-1.5 border-b border-navy/5 pb-2 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    <MapPin className="size-3 text-gold/80" />
                    {reg.name}
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {reg.countries.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        role="menuitem"
                        className="group block rounded-xl p-2 transition-all duration-200 hover:bg-muted/70"
                        onClick={close}
                      >
                        <p className="font-display text-[0.875rem] font-semibold text-navy group-hover:text-primary flex items-center gap-1">
                          {c.name}
                          <span className="text-[10px] text-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            →
                          </span>
                        </p>
                        <p className="mt-1 text-[11px] leading-[1.3] text-muted-foreground">
                          {c.highlight}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-navy/5 pt-4">
              <p className="text-[11px] text-muted-foreground">
                All guides are PG and admissions-focused.
              </p>
              <Link
                href="/study-abroad"
                className="text-[11px] font-semibold text-primary hover:underline"
                onClick={close}
              >
                Counselling overview →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
