import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Holanda Investments, a service-oriented company focused on HDD services, underground utility infrastructure, equipment support, and field training.",
  openGraph: {
    title: "About Holanda Investments",
    description:
      "A practical HDD partner for contractors, utility companies, and infrastructure businesses.",
    images: ["/images/operator-training.svg"]
  }
};

const values = ["Safety", "Technical responsibility", "Practical knowledge", "Professional ethics", "Client commitment", "Continuous improvement"];
const audiences = [
  "Utility companies",
  "Telecom contractors",
  "Fiber optic contractors",
  "Construction companies",
  "Energy companies",
  "Water and gas infrastructure providers",
  "HDD machine operators",
  "Small and medium infrastructure contractors"
];

export default function AboutPage() {
  return (
    <>
      <SEO
        schema={{
          "@type": "Organization",
          name: siteConfig.name,
          description: siteConfig.description
        }}
      />
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-ember">About Us</p>
            <h1 className="mt-3 text-4xl font-bold text-graphite">Technical reliability for underground infrastructure projects</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Holanda Investments is a service-oriented company focused on Horizontal Directional Drilling, underground utility infrastructure,
              HDD equipment support, and professional field training.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Our mission is to help contractors, utility companies, and infrastructure businesses complete underground projects with efficiency,
              safety, and technical reliability.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image src="/images/operator-training.svg" alt="HDD field training and technical support team" fill className="object-cover" priority />
          </div>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <InfoBlock title="Mission" text="To provide reliable HDD services, technical support, and practical training for underground infrastructure projects." />
          <InfoBlock title="Vision" text="To become a trusted reference in HDD solutions, machine support, and operator training." />
        </div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <ListBlock title="Values" items={values} />
          <ListBlock title="Who We Serve" items={audiences} />
        </div>
      </section>
      <CTASection />
    </>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-graphite">{title}</h2>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </article>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-graphite">{title}</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="rounded-lg border border-slate-200 bg-fog p-4 text-sm font-semibold text-slate-700">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
