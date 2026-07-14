import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const sizeClasses = {
  narrow: "max-w-4xl",
  default: "max-w-7xl",
  wide: "max-w-[88rem]",
};

export function Container<T extends ElementType = "div">({
  as,
  children,
  className,
  size = "default",
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", sizeClasses[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
