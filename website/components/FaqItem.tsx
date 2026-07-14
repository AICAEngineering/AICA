"use client";

type FaqItemProps = {
  answer: string;
  question: string;
};

export function FaqItem({ answer, question }: FaqItemProps) {
  return (
    <details className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-subtle transition duration-300 open:shadow-soft">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
        <span className="text-lg font-semibold leading-7 text-slate-950">{question}</span>
        <span
          aria-hidden="true"
          className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition group-open:rotate-45 group-open:border-aica-200 group-open:text-aica-800"
        >
          +
        </span>
      </summary>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">{answer}</p>
    </details>
  );
}
