import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import SEO from "@/components/SEO";
import ServiceCard from "@/components/ServiceCard";
import { services, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Horizontal Directional Drilling Services",
  description:
    "Professional HDD services for underground utilities, fiber optic installation, HDD machine repair, maintenance, and operator training.",
  openGraph: {
    title: "Horizontal Directional Drilling Services | Holanda Investments",
    description:
      "HDD utility installation, machine support, and field training for contractors and infrastructure teams.",
    images: ["/images/hdd-drilling-hero.svg"]
  }
};

const advantages = [
  "Technical field experience",
  "Practical HDD knowledge",
  "Safety-focused operation",
  "Support for infrastructure projects",
  "Training for operators and locators",
  "Reliable service for contractors and utility companies"
];

export default function HomePage() {
  return (
    <>
      <SEO
        schema={{
          "@type": "Organization",
          name: siteConfig.name,
          description: siteConfig.description,
          email: siteConfig.email,
          telephone: siteConfig.phone
        }}
      />
      <Hero />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wide text-ember">Core Services</p>
            <h2 className="mt-3 text-3xl font-bold text-graphite">HDD services, equipment support, and practical training</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-graphite px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-safety">Why Choose Holanda Investments</p>
            <h2 className="mt-3 text-3xl font-bold">Clear technical support for demanding field conditions</h2>
            <p className="mt-4 text-slate-300">
              We help contractors and utility companies plan, execute, maintain, and train for trenchless underground infrastructure work.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {advantages.map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm font-semibold text-slate-100">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <PortfolioGrid />
      <CTASection />
    </>
  );
}
