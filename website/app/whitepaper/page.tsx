import OverviewContent from "@/content/docs/AICA_Engineering_Overview.mdx";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { DocumentViewer } from "@/components/DocumentViewer";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata({ title: "AICA Engineering Overview", description: "Version 1.0 of AICA's public engineering overview: purpose, early-stage status, process, roadmap, risk, and IP limitations.", path: "/whitepaper" });
export default function Page() { return <main id="main-content" tabIndex={-1} className="border-b border-slate-200 bg-white py-16 sm:py-20"><Container size="wide"><Breadcrumbs items={[{ label: "Documentation", href: "/documentation" }, { label: "Engineering overview" }]} /><p className="text-xs font-bold uppercase tracking-[0.2em] text-aica-700">Primary public document</p><h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">AICA Engineering Overview</h1><p className="mb-10 mt-5 max-w-3xl text-base leading-8 text-slate-600">Version 1.0 · Published 14 July 2026 · Early-stage engineering status</p><DocumentViewer /><article className="mx-auto mt-16 max-w-4xl border-t border-slate-200 pt-12" aria-label="Accessible engineering overview"><OverviewContent components={{ h1: () => null }} /></article></Container></main>; }

