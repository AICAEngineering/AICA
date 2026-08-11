import Image from "next/image";

import { Container } from "@/components/Container";

export function DevelopmentRoadmap() {
  return (
    <section
      aria-labelledby="development-roadmap-title"
      className="border-b border-slate-200/80 bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container className="max-w-[95rem]" size="wide">
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-aica-700">
            Development roadmap
          </p>
          <h2
            className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
            id="development-roadmap-title"
          >
            From concept to validated air mobility platform.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            AICA follows a phased engineering programme focused on simulation, subsystem validation,
            integration, testing, and progressive reduction of technical risk.
          </p>
        </div>

        <div className="mt-12 w-full min-w-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50 p-2 sm:mt-14 sm:p-4 lg:p-6">
          <Image
            alt="AICA air mobility platform development roadmap from concept to validation and production"
            className="h-auto w-full max-w-full object-contain object-center"
            height={1024}
            sizes="(min-width: 1536px) 1440px, (min-width: 1024px) calc(100vw - 4rem), (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2.5rem)"
            src="/images/roadmap/development-roadmap.webp"
            width={1536}
          />
        </div>
      </Container>
    </section>
  );
}
