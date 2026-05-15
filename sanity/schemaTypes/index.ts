import { seoFields } from "./objects/seoFields";
import blogPost from "./documents/blogPost";
import country from "./documents/country";
import course from "./documents/course";
import faq from "./documents/faq";
import lead from "./documents/lead";
import intakeAlert from "./documents/intakeAlert";
import testimonial from "./documents/testimonial";
import travelPackage from "./documents/travelPackage";
import university from "./documents/university";

export const schemaTypes = [
  seoFields,
  lead,
  country,
  university,
  course,
  blogPost,
  testimonial,
  travelPackage,
  intakeAlert,
  faq,
];
