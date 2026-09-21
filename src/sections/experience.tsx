import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/portfolio";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-t border-border bg-surface py-14 sm:py-16">
      <Container>
        <SectionHeading id="experience-heading" number="03" title="Professional experience" />
        <div className="relative mt-8 before:absolute before:bottom-8 before:left-[5px] before:top-8 before:w-px before:bg-border">
          {experience.map((item, index) => (
            <article key={item.company} className="relative grid gap-4 border-t border-border py-6 pl-8 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:gap-10">
              <span aria-hidden="true" className={`absolute left-0 top-9 h-[11px] w-[11px] rounded-full border-2 border-surface ${index === 0 ? "bg-accent ring-4 ring-accent-subtle" : "bg-diagram-border"} first:top-1`} />
              <div>
                <p className="font-mono text-xs text-muted">{item.period}</p>
                <h3 className={`mt-3 max-w-sm leading-7 ${index === 0 ? "text-2xl font-semibold" : "text-xl font-medium"}`}>{item.company}</h3>
                <p className="mt-2 text-sm text-secondary">{item.role}</p>
              </div>
              <div className="text-sm leading-7 text-secondary">
                <p>{item.description}</p>
                <ul className="mt-4 list-disc space-y-2 pl-4 marker:text-muted">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="pl-1">{highlight}</li>
                  ))}
                </ul>
                {item.link ? (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link mt-3 inline-flex min-h-11 items-center gap-2"
                  >
                    {item.link.label}
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
