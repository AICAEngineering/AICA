import Content from "@/content/pages/research.mdx";
import { ContentPage } from "@/components/ContentPage";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata({ title: "Research", description: "The open engineering questions AICA intends to define before any physical model or prototype validation work.", path: "/research" });
export default function Page() { return <ContentPage eyebrow="Technical questions" breadcrumbs={[{ label: "Research" }]}><Content /></ContentPage>; }
