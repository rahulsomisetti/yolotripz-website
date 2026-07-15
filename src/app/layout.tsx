import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/seo";
import { AnalyticsTracker } from "@/components/analytics/AnalyticsTracker";
import { CookieConsentBanner } from "@/components/analytics/CookieConsentBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex min-h-dvh flex-col">
        {/* Meta Pixel noscript fallback immediately after opening body */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1763440038344063&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Set up Google Consent defaults synchronously before async scripts run */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              var defaultConsent = {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
              };
              
              try {
                var saved = localStorage.getItem('yolotripz-cookie-consent');
                if (saved) {
                  var parsed = JSON.parse(saved);
                  if (parsed.analytics) defaultConsent.analytics_storage = 'granted';
                  if (parsed.marketing) {
                    defaultConsent.ad_storage = 'granted';
                    defaultConsent.ad_user_data = 'granted';
                    defaultConsent.ad_personalization = 'granted';
                  }
                }
              } catch (e) {}
              
              gtag('consent', 'default', defaultConsent);
            `,
          }}
        />

        {children}
        <AnalyticsTracker />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
