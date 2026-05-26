import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/portfolio";

export function Skills() {
  return (
    <section id="skills" className="border-b border-white/10 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Skills"
            title="Practical tools for production systems."
            description="A focused stack for building, shipping, and operating backend-heavy products."
          />
          <p className="max-w-sm text-sm leading-7 text-zinc-500">
            Strongest fit: backend-heavy product teams, cloud-native delivery, marketplace workflows, and systems that need careful production ownership.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-white/10 bg-panel/[0.76] p-5 transition duration-200 hover:border-cyan-300/25 hover:bg-white/[0.055]"
            >
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm leading-6 text-zinc-400">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
