"use client";

import Image, { type ImageProps } from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { siteImages } from "@/lib/site-images";

const DEFAULT_FALLBACK = siteImages.blog.cardFallback;

/** Inline neutral panel — last resort when public files are missing. */
const DATA_URI_FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Crect fill='%23e8eef4' width='800' height='500'/%3E%3C/svg%3E";

function alternateSrcCandidates(src: string): string[] {
  const base = src.replace(/\.(jpe?g|png|webp)$/i, "");
  const exts = [".jpg", ".jpeg", ".png", ".webp"];
  return [...new Set([src, ...exts.map((ext) => `${base}${ext}`)])];
}

export type SiteImageProps = Omit<ImageProps, "src" | "onError"> & {
  src: string;
  fallbackSrc?: string;
};

export function SiteImage({
  src,
  alt = "",
  fallbackSrc = DEFAULT_FALLBACK,
  unoptimized,
  ...props
}: SiteImageProps) {
  const queue = useMemo(
    () => [...alternateSrcCandidates(src), fallbackSrc, DATA_URI_FALLBACK],
    [src, fallbackSrc],
  );
  const [queueIndex, setQueueIndex] = useState(0);

  useEffect(() => {
    setQueueIndex(0);
  }, [src, fallbackSrc]);

  const effectiveSrc = queue[Math.min(queueIndex, queue.length - 1)] ?? DATA_URI_FALLBACK;
  const isLocal = effectiveSrc.startsWith("/images/");

  const handleError = useCallback(() => {
    setQueueIndex((i) => (i + 1 < queue.length ? i + 1 : i));
  }, [queue.length]);

  return (
    <Image
      {...props}
      src={effectiveSrc}
      alt={alt}
      unoptimized={unoptimized ?? isLocal}
      onError={handleError}
    />
  );
}
