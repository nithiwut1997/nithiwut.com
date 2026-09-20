import { Container } from "@/components/container";
import { EngineeringArea } from "@/components/engineering-area";
import { SectionHeading } from "@/components/section-heading";
import { engineeringAreas } from "@/lib/portfolio";

export function EngineeringAreas() {
  return (
    <section id="areas" aria-labelledby="areas-heading" className="border-t border-border bg-surface py-16 sm:py-24">
      <Container>
        <SectionHeading
          id="areas-heading"
          number="01"
          title="Engineering areas"
          description="The areas I work in, and the tools I’ve used along the way."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringAreas.map((area, index) => (
            <EngineeringArea key={area.title} area={area} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
