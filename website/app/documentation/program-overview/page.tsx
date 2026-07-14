import Content from "@/content/docs/program-overview.mdx";
import { ContentPage } from "@/components/ContentPage";
import { DocumentationSidebar } from "@/components/DocumentationSidebar";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata({ title: "Program Overview", description: "Current scope, maturity, limitations, and decision standards for the early-stage AICA engineering program.", path: "/documentation/program-overview" });
export default function Page() { return <ContentPage eyebrow="Foundation" breadcrumbs={[{ label: "Documentation", href: "/documentation" }, { label: "Program overview" }]} sidebar={<DocumentationSidebar />}><Content /></ContentPage>; }
