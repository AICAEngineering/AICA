import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { getJournalRecord, journalRecords } from "@/data/journal";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return journalRecords.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const record = getJournalRecord(slug);

  if (!record) return {};

  return createPageMetadata({
    title: record.title,
    description: record.summary,
    path: `/journal/${record.slug}`,
  });
}

export default async function JournalRecordPage({ params }: PageProps) {
  const { slug } = await params;
  const record = getJournalRecord(slug);

  if (!record) notFound();

  return (
    <main id="main-content">
      <section className="border-b border-slate-200 bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <Breadcrumbs items={[{ label: "Engineering Journal", href: "/journal" }, { label: record.title }]} />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_30rem] lg:items-center lg:gap-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-aica-700">{record.category}</p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">{record.title}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700">{record.summary}</p>
              <dl className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-3">
                <div className="bg-aica-25 p-4">
                  <dt className="text-[.65rem] font-bold uppercase tracking-[.16em] text-slate-500">Version</dt>
                  <dd className="mt-2 text-sm font-semibold text-slate-950">{record.version}</dd>
                </div>
                <div className="bg-aica-25 p-4">
                  <dt className="text-[.65rem] font-bold uppercase tracking-[.16em] text-slate-500">Evidence status</dt>
                  <dd className="mt-2 text-sm font-semibold text-slate-950">{record.evidenceStatus}</dd>
                </div>
                <div className="bg-aica-25 p-4">
                  <dt className="text-[.65rem] font-bold uppercase tracking-[.16em] text-slate-500">Initial public record</dt>
                  <dd className="mt-2 text-sm font-semibold text-slate-950">{record.initialPublicRecord}</dd>
                </div>
              </dl>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <Image
                alt={record.imageAlt}
                className="object-contain object-center"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                src={record.image}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,48rem)_16rem] lg:items-start lg:justify-between">
            <article>
              {record.sections.map((section, index) => (
                <section className="border-t border-slate-200 py-9 first:pt-0 first:border-t-0" key={section.title}>
                  <p className="font-mono text-xs text-aica-700">0{index + 1}</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{section.title}</h2>
                  {section.paragraphs.map((paragraph) => <p className="mt-5 text-base leading-8 text-slate-600" key={paragraph}>{paragraph}</p>)}
                  {section.items && (
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {section.items.map((item) => <li className="flex gap-3 border-t border-slate-200 pt-3 text-sm leading-6 text-slate-600" key={item}><span aria-hidden="true" className="text-aica-600">—</span>{item}</li>)}
                    </ul>
                  )}
                </section>
              ))}
            </article>

            <aside className="border-l-2 border-aica-600 pl-5 lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-aica-700">Record boundary</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                {record.limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-aica-25 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-aica-700">Continue reading</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Explore the engineering programme.</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">Use the Journal as the programme record, then follow the research questions, documentation framework, and conditional development roadmap.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/journal">Back to Engineering Journal</Button>
              <Button href="/research" variant="secondary">Research</Button>
              <Link className="inline-flex items-center px-3 py-2 text-sm font-semibold text-aica-700 hover:text-aica-900" href="/documentation">Documentation →</Link>
              <Link className="inline-flex items-center px-3 py-2 text-sm font-semibold text-aica-700 hover:text-aica-900" href="/roadmap">Roadmap →</Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
