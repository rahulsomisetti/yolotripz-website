"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
    _fbq: unknown;
  }
}

export const GA_MEASUREMENT_ID = "G-KW1PGKBH3R";
export const META_PIXEL_ID = "1763440038344063";

function TrackingEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");

    // Track Google Analytics PageView
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: url,
        page_location: window.location.href,
        page_title: document.title,
      });
    }

    // Track Meta Pixel PageView
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname, searchParams]);

  return null;
}

export function AnalyticsTracker() {
  return (
    <>
      {/* 1. Google Analytics 4 Script Loading */}
      {/* Load GA4 library script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      {/* Initialize GA4 */}
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: false
            });
          `,
        }}
      />

      {/* 2. Meta Pixel Setup */}
      <Script
        id="meta-pixel-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            
            var savedMarketingConsent = false;
            try {
              var saved = localStorage.getItem('yolotripz-cookie-consent');
              if (saved) {
                var parsed = JSON.parse(saved);
                if (parsed.marketing) savedMarketingConsent = true;
              }
            } catch (e) {}
            
            if (savedMarketingConsent) {
              fbq('consent', 'grant');
            } else {
              fbq('consent', 'revoke');
            }
            
            fbq('init', '${META_PIXEL_ID}');
          `,
        }}
      />

      {/* 3. Client-side Router Tracking */}
      <Suspense fallback={null}>
        <TrackingEvents />
      </Suspense>
    </>
  );
}
