import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { Container } from "@/components/container";
import { EngineeringWorkItem } from "@/components/engineering-work-item";
import { SectionHeading } from "@/components/section-heading";
import { engineeringNotes, engineeringStories } from "@/lib/portfolio";

export function EngineeringWork() {
  return (
    <section data-reveal id="work" aria-labelledby="work-heading" className="border-t border-border bg-background py-14 sm:py-16">
      <Container>
        <SectionHeading
          id="work-heading"
          number="02"
          title="Selected engineering work"
          description="A closer look at production problems and the decisions behind the implementation."
        />
        <div className="mt-8 grid gap-5">
          {engineeringStories.map((story, index) => (
            <EngineeringWorkItem key={story.id} story={story} index={index} />
          ))}
        </div>
        <div className="mt-8 border-t border-border pt-7">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted">Further engineering notes</p>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {engineeringNotes.map((note) => (
              <article key={note.id} aria-labelledby={`${note.id}-heading`} className="rounded-lg border border-border bg-surface p-5 sm:p-6">
                <h3 id={`${note.id}-heading`} className="text-lg font-medium">{note.title}</h3>
                <p className="mt-3 text-sm leading-7 text-secondary">{note.description}</p>
                {note.diagram ? (
                  <div className="mt-5">
                    <ArchitectureDiagram {...note.diagram} compact />
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
