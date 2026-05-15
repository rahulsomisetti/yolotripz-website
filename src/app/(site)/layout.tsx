import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-dvh flex-1 flex-col">
      <SiteHeader />
      {/* Bottom padding on small screens so content clears the WhatsApp FAB + home indicator. */}
      <main className="flex-1 pb-24 md:pb-6">{children}</main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
