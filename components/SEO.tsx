import { siteConfig } from "@/lib/constants";

type SEOProps = {
  schema: Record<string, unknown>;
};

export default function SEO({ schema }: SEOProps) {
  const graph = {
    "@context": "https://schema.org",
    ...schema,
    name: schema.name || siteConfig.name,
    url: schema.url || siteConfig.siteUrl
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
