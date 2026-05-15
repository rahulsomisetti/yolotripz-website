import { defineField, defineType } from "sanity";

export default defineType({
  name: "blogPost",
  title: "Blog post",
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
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (r) => r.required().max(320),
    }),
    defineField({
      name: "mainImage",
      title: "Featured image",
      type: "image",
      description: "Shown on insights listing cards and at the top of the article when set.",
      options: { hotspot: true },
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "readTime",
      title: "Read time label",
      type: "string",
      description: 'e.g. "6 min read"',
      initialValue: "5 min read",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Study abroad decisions", value: "study-abroad-decisions" },
          { title: "Visa updates", value: "visa-updates" },
          { title: "Scholarships", value: "scholarships" },
          { title: "PG courses", value: "pg-courses" },
          { title: "Country comparisons", value: "country-comparisons" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "featured",
      title: "Featured on insights hub",
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "authorName", title: "Author display name", type: "string" }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
      validation: (r) => r.required(),
    }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  orderings: [
    { title: "Published (newest)", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
  preview: {
    select: { title: "title", date: "publishedAt" },
    prepare({ title, date }) {
      return { title: title ?? "Post", subtitle: date ? String(date).slice(0, 10) : undefined };
    },
  },
});
