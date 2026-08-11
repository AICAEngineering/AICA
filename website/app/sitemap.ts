import type { MetadataRoute } from "next";
import { journalRecords } from "@/data/journal";
import { siteConfig } from "@/data/site";

const routes = [
  "",
  "/about",
  "/research",
  "/documentation",
  "/documentation/program-overview",
  "/documentation/engineering-process",
  "/documentation/research-standards",
  "/journal",
  ...journalRecords.map(({ slug }) => `/journal/${slug}`),
  "/roadmap",
  "/whitepaper",
  "/investors",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route || "/", siteConfig.url).toString(),
    lastModified: new Date("2026-07-14"),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route === "/documentation" || route === "/whitepaper" ? 0.9 : 0.8,
  }));
}
