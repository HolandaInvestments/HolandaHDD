import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ChatbotWidget from "@/components/ChatbotWidget";
import SEO from "@/components/SEO";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Holanda Investments to request HDD service, machine maintenance, operator training, locator training, or general project support.",
  openGraph: {
    title: "Contact Holanda Investments",
    description:
      "Request HDD utility installation, machine repair, maintenance support, or in-person training.",
    images: ["/images/hdd-drilling-hero.svg"]
  }
};

export default function ContactPage() {
  return (
    <>
      <SEO
        schema={{
          "@type": "ContactPage",
          name: "Contact Holanda Investments",
          description: "Contact page for HDD services, machine support, and training requests.",
          url: `${siteConfig.siteUrl}/contact`
        }}
      />
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-ember">Contact</p>
            <h1 className="mt-3 text-4xl font-bold text-graphite">Contact Holanda Investments</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Tell us what you need and our team will review your request. You can request HDD service,
              machine maintenance, training information, or simply send us a message.
            </p>
            <div className="mt-8 rounded-lg bg-fog p-5 text-sm leading-6 text-slate-700">
              <p><strong>Email:</strong> {siteConfig.email}</p>
              <p><strong>Phone/WhatsApp:</strong> {siteConfig.phone}</p>
              <p><strong>Service Area:</strong> {siteConfig.serviceArea}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <ChatbotWidget />
    </>
  );
}
