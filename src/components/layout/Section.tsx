import { cn } from "@/lib/utils";
import { Container } from "./Container";

const variants = {
  default: "bg-background",
  muted: "bg-muted/80",
  navy: "bg-navy text-white",
} as const;

export type SectionVariant = keyof typeof variants;

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  variant?: SectionVariant;
  align?: "left" | "center";
  /** Subtle top gradient hairline for rhythm between bands */
  edge?: boolean;
  children: React.ReactNode;
};

export function Section({
  id,
  className,
  containerClassName,
  eyebrow,
  title,
  description,
  variant = "default",
  align = "left",
  edge = false,
  children,
}: SectionProps) {
  const isCenter = align === "center";

  return (
    <section
      id={id}
      className={cn(
        "relative py-24 md:py-32 lg:py-40",
        edge &&
          "before:pointer-events-none before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-px before:bg-gradient-to-r before:from-transparent before:via-gold/35 before:to-transparent",
        variants[variant],
        className,
      )}
    >
      <Container className={containerClassName}>
        {(eyebrow || title || description) && (
          <header
            className={cn(
              "mb-16 max-w-prose md:mb-24 lg:mb-28",
              isCenter && "mx-auto max-w-measure text-center",
            )}
          >
            {eyebrow && (
              <p
                className={cn(
                  "mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.2em]",
                  variant === "navy" ? "text-gold" : "text-muted-foreground",
                )}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={cn(
                  "max-w-2xl text-balance font-display text-[1.875rem] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[2.25rem] sm:leading-[1.12] lg:text-[2.5rem]",
                  variant === "navy" ? "text-white" : "text-foreground",
                )}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={cn(
                  "mt-6 max-w-2xl text-pretty text-base leading-[1.7] text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65]",
                  variant === "navy" ? "text-white/80 sm:text-lg" : "",
                  isCenter && "mx-auto max-w-2xl",
                )}
              >
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
