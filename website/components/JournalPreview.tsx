import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/Section";

import { journalRecords } from "@/data/journal";

export function JournalPreview() {
  return (
    <Section
      className="border-b border-slate-200/80 bg-white py-20 sm:py-24 lg:py-28"
      containerClassName="max-w-[88rem]"
      description="Updates, design decisions, research observations, and development milestones from the ongoing AICA engineering programme."
      eyebrow="Journal"
      title="Engineering notes from the AICA programme."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {journalRecords.map((entry) => (
          <Link href={`/journal/${entry.slug}`} className="flex h-full w-full max-w-[28.75rem] flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-subtle"
            key={entry.slug}
          >
            <div className="relative aspect-video w-full overflow-hidden border-b border-slate-200/80 bg-slate-50">
              <Image
                alt={entry.imageAlt}
                className="object-contain object-center"
                fill
                sizes="(min-width: 1024px) 440px, (min-width: 768px) calc(50vw - 2.25rem), calc(100vw - 2.5rem)"
                src={entry.image}
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-aica-700">
                {entry.category}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                {entry.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{entry.summary}</p>
              <p className="mt-6 border-t border-slate-200/80 pt-4 text-sm font-medium text-slate-500">
                Read engineering record <span aria-hidden="true">→</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
