export type JournalSection = {
  title: string;
  paragraphs: readonly string[];
  items?: readonly string[];
};

export type JournalRecord = {
  slug: "concept-evolution" | "engineering-architecture" | "energy-system-development";
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  summary: string;
  version: "1.0";
  evidenceStatus: string;
  initialPublicRecord: "2026";
  sections: readonly JournalSection[];
  limitations: readonly string[];
};

export const journalRecords: readonly JournalRecord[] = [
  {
    slug: "concept-evolution",
    title: "Concept Evolution",
    category: "Concept development",
    image: "/images/journal/journal-concept-evolution.webp",
    imageAlt: "AICA concept evolution engineering journal illustration",
    summary: "A look at how the AICA air mobility concept has evolved through research, architecture studies, simulation, and iterative engineering development.",
    version: "1.0",
    evidenceStatus: "Concept / Analytical",
    initialPublicRecord: "2026",
    sections: [
      {
        title: "Programme origin",
        paragraphs: [
          "AICA concept and research work began in 2014. Since then, the programme has developed through long-term conceptual investigation rather than through a claimed completed aircraft or validated vehicle programme.",
          "The early record includes architecture exploration, calculations, engineering studies, and the gradual organisation of technical questions that require stronger analytical and physical evidence.",
        ],
      },
      {
        title: "From concept work to a public record",
        paragraphs: [
          "The programme is moving from privately held assumptions and design reasoning toward structured public documentation. This transition is intended to make the programme state, open questions, methods, limitations, and future decision points easier to review.",
        ],
        items: [
          "document the basis of candidate architecture decisions",
          "separate exploratory ideas from model-supported findings",
          "record limitations and unresolved questions",
          "prepare defined paths for progressive future validation",
        ],
      },
      {
        title: "Current limitations and future path",
        paragraphs: [
          "This record describes concept evolution and analytical work. It does not establish measured vehicle capability, completed subsystem validation, prototype validation, certification readiness, or production readiness.",
          "Future progress depends on continued analysis, simulation, controlled subsystem work, integration, and representative physical testing. Each later stage should proceed only when the available evidence justifies it.",
        ],
      },
    ],
    limitations: [
      "The vehicle architecture remains subject to revision.",
      "Concept studies and calculations are not physical validation.",
      "No measured vehicle performance is established by this record.",
    ],
  },
  {
    slug: "engineering-architecture",
    title: "Engineering Architecture",
    category: "Engineering architecture",
    image: "/images/journal/journal-engineering-architecture.webp",
    imageAlt: "AICA integrated engineering architecture journal illustration",
    summary: "An overview of the integrated architecture connecting propulsion, energy, control, safety, structure, and software across the AICA platform.",
    version: "1.0",
    evidenceStatus: "Concept / Analytical / Simulated",
    initialPublicRecord: "2026",
    sections: [
      {
        title: "A platform-level systems approach",
        paragraphs: [
          "AICA is treated as an integrated platform rather than a collection of independent subsystems. Propulsion, energy, control, safety, structure, and software affect one another through shared loads, interfaces, operating limits, monitoring needs, and failure responses.",
          "Architecture work therefore focuses on relationships and dependencies before individual subsystem decisions are treated as fixed.",
        ],
      },
      {
        title: "Interfaces and integration dependencies",
        paragraphs: [
          "Subsystem interfaces define where assumptions in one engineering area create requirements or constraints in another. The public architecture record focuses on these system-level relationships without disclosing confidential propulsion details.",
        ],
        items: [
          "energy delivery, thermal behaviour, and monitoring",
          "control authority, sensing, software, and fault response",
          "structural loads, packaging, access, and inspectability",
          "safety boundaries across normal and off-nominal conditions",
        ],
      },
      {
        title: "Architecture maturity",
        paragraphs: [
          "The architecture remains subject to continued analysis, simulation, trade studies, and later physical validation. A coherent system model can support engineering decisions, but it does not by itself demonstrate subsystem or vehicle performance.",
          "Future integration decisions should be traced to documented interface requirements and evidence appropriate to the maturity of each subsystem.",
        ],
      },
    ],
    limitations: [
      "Confidential propulsion details are intentionally excluded.",
      "Architecture diagrams and models remain subject to revision.",
      "Simulation does not establish integrated vehicle validation.",
    ],
  },
  {
    slug: "energy-system-development",
    title: "Energy System Development",
    category: "Energy systems",
    image: "/images/journal/journal-energy-system-development.webp",
    imageAlt: "AICA energy system development engineering journal illustration",
    summary: "A closer look at the architecture, thermal management, power electronics, safety strategy, and modular development path of the AICA energy system.",
    version: "1.0",
    evidenceStatus: "Concept / Analytical / Simulated",
    initialPublicRecord: "2026",
    sections: [
      {
        title: "Energy architecture questions",
        paragraphs: [
          "The energy-system programme examines how storage, power distribution, thermal management, monitoring, and safety should operate as one architecture. The work is framed around engineering questions and system dependencies rather than established vehicle capability.",
        ],
        items: [
          "how storage should be organised and monitored",
          "how power should be distributed across platform loads",
          "how thermal conditions and operating limits should be managed",
          "how faults should be detected, isolated, and documented",
        ],
      },
      {
        title: "Modular development path",
        paragraphs: [
          "A modular approach allows individual assumptions, interfaces, monitoring methods, and safety responses to be evaluated before integrated testing is considered. Analytical and simulation work can help define those evaluations but cannot replace physical evidence.",
          "Future work may progress through controlled bench evaluation and later integrated validation when earlier evidence, resources, and safety constraints support that progression.",
        ],
      },
      {
        title: "Evidence boundary",
        paragraphs: [
          "This record does not establish energy density, vehicle range, endurance, or any other measured performance capability. Those subjects require defined configurations, representative operating conditions, instrumentation, repeatable testing, and published limitations.",
        ],
      },
    ],
    limitations: [
      "No energy-density, range, or endurance capability is claimed.",
      "Analytical and simulated results are not bench validation.",
      "Future bench and integrated validation remain conditional programme stages.",
    ],
  },
];

export type JournalSlug = JournalRecord["slug"];

export function getJournalRecord(slug: string) {
  return journalRecords.find((record) => record.slug === slug);
}
