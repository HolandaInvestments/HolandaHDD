import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Send, Wrench } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function Hero() {
  const whatsappHref = `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <section className="relative isolate min-h-[calc(100svh-var(--header-height))] overflow-hidden bg-graphite text-white">
      <Image
        src="/images/hdd-drilling-hero.jpg"
        alt="Horizontal directional drilling equipment at an underground utility jobsite"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-graphite/75" />
      <div className="relative mx-auto flex min-h-[calc(100svh-var(--header-height))] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-safety">Trenchless Underground Infrastructure</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Horizontal Directional Drilling Solutions for Underground Infrastructure
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Holanda Investments provides professional HDD services for underground utilities, fiber optic networks,
            water, gas, energy infrastructure, machine maintenance, and hands-on operator training.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-safety px-5 py-3 font-bold text-graphite hover:bg-amber-400" href="/contact">
              <Send size={18} /> Request a Quote
            </Link>
            <Link className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3 font-bold text-white hover:bg-white/10" href="/services">
              <Wrench size={18} /> View Services
            </Link>
            <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3 font-bold text-white hover:bg-white/10" href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Contact via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
