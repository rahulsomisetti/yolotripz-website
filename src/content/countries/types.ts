export type CountryProfile = { title: string; body: string };

export type CountryIntakeRow = { label: string; window: string; plan: string };

export type CountryCostCard = { label: string; value: string; detail: string };

export type CountryVisaPoint = { title: string; body: string };

export type CountryCourseItem = { title: string; blurb: string };

export type CountryUniversityHighlight = { name: string; detail: string };

export type CountryFaqItem = { q: string; a: string };

/** Shared shape for premium country landing pages (consulting layout). */
export type CountryLandingContent = {
  /** Used for accordion value prefixes etc. */
  slug: string;
  bookCounsellingLabel: string;
  whatsappPreset: string;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    footnote: string;
  };
  whoItsFor: {
    title: string;
    intro: string;
    profiles: CountryProfile[];
  };
  intakes: {
    title: string;
    rows: CountryIntakeRow[];
  };
  costs: {
    title: string;
    disclaimer: string;
    cards: CountryCostCard[];
  };
  workVisa: {
    title: string;
    intro: string;
    points: CountryVisaPoint[];
  };
  longTerm: {
    title: string;
    intro: string;
    bullets: string[];
  };
  courses: {
    title: string;
    items: CountryCourseItem[];
  };
  universities: {
    title: string;
    intro: string;
    highlights: CountryUniversityHighlight[];
  };
  faqs: CountryFaqItem[];
  cta: {
    title: string;
    body: string;
  };
};
