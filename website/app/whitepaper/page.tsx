import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { DocumentViewer } from "@/components/DocumentViewer";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "AICA Engineering Overview",
  description: "The primary public technical overview of the AICA engineering programme, its evidence status, scope, limitations, and development approach.",
  path: "/whitepaper",
});

const statusItems = [
  ["Document type", "Engineering overview"],
  ["Current maturity", "Conceptual and programme-level"],
  ["Validation status", "Not a vehicle performance validation report"],
  ["Revision model", "Living document · Updated as evidence matures"],
] as const;
const topics = [
  ["Programme purpose", "Mission, long-term objective, and the role of engineering documentation."],
  ["Engineering philosophy", "Evidence before claims, measured progress, safety by design, and transparent development."],
  ["Research areas", "Aerodynamics, energy systems, flight control, materials, acoustics, and manufacturing."],
  ["System architecture", "High-level relationships between propulsion, energy, control, safety, structure, and software."],
  ["Development roadmap", "Phased progress from concept research toward simulation, subsystem validation, integration, and future physical testing."],
  ["Evidence maturity", "How conceptual, simulated, bench-validated, integrated, and measured evidence differ."],
] as const;
const limitations = ["measured vehicle range", "measured payload capability", "measured acoustic performance", "flight-test results", "prototype validation", "certification status", "production readiness", "investment returns", "token value or tokenomics"];
const related = [
  ["Research", "Research questions, methods, and engineering priorities.", "/research"],
  ["Documentation", "The structured public engineering record.", "/documentation"],
  ["Engineering Journal", "Programme decisions, changes, and historical context.", "/journal"],
  ["Development Roadmap", "Conditional phases toward progressive validation.", "/roadmap"],
] as const;

function Heading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return <div className="mb-10 max-w-3xl sm:mb-12"><p className="text-xs font-bold uppercase tracking-[0.2em] text-aica-700">{eyebrow}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{children}</h2></div>;
}

export default function Page() {
  return <main id="main-content">
    <section className="relative overflow-hidden border-b border-slate-200 bg-white py-20 sm:py-24 lg:py-28"><div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-2/5 opacity-60 lg:block" style={{ backgroundImage: "linear-gradient(to right,transparent,rgba(242,248,242,.85)),linear-gradient(rgba(36,91,61,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(36,91,61,.07) 1px,transparent 1px)", backgroundSize: "100% 100%,48px 48px,48px 48px" }} /><Container className="relative"><div className="max-w-4xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-aica-700">Engineering overview</p><h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">The current technical overview of the AICA programme.</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700">The AICA Engineering Overview introduces the programme purpose, engineering philosophy, research structure, development approach, evidence framework, and long-term path toward physical validation.</p><p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">It is a living engineering document. Content may evolve as analysis, simulation, subsystem development, and future testing produce stronger evidence.</p><div className="mt-9 inline-flex items-center gap-3 border border-slate-200 bg-aica-25 px-4 py-3"><span aria-hidden="true" className="h-2 w-2 rounded-full bg-aica-600" /><div><p className="text-[.65rem] font-bold uppercase tracking-[.18em] text-slate-500">Public engineering document</p><p className="mt-0.5 text-sm font-semibold text-slate-900">Current programme overview</p></div></div></div></Container></section>

    <section className="border-b border-slate-200 bg-aica-25 py-20 sm:py-24"><Container><Heading eyebrow="Document status">Read the document in the context of its evidence.</Heading><div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">{statusItems.map(([label, value], index) => <article key={label} className="bg-white p-6"><p className="font-mono text-xs text-aica-700">0{index + 1}</p><h3 className="mt-4 text-[.68rem] font-bold uppercase tracking-[.16em] text-slate-500">{label}</h3><p className="mt-2 text-sm font-semibold leading-6 text-slate-950">{value}</p></article>)}</div><p className="mt-8 border-l-2 border-aica-600 bg-white px-5 py-4 text-sm font-semibold leading-6 text-slate-950">The Engineering Overview describes programme direction, research priorities, architecture thinking, and planned validation. It does not establish measured vehicle performance.</p></Container></section>

    <section className="bg-white py-20 sm:py-24"><Container><Heading eyebrow="Document scope">What the Engineering Overview contains.</Heading><div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">{topics.map(([title, text], index) => <article key={title} className="border-t border-slate-300 pt-5"><p className="font-mono text-xs text-aica-700">0{index + 1}</p><h3 className="mt-3 text-sm font-bold uppercase tracking-[.12em] text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></article>)}</div></Container></section>

    <section className="border-y border-slate-200 bg-aica-25 py-20 sm:py-24"><Container><Heading eyebrow="Limitations">What this document does not establish.</Heading><div className="grid gap-8 border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-[.85fr_1.15fr]"><div><p className="text-base font-semibold text-slate-950">The Engineering Overview does not currently establish:</p><p className="mt-5 text-sm leading-7 text-slate-600">These subjects require separate evidence, separate documents, or future physical validation.</p></div><ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">{limitations.map((item) => <li key={item} className="flex gap-3 border-b border-slate-100 pb-3"><span aria-hidden="true" className="text-aica-600">—</span>{item}</li>)}</ul></div><p className="mt-5 text-sm leading-6 text-slate-600">The public engineering document remains separate from any future funding mechanism.</p></Container></section>

    <section className="bg-white py-20 sm:py-24"><Container size="wide"><div className="mb-8 max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-aica-700">Document viewer</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Read the Engineering Overview</h2><p className="mt-4 text-base leading-7 text-slate-600">Use the embedded viewer below or open the document directly in a new tab.</p></div><DocumentViewer /></Container></section>

    <section className="border-y border-slate-200 bg-aica-25 py-12 sm:py-14"><Container><div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-xl font-semibold text-slate-950">Access the document directly.</h2><p className="mt-2 text-sm leading-6 text-slate-600">PDF · AICA Engineering Overview</p></div><div className="flex flex-col gap-3 sm:flex-row"><Button href="/docs/AICA_Engineering_Overview.pdf" target="_blank" rel="noreferrer">Open PDF <span aria-hidden="true" className="ml-1">↗</span></Button><Button href="/docs/AICA_Engineering_Overview.pdf" download variant="secondary">Download PDF</Button><Link href="/documentation" className="inline-flex items-center justify-center px-3 py-2 text-sm font-semibold text-aica-700 hover:text-aica-900">View Documentation →</Link></div></div></Container></section>

    <section className="bg-white py-20 sm:py-24"><Container><Heading eyebrow="Related programme areas">Explore the work behind the document.</Heading><div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">{related.map(([title, text, href]) => <Link key={href} href={href} className="group bg-white p-6 transition-colors hover:bg-aica-25"><h3 className="text-lg font-semibold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p><p className="mt-6 text-sm font-semibold text-aica-700">Explore area →</p></Link>)}</div></Container></section>

    <section className="border-t border-slate-200 bg-aica-25 py-20 sm:py-24"><Container><div className="max-w-4xl border-l-2 border-aica-600 pl-6 sm:pl-8"><h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">A document should become more precise as the evidence becomes stronger.</h2><p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">AICA will update its public engineering record as calculations, simulations, subsystem tests, and future prototype measurements provide a clearer basis for technical conclusions.</p></div></Container></section>
  </main>;
}
