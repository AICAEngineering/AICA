import Content from "@/content/pages/about.mdx";
import { ContentPage } from "@/components/ContentPage";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata({ title: "About", description: "Purpose, current status, engineering philosophy, and public boundaries of the independent AICA initiative.", path: "/about" });
export default function Page() { return <ContentPage eyebrow="Independent engineering initiative" breadcrumbs={[{ label: "About" }]}><Content /></ContentPage>; }
