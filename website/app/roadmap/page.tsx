import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "Development Roadmap", description: "The conditional AICA engineering roadmap from concept research toward progressive physical validation.", path: "/roadmap" });

type Phase = { number: string; title: string; timeframe?: string; status: string; purpose: string; work: string[]; future?: boolean };
type Evidence = { level: string; title: string; support: string[] };
type Gate = { label: string; title: string; question: string; status: string };

const focus = [
  ["Research organisation", "Defining research questions, assumptions, methods, and technical priorities."],
  ["System architecture", "Developing the relationships between propulsion, energy, control, safety, structures, and software."],
  ["Simulation planning", "Preparing analytical, numerical, and digital models to compare candidate engineering approaches."],
  ["Validation preparation", "Defining subsystem tests, measurement needs, evidence standards, and future decision gates."],
] as const;
const phases: Phase[] = [
  { number: "01", title: "Concept & Research", timeframe: "2014 — Present", status: "Active", purpose: "Develop the core concept, engineering assumptions, candidate architectures, and long-term research direction.", work: ["calculations", "concept studies", "architecture exploration", "research questions", "documentation", "feasibility analysis"] },
  { number: "02", title: "Simulation & Analysis", status: "Active / Expanding", purpose: "Use analytical models and numerical simulation to evaluate engineering assumptions and compare alternative architectures.", work: ["CFD planning and studies", "structural analysis", "energy-system modelling", "control-system simulation", "trade studies", "uncertainty analysis"] },
  { number: "03", title: "Subsystem Development & Bench Testing", status: "Planned / In preparation", purpose: "Develop and physically evaluate individual subsystems before vehicle-level integration.", work: ["component prototypes", "thermal tests", "structural tests", "control hardware testing", "energy-system tests", "instrumentation development"], future: true },
  { number: "04", title: "Integration & System Validation", status: "Planned", purpose: "Integrate major subsystems and evaluate interfaces, control behaviour, safety logic, and system-level operation.", work: ["integrated test rigs", "hardware-in-the-loop", "interface validation", "fault-response testing", "ground-system testing"], future: true },
  { number: "05", title: "Flight Demonstrator", status: "Long-term planned stage", purpose: "Create a representative demonstrator for controlled ground and later flight testing.", work: ["integrated demonstrator", "ground testing", "incremental flight envelope", "measured performance", "acoustic measurement", "handling and control assessment"], future: true },
  { number: "06", title: "Pre-production & Certification Preparation", status: "Future programme stage", purpose: "Translate validated engineering into repeatable manufacturing, formal compliance work, and production preparation.", work: ["design maturation", "manufacturing planning", "quality systems", "compliance evidence", "certification strategy", "production readiness"], future: true },
];
const evidence: Evidence[] = [
  { level: "01", title: "Conceptual", support: ["assumptions", "calculations", "architecture reasoning", "feasibility studies"] },
  { level: "02", title: "Simulated", support: ["analytical models", "numerical simulation", "digital system models", "comparative studies"] },
  { level: "03", title: "Bench validated", support: ["component tests", "subsystem tests", "physical measurements", "repeatable experiments"] },
  { level: "04", title: "Integrated validation", support: ["system rigs", "hardware-in-the-loop", "integrated ground testing", "interface verification"] },
  { level: "05", title: "Vehicle measured", support: ["representative prototype testing", "ground testing", "flight testing", "direct performance measurement"] },
];
const gates: Gate[] = [
  { label: "Gate A", title: "Concept coherence", question: "Is the architecture internally consistent and technically worth deeper investigation?", status: "Open" },
  { label: "Gate B", title: "Model credibility", question: "Do analytical and simulation results support continued development?", status: "Not yet evaluated" },
  { label: "Gate C", title: "Subsystem viability", question: "Do physical subsystem tests support integration?", status: "Future" },
  { label: "Gate D", title: "Integrated system readiness", question: "Can the combined system proceed safely toward demonstrator testing?", status: "Future" },
  { label: "Gate E", title: "Vehicle evidence", question: "Do measured results support further maturation, compliance work, and production planning?", status: "Future" },
];
const principles = [
  ["No fixed promises", "Future dates depend on engineering outcomes, resources, and validation results."],
  ["Risk reduction", "Each phase should reduce a specific class of technical uncertainty."],
  ["Evidence before claims", "Published capability statements should match the maturity of supporting evidence."],
  ["Revision is expected", "The roadmap may change when new engineering evidence changes programme priorities."],
] as const;

function Heading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return <div className="mb-10 max-w-3xl sm:mb-12"><p className="text-xs font-bold uppercase tracking-[0.2em] text-aica-700">{eyebrow}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{children}</h2></div>;
}

