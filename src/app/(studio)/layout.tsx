/**
 * Admin shell for embedded Sanity Studio — no public site header/footer.
 * Full-viewport isolation so Studio’s own sticky chrome is not covered.
 */
export default function StudioAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="studio-admin-root flex min-h-dvh flex-1 min-w-0 flex-col bg-muted text-foreground transition-[background-color] duration-300 ease-out supports-[height:100dvh]:min-h-dvh"
      data-studio-admin-root
    >
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">{children}</div>
    </div>
  );
}
