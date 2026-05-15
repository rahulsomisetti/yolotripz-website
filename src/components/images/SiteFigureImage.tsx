"use client";

import { SiteImage } from "@/components/images/SiteImage";
import { cn } from "@/lib/utils";

type SiteFigureImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  aspectClassName?: string;
  objectClassName?: string;
  sizes?: string;
  imageClassName?: string;
  figureClassName?: string;
};

/**
 * Editorial image block — full-opacity photo in a rounded frame (not a background layer).
 */
export function SiteFigureImage({
  src,
  alt,
  priority,
  aspectClassName = "aspect-[16/10]",
  objectClassName = "object-cover object-center",
  sizes = "(max-width: 1024px) 100vw, 42rem",
  imageClassName,
  figureClassName,
}: SiteFigureImageProps) {
  return (
    <figure
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-navy/[0.08] bg-muted shadow-soft",
        aspectClassName,
        figureClassName,
      )}
    >
      <SiteImage
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(objectClassName, imageClassName)}
      />
    </figure>
  );
}
