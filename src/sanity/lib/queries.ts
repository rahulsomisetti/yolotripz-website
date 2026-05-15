/** Centralised GROQ strings — import from one place for typegen later. */

/** Published documents only (defense in depth alongside `perspective: "published"`). */
const publishedBlog = `_type == "blogPost" && defined(slug.current) && !(_id in path("drafts.**"))`;

export const qAllBlogSlugs = `*[${publishedBlog} && defined(publishedAt)].slug.current`;

/** Listing + insights hub — newest first, excludes drafts. */
export const qBlogPostsForInsights = `
*[${publishedBlog} && defined(publishedAt)] | order(publishedAt desc) {
  "slug": slug.current,
  title,
  excerpt,
  readTime,
  publishedAt,
  category,
  tags,
  featured,
  mainImage,
  "seo": seo{
    metaTitle,
    metaDescription,
    noIndex,
    ogImage
  }
}
`;

export const qBlogBySlug = `
*[${publishedBlog} && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  readTime,
  category,
  tags,
  featured,
  authorName,
  body,
  mainImage,
  seo,
  "heroImageUrl": select(
    defined(mainImage.asset) => mainImage.asset->url + "?w=1600&fit=max&auto=format",
    defined(seo) && defined(seo.ogImage) && defined(seo.ogImage.asset) => seo.ogImage.asset->url + "?w=1600&fit=max&auto=format",
    null
  )
}
`;

export const qAllUniversitySlugs = `*[_type == "university" && defined(slug.current)].slug.current`;

export const qUniversityBySlug = `
*[_type == "university" && slug.current == $slug][0]{
  _id,
  name,
  "slug": slug.current,
  website,
  rankingNote,
  shortDescription,
  body,
  logo,
  coverImage,
  seo,
  "country": country->{ name, "slug": slug.current, region }
}
`;

export const qAllCourseSlugs = `*[_type == "course" && defined(slug.current)].slug.current`;

export const qCourseBySlug = `
*[_type == "course" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  level,
  duration,
  intakes,
  feesSummary,
  body,
  seo,
  "university": university->{ name, "slug": slug.current, logo },
  "country": country->{ name, "slug": slug.current }
}
`;

export const qAllCountrySlugs = `*[_type == "country" && defined(slug.current)].slug.current`;

export const qCountryBySlug = `
*[_type == "country" && slug.current == $slug][0]{
  _id,
  name,
  "slug": slug.current,
  region,
  summary,
  body,
  heroImage,
  seo
}
`;

export const qAllTravelPackageSlugs = `*[_type == "travelPackage" && defined(slug.current)].slug.current`;

export const qTravelPackageBySlug = `
*[_type == "travelPackage" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  subtitle,
  duration,
  priceBand,
  heroImage,
  highlights,
  body,
  tags,
  seo
}
`;

export const qHomepageTestimonials = `
*[_type == "testimonial" && showOnHomepage == true] | order(sortOrder asc, _updatedAt desc)[0...12]{
  "quote": quote,
  "name": authorName,
  "meta": role,
  photo
}
`;

export const qIntakeAlerts = `
*[_type == "intakeAlert"] | order(deadline asc, _updatedAt desc)[0...20]{
  _id,
  title,
  "slug": slug.current,
  intakeLabel,
  urgency,
  deadline,
  summary,
  ctaLabel,
  ctaUrl
}
`;

export const qFaqsByCategory = `
*[_type == "faq" && ($category == "" || category == $category)] | order(sortOrder asc) {
  _id,
  question,
  answer,
  category,
  sortOrder,
  relatedPath
}
`;

/** Full-text style search across primary documents (published only, no draft ids). */
export const qCmsSearch = `
*[(_type in ["blogPost","university","course","country","travelPackage","intakeAlert","faq"])
  && defined(slug.current)
  && !(_id in path("drafts.**"))
  && (
    title match $q ||
    name match $q ||
    question match $q ||
    excerpt match $q ||
    summary match $q
  )
] | order(_updatedAt desc) [0...24] {
  _type,
  _id,
  title,
  name,
  question,
  excerpt,
  summary,
  "slug": slug.current
}
`;
