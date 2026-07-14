import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link className="font-medium hover:text-aica-800" href="/">Home</Link></li>
        {items.map((item) => (
          <li className="flex items-center gap-2" key={item.label}>
            <span aria-hidden="true" className="text-slate-300">/</span>
            {item.href ? <Link className="font-medium hover:text-aica-800" href={item.href}>{item.label}</Link> : <span aria-current="page" className="text-slate-700">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

