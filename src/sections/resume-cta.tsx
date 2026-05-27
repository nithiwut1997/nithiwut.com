import { Container } from "@/components/container";
import { LinkButton } from "@/components/link-button";
import { ResumeDownloadButton } from "@/components/resume-download-button";
import { socialLinks } from "@/lib/portfolio";

export function ResumeCta() {
  const linkedIn = socialLinks.find((link) => link.label === "LinkedIn");

  return (
    <section id="resume" className="border-b border-white/10 py-20 sm:py-24">
      <Container>
        <div className="rounded-lg border border-white/10 bg-panel-strong/[0.9] p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-emerald-300">
              Resume
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Generate the latest resume as a PDF.
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-400">
              The PDF is generated from structured resume data in the codebase,
              so content can be updated without maintaining a static file.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <ResumeDownloadButton>
              Download PDF
            </ResumeDownloadButton>
            {linkedIn ? (
              <LinkButton
                href={linkedIn.href}
                target="_blank"
                variant="secondary"
              >
                LinkedIn
              </LinkButton>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
