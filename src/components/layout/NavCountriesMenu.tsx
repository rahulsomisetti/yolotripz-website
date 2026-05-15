"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { countries } from "@/content/home";
import { cn } from "@/lib/utils";

type NavCountriesMenuProps = {
  variant: "desktop" | "mobile";
  onNavigate?: () => void;
};

export function NavCountriesMenu({ variant, onNavigate }: NavCountriesMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

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
          Countries
          <ChevronDown
            className={cn("size-4 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")}
            aria-hidden
          />
        </button>
        {open ? (
          <div id={menuId} className="flex flex-col gap-0.5 pb-1 pl-2" role="menu">
            {countries.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                role="menuitem"
                className="min-h-11 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted/80 hover:text-navy"
                onClick={close}
              >
                {c.name}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200",
          open ? "bg-muted/70 text-navy" : "text-muted-foreground hover:bg-muted/70 hover:text-navy",
        )}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      >
        Countries
        <ChevronDown
          className={cn("size-3.5 shrink-0 opacity-70 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>
      {open ? (
        <div
          id={menuId}
          role="menu"
          className="absolute left-0 top-full z-50 mt-1 min-w-[15.5rem] rounded-xl border border-navy/[0.08] bg-card py-1.5 shadow-soft"
        >
          {countries.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              role="menuitem"
              className="block px-3.5 py-2.5 text-sm text-navy transition-colors hover:bg-muted/80 hover:text-primary"
              onClick={close}
            >
              {c.name}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
