import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { education } from "@/lib/portfolio";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="border-t border-border py-14 sm:py-16">
      <Container className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-12">
        <SectionHeading id="education-heading" number="05" title="Education" />
        <div>
          <h3 className="text-lg font-medium">{education.school}</h3>
          <p className="mt-2 text-sm leading-7 text-secondary">{education.degree}</p>
          <p className="mt-5 text-sm leading-7"><span className="text-secondary">Senior project: </span>{education.seniorProject}</p>
          <p className="mt-2 text-sm leading-7 text-secondary">{education.description}</p>
        </div>
      </Container>
    </section>
  );
}
