import type { InsightCategoryMeta } from "./types";

export const insightCategories: readonly InsightCategoryMeta[] = [
  {
    id: "study-abroad-decisions",
    label: "Study abroad decisions",
    description: "When to start, how to compare options, and calmer family conversations.",
  },
  {
    id: "visa-updates",
    label: "Visa updates",
    description: "Documentation mindset, appointment reality, and policy-sensitive orientation.",
  },
  {
    id: "scholarships",
    label: "Scholarships",
    description: "What to chase first, what often disappoints, and realistic planning.",
  },
  {
    id: "pg-courses",
    label: "PG courses",
    description: "Course fit, specialisation trade-offs, and reading a programme beyond the title.",
  },
  {
    id: "country-comparisons",
    label: "Country comparisons",
    description: "Side-by-side framing for budgets, duration, and post-study pathways.",
  },
] as const;
