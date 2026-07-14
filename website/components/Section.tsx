import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";
import { Container } from "@/components/Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  surface?: "default" | "soft" | "white";
} & HTMLAttributes<HTMLElement>;

export function Section({
  children,
  className,
  containerClassName,
  description,
  eyebrow,
  surface = "default",
  title,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-24 sm:py-28 lg:py-32",
        surface === "soft" && "border-y border-slate-200/70 bg-aica-25/80",
        surface === "white" && "bg-white",
        className,
      )}
      {...props}
    >
      <Container className={containerClassName}>
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-3xl sm:mb-14">
            {eyebrow && (
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-aica-700">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
