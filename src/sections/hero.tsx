import { Container } from "@/components/container";
import { profile, socialLinks } from "@/lib/portfolio";

export function Hero() {
  const systemLayers = [
    ["Application", "Java · Spring Boot"],
    ["Data", "PostgreSQL · Redis · Elasticsearch"],
    ["Messaging", "AWS SQS · EventBridge"],
    ["Infrastructure", "AWS · Kubernetes · Docker"],
    ["Observability", "Logstash · Elasticsearch · Kibana"],
  ] as const;

  return (
    <section aria-labelledby="profile-name" className="bg-background py-12 text-foreground sm:py-20 lg:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(24rem,0.9fr)] lg:gap-12">
        <div>
          <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">Backend engineer</p>
          <h1 id="profile-name" className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[3.75rem]">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-secondary sm:text-2xl">{profile.role}</p>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-secondary sm:text-xl sm:leading-9">{profile.summary}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-secondary">{profile.supporting}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 sm:mt-9">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-link inline-flex min-h-11 items-center gap-1.5 text-sm">
                {link.label} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
          <p className="mt-7 flex items-center gap-2 font-mono text-xs text-muted"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />{profile.location}</p>
        </div>
        <aside aria-label="Technical stack system view" className="overflow-hidden rounded-xl border border-border bg-surface shadow-[0_22px_50px_-34px_rgba(23,32,51,0.45)]">
          <div className="flex items-center justify-between border-b border-border bg-surface-secondary/60 px-5 py-4 sm:px-6">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-accent">Technical stack / system view</p>
            <span className="flex items-center gap-2 font-mono text-[0.65rem] text-muted"><span className="h-1.5 w-1.5 rounded-full bg-accent" />Production</span>
          </div>
          <ol className="px-5 py-5 sm:px-6 sm:py-6">
            {systemLayers.map(([layer, tools], index) => (
              <li key={layer} className="relative grid grid-cols-[1rem_1fr] gap-3 pb-5 last:pb-0">
                <div className="relative flex justify-center pt-1.5">
                  <span className="z-10 h-2 w-2 rounded-full bg-accent ring-4 ring-accent-subtle" />
                  {index < systemLayers.length - 1 ? <span aria-hidden="true" className="absolute bottom-0 top-3 w-px bg-diagram-border" /> : null}
                </div>
                <div className="rounded-md border border-border/80 bg-background/70 px-4 py-3"><p className="text-sm font-medium text-foreground">{layer}</p><p className="mt-1 text-sm leading-6 text-secondary">{tools}</p></div>
              </li>
            ))}
          </ol>
        </aside>
      </Container>
    </section>
  );
}
