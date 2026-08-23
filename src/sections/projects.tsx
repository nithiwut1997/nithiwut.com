import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/lib/portfolio";

const detailLabels = [
  { key: "problem", label: "Problem" },
  { key: "approach", label: "Engineering approach" },
  { key: "value", label: "Engineering value" },
] as const;

export function Projects() {
  return (
    <section id="highlights" className="border-b border-white/10 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Engineering Highlights"
          title="Case studies from real production work."
          description="Selected backend challenges, the engineering approach behind them, and the value of each design—without invented metrics or duplicated resume bullets."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {caseStudies.map((study) => {
            const content = (
              <>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-xs uppercase text-zinc-500">
                    {study.context}
                  </p>
                  {study.link ? (
                    <span className="font-mono text-xs font-medium text-emerald-300">
                      View live site ↗
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {study.title}
                </h3>

                <dl className="mt-6 space-y-5">
                  {detailLabels.map(({ key, label }) => (
                    <div key={key}>
                      <dt className="font-mono text-xs uppercase tracking-wide text-emerald-300/80">
                        {label}
                      </dt>
                      <dd className="mt-2 text-sm leading-7 text-zinc-400">
                        {study[key]}
                      </dd>
                    </div>
                  ))}
                </dl>

                {study.flow ? (
                  <div className="mt-6 border-y border-white/10 py-4">
                    <p className="sr-only">Conceptual workflow</p>
                    <ol className="flex flex-wrap items-center gap-2 text-xs">
                      {study.flow.map((step, index) => (
                        <li key={step} className="flex items-center gap-2">
                          <span className="rounded-md border border-emerald-300/20 bg-emerald-300/[0.06] px-2.5 py-2 font-mono text-zinc-300">
                            {step}
                          </span>
                          {index < study.flow!.length - 1 ? (
                            <span className="text-emerald-300" aria-hidden="true">
                              →
                            </span>
                          ) : null}
                        </li>
                      ))}
                    </ol>
                  </div>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs font-medium text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            );

            const className = `rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-200 hover:border-emerald-300/35 hover:bg-white/[0.055] sm:p-7 ${
              study.featured ? "lg:col-span-2" : ""
            }`;

            return study.link ? (
              <a
                key={study.title}
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${className} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300`}
                aria-label={`Read the ${study.title} case study and open the live site`}
              >
                {content}
              </a>
            ) : (
              <article key={study.title} className={className}>
                {content}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
