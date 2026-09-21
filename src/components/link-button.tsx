import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

const variants = {
  primary:
    "border-accent bg-accent text-white hover:border-accent-hover hover:bg-accent-hover",
  secondary:
    "border-border bg-surface text-foreground hover:border-accent hover:bg-accent-subtle hover:text-accent-hover",
};

export function LinkButton({
  children,
  className = "",
  rel,
  target,
  variant = "primary",
  ...props
}: LinkButtonProps) {
  const externalRel = target === "_blank" ? "noopener noreferrer" : rel;

  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-3 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors ${variants[variant]} ${className}`}
      rel={externalRel}
      target={target}
      {...props}
    >
      {children}
    </a>
  );
}
