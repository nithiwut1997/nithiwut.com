import { ArchitectureDiagram } from "@/components/architecture-diagram";
import type { EngineeringStory } from "@/lib/portfolio";

type EngineeringWorkItemProps = {
  story: EngineeringStory;
  index: number;
};

export function EngineeringWorkItem({ story, index }: EngineeringWorkItemProps) {
  return (
    <article aria-labelledby={`${story.id}-heading`} className="my-5 grid gap-7 rounded-xl border border-border bg-surface p-5 shadow-[0_18px_45px_-36px_rgba(23,32,51,0.55)] sm:p-7 lg:grid-cols-[2.25rem_minmax(0,1fr)_minmax(22rem,1fr)] lg:gap-7">
      <span aria-hidden="true" className="font-mono text-sm font-medium text-accent">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <p className="font-mono text-xs text-accent">{story.category}</p>
        <h3 id={`${story.id}-heading`} className="mt-3 text-2xl font-medium leading-snug tracking-tight">
          {story.title}
        </h3>
        <dl className="mt-6 grid gap-0 text-sm leading-7">
          <div className="border-t border-border py-4">
            <dt className="font-medium">Context</dt>
            <dd className="mt-1 text-secondary">{story.context}</dd>
          </div>
          <div className="border-t border-border py-4">
            <dt className="font-medium">Approach</dt>
            <dd className="mt-1 text-secondary">{story.approach}</dd>
          </div>
          <div className="border-t border-border pt-4">
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
