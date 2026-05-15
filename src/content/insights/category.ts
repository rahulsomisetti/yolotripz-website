import { insightCategories } from "./categories";
import type { InsightCategoryId } from "./types";

const ALLOWED_IDS = new Set<string>(insightCategories.map((c) => c.id));

/** Map CMS category string to a known hub category; safe default for legacy or missing values. */
export function normalizeInsightCategory(
  raw: string | null | undefined,
): InsightCategoryId {
  if (raw && ALLOWED_IDS.has(raw)) return raw as InsightCategoryId;
  return "study-abroad-decisions";
}
