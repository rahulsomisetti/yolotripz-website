import { defineField, defineType } from "sanity";

export default defineType({
  name: "intakeAlert",
  title: "Intake alert",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "intakeLabel",
      title: "Intake label",
      type: "string",
      description: 'e.g. "September 2026 PG"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "urgency",
      title: "Urgency",
      type: "string",
      options: {
        list: [
          { title: "Normal", value: "normal" },
          { title: "High", value: "high" },
          { title: "Critical", value: "critical" },
        ],
        layout: "radio",
      },
      initialValue: "normal",
    }),
    defineField({ name: "deadline", title: "Key deadline", type: "datetime" }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({ name: "ctaLabel", title: "CTA label", type: "string", initialValue: "Book counselling" }),
    defineField({ name: "ctaUrl", title: "CTA URL", type: "string", initialValue: "/contact#book" }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  orderings: [
    { title: "Deadline soonest", name: "deadlineAsc", by: [{ field: "deadline", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "intakeLabel" },
    prepare({ title, subtitle }) {
      return { title: title ?? "Alert", subtitle };
    },
  },
});
