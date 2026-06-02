import Image from "next/image";
import { portfolioItems } from "@/lib/constants";

export default function PortfolioGrid() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-ember">Project Types</p>
          <h2 className="mt-3 text-3xl font-bold text-graphite">Built for real underground infrastructure work</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-lg border border-slate-200 bg-fog">
              <div className="relative aspect-[16/10]">
                <Image src={item.image} alt={item.title} fill className="object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-graphite">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
