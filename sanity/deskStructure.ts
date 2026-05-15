import type { StructureResolver } from "sanity/structure";

const allContentTypes =
  '["blogPost","course","university","country","testimonial","travelPackage","intakeAlert","faq","lead"]';

const leadTypeFilter = (value: string) => `_type == "lead" && leadType == "${value}"`;
const statusFilter = (value: string) => `_type == "lead" && status == "${value}"`;
const countryFilter = (value: string) => `_type == "lead" && preferredCountry == "${value}"`;

/**
 * Lowercase kebab-case IDs for desk nodes: strips `&`, spaces, `/`, punctuation, etc.
 * Stable: same input always yields the same id (for GROQ filter values / enum strings).
 */
function slugifyStructureId(raw: string): string {
  const s = raw
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return s.length > 0 ? s : "item";
}

/** Clean, grouped desk for non-technical admins + lead CRM views. */
export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("Yolotripz content")
    .id("yolotripz-content-root")
    .items([
      S.listItem()
        .title("Lead management")
        .id("lead-management")
        .child(
          S.list()
            .title("Leads")
            .id("leads-home")
            .items([
              S.listItem()
                .title("All leads · newest first")
                .id("leads-all")
                .child(
                  S.documentList()
                    .title("All leads")
                    .schemaType("lead")
                    .filter('_type == "lead"')
                    .defaultOrdering([{ field: "createdAt", direction: "desc" }])
                    .apiVersion("2024-01-01"),
                ),
              S.divider(),
              S.listItem()
                .title("By lead type")
                .id("leads-by-type")
                .child(
                  S.list()
                    .title("Filter by lead type")
                    .id("leads-by-type-list")
                    .items([
                      S.listItem()
                        .title("Study Abroad")
                        .id("leads-type-study-abroad")
                        .child(
                          S.documentList()
                            .title("Study Abroad leads")
                            .schemaType("lead")
                            .filter(leadTypeFilter("studyAbroad"))
                            .defaultOrdering([{ field: "createdAt", direction: "desc" }])
                            .apiVersion("2024-01-01"),
                        ),
                      S.listItem()
                        .title("Visa")
                        .id("leads-type-visa")
                        .child(
                          S.documentList()
                            .title("Visa leads")
                            .schemaType("lead")
                            .filter(leadTypeFilter("visa"))
                            .defaultOrdering([{ field: "createdAt", direction: "desc" }])
                            .apiVersion("2024-01-01"),
                        ),
                      S.listItem()
                        .title("Travel")
                        .id("leads-type-travel")
                        .child(
                          S.documentList()
                            .title("Travel leads")
                            .schemaType("lead")
                            .filter(leadTypeFilter("travel"))
                            .defaultOrdering([{ field: "createdAt", direction: "desc" }])
                            .apiVersion("2024-01-01"),
                        ),
                      S.listItem()
                        .title("Flights")
                        .id("leads-type-flights")
                        .child(
                          S.documentList()
                            .title("Flights leads")
                            .schemaType("lead")
                            .filter(leadTypeFilter("flights"))
                            .defaultOrdering([{ field: "createdAt", direction: "desc" }])
                            .apiVersion("2024-01-01"),
                        ),
                    ]),
                ),
              S.listItem()
                .title("By status")
                .id("leads-by-status")
                .child(
                  S.list()
                    .title("Filter by status")
                    .id("leads-by-status-list")
                    .items(
                      [
                        ["new", "New"],
                        ["contacted", "Contacted"],
                        ["counsellingDone", "Counselling done"],
                        ["applicationStarted", "Application started"],
                        ["closed", "Closed"],
                        ["lost", "Lost"],
                      ].map(([value, title]) =>
                        S.listItem()
                          .title(title)
                          .id(`leads-status-${slugifyStructureId(value)}`)
                          .child(
                            S.documentList()
                              .title(`${title} leads`)
                              .schemaType("lead")
                              .filter(statusFilter(value))
                              .defaultOrdering([{ field: "createdAt", direction: "desc" }])
                              .apiVersion("2024-01-01"),
                          ),
                      ),
                    ),
                ),
              S.listItem()
                .title("By country")
                .id("leads-by-country")
                .child(
                  S.list()
                    .title("Filter by preferred country")
                    .id("leads-by-country-list")
                    .items(
                      [
                        ["United Kingdom", "United Kingdom"],
                        ["Australia", "Australia"],
                        ["Canada", "Canada"],
                        ["Germany", "Germany"],
                        ["New Zealand", "New Zealand"],
                        ["Emerging Europe & Asia", "Emerging Europe & Asia"],
                        ["Multiple / comparing", "Multiple / comparing"],
                        ["Other", "Other"],
                        ["unspecified", "Not specified"],
                      ].map(([value, title]) =>
                        S.listItem()
                          .title(title)
                          .id(`leads-country-${slugifyStructureId(value)}`)
                          .child(
                            S.documentList()
                              .title(`${title} leads`)
                              .schemaType("lead")
                              .filter(countryFilter(value))
                              .defaultOrdering([{ field: "createdAt", direction: "desc" }])
                              .apiVersion("2024-01-01"),
                          ),
                      ),
                    ),
                ),
              S.divider(),
              S.documentTypeListItem("lead").title("Create lead (manual)"),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("Editorial")
        .id("editorial")
        .child(
          S.list()
            .title("Editorial")
            .id("editorial-list")
            .items([
              S.documentTypeListItem("blogPost").title("Blog posts"),
              S.documentTypeListItem("intakeAlert").title("Intake alerts"),
              S.documentTypeListItem("faq").title("FAQs"),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("Programs & places")
        .id("programs-places")
        .child(
          S.list()
            .title("Programs & places")
            .id("programs-places-list")
            .items([
              S.documentTypeListItem("country").title("Countries (CMS)"),
              S.documentTypeListItem("university").title("Universities"),
              S.documentTypeListItem("course").title("Courses"),
            ]),
        ),
      S.listItem()
        .title("Marketing")
        .id("marketing")
        .child(
          S.list()
            .title("Marketing")
            .id("marketing-list")
            .items([
              S.documentTypeListItem("testimonial").title("Testimonials"),
              S.documentTypeListItem("travelPackage").title("Travel packages"),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("All documents (search)")
        .id("all-documents-search")
        .child(
          S.documentList()
            .title("All")
            .filter(`_type in ${allContentTypes}`)
            .defaultOrdering([{ field: "_updatedAt", direction: "desc" }]),
        ),
    ]);
