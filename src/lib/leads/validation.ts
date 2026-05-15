import { z } from "zod";
import {
  BUDGET_RANGE_OPTIONS,
  CONTACT_TOPIC_LABELS,
  CONTACT_TOPIC_TO_LEAD_TYPE,
  PREFERRED_COUNTRIES,
} from "./constants";

const trimmed = z.string().trim();

const contactTopicSchema = z.enum(["study-abroad", "visa", "travel", "other"]);

/** Discriminator `source` must be first for z.discriminatedUnion. */
export const contactLeadBodySchema = z.object({
  source: z.literal("contact"),
  fullName: trimmed.min(2).max(120),
  email: z.string().trim().email().max(254),
  phone: trimmed.max(40).optional().or(z.literal("")),
  topic: contactTopicSchema,
  intake: trimmed.max(120).optional().or(z.literal("")),
  message: trimmed.max(8000).optional().or(z.literal("")),
  preferredCountry: z.enum(PREFERRED_COUNTRIES).optional(),
  courseInterest: trimmed.max(200).optional().or(z.literal("")),
  budgetRange: z.enum(BUDGET_RANGE_OPTIONS).optional(),
  formLoadedAt: z.number().finite(),
  _hp: z.string().max(200).optional(),
});

export type ContactLeadBody = z.infer<typeof contactLeadBodySchema>;

export const newsletterLeadBodySchema = z.object({
  source: z.literal("insights-newsletter"),
  email: z.string().trim().email().max(254),
  formLoadedAt: z.number().finite(),
  _hp: z.string().max(200).optional(),
});

export type NewsletterLeadBody = z.infer<typeof newsletterLeadBodySchema>;

export const leadPostBodySchema = z.discriminatedUnion("source", [
  contactLeadBodySchema,
  newsletterLeadBodySchema,
]);

export type LeadPostBody = z.infer<typeof leadPostBodySchema>;

function assertAntiSpam(data: { _hp?: string; formLoadedAt: number }, serverNow: number) {
  if (data._hp && data._hp.trim().length > 0) {
    return { ok: false as const, code: "spam" as const };
  }
  const elapsed = serverNow - data.formLoadedAt;
  if (elapsed < 1_800) {
    return { ok: false as const, code: "too_fast" as const };
  }
  if (elapsed > 1000 * 60 * 60 * 24) {
    return { ok: false as const, code: "stale" as const };
  }
  return { ok: true as const };
}

export function parseAndValidateLeadJson(
  raw: unknown,
  serverNow: number,
):
  | { ok: true; data: LeadPostBody }
  | { ok: false; status: number; error: string; code?: string } {
  const parsed = leadPostBodySchema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      status: 400,
      error: "Invalid request",
      code: "validation",
    };
  }
  const spam = assertAntiSpam(parsed.data, serverNow);
  if (!spam.ok) {
    return {
      ok: false,
      status: 400,
      error: "Could not submit this form.",
      code: spam.code,
    };
  }
  return { ok: true, data: parsed.data };
}

export function contactBodyToLeadFields(data: ContactLeadBody) {
  const leadType = CONTACT_TOPIC_TO_LEAD_TYPE[data.topic];
  const notesParts = [
    data.message ? `Message:\n${data.message}` : null,
    data.topic === "other" ? "Original topic: Something else" : null,
  ].filter(Boolean);

  return {
    _type: "lead" as const,
    fullName: data.fullName,
    email: data.email,
    phone: data.phone?.trim() || undefined,
    leadType,
    preferredCountry: data.preferredCountry ?? "unspecified",
    intake: data.intake?.trim() || undefined,
    courseInterest: data.courseInterest?.trim() || undefined,
    ...(data.budgetRange ? { budgetRange: data.budgetRange } : {}),
    leadSource: `Website · Contact form · ${CONTACT_TOPIC_LABELS[data.topic]}`,
    status: "new" as const,
    priority: "warm" as const,
    notes: notesParts.join("\n\n") || undefined,
    createdAt: new Date().toISOString(),
  };
}

export function newsletterBodyToLeadFields(data: NewsletterLeadBody) {
  return {
    _type: "lead" as const,
    fullName: "Insights newsletter",
    email: data.email,
    phone: undefined,
    leadType: "travel" as const,
    preferredCountry: "unspecified" as const,
    intake: undefined,
    courseInterest: undefined,
    budgetRange: undefined,
    leadSource: "Website · Insights newsletter",
    status: "new" as const,
    priority: "cold" as const,
    notes: "Requested subscription to insights / newsletter updates.",
    createdAt: new Date().toISOString(),
  };
}
