import Content from "@/content/docs/engineering-process.mdx";
import { ContentPage } from "@/components/ContentPage";
import { DocumentationSidebar } from "@/components/DocumentationSidebar";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata({ title: "Engineering Process", description: "A staged documentation-first process for future model definition, controlled evaluation, and evidence-based review.", path: "/documentation/engineering-process" });
export default function Page() { return <ContentPage eyebrow="Method" breadcrumbs={[{ label: "Documentation", href: "/documentation" }, { label: "Engineering process" }]} sidebar={<DocumentationSidebar />}><Content /></ContentPage>; }
