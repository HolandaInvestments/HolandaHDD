import Link from "next/link";
import { MessageCircle, Send } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function CTASection() {
  const whatsappHref = `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <section className="bg-steel px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-safety">Start the Conversation</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold">Need HDD services, machine support, or operator training?</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-safety px-5 py-3 font-bold text-graphite hover:bg-amber-400">
            <Send size={18} /> Request Service
          </Link>
          <Link href="/contact" className="focus-ring inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 font-bold text-white hover:bg-white/10">
            Send a Message
          </Link>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3 font-bold text-white hover:bg-white/10">
            <MessageCircle size={18} /> Talk on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
