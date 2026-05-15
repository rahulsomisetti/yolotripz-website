/** Slugs with dedicated premium landing routes under `app/countries/<slug>`. */
export const PREMIUM_COUNTRY_SLUGS = [
  "uk",
  "australia",
  "canada",
  "new-zealand",
  "germany",
  "emerging-europe-asia",
] as const;

export type PremiumCountrySlug = (typeof PREMIUM_COUNTRY_SLUGS)[number];

const premiumSet = new Set<string>(PREMIUM_COUNTRY_SLUGS);

export function isPremiumCountrySlug(slug: string): boolean {
  return premiumSet.has(slug);
}
