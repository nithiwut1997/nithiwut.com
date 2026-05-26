import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { leadership } from "@/lib/portfolio";

export function Leadership() {
  return (
    <section id="leadership" className="border-b border-white/10 py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Leadership"
            title="Squad contribution beyond implementation."
            description="Technical leadership, delivery coordination, production support, and onboarding work that helps the team move with clearer context."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {leadership.map((item) => (
              <article
                key={item}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-200 hover:border-emerald-300/30 hover:bg-white/[0.055]"
              >
                <p className="text-sm leading-7 text-zinc-300">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
