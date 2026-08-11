"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { navigationItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  function closeMenu(returnFocus = false) {
    setIsOpen(false);
    if (returnFocus) requestAnimationFrame(() => triggerRef.current?.focus());
  }

  useEffect(() => {
    if (!isOpen) return;
    firstLinkRef.current?.focus();
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-[100] isolate border-b border-slate-200/80 bg-white/95 shadow-subtle backdrop-blur-sm">
      <Container>
        <div className="flex min-h-[4.75rem] items-center justify-between gap-6">
          <Link className="flex items-center gap-3" href="/" aria-label="AICA home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-aica-200 bg-aica-50 text-sm font-bold text-aica-800 shadow-subtle">AI</span>
            <span className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-wide text-slate-950">AICA</span>
              <span className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Air Mobility</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navigationItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return <Link aria-current={active ? "page" : undefined} className={cn("rounded-full px-1 py-2 text-sm font-semibold transition-colors hover:text-aica-800", active ? "text-aica-800" : "text-slate-600")} href={item.href} key={item.href}>{item.label}</Link>;
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/whitepaper" variant="secondary">Engineering Overview</Button>
            <Button href={siteConfig.xUrl} target="_blank" rel="noopener noreferrer">Project Updates <span className="sr-only">(opens in a new tab)</span></Button>
          </div>

          <button
            ref={triggerRef}
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-subtle transition-colors hover:bg-slate-50 lg:hidden"
            onClick={() => isOpen ? closeMenu(true) : setIsOpen(true)}
            type="button"
          >
            <span className="sr-only">{isOpen ? "Close menu" : "Menu"}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className={cn("h-0.5 rounded-full bg-current transition-transform", isOpen && "translate-y-2 rotate-45")} />
              <span className={cn("h-0.5 rounded-full bg-current transition-opacity", isOpen && "opacity-0")} />
              <span className={cn("h-0.5 rounded-full bg-current transition-transform", isOpen && "-translate-y-2 -rotate-45")} />
            </span>
          </button>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="lg:hidden">
            <nav className="flex flex-col gap-1 border-t border-slate-200 py-4" aria-label="Mobile navigation">
              {navigationItems.map((item, index) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return <Link ref={index === 0 ? firstLinkRef : undefined} aria-current={active ? "page" : undefined} className={cn("rounded-xl px-3 py-3 text-sm font-semibold hover:bg-aica-50 hover:text-aica-800", active ? "bg-aica-50 text-aica-800" : "text-slate-700")} href={item.href} key={item.href} onClick={() => closeMenu()}>{item.label}</Link>;
              })}
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <Button href="/whitepaper" onClick={() => closeMenu()} variant="secondary">Engineering Overview</Button>
                <Button href={siteConfig.xUrl} onClick={() => closeMenu(true)} target="_blank" rel="noopener noreferrer">Project Updates <span className="sr-only">(opens in a new tab)</span></Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
