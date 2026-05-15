import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { fetchIntakeAlerts } from "@/sanity/fetchers";
import { SITE } from "@/lib/constants";

export const revalidate = 120;

export const metadata: Metadata = {
  title: "Intake alerts",
  description: `Important intake deadlines and reminders from ${SITE.name} — powered by Sanity when configured.`,
};

function urgencyStyles(u: string) {
  if (u === "critical") return "border-destructive/40 bg-destructive/5 text-destructive";
  if (u === "high") return "border-gold/40 bg-gold/5 text-navy";
  return "border-navy/10 bg-card";
}

export default async function IntakesPage() {
  const alerts = await fetchIntakeAlerts();

  return (
    <div className="bg-surface py-16 md:py-24">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Intakes</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-navy sm:text-4xl">Intake alerts</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          When Sanity is connected, editors can publish deadline-driven alerts without redeploying the site.
        </p>

        {alerts.length === 0 ? (
          <Card className="mt-12 border-navy/10 bg-muted/30 p-10 text-center text-muted-foreground">
            <p>No alerts published yet — add documents of type “Intake alert” in Sanity Studio.</p>
            <ButtonLink href="/studio" variant="secondary" className="mt-6">
              Open Studio
            </ButtonLink>
          </Card>
        ) : (
          <ul className="mt-12 space-y-5">
            {alerts.map(
              (a: {
                _id: string;
                title: string;
                slug: string;
                intakeLabel?: string;
                urgency?: string;
                deadline?: string;
                summary?: string;
                ctaLabel?: string;
                ctaUrl?: string;
              }) => (
                <li key={a._id}>
                  <Card id={a.slug} className={`border p-6 shadow-soft sm:p-8 ${urgencyStyles(a.urgency ?? "normal")}`}>
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {a.intakeLabel}
                        </p>
                        <h2 className="mt-2 font-display text-xl font-semibold text-navy">
                          <Link href={`/intakes#${a.slug}`} className="hover:text-primary">
                            {a.title}
                          </Link>
                        </h2>
                        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground">{a.summary}</p>
                        {a.deadline ? (
                          <p className="mt-3 text-xs text-muted-foreground">
                            Key date:{" "}
                            <time dateTime={a.deadline}>
                              {new Intl.DateTimeFormat("en-IN", {
                                dateStyle: "medium",
                              }).format(new Date(a.deadline))}
                            </time>
                          </p>
                        ) : null}
                      </div>
                      {a.ctaUrl ? (
                        <ButtonLink href={a.ctaUrl} variant="primary" className="shrink-0 self-start">
                          {a.ctaLabel ?? "Learn more"}
                        </ButtonLink>
                      ) : null}
                    </div>
                  </Card>
                </li>
              ),
            )}
          </ul>
        )}
      </Container>
    </div>
  );
}
