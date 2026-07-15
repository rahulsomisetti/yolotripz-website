"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie, X, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConsentState {
  analytics: boolean;
  marketing: boolean;
  necessary: boolean;
}

export function CookieConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  
  // Custom tracking state for user selections
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if consent has already been saved
    const saved = localStorage.getItem("yolotripz-cookie-consent");
    if (!saved) {
      // Trigger short delay to make the entrance feel premium and not abrupt
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // If saved, load preferences into states
      try {
        const parsed: ConsentState = JSON.parse(saved);
        setAnalyticsConsent(!!parsed.analytics);
        setMarketingConsent(!!parsed.marketing);
      } catch (e) {
        console.error("Error reading saved cookie consent state:", e);
      }
    }
  }, []);

  // Set up event listener to reopen consent preferences
  useEffect(() => {
    const handleOpen = () => {
      setShowCustomize(true);
      setIsOpen(true);
    };
    
    window.addEventListener("open-cookie-consent", handleOpen);
    return () => window.removeEventListener("open-cookie-consent", handleOpen);
  }, []);

  if (!mounted) return null;

  const handleAcceptAll = () => {
    setAnalyticsConsent(true);
    setMarketingConsent(true);
    saveConsent(true, true);
  };

  const handleRejectAll = () => {
    setAnalyticsConsent(false);
    setMarketingConsent(false);
    saveConsent(false, false);
  };

  const handleSavePreferences = () => {
    saveConsent(analyticsConsent, marketingConsent);
  };

  const saveConsent = (analyticsGranted: boolean, marketingGranted: boolean) => {
    const consent: ConsentState = {
      analytics: analyticsGranted,
      marketing: marketingGranted,
      necessary: true,
    };
    
    localStorage.setItem("yolotripz-cookie-consent", JSON.stringify(consent));

    // 1. Update Google Consent Mode v2
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: analyticsGranted ? "granted" : "denied",
        ad_storage: marketingGranted ? "granted" : "denied",
        ad_user_data: marketingGranted ? "granted" : "denied",
        ad_personalization: marketingGranted ? "granted" : "denied",
      });

      // Fire PageView if analytics consent has just been granted
      if (analyticsGranted) {
        window.gtag("event", "page_view", {
          page_path: window.location.pathname + window.location.search,
          page_location: window.location.href,
          page_title: document.title,
        });
      }
    }

    // 2. Update Meta Pixel Consent
    if (typeof window.fbq === "function") {
      if (marketingGranted) {
        window.fbq("consent", "grant");
        window.fbq("track", "PageView"); // Fire immediate PageView on consent grant
      } else {
        window.fbq("consent", "revoke");
      }
    }

    setIsOpen(false);
    setShowCustomize(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] max-w-md overflow-hidden rounded-2xl border border-navy/[0.08] bg-card/95 p-6 text-navy shadow-premium backdrop-blur-md dark:border-white/10 dark:bg-navy/95"
        >
          {/* Header/Indicator bar */}
          <div
            className="absolute left-0 top-0 h-[4px] w-full bg-gradient-to-r from-gold/80 via-primary to-accent"
            aria-hidden
          />

          <div className="flex flex-col gap-4">
            {/* Title block */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-white/10 dark:text-gold">
                  <Cookie className="size-5" />
                </div>
                <h3 className="font-display text-base font-semibold tracking-tight text-navy dark:text-white">
                  Cookie Preferences
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-navy dark:hover:bg-white/10 dark:hover:text-white"
                aria-label="Close panel"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Content summary */}
            {!showCustomize ? (
              <p className="text-sm leading-relaxed text-muted-foreground">
                We use cookies to personalize content, analyze our web traffic, and deliver a more
                tailored browsing experience. You can choose to accept all cookies, reject non-essential
                cookies, or customize your selection below. Read our privacy guidelines to learn more.
              </p>
            ) : (
              <div className="flex flex-col gap-4">
                <p className="text-xs text-muted-foreground">
                  Customize which cookies you permit us to use. Essential cookies cannot be disabled.
                </p>

                <div className="space-y-3.5">
                  {/* Necessary cookies */}
                  <div className="flex items-start justify-between gap-4 rounded-xl border border-navy/[0.04] bg-muted/20 p-3 dark:border-white/5 dark:bg-white/5">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-navy dark:text-white">
                        <span>Necessary Cookies</span>
                        <span className="rounded-full bg-navy/10 px-1.5 py-0.2 text-[9px] uppercase tracking-wider text-navy/70 dark:bg-white/10 dark:text-white/70">
                          Required
                        </span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-muted-foreground">
                        Essential features, secure forms, and site preference memory.
                      </p>
                    </div>
                    <div className="flex h-5 items-center">
                      <div className="relative inline-flex items-center">
                        <input
                          type="checkbox"
                          disabled
                          checked
                          className="peer sr-only"
                        />
                        <div className="h-5 w-9 rounded-full bg-primary/20 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-primary after:transition-all peer-checked:bg-primary/30 dark:bg-white/20 dark:after:bg-gold" />
                      </div>
                    </div>
                  </div>

                  {/* Analytics cookies */}
                  <div className="flex items-start justify-between gap-4 rounded-xl border border-navy/[0.04] bg-muted/20 p-3 dark:border-white/5 dark:bg-white/5">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-navy dark:text-white">
                        <span>Analytics Cookies</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-muted-foreground">
                        Helps us understand visitor statistics and page traffic via Google Analytics.
                      </p>
                    </div>
                    <div className="flex h-5 items-center">
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input
                          type="checkbox"
                          checked={analyticsConsent}
                          onChange={(e) => setAnalyticsConsent(e.target.checked)}
                          className="peer sr-only"
                        />
                        <div className="h-5 w-9 rounded-full bg-navy/20 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full dark:bg-white/20 dark:peer-checked:bg-gold" />
                      </label>
                    </div>
                  </div>

                  {/* Marketing cookies */}
                  <div className="flex items-start justify-between gap-4 rounded-xl border border-navy/[0.04] bg-muted/20 p-3 dark:border-white/5 dark:bg-white/5">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-navy dark:text-white">
                        <span>Marketing & Targeting</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-muted-foreground">
                        Used to track conversion rates and coordinate with Meta Pixel.
                      </p>
                    </div>
                    <div className="flex h-5 items-center">
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input
                          type="checkbox"
                          checked={marketingConsent}
                          onChange={(e) => setMarketingConsent(e.target.checked)}
                          className="peer sr-only"
                        />
                        <div className="h-5 w-9 rounded-full bg-navy/20 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full dark:bg-white/20 dark:peer-checked:bg-gold" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Actions panel */}
            <div className="flex flex-col gap-2.5 pt-1">
              {!showCustomize ? (
                <>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      onClick={handleAcceptAll}
                      size="sm"
                      className="w-full text-xs"
                    >
                      Accept All
                    </Button>
                    <Button
                      onClick={handleRejectAll}
                      variant="secondary"
                      size="sm"
                      className="w-full text-xs"
                    >
                      Reject All
                    </Button>
                  </div>
                  <Button
                    onClick={() => setShowCustomize(true)}
                    variant="ghost"
                    size="sm"
                    className="w-full text-xs font-medium text-navy/70 hover:text-navy dark:text-white/70 dark:hover:text-white"
                  >
                    <Settings2 className="mr-1.5 size-3.5" />
                    Customize Settings
                  </Button>
                </>
              ) : (
                <div className="flex flex-col gap-2">
                  <Button
                    onClick={handleSavePreferences}
                    size="sm"
                    className="w-full text-xs"
                  >
                    Save My Choices
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      onClick={handleAcceptAll}
                      variant="secondary"
                      size="sm"
                      className="w-full text-xs"
                    >
                      Accept All
                    </Button>
                    <Button
                      onClick={() => setShowCustomize(false)}
                      variant="ghost"
                      size="sm"
                      className="w-full text-xs"
                    >
                      Back
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
