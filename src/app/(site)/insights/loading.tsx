import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export default function InsightsLoading() {
  return (
    <div className="bg-surface">
      <section className="border-b border-border bg-gradient-to-b from-muted/50 via-surface to-surface pb-16 pt-20 md:pb-20 md:pt-24">
        <Container>
          <div className="mx-auto max-w-3xl animate-pulse space-y-4 text-center">
            <div className="mx-auto h-3 w-24 rounded-full bg-muted" />
            <div className="mx-auto h-10 w-full max-w-xl rounded-lg bg-muted" />
            <div className="mx-auto h-4 w-full max-w-2xl rounded bg-muted/80" />
            <div className="mx-auto h-4 w-full max-w-xl rounded bg-muted/60" />
          </div>
        </Container>
      </section>
      <Section variant="muted" className="!py-16 md:!py-20">
        <div className="mx-auto max-w-4xl animate-pulse space-y-6">
          <div className="h-4 w-20 rounded bg-muted" />
          <div className="h-48 w-full rounded-2xl bg-muted md:h-56" />
        </div>
      </Section>
      <Section variant="default" className="!py-16 md:!py-20">
        <div className="mx-auto max-w-xl animate-pulse space-y-4">
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-9 w-20 rounded-full bg-muted" />
            ))}
          </div>
          <div className="h-12 w-full rounded-2xl bg-muted" />
        </div>
      </Section>
      <Section variant="default" className="!py-16 md:!py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse space-y-4 rounded-2xl border border-border bg-card p-6">
              <div className="h-3 w-24 rounded bg-muted" />
              <div className="h-6 w-full rounded bg-muted" />
              <div className="h-16 w-full rounded bg-muted/70" />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
