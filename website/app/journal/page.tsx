import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { journalRecords } from "@/data/journal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "Engineering Journal", description: "A public record of AICA engineering decisions, programme milestones, research observations, and future validation preparation.", path: "/journal" });

type TimelineItem = { marker: string; title: string; text: string; status: string };
type Category = { title: string; description: string; future?: boolean };

const timeline: TimelineItem[] = [
  { marker: "2014", title: "Concept and Research Begins", text: "Initial concept development, calculations, architecture exploration, and long-term investigation of a new approach to vertical mobility.", status: "Confirmed programme origin" },
  { marker: "Recent programme stage", title: "Structured Engineering Documentation", text: "The programme moved toward a more formal documentation system covering research questions, architecture, development methods, roadmap, and evidence maturity.", status: "Programme record" },
  { marker: "Current", title: "Simulation, Architecture, and Validation Preparation", text: "Current work focuses on research organisation, system architecture, simulation planning, technical documentation, and preparation for progressive subsystem validation.", status: "In preparation" },
  { marker: "Future", title: "Progressive Physical Validation", text: "Planned work includes subsystem testing, integration, demonstrator development, ground testing, and later representative vehicle testing.", status: "Future programme stage · Planned" },
];
const categories: Category[] = [
  { title: "Concept development", description: "Early ideas, design evolution, assumptions, and architecture exploration." },
  { title: "System architecture", description: "Relationships between vehicle subsystems and major engineering decisions." },
  { title: "Research notes", description: "Questions, methods, simulation observations, and technical trade studies." },
  { title: "Programme updates", description: "Documentation milestones, development progress, and roadmap changes." },
  { title: "Validation records", description: "Future subsystem, bench, integration, and prototype test records.", future: true },
];
const principles = [
  ["Context", "Each entry should describe the programme state and available evidence at the time."],
  ["Traceability", "Major decisions and changes should remain connected to their engineering reasoning."],
  ["Revision", "New evidence may refine earlier conclusions without erasing the development history."],
  ["Limitations", "Uncertainty, assumptions, and validation gaps should be stated where relevant."],
] as const;

function Heading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return <div className="mb-10 max-w-3xl sm:mb-12"><p className="text-xs font-bold uppercase tracking-[0.2em] text-aica-700">{eyebrow}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{children}</h2></div>;
}

export default function Page() {
  return <main id="main-content">
    <section className="relative overflow-hidden border-b border-slate-200 bg-white py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-2/5 opacity-60 lg:block" style={{ backgroundImage: "linear-gradient(to right,transparent,rgba(242,248,242,.8)),repeating-linear-gradient(0deg,rgba(36,91,61,.07) 0,rgba(36,91,61,.07) 1px,transparent 1px,transparent 40px)" }} />
      <Container className="relative"><div className="max-w-4xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-aica-700">Engineering journal</p><h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">A public record of how the AICA programme develops.</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700">The AICA Engineering Journal records design evolution, architecture decisions, research observations, documentation milestones, and preparation for future validation.</p><p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">Entries describe the state of the programme at the time they are published. Later engineering evidence may refine or replace earlier assumptions.</p><div className="mt-9 inline-flex items-center gap-3 border border-slate-200 bg-aica-25 px-4 py-3"><span aria-hidden="true" className="h-2 w-2 rounded-full bg-aica-600" /><div><p className="text-[.65rem] font-bold uppercase tracking-[.18em] text-slate-500">Programme record</p><p className="mt-0.5 text-sm font-semibold text-slate-900">Active <span className="px-1 text-slate-300">·</span> Continuously updated</p></div></div></div></Container>
    </section>

    <section className="bg-white py-20 sm:py-24"><Container><Heading eyebrow="Featured engineering records">Selected records from the programme.</Heading><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{journalRecords.map((entry) => <Link href={`/journal/${entry.slug}`} key={entry.slug} className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors hover:border-aica-300 hover:bg-aica-25"><div className="relative aspect-video w-full overflow-hidden border-b border-slate-200 bg-slate-50"><Image src={entry.image} alt={entry.imageAlt} fill className="object-contain object-center" sizes="(min-width:1024px) 400px,(min-width:768px) 50vw,100vw" /></div><div className="flex flex-1 flex-col p-6"><div className="flex items-center justify-between gap-3"><p className="text-[.68rem] font-bold uppercase tracking-[.18em] text-aica-700">{entry.category}</p><span className="shrink-0 text-xs text-slate-400">Version {entry.version}</span></div><h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">{entry.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{entry.summary}</p><p className="mt-6 text-sm font-semibold text-aica-700">Read engineering record →</p></div></Link>)}</div></Container></section>

    <section className="border-y border-slate-200 bg-aica-25 py-20 sm:py-24"><Container><Heading eyebrow="Programme history">An engineering effort with a long development horizon.</Heading><ol className="border-t border-slate-300">{timeline.map((item, index) => <li key={item.marker} className="grid gap-4 border-b border-slate-200 py-7 sm:grid-cols-[3rem_11rem_1fr] sm:gap-6"><span className="font-mono text-xs text-slate-400">0{index + 1}</span><div><p className="text-xs font-bold uppercase tracking-[.16em] text-aica-700">{item.marker}</p><p className="mt-2 text-xs font-semibold text-slate-500">{item.status}</p></div><div><h3 className="text-lg font-semibold text-slate-950">{item.title}</h3><p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">{item.text}</p></div></li>)}</ol></Container></section>

    <section className="bg-white py-20 sm:py-24"><Container><Heading eyebrow="Journal categories">Different records serve different engineering purposes.</Heading><div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-5">{categories.map((item, index) => <article key={item.title} className="bg-white p-5 sm:p-6"><p className="font-mono text-xs text-slate-400">0{index + 1}</p><h3 className="mt-4 text-sm font-bold uppercase tracking-[.12em] text-slate-950">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>{item.future && <span className="mt-5 inline-block border border-aica-200 bg-aica-50 px-2 py-1 text-[.65rem] font-bold uppercase tracking-wider text-aica-800">Future programme category</span>}</article>)}</div></Container></section>

    <section className="border-y border-slate-200 bg-aica-25 py-20 sm:py-24"><Container><Heading eyebrow="Why the journal exists">Engineering history should not disappear when assumptions change.</Heading><div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">{principles.map(([title, text], index) => <article key={title} className="border-t border-slate-300 pt-5"><p className="font-mono text-xs text-aica-700">0{index + 1}</p><h3 className="mt-3 text-sm font-bold uppercase tracking-[.12em] text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></article>)}</div><p className="mt-10 border-l-2 border-aica-600 bg-white px-5 py-4 text-sm font-semibold leading-6 text-slate-950">Journal entries are engineering records, not proof of validated vehicle performance.</p></Container></section>

    <section className="bg-white py-20 sm:py-24"><Container><div className="border-l-2 border-aica-600 pl-6 sm:pl-8"><h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Follow the programme through its engineering record.</h2><p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">Research defines the questions, documentation records the reasoning, and future testing will determine the measured capabilities of the platform.</p><div className="mt-8 flex flex-wrap items-center gap-3"><Button href="/research">Explore Research</Button><Button href="/documentation" variant="secondary">View Documentation</Button><Link href="/roadmap" className="px-3 py-2 text-sm font-semibold text-aica-700 hover:text-aica-900">Development Roadmap →</Link></div></div></Container></section>
  </main>;
}
