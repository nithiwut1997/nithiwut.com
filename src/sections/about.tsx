import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { profile, strengths } from "@/lib/portfolio";

export function About() {
  return (
    <section id="about" className="border-b border-white/10 py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="About"
            title="Backend engineering is the core of my work."
            description={`${profile.summary} My strongest areas are Java, Spring Boot, RESTful APIs, relational databases, asynchronous processing, cloud-native delivery, and production reliability.`}
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
