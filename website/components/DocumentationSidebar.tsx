"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { documentationNavigation } from "@/data/site";
import { cn } from "@/lib/cn";

export function DocumentationSidebar() {
  const pathname = usePathname();
  return (
    <aside className="lg:sticky lg:top-28">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Documentation</p>
      <nav aria-label="Documentation navigation" className="border-l border-slate-200">
        {documentationNavigation.map((item) => {
          const active = pathname === item.href;
          return <Link aria-current={active ? "page" : undefined} className={cn("block border-l-2 px-4 py-2.5 text-sm font-semibold hover:border-aica-600 hover:bg-aica-50 hover:text-aica-800", active ? "border-aica-600 bg-aica-50 text-aica-800" : "border-transparent text-slate-600")} href={item.href} key={item.href}>{item.label}</Link>;
        })}
      </nav>
    </aside>
  );
}
