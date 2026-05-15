import { defineField, defineType } from "sanity";

const leadTypeOptions = [
  { title: "Study Abroad", value: "studyAbroad" },
  { title: "Visa", value: "visa" },
  { title: "Travel", value: "travel" },
  { title: "Flights", value: "flights" },
] as const;

const statusOptions = [
  { title: "New", value: "new" },
  { title: "Contacted", value: "contacted" },
  { title: "Counselling Done", value: "counsellingDone" },
  { title: "Application Started", value: "applicationStarted" },
  { title: "Closed", value: "closed" },
  { title: "Lost", value: "lost" },
] as const;

const priorityOptions = [
  { title: "Hot", value: "hot" },
  { title: "Warm", value: "warm" },
  { title: "Cold", value: "cold" },
] as const;

/** Normalised country values for filters + reporting (matches site focus). */
const preferredCountryOptions = [
  { title: "Not specified", value: "unspecified" },
  { title: "United Kingdom", value: "United Kingdom" },
  { title: "Australia", value: "Australia" },
  { title: "New Zealand", value: "New Zealand" },
  { title: "Canada", value: "Canada" },
  { title: "Germany", value: "Germany" },
  { title: "Emerging Europe & Asia", value: "Emerging Europe & Asia" },
  { title: "Multiple / comparing", value: "Multiple / comparing" },
  { title: "Other", value: "Other" },
] as const;

export default defineType({
  name: "lead",
  title: "Lead",
  type: "document",
  groups: [
    { name: "pipeline", title: "Pipeline", default: true },
    { name: "contact", title: "Contact" },
    { name: "interest", title: "Interest" },
    { name: "internal", title: "Internal" },
  ],
  orderings: [
    {
      title: "Newest first",
      name: "createdAtDesc",
      by: [{ field: "createdAt", direction: "desc" }],
    },
    {
      title: "Oldest first",
      name: "createdAtAsc",
      by: [{ field: "createdAt", direction: "asc" }],
    },
    {
      title: "Status (A–Z)",
      name: "statusAsc",
      by: [{ field: "status", direction: "asc" }],
    },
  ],
  fields: [
    defineField({
      name: "fullName",
      title: "Full name",
      type: "string",
      group: "contact",
      validation: (r) => r.required().min(2).max(120),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      group: "contact",
      description: "Include country code where possible.",
      validation: (r) => r.max(40),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "contact",
      validation: (r) => r.required().email().max(254),
    }),
    defineField({
      name: "leadType",
      title: "Lead type",
      type: "string",
      group: "pipeline",
      options: {
        list: [...leadTypeOptions],
        layout: "dropdown",
      },
      initialValue: "studyAbroad",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      group: "pipeline",
      options: {
        list: [...statusOptions],
        layout: "dropdown",
      },
      initialValue: "new",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "priority",
      title: "Priority",
      type: "string",
      group: "pipeline",
      options: {
        list: [...priorityOptions],
        layout: "radio",
      },
      initialValue: "warm",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "preferredCountry",
      title: "Preferred country",
      type: "string",
      group: "interest",
      initialValue: "unspecified",
      options: {
        list: [...preferredCountryOptions],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "intake",
      title: "Intake",
      type: "string",
      group: "interest",
      description: "Target intake window (e.g. September 2026).",
      validation: (r) => r.max(120),
    }),
    defineField({
      name: "courseInterest",
      title: "Course interest",
      type: "string",
      group: "interest",
      validation: (r) => r.max(200),
    }),
    defineField({
      name: "budgetRange",
      title: "Budget range",
      type: "string",
      group: "interest",
      validation: (r) => r.max(120),
    }),
    defineField({
      name: "leadSource",
      title: "Lead source",
      type: "string",
      group: "internal",
      readOnly: true,
      initialValue: "Studio · manual entry",
      description: "Set automatically from the website form (or default for manual creates).",
      validation: (r) => r.required().max(120),
    }),
    defineField({
      name: "notes",
      title: "Notes",
      type: "text",
      rows: 6,
      group: "internal",
      description: "Free-form message or internal notes.",
    }),
    defineField({
      name: "createdAt",
      title: "Submitted at",
      type: "datetime",
      group: "internal",
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: {
      title: "fullName",
      email: "email",
      leadType: "leadType",
      status: "status",
      priority: "priority",
      country: "preferredCountry",
      createdAt: "createdAt",
    },
    prepare({ title, email, leadType, status, priority, country, createdAt }) {
      const typeLabel = leadTypeOptions.find((o) => o.value === leadType)?.title ?? leadType;
      const statusLabel = statusOptions.find((o) => o.value === status)?.title ?? status;
      const date =
        createdAt != null
          ? new Intl.DateTimeFormat("en-IN", {
              dateStyle: "medium",
              timeStyle: "short",
            }).format(new Date(createdAt))
          : "";
      const subtitle = [statusLabel, typeLabel, country || "—", date].filter(Boolean).join(" · ");
      return {
        title: title || email || "Lead",
        subtitle,
      };
    },
  },
});
