import Content from "@/content/pages/journal.mdx";
import { ContentPage } from "@/components/ContentPage";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata({ title: "Journal", description: "Public, dated changes to AICA engineering documentation and program boundaries.", path: "/journal" });
export default function Page() { return <ContentPage eyebrow="Public development record" breadcrumbs={[{ label: "Journal" }]}><Content /></ContentPage>; }
