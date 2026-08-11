import { ResearchHub } from "@/components/ResearchHub";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Research",
  description: "Explore AICA research areas, current engineering questions, methodology, validation framework, and programme documentation.",
  path: "/research",
});

export default function Page() {
  return <ResearchHub />;
}
