import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

/**
 * Studio subtree (embedded NextStudio + gate). Keeps SEO robots off CMS URLs.
 */
export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col">{children}</div>
  );
}
