import Content from "@/content/docs/research-standards.mdx";
import { ContentPage } from "@/components/ContentPage";
import { DocumentationSidebar } from "@/components/DocumentationSidebar";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata({ title: "Research Standards", description: "AICA standards for traceability, repeatability, claim discipline, safety visibility, and inconclusive results.", path: "/documentation/research-standards" });
export default function Page() { return <ContentPage eyebrow="Standard" breadcrumbs={[{ label: "Documentation", href: "/documentation" }, { label: "Research standards" }]} sidebar={<DocumentationSidebar />}><Content /></ContentPage>; }
