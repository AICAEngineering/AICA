import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl" {...props} />,
    h2: (props) => <h2 className="mt-12 scroll-mt-28 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl" {...props} />,
    h3: (props) => <h3 className="mt-8 scroll-mt-28 text-xl font-semibold text-slate-950" {...props} />,
    p: (props) => <p className="mt-5 text-base leading-8 text-slate-600" {...props} />,
    ul: (props) => <ul className="mt-5 list-disc space-y-3 pl-6 text-slate-600 marker:text-aica-700" {...props} />,
    ol: (props) => <ol className="mt-5 list-decimal space-y-3 pl-6 text-slate-600 marker:font-semibold marker:text-aica-700" {...props} />,
    li: (props) => <li className="pl-1 leading-7" {...props} />,
    a: (props) => <a className="font-semibold text-aica-700 underline decoration-aica-200 underline-offset-4 hover:text-aica-900" {...props} />,
    blockquote: (props) => <blockquote className="my-8 border-l-4 border-aica-300 bg-aica-50 px-6 py-4 text-slate-700" {...props} />,
    hr: () => <hr className="my-10 border-slate-200" />,
    ...components,
  };
}

