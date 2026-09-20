import { Container } from "@/components/container";
import { LinkButton } from "@/components/link-button";
import { profile, resume, socialLinks } from "@/lib/portfolio";

export function Hero() {
  const systemLayers = [
    ["Application", "Java · Spring Boot"],
    ["Data", "PostgreSQL · Redis · Elasticsearch"],
    ["Messaging", "AWS SQS · EventBridge"],
    ["Infrastructure", "AWS · Kubernetes · Docker"],
    ["Observability", "Logstash · Elasticsearch · Kibana"],
  ] as const;

  return (
    <section aria-labelledby="profile-name" className="bg-background py-16 text-foreground sm:py-24 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(19rem,0.85fr)] lg:gap-16">
        <div>
          <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">Backend engineer</p>
          <h1 id="profile-name" className="max-w-4xl text-5xl font-semibold leading-[1.06] tracking-[-0.05em] sm:text-6xl lg:text-[4.25rem]">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-secondary sm:text-2xl">{profile.role}</p>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-secondary sm:text-xl sm:leading-9">{profile.summary}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-secondary">{profile.supporting}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <LinkButton href={resume.href} download>{resume.label} <span aria-hidden="true">↓</span></LinkButton>
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-link inline-flex min-h-11 items-center gap-1.5 text-sm">
                {link.label} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
            <a href="#contact" className="text-link inline-flex min-h-11 items-center text-sm">Contact</a>
          </div>
          <p className="mt-7 flex items-center gap-2 font-mono text-xs text-muted"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />{profile.location}</p>
        </div>
        <aside aria-label="Technical stack system view" className="rounded-xl border border-border bg-surface p-5 shadow-[0_18px_45px_-35px_rgba(23,32,51,0.55)] sm:p-6">
          <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.16em] text-accent">Technical stack / system view</p>
          <ol className="mt-5">
            {systemLayers.map(([layer, tools], index) => (
              <li key={layer} className="relative grid grid-cols-[1rem_1fr] gap-3 pb-5 last:pb-0">
                <div className="relative flex justify-center pt-1.5">
                  <span className="z-10 h-2 w-2 rounded-full bg-accent ring-4 ring-accent-subtle" />
                  {index < systemLayers.length - 1 ? <span aria-hidden="true" className="absolute bottom-0 top-3 w-px bg-diagram-border" /> : null}
                </div>
                <div><p className="text-sm font-medium text-foreground">{layer}</p><p className="mt-1 text-sm leading-6 text-secondary">{tools}</p></div>
              </li>
            ))}
          </ol>
        </aside>
      </Container>
    </section>
  );
}
