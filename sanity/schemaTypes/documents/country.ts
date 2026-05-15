import { defineField, defineType } from "sanity";

/**
 * CMS-managed country profiles (separate URL space from static `/countries/*` landings).
 * Rendered at `/destinations/[slug]`.
 */
export default defineType({
  name: "country",
  title: "Country (CMS)",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "region",
      title: "Region label",
      type: "string",
      description: 'e.g. "Western Europe", "Asia-Pacific"',
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
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
    select: { title: "name", media: "heroImage" },
    prepare({ title, media }) {
      return { title: title ?? "Country", media };
    },
  },
});
