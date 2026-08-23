import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { architectureWorkflows } from "@/lib/portfolio";

export function InfrastructureArchitecture() {
  return (
    <section id="architecture" className="border-b border-white/10 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Architecture"
            title="Production workflows, made concrete."
            description="Two patterns used in real backend work: queue-based processing for long-running exports and event-driven transformation for vehicle images."
          />
          <div className="w-fit rounded-lg border border-emerald-300/25 bg-emerald-300/10 px-4 py-3 text-sm font-semibold text-emerald-100">
            Resume-backed systems
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {architectureWorkflows.map((workflow) => (
            <article
              key={workflow.title}
              className="rounded-lg border border-white/10 bg-panel/[0.82] p-6 sm:p-8"
            >
              <div className="border-b border-white/10 pb-5">
                <p className="font-mono text-xs uppercase text-zinc-500">
                  System flow
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {workflow.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {workflow.description}
                </p>
              </div>

              <ol className="mt-6" aria-label={`${workflow.title} workflow`}>
                {workflow.flow.map((step, index) => (
                  <li
                    key={step.label}
                    className="grid grid-cols-[2.25rem_1fr] gap-3"
                  >
                    <div className="flex flex-col items-center">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-300/25 bg-emerald-300/10 font-mono text-xs font-semibold text-emerald-200">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {index < workflow.flow.length - 1 ? (
                        <span className="my-2 h-7 w-px bg-gradient-to-b from-emerald-300/60 to-white/10" />
                      ) : null}
                    </div>
                    <div className="pb-5">
                      <h4 className="text-sm font-semibold text-zinc-100">
                        {step.label}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-zinc-400">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
