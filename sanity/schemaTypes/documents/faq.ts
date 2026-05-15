import { defineField, defineType } from "sanity";

export default defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "array",
      of: [{ type: "block" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Study abroad", value: "study-abroad" },
          { title: "Visa", value: "visa" },
          { title: "Travel", value: "travel" },
          { title: "General", value: "general" },
        ],
        layout: "dropdown",
      },
      initialValue: "general",
    }),
    defineField({
      name: "sortOrder",
      title: "Sort order",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "relatedPath",
      title: "Related site path (optional)",
      type: "string",
      description: 'e.g. "/contact" or "/visa-services" for editors’ reference',
    }),
  ],
  preview: {
    select: { title: "question", subtitle: "category" },
    prepare({ title, subtitle }) {
      return { title: title ?? "FAQ", subtitle };
    },
  },
});
