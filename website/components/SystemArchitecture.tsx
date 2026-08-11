import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";

type DiagramVariant = "propulsion" | "control" | "safety" | "structure" | "software";

type SystemModule = {
  description: string;
  label: string;
} & ({ image: string; variant?: never } | { image?: never; variant: DiagramVariant });

function SystemDiagram({ variant }: { variant: DiagramVariant }) {
  const diagrams = {
    propulsion: <><circle cx="80" cy="64" r="27" /><path d="M80 25v78M41 64h78M61 45l38 38M99 45 61 83" /></>,
    control: <><path d="M36 40h34v25H36zM90 63h34v25H90zM55 94h34v22H55z" /><path d="M70 52h20v24M72 94V77h18M124 76h17" /></>,
    safety: <><path d="M80 23 119 39v27c0 25-15 42-39 54-24-12-39-29-39-54V39l39-16Z" /><path d="m61 70 13 13 26-29" /></>,
    structure: <><path d="M28 105 80 27l52 78H28Z" /><path d="m45 80 70 25M62 54l36 51M80 27v78" /></>,
    software: <><rect x="39" y="27" width="82" height="83" rx="8" /><path d="m67 52-15 14 15 14M93 52l15 14-15 14M88 43 72 90" /></>,
  };

  return (
    <svg aria-hidden="true" className="h-full w-full" fill="none" viewBox="0 0 160 136">
      <path d="M0 68h24M136 68h24" stroke="#BDD5C5" strokeDasharray="3 5" />
      <circle cx="24" cy="68" r="3" fill="#2F714A" stroke="none" />
      <circle cx="136" cy="68" r="3" fill="#2F714A" stroke="none" />
      <g stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6">{diagrams[variant]}</g>
    </svg>
  );
}

const modules: SystemModule[] = [
  { description: "Translates controlled power into lift and directional response.", image: "/images/systems/system-propulsion.webp", label: "Propulsion" },
  { description: "Frames power storage, delivery, thermal, and monitoring questions.", image: "/images/systems/system-energy.webp", label: "Energy" },
  { description: "Coordinates sensing, command, and bounded system response.", image: "/images/systems/system-control.webp", label: "Control" },
  { description: "Defines layered monitoring, limits, and fault-aware behavior.", image: "/images/systems/system-safety.webp", label: "Safety" },
  { description: "Connects loads, materials, interfaces, and inspectability.", image: "/images/systems/system-structure.webp", label: "Structure" },
  { description: "Supports traceable logic, simulation, and verification workflows.", image: "/images/systems/system-software-wide.webp", label: "Software" },
];

export function SystemArchitecture() {
  return (
    <section className="border-y border-slate-200/80 bg-slate-50/70 py-20 sm:py-24" aria-labelledby="system-architecture-title">
      <Container className="max-w-[95rem]" size="wide">
        <div className="grid gap-10 xl:grid-cols-[18rem_minmax(0,1fr)] xl:items-center xl:gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-aica-700">System architecture</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl" id="system-architecture-title">
              A coherent system.<span className="block">Designed as one.</span>
            </h2>
            <p className="mt-5 leading-7 text-slate-600">Every subsystem contributes to an integrated architecture designed for safety, efficiency, testability, and future validation.</p>
            <Link className="mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-aica-800 underline decoration-aica-300 underline-offset-4 transition-colors hover:text-aica-950" href="/research">
              View architecture <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-subtle sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {modules.map((module) => (
              <article className="relative flex min-w-0 flex-col bg-white p-4 ring-1 ring-inset ring-slate-200/70" key={module.label}>
                <div className="relative h-32 overflow-hidden rounded-xl bg-slate-50">
                  {module.image ? (
                    <Image
                      alt={module.label === "Propulsion" ? "AICA propulsion system engineering concept study" : module.label === "Control" ? "AICA flight control and avionics engineering concept study" : module.label === "Safety" ? "AICA safety system engineering concept study" : module.label === "Structure" ? "AICA structural frame engineering concept study" : module.label === "Software" ? "AICA embedded computing platform engineering concept" : "Conceptual AICA energy-system architecture visualization"}
                      className={module.label === "Energy" ? "object-contain object-center p-[8%]" : module.label === "Software" ? "object-contain object-center p-[12.5%]" : "object-cover object-center"}
                      fill
                      sizes="(min-width: 1280px) 12vw, (min-width: 768px) 30vw, (min-width: 640px) 45vw, 100vw"
                      src={module.image}
                    />
                  ) : (
                    <SystemDiagram variant={module.variant ?? "propulsion"} />
                  )}
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-aica-700">{module.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{module.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
