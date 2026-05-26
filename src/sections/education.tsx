import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { education } from "@/lib/portfolio";

export function Education() {
  return (
    <section id="education" className="border-b border-white/10 py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Education"
            title="Computer engineering foundation with applied machine learning work."
            description={`${education.degree} from ${education.school}, ${education.location}.`}
          />

          <article className="rounded-lg border border-white/10 bg-panel/[0.76] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase text-emerald-300">
              Senior Project
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              {education.seniorProject}
            </h3>
            <ul className="mt-6 space-y-3">
              {education.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-7 text-zinc-400">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
}
