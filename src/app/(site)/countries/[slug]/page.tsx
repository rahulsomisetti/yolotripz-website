import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { countries } from "@/content/home";
import { isPremiumCountrySlug } from "@/lib/countries-static";
import { SITE } from "@/lib/constants";
import { Container } from "@/components/layout/Container";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return countries.filter((c) => !isPremiumCountrySlug(c.slug)).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) return { title: "Country" };
  return {
    title: `${country.name} | PG study abroad`,
    description: `${country.name} study abroad guidance with ${SITE.name}. ${country.profile}`,
  };
}

export default async function CountryPage({ params }: Props) {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) notFound();

  return (
    <div className="bg-background py-20 md:py-28 lg:py-32">
      <Container>
        <div className="max-w-3xl">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
            Country guide
          </p>
          <h1 className="mt-5 text-balance font-display text-[1.875rem] font-semibold leading-[1.1] tracking-[-0.02em] text-navy sm:text-4xl sm:leading-[1.12]">
            Study in {country.name}
          </h1>
          <p className="mt-6 text-pretty text-base leading-[1.7] text-muted-foreground sm:text-[1.0625rem]">
            {country.profile}
          </p>
        </div>
        <dl className="mt-14 grid gap-6 sm:grid-cols-2 md:mt-16 lg:gap-8">
          <div className="border border-navy/[0.07] border-l-[3px] border-l-gold/60 bg-card p-7 shadow-ring sm:p-8">
            <dt className="text-sm font-semibold text-navy">Intakes</dt>
            <dd className="mt-2 text-sm leading-[1.65] text-muted-foreground">{country.intakes}</dd>
          </div>
          <div className="border border-navy/[0.07] border-l-[3px] border-l-gold/60 bg-card p-7 shadow-ring sm:p-8">
            <dt className="text-sm font-semibold text-navy">Work rights (overview)</dt>
            <dd className="mt-2 text-sm leading-[1.65] text-muted-foreground">{country.work}</dd>
          </div>
        </dl>
        <p className="mt-12 max-w-prose text-sm leading-[1.7] text-muted-foreground md:mt-14 md:text-[0.9375rem]">
          Eligibility, fees, and immigration rules change — book counselling for advice tailored to
          your profile and intake.
        </p>
        <p className="mt-10 md:mt-12">
          <Link
            href="/#countries"
            className="text-sm font-semibold text-primary underline-offset-[5px] transition-colors hover:underline"
          >
            ← All destinations
          </Link>
        </p>
      </Container>
    </div>
  );
}
