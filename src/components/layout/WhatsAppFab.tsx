import Link from "next/link";
import { getWhatsAppLink, SITE } from "@/lib/constants";

export function WhatsAppFab() {
  return (
    <Link
      href={getWhatsAppLink()}
      className="fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-navy/15 ring-2 ring-white/25 transition-transform duration-300 ease-premium hover:scale-[1.04] hover:shadow-xl max-md:bottom-[max(1.25rem,env(safe-area-inset-bottom))] max-md:right-[max(1.25rem,env(safe-area-inset-right))] md:bottom-[max(2rem,env(safe-area-inset-bottom))] md:right-[max(2rem,env(safe-area-inset-right))] md:h-[3.75rem] md:w-[3.75rem]"
      aria-label={`WhatsApp ${SITE.name}`}
      title="WhatsApp us"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
        <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.88c0 2.1.55 4.14 1.6 5.94L0 24l6.33-1.66a11.8 11.8 0 0 0 5.7 1.46h.01c6.55 0 11.89-5.33 11.89-11.88 0-3.17-1.24-6.15-3.41-8.44ZM12.06 21.6h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.67.96.98-3.57-.22-.35a9.43 9.43 0 0 1-1.44-5.05c0-5.2 4.24-9.43 9.46-9.43 2.53 0 4.9.98 6.68 2.77a9.36 9.36 0 0 1 2.76 6.66c0 5.2-4.24 9.44-9.46 9.44Zm5.48-7.49c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </Link>
  );
}
