import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export function createPageMetadata({ title, description, path, absoluteTitle = false }: { title: string; description: string; path: string; absoluteTitle?: boolean }): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const resolvedTitle = path === "/" || absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  return {
    title: path === "/" || absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: resolvedTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: { card: "summary", title: resolvedTitle, description },
  };
}
