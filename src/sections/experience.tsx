import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/portfolio";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-t border-border py-16 sm:py-24">
      <Container>
        <SectionHeading id="experience-heading" number="03" title="Professional experience" />
        <div className="mt-10">
          {experience.map((item) => (
            <article key={item.company} className="grid gap-5 border-t border-border py-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-12">
              <div>
                <p className="font-mono text-xs text-muted">{item.period}</p>
                <h3 className="mt-3 max-w-sm text-xl font-medium leading-7">{item.company}</h3>
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
