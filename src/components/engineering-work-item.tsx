import { ArchitectureDiagram } from "@/components/architecture-diagram";
import type { EngineeringStory } from "@/lib/portfolio";

type EngineeringWorkItemProps = {
  story: EngineeringStory;
  index: number;
};

export function EngineeringWorkItem({ story, index }: EngineeringWorkItemProps) {
  return (
    <article aria-labelledby={`${story.id}-heading`} className="grid gap-7 border-t border-border py-10 lg:grid-cols-[3rem_minmax(0,1fr)_17rem] lg:gap-8 lg:py-12">
      <span aria-hidden="true" className="font-mono text-sm text-muted">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <p className="font-mono text-xs text-accent">{story.category}</p>
        <h3 id={`${story.id}-heading`} className="mt-3 text-2xl font-medium leading-snug tracking-tight">
          {story.title}
        </h3>
        <dl className="mt-6 space-y-5 text-sm leading-7">
          <div>
            <dt className="font-medium">Context</dt>
            <dd className="mt-1 text-secondary">{story.context}</dd>
          </div>
          <div>
            <dt className="font-medium">Approach</dt>
            <dd className="mt-1 text-secondary">{story.approach}</dd>
          </div>
          <div>
            <dt className="font-medium">Engineering considerations</dt>
            <dd className="mt-1 text-secondary">{story.consideration}</dd>
          </div>
        </dl>
      </div>
      <div className="lg:pt-8">
        <ArchitectureDiagram {...story.diagram} />
      </div>
    </article>
  );
}
