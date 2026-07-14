import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  tone?: "default" | "soft" | "outline" | "feature";
} & HTMLAttributes<HTMLDivElement>;

export function Card({
  children,
  className,
  interactive = false,
  tone = "default",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "group/card rounded-2xl border p-6 transition duration-300",
        tone === "default" && "border-slate-200/80 bg-white shadow-subtle",
        tone === "soft" && "border-aica-100 bg-aica-50/80 shadow-subtle",
        tone === "outline" && "border-slate-200/80 bg-white/70",
        tone === "feature" && "border-slate-200/80 bg-white shadow-soft",
        interactive && "hover:-translate-y-0.5 hover:border-aica-200 hover:shadow-soft",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
