"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[var(--header-height)] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-bold text-graphite">{siteConfig.name}</span>
          <span className="text-xs font-medium uppercase tracking-wide text-slate-500">HDD Solutions</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-slate-700 hover:text-graphite">
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="focus-ring rounded-md bg-safety px-4 py-2 text-sm font-bold text-graphite transition hover:bg-amber-400"
          >
            Request a Quote
          </Link>
        </nav>

        <button
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-graphite md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 md:hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-fog"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
