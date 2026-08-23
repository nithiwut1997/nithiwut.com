import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { EngineeringOwnership } from "@/sections/leadership";
import { experience } from "@/lib/portfolio";

export function Experience() {
  return (
    <section id="experience" className="border-b border-white/10 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Professional Experience"
          title="A backend track record across banking, startup, and public-sector work."
          description="Six years building production services, cloud workflows, and data-driven applications with increasing technical ownership."
        />

        <div className="mt-12">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="grid gap-6 border-t border-white/10 py-9 md:grid-cols-[0.8fr_1.4fr]"
            >
              <div>
                <p className="text-sm font-semibold text-emerald-300">{item.period}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.company}</h3>
                <p className="mt-2 text-zinc-400">{item.role}</p>
                <p className="mt-1 text-sm text-zinc-500">{item.location}</p>
              </div>

              <div>
                <p className="text-base leading-8 text-zinc-300">{item.description}</p>
                <ul className="mt-5 space-y-3">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-7 text-zinc-400">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-medium text-zinc-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <EngineeringOwnership />
      </Container>
    </section>
  );
}
