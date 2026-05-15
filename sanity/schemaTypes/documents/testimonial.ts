import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 5,
      validation: (r) => r.required(),
    }),
    defineField({ name: "authorName", title: "Author name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "role",
      title: "Role / context line",
      type: "string",
      description: 'Shown under the name — e.g. "Parent · UK intake"',
    }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "showOnHomepage",
      title: "Show on homepage",
      type: "boolean",
      initialValue: false,
      description: "Up to 3–6 marked items can be pulled into the homepage testimonials grid.",
    }),
    defineField({
      name: "sortOrder",
      title: "Sort order",
      type: "number",
      initialValue: 0,
      description: "Lower numbers appear first when listing.",
    }),
  ],
  preview: {
    select: { title: "authorName", subtitle: "role" },
    prepare({ title, subtitle }) {
      return { title: title ?? "Testimonial", subtitle };
    },
  },
});
