import type { ReactNode } from "react";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";

export function ContentPage({ children, eyebrow, breadcrumbs, sidebar }: { children: ReactNode; eyebrow: string; breadcrumbs: BreadcrumbItem[]; sidebar?: ReactNode }) {
  return (
    <main id="main-content" tabIndex={-1} className="border-b border-slate-200 bg-white py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <Breadcrumbs items={breadcrumbs} />
        <div className={sidebar ? "grid gap-12 lg:grid-cols-[16rem_minmax(0,50rem)] lg:items-start" : "mx-auto max-w-4xl"}>
          {sidebar}
          <article>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-aica-700">{eyebrow}</p>
            {children}
          </article>
        </div>
      </Container>
    </main>
  );
}
