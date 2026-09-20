import type { EngineeringArea as EngineeringAreaData } from "@/lib/portfolio";

export function EngineeringArea({ area, index }: { area: EngineeringAreaData; index: number }) {
  return (
    <article className="rounded-lg border border-border bg-background p-5 transition-colors hover:border-diagram-border hover:bg-accent-subtle/40 sm:p-6">
      <p className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</p>
      <h3 className="mt-5 text-base font-semibold">{area.title}</h3>
      <p className="mt-2 text-sm leading-6 text-secondary">{area.description}</p>
      <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 border-t border-border pt-4 text-sm leading-7 text-secondary" aria-label={`${area.title} technologies`}>
        {area.technologies.map((technology) => (
          <li key={technology} className="after:ml-3 after:text-border after:content-['/'] last:after:hidden">{technology}</li>
        ))}
      </ul>
    </article>
  );
}
