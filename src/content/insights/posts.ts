import type { InsightPost } from "./types";

/**
 * Static article catalogue.
 * CMS path: replace this array with a fetch mapped into `InsightPost[]`.
 */
export const insightPosts: readonly InsightPost[] = [
  {
    slug: "september-intake-timeline",
    title: "September intake: a practical timeline for PG applicants",
    excerpt:
      "When to shortlist, when to apply, and where visa lead times quietly decide your year.",
    read: "6 min read",
    publishedAt: "2025-02-10",
    category: "study-abroad-decisions",
    tags: ["September intake", "Timeline", "Parents", "PG"],
    featured: true,
  },
  {
    slug: "how-to-read-an-overseas-offer",
    title: "How to read an overseas offer letter without missing the fine print",
    excerpt: "Deposit deadlines, conditions, and what to clarify before you accept.",
    read: "5 min read",
    publishedAt: "2025-01-18",
    category: "study-abroad-decisions",
    tags: ["Offer letter", "Deposit", "Conditions", "Parents"],
  },
  {
    slug: "parent-checklist-study-abroad",
    title: "A parent’s checklist for study abroad finance documentation",
    excerpt: "A calmer way to prepare funds proof and reduce last-minute scrambling.",
    read: "7 min read",
    publishedAt: "2024-12-05",
    category: "study-abroad-decisions",
    tags: ["Finance proof", "Parents", "Documentation", "Visa"],
  },
  {
    slug: "canada-pgwp-documentation-mindset",
    title: "Canada PGWP: what “eligible programme” means for your file",
    excerpt:
      "A plain-language orientation on programme length, DLI basics, and why your study story should stay coherent.",
    read: "8 min read",
    publishedAt: "2025-03-02",
    category: "visa-updates",
    tags: ["PGWP", "Canada", "Study permit", "Documentation"],
  },
  {
    slug: "uk-graduate-route-family-briefing",
    title: "The Graduate Route: a family briefing without the hype",
    excerpt:
      "What to discuss at home when post-study work comes up — timelines, humility, and planning for rules that can change.",
    read: "6 min read",
    publishedAt: "2025-02-22",
    category: "visa-updates",
    tags: ["UK", "Graduate Route", "Parents", "Post-study work"],
  },
  {
    slug: "pg-scholarships-what-to-chase-first",
    title: "PG scholarships: what to chase first (and what to ignore)",
    excerpt:
      "Merit vs need-aware aid, realistic odds, and how scholarship hunting should fit your intake calendar.",
    read: "7 min read",
    publishedAt: "2025-01-28",
    category: "scholarships",
    tags: ["Scholarships", "Merit aid", "September intake", "PG"],
  },
  {
    slug: "masters-specialisation-vs-generalist-pg",
    title: "Masters specialisation vs generalist PG: choosing without regret",
    excerpt:
      "A framework for students who fear closing doors — and parents who want employability clarity.",
    read: "9 min read",
    publishedAt: "2024-11-14",
    category: "pg-courses",
    tags: ["PG courses", "Career", "ROI", "SOP"],
  },
  {
    slug: "uk-australia-pg-budget-tradeoffs",
    title: "UK vs Australia for PG: budget trade-offs beyond tuition on a brochure",
    excerpt:
      "Duration, city rent bands, and how to model “all-in” honestly before the family commits emotionally.",
    read: "10 min read",
    publishedAt: "2025-03-12",
    category: "country-comparisons",
    tags: ["UK vs Australia", "Budget", "Parents", "PG"],
  },
  {
    slug: "germany-blocked-account-aps-orientation",
    title: "Germany PG prep: blocked account & APS — sequencing that saves months",
    excerpt:
      "Why Indian applicants often lose time here — and how to keep finances, APS, and admission windows in one line.",
    read: "8 min read",
    publishedAt: "2025-02-01",
    category: "visa-updates",
    tags: ["Blocked account", "Germany", "APS", "Documentation"],
  },
] as const;
