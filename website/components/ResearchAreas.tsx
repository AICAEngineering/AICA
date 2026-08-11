import Image from "next/image";

import { Container } from "@/components/Container";
import { cn } from "@/lib/cn";

const researchAreas = [
  {
    alt: "Aerodynamic CFD analysis of the AICA aircraft concept",
    category: "CFD · Flow analysis · Vehicle stability",
    description: "Computational and experimental analysis of airflow, pressure distribution, stability, efficiency, and vehicle behaviour across representative flight conditions.",
    image: "/images/research/research-aerodynamics.webp",
    imageFirst: false,
    title: "Aerodynamics",
  },
  {
    alt: "Energy systems engineering analysis for the AICA aircraft platform",
    category: "Energy storage · Thermal control · Power distribution",
    description: "Advanced energy storage, thermal management, power distribution, and operational efficiency for next-generation air mobility platforms.",
    image: "/images/research/research-energy-systems.webp",
    imageFirst: true,
    title: "Energy Systems",
  },
  {
    alt: "Flight control system architecture and engineering analysis for the AICA air mobility platform",
    category: "CONTROL SYSTEMS  AUTONOMY  STABILITY",
    description: "Integrated sensing, state estimation, guidance, and control architectures designed for precise, stable, and fault-aware vehicle operation.",
    image: "/images/research/research-flight-control.webp",
    imageFirst: false,
    title: "Flight Control",
  },
  {
    alt: "Advanced materials and structural engineering analysis for the AICA air mobility platform",
    category: "MATERIALS  STRUCTURES  COMPOSITES  DURABILITY",
    description: "Development and validation of lightweight, high-strength materials and structural architectures designed to improve efficiency, durability, manufacturability, and safety.",
    image: "/images/research/research-advanced-materials.webp",
    imageFirst: true,
    title: "Advanced Materials",
  },
  {
    alt: "Noise and acoustic engineering analysis for the AICA air mobility platform",
    category: "ACOUSTICS  NOISE PREDICTION  MITIGATION  COMFORT",
    description: "Prediction, measurement, and mitigation of aerodynamic, structural, and propulsion-related noise to reduce acoustic impact and improve operational comfort.",
    image: "/images/research/research-noise-acoustics.webp",
    imageFirst: false,
    title: "Noise & Acoustics",
  },
  {
    alt: "Manufacturing and production engineering for the AICA air mobility platform",
    category: "MANUFACTURING  AUTOMATION  QUALITY  SCALABILITY",
    description: "Development of digital manufacturing, automated assembly, inspection, and production methods designed to translate validated engineering into repeatable and scalable vehicle manufacturing.",
    image: "/images/research/research-manufacturing.webp",
    imageFirst: true,
    title: "Manufacturing & Production",
  },
];

export function ResearchAreas() {
  return (
    <section className="border-b border-slate-200/80 bg-white py-20 sm:py-24 lg:py-28" aria-labelledby="research-areas-title">
      <Container className="max-w-[95rem]" size="wide">
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-aica-700">Research areas</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl" id="research-areas-title">
            Engineering the foundations of advanced air mobility.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            AICAs research programme combines simulation, experimental validation, systems engineering, and iterative vehicle development.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:gap-8">
          {researchAreas.map((area) => (
            <article
              className={cn(
                "grid overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-subtle lg:items-center",
                area.imageFirst ? "lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]" : "lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]",
              )}
              key={area.title}
            >
              <div className={cn("p-7 sm:p-9 lg:p-12", area.imageFirst && "lg:order-2")}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-aica-700">{area.category}</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{area.title}</h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">{area.description}</p>
              </div>
              <div
                className={cn(
                  "border-t border-slate-200/80 bg-slate-50 p-4 sm:p-6 lg:border-t-0",
                  area.imageFirst ? "lg:order-1 lg:border-r" : "lg:border-l",
                )}
              >
                <Image
                  alt={area.alt}
                  className="h-auto w-full object-contain object-center"
                  height={1024}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  src={area.image}
                  width={1536}
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
