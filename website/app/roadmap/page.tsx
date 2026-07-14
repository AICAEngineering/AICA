import Content from "@/content/pages/roadmap.mdx";
import { ContentPage } from "@/components/ContentPage";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata({ title: "Roadmap", description: "A conditional engineering roadmap from documentation baseline through model evaluation and possible prototype validation.", path: "/roadmap" });
export default function Page() { return <ContentPage eyebrow="Conditional program phases" breadcrumbs={[{ label: "Roadmap" }]}><Content /></ContentPage>; }
