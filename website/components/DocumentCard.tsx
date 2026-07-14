import Link from "next/link";
import { Card } from "@/components/Card";

export function DocumentCard({ title, description, href, meta }: { title: string; description: string; href: string; meta: string }) {
  return (
    <Link className="block h-full" href={href}>
      <Card className="flex h-full flex-col" interactive tone="feature">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-aica-700">{meta}</p>
        <h2 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">{title}</h2>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{description}</p>
        <span className="mt-7 text-sm font-semibold text-aica-700">Read document <span aria-hidden="true">→</span></span>
      </Card>
    </Link>
  );
}
