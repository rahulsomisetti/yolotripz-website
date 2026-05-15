/** Mirrors `sanity/schemaTypes/documents/lead.ts` option values. */

export const LEAD_TYPES = ["studyAbroad", "visa", "travel", "flights"] as const;
export type LeadType = (typeof LEAD_TYPES)[number];

export const LEAD_STATUSES = [
  "new",
  "contacted",
  "counsellingDone",
  "applicationStarted",
  "closed",
  "lost",
] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

export const LEAD_PRIORITIES = ["hot", "warm", "cold"] as const;
export type LeadPriority = (typeof LEAD_PRIORITIES)[number];

export const PREFERRED_COUNTRIES = [
  "unspecified",
  "United Kingdom",
  "Australia",
  "New Zealand",
  "Canada",
  "Germany",
  "Emerging Europe & Asia",
  "Multiple / comparing",
  "Other",
] as const;
export type PreferredCountry = (typeof PREFERRED_COUNTRIES)[number];

export const BUDGET_RANGE_OPTIONS = [
  "Under ₹25 lakhs",
  "₹25–50 lakhs",
  "₹50 lakhs+",
  "Prefer not to say",
] as const;

export const CONTACT_TOPIC_LABELS = {
  "study-abroad": "Study abroad / PG counselling",
  visa: "Visa documentation",
  travel: "Flights / travel",
  other: "Something else",
} as const;

export const CONTACT_TOPIC_TO_LEAD_TYPE: Record<
  "study-abroad" | "visa" | "travel" | "other",
  LeadType
> = {
  "study-abroad": "studyAbroad",
  visa: "visa",
  travel: "travel",
  other: "travel",
};
