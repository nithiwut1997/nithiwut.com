import type { EngineeringArea as EngineeringAreaData } from "@/lib/portfolio";

export function EngineeringArea({ area }: { area: EngineeringAreaData }) {
  return (
    <article className="border-t border-border pt-5">
      <h3 className="text-base font-medium">{area.title}</h3>
      <p className="mt-2 text-sm leading-6 text-secondary">{area.description}</p>
      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm leading-7 text-secondary" aria-label={`${area.title} technologies`}>
        {area.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  );
}
