import { defineField, defineType } from "sanity";

export default defineType({
  name: "course",
  title: "Course",
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
      name: "university",
      title: "University",
      type: "reference",
      to: [{ type: "university" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "country",
      title: "Country (optional override)",
      type: "reference",
      to: [{ type: "country" }],
      description: "Optional if different from the university’s country.",
    }),
    defineField({
      name: "level",
      title: "Level",
      type: "string",
      options: {
        list: [
          { title: "PG Diploma", value: "pg-diploma" },
          { title: "Masters (MSc / MA)", value: "masters" },
          { title: "MBA", value: "mba" },
          { title: "PhD", value: "phd" },
          { title: "Other", value: "other" },
        ],
      },
      initialValue: "masters",
    }),
    defineField({ name: "duration", title: "Duration", type: "string", description: 'e.g. "12 months"' }),
    defineField({
      name: "intakes",
      title: "Intakes",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "feesSummary",
      title: "Fees summary",
      type: "text",
      rows: 3,
      description: "Orientation only — not a fee guarantee.",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: {
    select: { title: "title", subtitle: "level" },
    prepare({ title, subtitle }) {
      return { title: title ?? "Course", subtitle };
    },
  },
});
