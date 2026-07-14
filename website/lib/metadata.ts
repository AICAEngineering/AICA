import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export function createPageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const resolvedTitle = path === "/" ? siteConfig.title : `${title} | ${siteConfig.name}`;
  return {
    title: path === "/" ? { absolute: siteConfig.title } : title,
    description,
    alternates: { canonical: path },
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
