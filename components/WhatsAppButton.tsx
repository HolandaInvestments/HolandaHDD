import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function WhatsAppButton() {
  const href = `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="focus-ring fixed bottom-5 left-5 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-soft transition hover:bg-green-700"
      aria-label="Contact Holanda Investments via WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
