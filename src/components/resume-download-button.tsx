"use client";

import { useState } from "react";
import { resumeData } from "@/data/resume";

type ResumeDownloadButtonProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

const variants = {
  primary:
    "border-white bg-foreground text-background hover:bg-emerald-200 hover:text-black",
  secondary:
    "border-white/[0.14] bg-white/[0.04] text-foreground hover:border-emerald-300/45 hover:bg-emerald-300/10 hover:text-emerald-100",
};

export function ResumeDownloadButton({
  children = "Download Resume",
  className = "",
  variant = "primary",
}: ResumeDownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  async function handleDownload() {
    if (isGenerating) {
      return;
    }

    setIsGenerating(true);

    try {
      const { downloadResumePdf } = await import("@/lib/generateResumePdf");
      await downloadResumePdf(resumeData);
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <button
      type="button"
      className={`inline-flex min-h-11 items-center justify-center rounded-lg border px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 disabled:cursor-wait disabled:opacity-70 ${variants[variant]} ${className}`}
      disabled={isGenerating}
      onClick={handleDownload}
    >
      {isGenerating ? "Generating..." : children}
    </button>
  );
}
