import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SanityPortableText } from "@/components/sanity/SanityPortableText";
import { fetchFaqs } from "@/sanity/fetchers";
import { SITE } from "@/lib/constants";

export const revalidate = 120;

export const metadata: Metadata = {
  title: "FAQs",
  description: `Frequently asked questions from ${SITE.name} — editable in Sanity.`,
};

export default async function FaqPage() {
  const faqs = await fetchFaqs();

  return (
    <div className="bg-surface py-16 md:py-24">
      <Container>
        <h1 className="font-display text-3xl font-semibold text-navy sm:text-4xl">FAQs</h1>
        <p className="mt-4 max-w-prose text-muted-foreground">
          Answers maintained in Sanity. If this list is empty, add documents of type “FAQ” in the Studio.
        </p>
        <ul className="mt-12 space-y-10">
          {faqs.length === 0 ? (
            <li className="text-sm text-muted-foreground">No FAQs published yet.</li>
          ) : (
            faqs.map((f: { _id: string; question: string; answer: unknown; category?: string }) => (
              <li key={f._id} className="border-b border-border pb-10 last:border-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{f.category}</p>
                <h2 className="mt-2 font-display text-xl font-semibold text-navy">{f.question}</h2>
                <div className="mt-4">
                  <SanityPortableText value={f.answer} />
                </div>
              </li>
            ))
          )}
        </ul>
      </Container>
    </div>
  );
}
