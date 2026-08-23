import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/portfolio";

export function Skills() {
  return (
    <section id="skills" className="border-b border-white/10 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Core Skills"
            title="A backend-first production toolkit."
            description="Hands-on experience across service development, data-intensive workloads, cloud-native architecture, and reliable delivery."
          />
          <p className="max-w-sm text-sm leading-7 text-zinc-500">
            Frontend experience complements my primary focus on backend,
            architecture, cloud, and platform engineering.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const isPrimary = group.emphasis === "primary";
            const isSupporting = group.emphasis === "supporting";

            return (
              <article
                key={group.title}
                className={`rounded-lg border p-5 transition duration-200 hover:bg-white/[0.055] ${
                  isPrimary
                    ? "border-emerald-300/25 bg-emerald-300/[0.055] hover:border-emerald-300/40"
                    : isSupporting
                      ? "border-white/[0.07] bg-black/20 hover:border-white/15"
                      : "border-white/10 bg-panel/[0.76] hover:border-cyan-300/25"
                }`}
              >
              <h3
                className={`text-lg font-semibold ${
                  isSupporting ? "text-zinc-300" : "text-white"
                }`}
              >
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className={`text-sm leading-6 ${
                      isSupporting ? "text-zinc-500" : "text-zinc-400"
                    }`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
