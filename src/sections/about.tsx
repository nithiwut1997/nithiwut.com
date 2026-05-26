import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { strengths } from "@/lib/portfolio";

export function About() {
  return (
    <section id="about" className="border-b border-white/10 py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="About"
            title="Backend and cloud depth, with full-stack range."
            description="Builds production systems across banking and startup environments. Comfortable contributing across the stack, while strongest in scalable APIs, async workflows, cloud delivery, and reliable operations."
          />

          <div className="grid gap-4">
            {strengths.map((strength) => (
              <article
                key={strength}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-200 hover:border-emerald-300/30 hover:bg-white/[0.055]"
              >
                <p className="text-base leading-8 text-zinc-300">{strength}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
