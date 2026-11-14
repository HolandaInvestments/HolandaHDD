import Link from "next/link";
import { displayPhone, navLinks, emailHref, phoneHref, whatsappHref, siteConfig } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-graphite text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_0.7fr_1fr] lg:px-8">
        <div>
          <h2 className="text-xl font-bold">{siteConfig.name}</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">{siteConfig.tagline}</p>
          <p className="mt-6 text-xs text-slate-400">
            Service availability may vary according to project location, equipment needs, and scheduling.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-200">Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-200">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p><strong>Email:</strong>{" "}<a href={emailHref} className="underline">{siteConfig.email}</a></p>
            <p><strong>Phone:</strong>{" "}<a href={phoneHref} className="underline">{displayPhone}</a></p>
            <p><strong>WhatsApp:</strong>{" "}<a href={whatsappHref} className="underline" target="_blank" rel="noreferrer">Chat on WhatsApp</a></p>
            <p>Service Area: {siteConfig.serviceArea}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Holanda Investments. All rights reserved.
      </div>
    </footer>
  );
}
