import type { EngineeringArea as EngineeringAreaData } from "@/lib/portfolio";

export function EngineeringArea({ area, index }: { area: EngineeringAreaData; index: number }) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-border bg-surface p-5 shadow-[0_12px_30px_-30px_rgba(23,32,51,0.5)] transition-colors hover:border-diagram-border sm:p-6">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-accent opacity-45 transition-opacity group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold">{area.title}</h3>
        <p className="font-mono text-xs font-medium tracking-[0.08em] text-accent">{String(index + 1).padStart(2, "0")}</p>
      </div>
      <p className="mt-3 text-sm leading-6 text-secondary">{area.description}</p>
      <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1 border-t border-border pt-4 text-sm leading-7 text-secondary" aria-label={`${area.title} technologies`}>
        {area.technologies.map((technology) => (
          <li key={technology} className="after:ml-3 after:text-border after:content-['/'] last:after:hidden">{technology}</li>
        ))}
      </ul>
    </article>
  );
}
