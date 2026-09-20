import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { workingPrinciples } from "@/lib/portfolio";

export function HowIWork() {
  return (
    <section id="approach" aria-labelledby="approach-heading" className="border-t border-border py-16 sm:py-20">
      <Container>
        <SectionHeading id="approach-heading" number="04" title="How I work" />
        <div className="mt-9 grid gap-8 md:grid-cols-3 md:gap-10">
          {workingPrinciples.map((principle) => (
            <div key={principle.title}>
              <h3 className="text-base font-medium">{principle.title}</h3>
              <p className="mt-3 text-sm leading-7 text-secondary">{principle.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
