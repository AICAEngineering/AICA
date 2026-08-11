import Image from "next/image";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { heroContent } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-20 pt-12 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
      <div className="absolute inset-x-0 top-0 hidden h-[46rem] overflow-hidden sm:block" aria-hidden="true">
        <Image alt="" className="object-cover object-[center_58%]" fill priority sizes="100vw" src="/images/hero/hero-environment.webp" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white" />
      </div>
      <div className="absolute inset-x-0 top-0 h-[44rem] bg-gradient-to-b from-aica-50 via-white to-white sm:hidden" aria-hidden="true" />

      <Container className="relative max-w-[95rem]" size="wide">
        <div className="relative grid items-center gap-6 lg:min-h-[35rem] lg:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] xl:gap-10">
          <div className="relative z-20 max-w-[39rem]">
            <p className="mb-6 inline-flex rounded-full border border-aica-200 bg-white/90 px-4 py-2 text-sm font-semibold text-aica-800 shadow-subtle backdrop-blur-sm">
              {heroContent.eyebrow}
            </p>
            <h1 className="text-[clamp(3rem,4.25vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-slate-950">
              {heroContent.title}
            </h1>
            <p className="mt-7 max-w-[38rem] text-lg leading-8 text-slate-700 sm:text-xl">{heroContent.description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={heroContent.primaryAction.href} size="lg">{heroContent.primaryAction.label}</Button>
              <Button href={heroContent.secondaryAction.href} size="lg" variant="secondary">{heroContent.secondaryAction.label}</Button>
            </div>
          </div>

          <div className="relative z-10 mx-auto aspect-[3/2] w-full max-w-[46rem] sm:max-w-[52rem] lg:mx-0 lg:ml-auto lg:w-[80%] lg:max-w-none xl:absolute xl:left-[32%] xl:top-[54%] xl:ml-0 xl:w-[55%] xl:-translate-y-1/2">
            <Image
              alt="AICA air-mobility vehicle concept in a grounded engineering visualization"
              className="object-contain object-bottom lg:object-right-bottom"
              fill
              priority
              sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 54vw, (min-width: 640px) 82vw, 100vw"
              src="/images/hero/hero-aircar-transparent-v2.webp"
            />
          </div>
        </div>

        <div className="relative z-20 mt-10 grid gap-5 lg:mt-14 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <Card className="overflow-hidden p-0" tone="feature">
            <div className="relative aspect-[3/2] overflow-hidden bg-slate-50">
              <Image alt="Aircar concept blueprint with orthographic engineering views" className="object-cover" fill sizes="(min-width: 1024px) 58vw, 100vw" src="/images/blueprints/aircar-blueprints.webp" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
            </div>
            <div className="border-t border-slate-200 px-7 py-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-aica-700">Concept reference</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Geometry documented for review.</h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">Visual studies support discussion and traceable engineering questions; they do not represent a validated aircraft.</p>
            </div>
          </Card>

          <Card className="overflow-hidden p-0" tone="feature">
            <div className="relative aspect-[3/2] overflow-hidden bg-aica-50">
              <Image alt="Conceptual energy-system architecture study" className="object-cover" fill sizes="(min-width: 1024px) 38vw, 100vw" src="/images/systems/system-energy.webp" />
            </div>
            <div className="border-y border-slate-200 px-7 py-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-aica-700">Program status</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Structured for engineering review.</h2>
            </div>
            <dl className="grid divide-y divide-slate-200">
              {heroContent.metrics.map((metric) => (
                <div className="grid gap-2 px-7 py-5 sm:grid-cols-[12rem_1fr] lg:grid-cols-1 xl:grid-cols-[10rem_1fr]" key={metric.label}>
                  <dt className="text-sm font-medium text-slate-500">{metric.label}</dt>
                  <dd className="text-base font-semibold text-slate-950">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>
      </Container>
    </section>
  );
}
