import { Container } from "@/components/container";
import { EngineeringArea } from "@/components/engineering-area";
import { SectionHeading } from "@/components/section-heading";
import { engineeringAreas } from "@/lib/portfolio";

export function EngineeringAreas() {
  return (
    <section id="areas" aria-labelledby="areas-heading" className="border-t border-border py-16 sm:py-20">
      <Container>
        <SectionHeading
          id="areas-heading"
          number="01"
          title="Engineering areas"
          description="The areas I work in, and the tools I’ve used along the way."
        />
        <div className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringAreas.map((area) => (
            <EngineeringArea key={area.title} area={area} />
          ))}
        </div>
      </Container>
    </section>
  );
}
