import { siteConfig } from "@/data/site";

export function DocumentViewer() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-soft">
      <div className="flex flex-col gap-3 border-b border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-700">AICA Engineering Overview</p>
          <p className="mt-1 text-xs text-slate-500">PDF · Version 1.0 · Published 14 July 2026 · 56 KB</p>
        </div>
        <a className="text-sm font-semibold text-aica-700 hover:text-aica-900" href={siteConfig.primaryDocumentUrl} target="_blank" rel="noreferrer">Open PDF in a new tab <span aria-hidden="true">↗</span></a>
      </div>
      <div className="bg-white p-6 md:hidden">
        <p className="text-sm leading-6 text-slate-600">The embedded viewer is available on larger screens. The complete document is also provided as accessible HTML below.</p>
        <a className="mt-4 inline-flex text-sm font-semibold text-aica-700 underline underline-offset-4" href={siteConfig.primaryDocumentUrl}>Download the engineering overview PDF</a>
      </div>
      <iframe className="hidden h-[72vh] min-h-[36rem] w-full md:block" src={`${siteConfig.primaryDocumentUrl}#view=FitH`} title="AICA Engineering Overview PDF viewer">
        <p><a href={siteConfig.primaryDocumentUrl}>Download the AICA Engineering Overview PDF.</a></p>
      </iframe>
    </div>
  );
}
