import type { SVGProps } from "react";

import { Section } from "@/components/Section";

type IconProps = SVGProps<SVGSVGElement>;

function EngineeringIcon(props: IconProps) {
  return <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}><path d="M12 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z"/><path d="m19 13.5 1.5 1.15-1.75 3.03-1.74-.72a7.6 7.6 0 0 1-2.01 1.16L14.75 20h-3.5L11 18.12a7.6 7.6 0 0 1-2.01-1.16l-1.74.72-1.75-3.03L7 13.5a7.9 7.9 0 0 1 0-2.32l-1.5-1.15L7.25 7l1.74.72A7.6 7.6 0 0 1 11 6.56l.25-1.88h3.5L15 6.56a7.6 7.6 0 0 1 2.01 1.16L18.75 7l1.75 3.03L19 11.18a7.9 7.9 0 0 1 0 2.32Z"/></svg>;
}

function ProcessIcon(props: IconProps) {
  return <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}><path d="M7 3.75h7l3 3v13.5H7V3.75Z"/><path d="M14 3.75v3h3M9.75 11h4.5M9.75 14.5h4.5M4 7.25v13h10"/></svg>;
}

function SafetyIcon(props: IconProps) {
  return <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}><path d="M12 3.5 19 6v5.25c0 4.16-2.76 7.66-7 9.25-4.24-1.59-7-5.09-7-9.25V6l7-2.5Z"/><path d="m8.75 11.75 2.1 2.1 4.4-4.6"/></svg>;
}

function IndependentIcon(props: IconProps) {
  return <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}><circle cx="12" cy="12" r="8.25"/><path d="m14.75 9.25-1.5 4-4 1.5 1.5-4 4-1.5ZM12 3.75V6M12 18v2.25M3.75 12H6M18 12h2.25"/></svg>;
}

function ProgressIcon(props: IconProps) {
  return <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}><path d="M4.5 19.5h15M6.5 16.5v-4h3v4M10.5 16.5V9h3v7.5M14.5 16.5V5.5h3v11"/><path d="m5.5 8.5 3-3 2 2 4-4"/></svg>;
}

const principles = [
  { title: "Engineering First", description: "Decisions are driven by analysis, modelling, testing, and measurable evidence.", Icon: EngineeringIcon },
  { title: "Transparent Process", description: "Assumptions, methods, limitations, and development progress are documented openly.", Icon: ProcessIcon },
  { title: "Safety by Design", description: "Safety is treated as a system-level requirement from the earliest design stages.", Icon: SafetyIcon },
  { title: "Independent Development", description: "AICA is developed as an independent engineering initiative with a long-term technical focus.", Icon: IndependentIcon },
  { title: "Measured Progress", description: "Claims follow evidence. Performance figures are published only when supported by calculation, simulation, or physical testing.", Icon: ProgressIcon },
];

export function EngineeringPrinciples() {
  return (
    <Section className="border-b border-slate-200/80 bg-slate-50/50 py-20 sm:py-24 lg:py-28" containerClassName="max-w-[88rem]" description="AICA follows a development philosophy in which technical claims, design decisions, and programme milestones are tied to analysis, validation, and measurable evidence." eyebrow="Engineering Principles" title="Built around evidence, validation, and long-term engineering discipline.">
      <div className="grid grid-cols-1 border-y border-slate-200/80 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {principles.map(({ description, Icon, title }, index) => (
          <article className={["border-b border-slate-200/80 py-8 sm:px-6 lg:px-7", index % 2 !== 0 ? "sm:border-l" : "", index === principles.length - 1 ? "border-b-0 sm:col-span-2 lg:col-span-1" : "", index === 2 ? "lg:border-l" : "", index === 3 ? "lg:border-l-0" : "", index >= 3 ? "lg:border-b-0" : "", index === 4 ? "lg:border-l" : "", "xl:col-span-1 xl:border-b-0 xl:border-l xl:first:border-l-0"].join(" ")} key={title}>
            <Icon className="h-7 w-7 stroke-aica-700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
            <h3 className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-950">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
