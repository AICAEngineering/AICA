import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
};

type AnchorButtonProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = AnchorButtonProps | NativeButtonProps;

function isAnchorButtonProps(props: ButtonProps): props is AnchorButtonProps {
  return "href" in props && typeof props.href === "string";
}

const variantClasses = {
  primary:
    "border-transparent bg-aica-800 text-white shadow-soft hover:-translate-y-0.5 hover:bg-aica-900 active:translate-y-0 active:bg-aica-950",
  secondary:
    "border-slate-200 bg-white text-slate-950 shadow-subtle hover:-translate-y-0.5 hover:border-aica-200 hover:bg-aica-50",
  ghost: "border-transparent bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-950",
};

const sizeClasses = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

export function Button(props: ButtonProps) {
  const { children, className, size = "md", variant = "primary" } = props;
  const classes = cn(
    "inline-flex items-center justify-center rounded-full border font-semibold transition duration-200 disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-aica-300",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (isAnchorButtonProps(props)) {
    const {
      children: omittedChildren,
      className: omittedClassName,
      href,
      size: omittedSize,
      variant: omittedVariant,
      ...anchorProps
    } = props;

    void omittedChildren;
    void omittedClassName;
    void omittedSize;
    void omittedVariant;

    return (
      <a className={classes} href={href} {...anchorProps}>
        {children}
      </a>
    );
  }

  const {
    children: omittedChildren,
    className: omittedClassName,
    size: omittedSize,
    variant: omittedVariant,
    ...buttonProps
  } = props;

  void omittedChildren;
  void omittedClassName;
  void omittedSize;
  void omittedVariant;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
