export default function InsightArticleLoading() {
  return (
    <div className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-content animate-pulse px-5 sm:px-6 lg:px-8">
        <div className="mb-10 aspect-[2/1] max-h-[min(28rem,55vh)] w-full rounded-2xl bg-muted" />
        <div className="flex flex-wrap gap-2">
          <div className="h-6 w-28 rounded-full bg-muted" />
          <div className="h-6 w-32 rounded bg-muted" />
        </div>
        <div className="mt-6 h-10 max-w-2xl rounded-lg bg-muted" />
        <div className="mt-6 h-24 max-w-prose rounded-lg bg-muted/80" />
        <div className="mt-12 space-y-3">
          <div className="h-4 w-full rounded bg-muted/70" />
          <div className="h-4 w-full rounded bg-muted/70" />
          <div className="h-4 w-full max-w-lg rounded bg-muted/60" />
        </div>
      </div>
    </div>
  );
}
