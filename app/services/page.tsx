import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Send } from "lucide-react";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Detailed HDD utility installation, HDD machine repair and maintenance, and operator and locator training services from Holanda Investments.",
  openGraph: {
    title: "HDD Services | Holanda Investments",
    description:
      "Horizontal Directional Drilling services, machine support, maintenance, and practical operator training.",
    images: ["/images/bore-path.jpg"]
  }
};

const serviceDetails = [
  {
    id: "utility-installation",
    title: "Horizontal Directional Drilling for Utilities",
    image: "/images/bore-path.jpg",
    description:
      "Holanda Investments provides HDD services for underground passage of utilities using trenchless methods, helping reduce surface disruption and improve project efficiency.",
    applications: [
      "Fiber optic cable installation",
      "Electrical conduits",
      "Water lines",
      "Gas lines",
      "Telecom infrastructure",
      "Road crossings",
      "Sidewalk and driveway crossings",
      "Underground utility preparation"
    ],
    cta: "Request HDD Service"
  },
  {
    id: "machine-support",
    title: "HDD Machine Repair and Maintenance",
    image: "/images/machine-maintenance.jpg",
    description:
      "Technical support for HDD machines and related equipment, including preventive maintenance, troubleshooting, and repair guidance.",
    applications: [
      "Machine diagnostics",
      "Preventive maintenance",
      "Corrective maintenance",
      "Field support",
      "Equipment performance review",
      "Operational troubleshooting"
    ],
    cta: "Request Machine Support"
  },
  {
    id: "training",
    title: "Operator and Locator Training",
    image: "/images/hdd-locator.jpg",
    description:
      "In-person practical training for HDD machine operators and underground path locators.",
    applications: [
      "HDD machine operator training",
      "Locator training",
      "Field safety basics",
      "Equipment operation",
      "Reading jobsite conditions",
      "Basic troubleshooting",
      "Best practices for productivity and safety"
    ],
    cta: "Ask About Training"
  }
];

export default function ServicesPage() {
  return (
    <>
      <SEO
        schema={{
          "@type": "Service",
          serviceType: "Horizontal Directional Drilling services",
          provider: { "@type": "Organization", name: "Holanda Investments" }
        }}
      />
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-wide text-ember">Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold text-graphite">
            HDD utility installation, machine support, and field training
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Holanda Investments supports underground infrastructure projects with trenchless drilling services,
            technical HDD equipment support, and practical training for safer field execution.
          </p>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto space-y-8 max-w-7xl">
          {serviceDetails.map((service, index) => (
            <article key={service.id} id={service.id} className="grid gap-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[0.85fr_1.15fr] lg:p-6">
              <div className={`relative aspect-[16/10] overflow-hidden rounded-lg ${index % 2 ? "lg:order-2" : ""}`}>
                <Image src={service.image} alt={service.title} fill className="object-cover" loading="lazy" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-graphite">{service.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {service.applications.map((application) => (
                    <li key={application} className="rounded-md bg-fog px-3 py-2 text-sm font-semibold text-slate-700">
                      {application}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md bg-safety px-5 py-3 font-bold text-graphite hover:bg-amber-400">
                  <Send size={18} /> {service.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