export default function Page() {
  return <main id="main-content">
    <section className="relative overflow-hidden border-b border-slate-200 bg-white py-20 sm:py-24 lg:py-28"><div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-2/5 opacity-60 lg:block" style={{ backgroundImage: "linear-gradient(to right,transparent,rgba(242,248,242,.8)),repeating-linear-gradient(90deg,rgba(36,91,61,.07) 0,rgba(36,91,61,.07) 1px,transparent 1px,transparent 48px)" }} /><Container className="relative"><div className="max-w-4xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-aica-700">Development roadmap</p><h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">A measured path from concept toward physical validation.</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700">AICA follows a phased engineering programme designed to reduce uncertainty through analysis, simulation, subsystem development, integration, and future representative testing.</p><p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">The roadmap describes programme direction rather than guaranteed delivery dates. Each phase depends on evidence, resources, technical outcomes, and the successful completion of earlier work.</p><div className="mt-9 inline-flex max-w-full items-center gap-3 border border-slate-200 bg-aica-25 px-4 py-3"><span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-aica-600" /><div><p className="text-[.65rem] font-bold uppercase tracking-[.18em] text-slate-500">Current programme stage</p><p className="mt-0.5 text-sm font-semibold leading-6 text-slate-900">Research <span className="px-1 text-slate-300">·</span> Architecture <span className="px-1 text-slate-300">·</span> Validation Preparation</p></div></div></div></Container></section>

    <section className="bg-white py-16 sm:py-20"><Container size="wide"><div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-2 sm:p-4 lg:p-6"><Image src="/images/roadmap/development-roadmap.webp" alt="AICA development roadmap from concept research to future physical validation" width={1536} height={1024} priority className="h-auto w-full object-contain object-center" sizes="(min-width:1536px) 1408px,(min-width:1024px) calc(100vw - 4rem),(min-width:640px) calc(100vw - 3rem),calc(100vw - 2.5rem)" /></div></Container></section>

    <section className="border-y border-slate-200 bg-aica-25 py-20 sm:py-24"><Container><Heading eyebrow="Current focus">Building the engineering basis for progressive validation.</Heading><div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">{focus.map(([title, text], index) => <article key={title} className="border-t border-slate-300 pt-5"><p className="font-mono text-xs text-aica-700">0{index + 1}</p><h3 className="mt-3 text-sm font-bold uppercase tracking-[.12em] text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></article>)}</div></Container></section>

    <section className="bg-white py-20 sm:py-24"><Container><Heading eyebrow="Development phases">Engineering progress is conditional and sequential.</Heading><div className="grid gap-5 lg:grid-cols-2">{phases.map((phase) => <article key={phase.number} className="flex flex-col border border-slate-200 bg-white p-6 sm:p-8"><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-aica-700">Phase {phase.number}</p>{phase.timeframe && <p className="mt-2 text-sm font-semibold text-slate-500">{phase.timeframe}</p>}</div><span className={`border px-2.5 py-1 text-xs font-bold uppercase tracking-wider ${phase.future ? "border-slate-200 bg-slate-50 text-slate-600" : "border-aica-200 bg-aica-50 text-aica-800"}`}>{phase.status}</span></div><h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{phase.title}</h3>{phase.future && <p className="mt-2 text-xs font-bold uppercase tracking-[.14em] text-slate-400">Future programme stage</p>}<p className="mt-4 text-sm leading-7 text-slate-600">{phase.purpose}</p><div className="mt-6 border-t border-slate-200 pt-5"><p className="text-[.65rem] font-bold uppercase tracking-[.18em] text-slate-500">Representative work</p><ul className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">{phase.work.map((item) => <li key={item} className="flex gap-2"><span className="text-aica-600">—</span>{item}</li>)}</ul></div></article>)}</div></Container></section>

    <section className="border-y border-slate-200 bg-aica-25 py-20 sm:py-24"><Container><Heading eyebrow="Evidence maturity">Confidence should grow as the programme moves from models to hardware.</Heading><div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-5">{evidence.map((item) => <article key={item.level} className="bg-white p-5 sm:p-6"><p className="font-mono text-xs text-aica-700">{item.level}</p><h3 className="mt-4 text-sm font-bold uppercase tracking-[.12em] text-slate-950">{item.title}</h3><p className="mt-5 text-[.65rem] font-bold uppercase tracking-[.16em] text-slate-400">Supported by</p><ul className="mt-3 space-y-2 text-sm leading-5 text-slate-600">{item.support.map((support) => <li key={support}>— {support}</li>)}</ul></article>)}</div><p className="mt-8 border-l-2 border-aica-600 bg-white px-5 py-4 text-sm font-semibold leading-6 text-slate-950">Performance targets are not measured vehicle capabilities until supported by representative physical testing.</p></Container></section>

    <section className="bg-white py-20 sm:py-24"><Container><Heading eyebrow="Decision gates">Each stage must earn the next.</Heading><div className="border-y border-slate-200">{gates.map((gate) => <article key={gate.label} className="grid gap-3 border-b border-slate-200 py-6 last:border-b-0 sm:grid-cols-[7rem_14rem_1fr_auto] sm:items-start sm:gap-6"><p className="text-xs font-bold uppercase tracking-[.18em] text-aica-700">{gate.label}</p><h3 className="text-sm font-semibold text-slate-950">{gate.title}</h3><div><p className="text-[.65rem] font-bold uppercase tracking-[.16em] text-slate-400">Question</p><p className="mt-1 text-sm leading-6 text-slate-600">{gate.question}</p></div><span className="w-fit border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600">{gate.status}</span></article>)}</div></Container></section>

    <section className="border-y border-slate-200 bg-aica-25 py-20 sm:py-24"><Container><Heading eyebrow="Roadmap principles">Progress follows evidence, not calendar pressure.</Heading><div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">{principles.map(([title, text], index) => <article key={title} className="border-t border-slate-300 pt-5"><p className="font-mono text-xs text-aica-700">0{index + 1}</p><h3 className="mt-3 text-sm font-bold uppercase tracking-[.12em] text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></article>)}</div></Container></section>

    <section className="bg-white py-20 sm:py-24"><Container><div className="border-l-2 border-aica-600 pl-6 sm:pl-8"><h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Explore the work behind the roadmap.</h2><p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">Research defines the questions, documentation records the reasoning, and the engineering journal preserves the programme history.</p><div className="mt-8 flex flex-wrap items-center gap-3"><Button href="/research">Explore Research</Button><Button href="/documentation" variant="secondary">View Documentation</Button><Link href="/journal" className="px-3 py-2 text-sm font-semibold text-aica-700 hover:text-aica-900">Engineering Journal →</Link></div></div></Container></section>
  </main>;
}
