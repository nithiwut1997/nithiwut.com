import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { workingPrinciples } from "@/lib/portfolio";

export function HowIWork() {
  return (
    <section id="approach" aria-labelledby="approach-heading" className="border-t border-border bg-surface-secondary py-12 sm:py-14">
      <Container>
        <SectionHeading id="approach-heading" number="04" title="How I work" />
        <div className="mt-8 grid gap-7 md:grid-cols-3 md:gap-10">
          {workingPrinciples.map((principle) => (
            <div key={principle.title} className="border-t border-diagram-border pt-5">
              <h3 className="text-base font-semibold">{principle.title}</h3>
              <p className="mt-3 text-sm leading-7 text-secondary">{principle.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
