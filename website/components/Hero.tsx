import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { EngineeringDiagram } from "@/components/EngineeringDiagram";
import { heroContent } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-aica-200 bg-aica-50 px-4 py-2 text-sm font-semibold text-aica-800 shadow-subtle">
              {heroContent.eyebrow}
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              {heroContent.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              {heroContent.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={heroContent.primaryAction.href} size="lg">
                {heroContent.primaryAction.label}
              </Button>
              <Button
                href={heroContent.secondaryAction.href}
                size="lg"
                variant="secondary"
              >
                {heroContent.secondaryAction.label}
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden p-0" tone="feature">
            <div className="border-b border-slate-200 bg-slate-50/80">
              <EngineeringDiagram />
            </div>
            <div className="border-b border-slate-200 px-7 py-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-aica-700">
                Program Status
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                Structured for engineering review.
              </h2>
            </div>
            <dl className="grid divide-y divide-slate-200">
              {heroContent.metrics.map((metric) => (
                <div className="grid gap-2 px-7 py-5 sm:grid-cols-[12rem_1fr]" key={metric.label}>
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


