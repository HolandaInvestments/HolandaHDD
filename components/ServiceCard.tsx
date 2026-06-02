import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export default function ServiceCard({ title, description, image, href }: ServiceCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/10]">
        <Image src={image} alt={title} fill className="object-cover" loading="lazy" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-graphite">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
        <Link href={href} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-ember hover:text-graphite">
          Learn more <ChevronRight size={16} />
        </Link>
      </div>
    </article>
  );
}
