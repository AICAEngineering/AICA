"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Container";
import { navigationItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

export function Footer() {
  const pathname = usePathname();
  return (
    <footer className="border-t border-slate-200 bg-white py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.75fr)] lg:items-start lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-aica-200 bg-aica-50 text-xs font-bold text-aica-800">AI</span>
              <span className="text-base font-bold tracking-wide text-slate-950">{siteConfig.name}</span>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">An independent, early-stage engineering initiative using public documentation to define a path from concept toward prototype validation.</p>
          </div>
          <nav className="grid max-w-xl grid-cols-2 gap-8 sm:gap-12 lg:justify-self-end" aria-label="Footer navigation">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Explore</p>
              <div className="mt-4 flex flex-col items-start gap-3">
                {navigationItems.map((item) => {
                  const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return <Link aria-current={active ? "page" : undefined} className={cn("text-sm font-semibold transition-colors hover:text-aica-800", active ? "text-aica-800" : "text-slate-600")} href={item.href} key={item.href}>{item.label}</Link>;
                })}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Project</p>
              <div className="mt-4 flex flex-col items-start gap-3">
                <Link aria-current={pathname === "/whitepaper" ? "page" : undefined} className={cn("text-sm font-semibold transition-colors hover:text-aica-800", pathname === "/whitepaper" ? "text-aica-800" : "text-slate-600")} href="/whitepaper">Engineering Overview</Link>
                <Link aria-current={pathname === "/support" ? "page" : undefined} className={cn("text-sm font-semibold transition-colors hover:text-aica-800", pathname === "/support" ? "text-aica-800" : "text-slate-600")} href="/support">Support AICA</Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">Copyright {new Date().getFullYear()} AICA. Independent engineering initiative.</div>
      </Container>
    </footer>
  );
}
