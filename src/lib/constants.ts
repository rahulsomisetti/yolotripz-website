export const SITE = {
  name: "Yolotripz",
  tagline: "Overseas education guidance since 2017",
  city: "Moodbidri",
  state: "Karnataka",
  country: "India",
  foundedYear: 2017,
  /** Replace with your real WhatsApp business number (digits only, country code included). */
  whatsappE164: "919972010833",
  /** Public email for enquiries */
  email: "hello@yolotripz.com",
} as const;

/** Office & map — replace `mapEmbedUrl` with your Google Maps “Share → Embed” iframe src. */
export const OFFICE = {
  /** Lines shown on Contact + footer-style contexts */
  addressLines: [
    "Moodbidri, Dakshina Kannada district",
    "Karnataka, India",
  ] as const,
  /** Google Maps embed (no API key) — pin is approximate; swap for your exact embed snippet */
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Moodbidri%2C+Karnataka%2C+India&z=14&hl=en&output=embed",
  hoursLabel: "Hours (by appointment)",
  hoursDetail: "Monday–Saturday · 10:00 am – 6:00 pm IST",
  note: "Counselling is by scheduled appointment — walk-ins may not always be available.",
} as const;

export function getWhatsAppLink(message?: string) {
  const text = message ?? `Hi ${SITE.name}, I would like to book a counselling session.`;
  return `https://wa.me/${SITE.whatsappE164}?text=${encodeURIComponent(text)}`;
}

/** Insert `NavCountriesMenu` in the header immediately after this href. */
export const NAV_COUNTRIES_AFTER_HREF = "/study-abroad" as const;

export const NAV_ITEMS = [
  { href: "/study-abroad", label: "Study Abroad" },
  { href: "/visa-services", label: "Visas" },
  { href: "/travel-services", label: "Travel" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/intakes", label: "Intakes" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;
