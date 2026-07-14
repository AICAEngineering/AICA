import Content from "@/content/pages/documentation.mdx";
import { ContentPage } from "@/components/ContentPage";
import { DocumentationSidebar } from "@/components/DocumentationSidebar";
import { DocumentCard } from "@/components/DocumentCard";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata({ title: "Documentation", description: "Public AICA engineering documentation covering program scope, process, standards, roadmap, and risk boundaries.", path: "/documentation" });
const documents = [
  { title: "Program overview", description: "Scope, current maturity, explicit limitations, and development decision standards.", href: "/documentation/program-overview", meta: "Foundation" },
  { title: "Engineering process", description: "The staged method used to define, model, measure, review, and revise.", href: "/documentation/engineering-process", meta: "Method" },
  { title: "Research standards", description: "Requirements for traceability, repeatability, claims, risk, and safety.", href: "/documentation/research-standards", meta: "Standard" },
  { title: "AICA Engineering Overview", description: "The current primary public document for the independent engineering program.", href: "/whitepaper", meta: "Version 1.0" },
];
export default function Page() { return <ContentPage eyebrow="Knowledge base" breadcrumbs={[{ label: "Documentation" }]} sidebar={<DocumentationSidebar />}><Content /><div className="mt-10 grid gap-5 sm:grid-cols-2">{documents.map((document) => <DocumentCard key={document.href} {...document} />)}</div></ContentPage>; }
