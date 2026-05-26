import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/portfolio";

export function Projects() {
  return (
    <section id="projects" className="border-b border-white/10 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Resume-backed engineering work."
          description="Selected systems from banking, startup, public-sector, and university work, focused on backend delivery, platform reliability, and applied machine learning."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-80 flex-col justify-between rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-200 hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-white/[0.055]"
            >
              <div>
                <p className="font-mono text-xs text-zinc-500">selected/work</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-5 text-sm leading-7 text-zinc-400">{project.description}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs font-medium text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
