import type { NavigationItem } from "@/types/navigation";

export const siteConfig = {
  name: "AICA",
  title: "AICA - AI Controlled Air Mobility",
  description: "AICA is an independent, early-stage engineering initiative documenting a measured path from vertical-mobility concept toward prototype validation.",
  url: "https://www.aicaair.com",
  xUrl: "https://x.com/AICAair",
  primaryDocumentUrl: "/docs/AICA_Engineering_Overview.pdf",
  primaryDocumentSourceUrl: "/whitepaper",
};

export const navigationItems: NavigationItem[] = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Documentation", href: "/documentation" },
  { label: "Journal", href: "/journal" },
  { label: "Roadmap", href: "/roadmap" },
];

export const documentationNavigation: NavigationItem[] = [
  { label: "Documentation home", href: "/documentation" },
  { label: "Program overview", href: "/documentation/program-overview" },
  { label: "Engineering process", href: "/documentation/engineering-process" },
  { label: "Research standards", href: "/documentation/research-standards" },
  { label: "Engineering overview", href: "/whitepaper" },
];

export const heroContent = {
  eyebrow: "Independent engineering initiative",
  title: "A measured path from concept toward prototype validation.",
  description: "AICA is an early-stage vertical-mobility initiative using a documentation-first process to define assumptions, engineering questions, model requirements, and future validation criteria.",
  primaryAction: { label: "Explore documentation", href: "/documentation" },
  secondaryAction: { label: "Read engineering overview", href: "/whitepaper" },
  metrics: [
    { label: "Current phase", value: "Documentation baseline" },
    { label: "Development status", value: "Early stage; not technically validated" },
    { label: "Working method", value: "Document, model, measure, and review" },
  ],
};

