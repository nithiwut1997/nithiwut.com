import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border-white bg-foreground text-background hover:bg-emerald-200 hover:text-black",
  secondary:
    "border-white/[0.14] bg-white/[0.04] text-foreground hover:border-emerald-300/45 hover:bg-emerald-300/10 hover:text-emerald-100",
  ghost:
    "border-transparent bg-transparent text-zinc-300 hover:text-white",
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
      className={`inline-flex min-h-11 items-center justify-center rounded-lg border px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${variants[variant]} ${className}`}
      rel={externalRel}
      target={target}
      {...props}
    >
      {children}
    </a>
  );
}
