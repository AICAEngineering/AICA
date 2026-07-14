import { Hero } from "@/components/Hero";
import { DocumentCard } from "@/components/DocumentCard";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "AICA - AI Controlled Air Mobility",
  description: "AICA is an independent, early-stage engineering initiative documenting a measured path from vertical-mobility concept toward prototype validation.",
  path: "/",
});

const documents = [
  { title: "Program overview", description: "Understand the current scope, maturity, boundaries, and decision standards of the AICA program.", href: "/documentation/program-overview", meta: "Foundation" },
  { title: "Engineering process", description: "Review the staged path from documented assumptions to controlled model evaluation.", href: "/documentation/engineering-process", meta: "Method" },
  { title: "Research standards", description: "Read the standards for traceability, repeatability, claims, risk, and safety.", href: "/documentation/research-standards", meta: "Standard" },
];

export default function Home() {
  return <main id="main-content" tabIndex={-1}><Hero /><Section eyebrow="Public development documentation" title="Engineering work, organized for review." description="The current phase is a documentation baseline. These materials define what the program is, what it does not yet claim, and how future model work would be evaluated." surface="soft"><div className="grid gap-5 md:grid-cols-3">{documents.map((document) => <DocumentCard key={document.href} {...document} />)}</div></Section></main>;
}
