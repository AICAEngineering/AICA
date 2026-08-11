import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export function InvestorCta() {
  return (
    <section className="border-b border-slate-200 bg-white py-14 sm:py-16" aria-labelledby="investor-cta-title">
      <Container>
        <div className="grid gap-7 border-l-2 border-aica-600 pl-6 sm:pl-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-aica-700">Investment</p>
            <h2 id="investor-cta-title" className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">The next stage requires physical evidence.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">AICA is preparing to move from analytical and simulated engineering toward subsystem development, bench testing, and progressive physical validation.</p>
          </div>
          <Button href="/investors" variant="secondary">Investor Information <span aria-hidden="true" className="ml-1">→</span></Button>
        </div>
      </Container>
    </section>
  );
}
