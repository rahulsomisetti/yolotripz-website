import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/lib/brand/assets";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  variant?: "primary" | "mark";
  /** When true, renders a larger mark (e.g. mobile drawer header). */
  markSize?: "default" | "lg";
  className?: string;
  /** Forwarded to the wrapping link (header/footer). */
  linkClassName?: string;
  priority?: boolean;
};

/**
 * Responsive brand lockup. Replace assets under `/public/branding/` — see `docs/BRANDING.md`.
 */
export function SiteLogo({
  variant = "primary",
  markSize = "default",
  className,
  linkClassName,
  priority = false,
}: SiteLogoProps) {
  if (variant === "mark") {
    const box = markSize === "lg" ? "h-11 w-11 md:h-12 md:w-12" : "h-9 w-9 md:h-10 md:w-10";
    return (
      <div className={cn("relative shrink-0", box, className)}>
        <Image
          src={brandAssets.logoMark}
          alt=""
          fill
          priority={priority}
          className="object-contain object-center"
          sizes={markSize === "lg" ? "48px" : "40px"}
        />
      </div>
    );
  }

  return (
    <Link
      href="/"
      className={cn(
        "relative block h-10 w-[11.5rem] shrink-0 outline-none transition-opacity hover:opacity-[0.9] focus-visible:opacity-100 sm:w-[13.5rem] md:h-11 md:w-[15rem]",
        linkClassName,
      )}
      aria-label={`${SITE.name} — home`}
    >
      <Image
        src={brandAssets.logoPrimary}
        alt=""
        fill
        priority={priority}
        className="object-contain object-left"
        sizes="(max-width: 640px) 180px, 240px"
      />
    </Link>
  );
}
