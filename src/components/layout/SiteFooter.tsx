import Link from "next/link";
import { SiteLogo } from "@/components/brand/SiteLogo";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/button";
import { NAV_ITEMS, SITE, getWhatsAppLink } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/[0.06] bg-muted/35">
      <Container className="py-16 md:py-20 lg:py-24">
        <div className="relative mb-16 overflow-hidden border border-navy/[0.08] bg-gradient-to-b from-muted/40 via-card to-card px-8 py-10 shadow-ring sm:px-10 md:mb-20 md:flex md:items-center md:justify-between md:gap-12 md:px-12 md:py-11">
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-gold/70 via-gold/40 to-transparent"
            aria-hidden
          />
          <div className="relative max-w-xl pl-1 md:pl-2">
            <p className="font-display text-lg font-semibold tracking-tight text-navy md:text-xl">
              Talk to a counsellor
            </p>
            <p className="mt-3 text-sm leading-[1.7] text-muted-foreground md:text-[0.9375rem]">
              Tell us your target intake and course area. We will reply with what to prepare before
              a proper shortlisting session.
            </p>
          </div>
          <div className="relative mt-8 flex shrink-0 flex-col gap-3 sm:flex-row md:mt-0">
            <ButtonLink href="/contact#book" variant="primary" className="w-full sm:w-auto">
              Book counselling
            </ButtonLink>
            <ButtonLink href={getWhatsAppLink()} variant="secondary" className="w-full sm:w-auto">
              WhatsApp
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-14 md:grid-cols-12 md:gap-10 lg:gap-12">
          <div className="md:col-span-5">
            <div className="mb-5 flex items-center gap-3">
              <Link
                href="/"
                className="shrink-0 outline-none ring-offset-background transition-opacity hover:opacity-90 focus-visible:rounded-xl focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`${SITE.name} — home`}
              >
                <SiteLogo variant="mark" />
              </Link>
              <p className="font-display text-xl font-semibold tracking-tight text-navy">{SITE.name}</p>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-[1.7] text-muted-foreground">
              Overseas education counselling for PG aspirants and families. Honest shortlisting,
              careful applications, and coordinated visa and travel support — rooted in Coastal
              Karnataka since {SITE.foundedYear}.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-7 md:gap-8">
            <div>
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Explore
              </p>
              <ul className="mt-5 space-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-navy/90 transition-colors duration-200 hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Contact
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-[1.65] text-muted-foreground">
                <li>
                  {SITE.city}, {SITE.state}
                </li>
                <li>
                  <a
                    className="transition-colors duration-200 hover:text-primary"
                    href={`mailto:${SITE.email}`}
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors duration-200 hover:text-primary"
                    href={getWhatsAppLink()}
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Note
              </p>
              <p className="mt-5 text-sm leading-[1.7] text-muted-foreground">
                No false promises. While final decisions always rest with consulates, we provide
                the meticulous timeline and document discipline that gives your file its best possible shot.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-navy/[0.06] pt-10 text-xs leading-relaxed text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="max-w-xl sm:text-right">
            {SITE.name} is an education consultancy based in {SITE.city}, {SITE.state}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
