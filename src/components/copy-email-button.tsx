"use client";

import { useEffect, useRef, useState } from "react";

type CopyEmailButtonProps = { email: string };

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // The mailto link remains available when clipboard access is unavailable.
    }
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="inline-flex min-h-11 shrink-0 items-center border-b border-white/30 px-1 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[#b9c5d1] transition-colors hover:border-white hover:text-white"
      aria-label={copied ? "Email address copied" : "Copy email address"}
    >
      <span aria-hidden="true">{copied ? "Copied" : "Copy email"}</span>
      <span className="sr-only" aria-live="polite">{copied ? "Copied" : ""}</span>
    </button>
  );
}
