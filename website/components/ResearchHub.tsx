import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

const researchAreas = [
  {
    title: "Aerodynamics",
    image: "/images/research/research-aerodynamics.webp",
    alt: "Aerodynamic flow analysis around the AICA vehicle concept",
    summary: "Research into how vehicle form, airflow, and operating conditions influence aerodynamic behaviour and stability.",
    focus: "Flow behaviour, pressure distribution, stability, and vehicle configuration analysis.",
  },
  {
    title: "Energy Systems",
    image: "/images/research/research-energy-systems.webp",
    alt: "AICA energy system architecture research illustration",
    summary: "Platform-level investigation of energy storage, delivery, thermal behaviour, and safe system integration.",
    focus: "Energy storage architecture, power distribution, thermal management, and system safety.",
  },
  {
    title: "Flight Control",
    image: "/images/research/research-flight-control.webp",
    alt: "AICA flight control architecture research illustration",
    summary: "Development of control concepts that connect sensing, estimation, decision logic, and vehicle response.",
    focus: "Sensor fusion, state estimation, control logic, redundancy, and system integration.",
  },
  {
    title: "Advanced Materials",
    image: "/images/research/research-advanced-materials.webp",
    alt: "AICA advanced materials and structural research illustration",
    summary: "Assessment of structural architectures and material systems against programme-level engineering constraints.",
    focus: "Lightweight structures, composite systems, durability, and load-path optimisation.",
  },
  {
    title: "Noise & Acoustics",
    image: "/images/research/research-noise-acoustics.webp",
    alt: "AICA acoustic modelling and noise research illustration",
    summary: "Study of potential noise sources, propagation, measurement methods, and mitigation approaches.",
    focus: "Acoustic modelling, source identification, mitigation strategies, and operational noise studies.",
  },
  {
    title: "Manufacturing & Production",
    image: "/images/research/research-manufacturing.webp",
    alt: "AICA manufacturing and production research illustration",
    summary: "Research into how validated designs could progress toward controlled, repeatable fabrication and assembly.",
    focus: "Digital manufacturing, assembly strategy, inspection, repeatability, and scalability.",
  },
];

const researchQuestions = [
  "How can the vehicle geometry minimise aerodynamic losses across representative operating conditions?",
  "How should energy storage and thermal management be integrated at platform level?",
  "Which control architecture provides the required stability, redundancy, and fault awareness?",
  "Which structural concepts provide the best balance between mass, stiffness, durability, and manufacturability?",
  "How can acoustic impact be understood and reduced before physical flight testing?",
  "Which manufacturing methods can transition from prototype development to repeatable production?",
];

const methodology = [
  { title: "Define", text: "Establish the engineering question, assumptions, constraints, and success criteria.", icon: "M5 6.5h14M5 12h9M5 17.5h6" },
  { title: "Model", text: "Use analytical models, simulation, CAD, system models, and digital tools.", icon: "m12 4 7 4-7 4-7-4 7-4Zm-7 8 7 4 7-4M5 16l7 4 7-4" },
  { title: "Compare", text: "Evaluate competing architectures and identify technical trade-offs.", icon: "M8 5v14M16 5v14M4 9h8M12 15h8" },
  { title: "Validate", text: "Confirm assumptions through bench testing, subsystem experiments, and later physical prototypes.", icon: "M5 12.5 9.5 17 19 7.5" },
  { title: "Document", text: "Record methods, limitations, results, and design decisions for future programme stages.", icon: "M7 3.5h7l3 3v14H7v-17Zm7 0v3h3M10 11h4M10 15h4" },
];

const evidenceLevels = [
  { level: "Level 1", title: "Analytical & Conceptual", items: ["engineering assumptions", "first-order calculations", "architecture studies", "feasibility analysis"] },
  { level: "Level 2", title: "Simulation & Digital Validation", items: ["CFD", "FEA", "systems simulation", "control modelling", "digital twin development"] },
  { level: "Level 3", title: "Subsystem Validation", items: ["bench testing", "component testing", "thermal testing", "control hardware testing", "structural testing"] },
  { level: "Level 4", title: "Vehicle Validation", items: ["integrated prototype", "ground testing", "flight testing", "measured vehicle performance"] },
];

const outputs = [
  { title: "Research Questions", description: "Review the open questions directing current programme studies.", href: "#current-questions" },
  { title: "Development Roadmap", description: "See how research evidence informs staged programme development.", href: "/roadmap" },
  { title: "Engineering Journal", description: "Follow design decisions, observations, and programme updates.", href: "/journal" },
  { title: "Documentation", description: "Access programme methods, standards, and engineering records.", href: "/documentation" },
];

function LineIcon({ path, ...props }: SVGProps<SVGSVGElement> & { path: string }) {
  return <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}><path d={path} /></svg>;
}

