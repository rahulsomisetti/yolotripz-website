import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio access",
  robots: { index: false, follow: false },
};

export default function StudioGateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
