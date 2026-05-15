import { PortableText, type PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 font-display text-2xl font-semibold text-navy first:mt-0">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-display text-xl font-semibold text-navy first:mt-0">{children}</h3>
    ),
    normal: ({ children }) => <p className="mt-4 text-base leading-relaxed text-muted-foreground">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">{children}</ul>,
    number: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-muted-foreground">{children}</ol>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const href = typeof value?.href === "string" ? value.href : "#";
      const target = href.startsWith("http") ? "_blank" : undefined;
      return (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-semibold text-navy">{children}</strong>,
  },
};

export function SanityPortableText({ value }: { value: unknown }) {
  if (!Array.isArray(value) || value.length === 0) return null;
  return (
    <div className="max-w-prose">
      <PortableText value={value as never} components={components} />
    </div>
  );
}