export function ResearchHub() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="border-b border-slate-200/80 bg-white py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <Breadcrumbs items={[{ label: "Research" }]} />
          <div className="mt-10 max-w-5xl border-l-2 border-aica-700 pl-6 sm:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-aica-700">Research</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Engineering questions before engineering claims.</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">AICA research focuses on understanding the aerodynamic, energetic, structural, control, acoustic, and manufacturing challenges required to develop a viable advanced air mobility platform.</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-500 sm:text-lg">The programme combines simulation, systems engineering, analytical modelling, experimental validation, and progressive hardware development.</p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="research-areas-title" className="border-b border-slate-200/80 bg-slate-50/50 py-20 sm:py-24 lg:py-28">
        <Container size="wide">
          <SectionHeading eyebrow="Research areas" id="research-areas-title" title="Six connected fields of engineering study." text="Each area addresses a distinct technical problem while contributing evidence to the wider vehicle and programme architecture." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {researchAreas.map((area) => (
              <article className="overflow-hidden rounded-xl border border-slate-200/80 bg-white" key={area.title}>
                <div className="border-b border-slate-200/80 bg-slate-50 p-4">
                  <Image alt={area.alt} className="aspect-[16/9] h-auto w-full object-contain" height={720} sizes="(min-width: 1280px) 30vw, (min-width: 768px) 46vw, 100vw" src={area.image} width={1080} />
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{area.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{area.summary}</p>
                  <div className="mt-6 border-t border-slate-200/80 pt-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-aica-700">Current focus</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{area.focus}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="questions-title" className="border-b border-slate-200/80 bg-white py-20 sm:py-24 lg:py-28" id="current-questions">
        <Container size="wide">
          <SectionHeading eyebrow="Current questions" id="questions-title" title="The questions guiding the programme." text="These are active engineering questions to be investigated, compared, and validated—not statements of established vehicle capability." />
          <ol className="mt-12 grid border-t border-slate-200/80 md:grid-cols-2">
            {researchQuestions.map((question, index) => (
              <li className="flex gap-5 border-b border-slate-200/80 py-7 md:odd:pr-8 md:even:border-l md:even:pl-8" key={question}>
                <span className="mt-0.5 text-sm font-semibold tabular-nums text-aica-700">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-base font-medium leading-7 text-slate-800">{question}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="methodology-title" className="border-b border-slate-200/80 bg-slate-50/50 py-20 sm:py-24 lg:py-28">
        <Container size="wide">
          <SectionHeading eyebrow="Methodology" id="methodology-title" title="From hypothesis to validated engineering decision." />
          <ol className="mt-12 grid border-y border-slate-200/80 lg:grid-cols-5">
            {methodology.map((step, index) => (
              <li className="relative border-b border-slate-200/80 py-7 last:border-b-0 sm:py-8 lg:border-b-0 lg:border-l lg:px-6 lg:first:border-l-0" key={step.title}>
                <div className="flex items-center justify-between">
                  <LineIcon className="h-7 w-7 stroke-aica-700" path={step.icon} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                  <span className="text-xs font-semibold tabular-nums text-slate-400">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="validation-title" className="border-b border-slate-200/80 bg-white py-20 sm:py-24 lg:py-28">
        <Container size="wide">
          <SectionHeading id="validation-title" title="Evidence grows with the hardware." text="AICA separates early engineering analysis from later physical validation so the maturity of each finding remains clear." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-slate-200/80 bg-slate-200/80 md:grid-cols-2 xl:grid-cols-4">
            {evidenceLevels.map((evidence) => (
              <article className="bg-white p-7" key={evidence.level}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-aica-700">{evidence.level}</p>
                <h3 className="mt-3 min-h-0 text-xl font-semibold tracking-tight text-slate-950 xl:min-h-14">{evidence.title}</h3>
                <ul className="mt-6 space-y-3 border-t border-slate-200/80 pt-5">
                  {evidence.items.map((item) => <li className="flex gap-3 text-sm leading-6 text-slate-600" key={item}><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aica-600" />{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-6 border-l-2 border-aica-700 bg-aica-25/80 px-5 py-4 text-sm font-medium leading-7 text-slate-700">Performance figures should be treated as targets or predictions until validated at the appropriate evidence level.</p>
        </Container>
      </section>

      <section aria-labelledby="outputs-title" className="border-b border-slate-200/80 bg-slate-50/50 py-20 sm:py-24 lg:py-28">
        <Container size="wide">
          <SectionHeading eyebrow="Research outputs" id="outputs-title" title="Research should leave an engineering record." text="Available programme pages connect current questions to development planning, ongoing notes, and documented engineering standards." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {outputs.map((output) => (
              <Link className="group rounded-xl border border-slate-200/80 bg-white p-6 transition-colors hover:border-aica-300 hover:bg-aica-25/50" href={output.href} key={output.title}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-slate-950">{output.title}</h3>
                  <span aria-hidden="true" className="text-aica-700 transition-transform group-hover:translate-x-1">→</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{output.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-20 sm:py-24 lg:py-28">
        <Container size="wide">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">Research before certainty.</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">AICA&apos;s engineering programme is built around reducing uncertainty step by step. Models inform decisions, experiments challenge assumptions, and physical testing ultimately determines what the platform can achieve.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/documentation" size="lg">View Documentation</Button>
              <Button href="/journal" size="lg" variant="secondary">Read Engineering Journal</Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function SectionHeading({ eyebrow, id, text, title }: { eyebrow?: string; id: string; text?: string; title: string }) {
  return (
    <div className="max-w-4xl">
      {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.2em] text-aica-700">{eyebrow}</p>}
      <h2 className={`${eyebrow ? "mt-4" : ""} text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl`} id={id}>{title}</h2>
      {text && <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{text}</p>}
    </div>
  );
}
