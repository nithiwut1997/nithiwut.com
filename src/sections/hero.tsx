import { Container } from "@/components/container";
import { LinkButton } from "@/components/link-button";
import { profile, resume, socialLinks } from "@/lib/portfolio";

export function Hero() {
  return (
    <section aria-labelledby="profile-name" className="bg-background py-20 text-foreground sm:py-28 lg:py-32">
      <Container>
        <p className="mb-7 font-mono text-xs tracking-wide text-muted">{profile.location}</p>
        <h1 id="profile-name" className="max-w-4xl text-5xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-5 text-xl text-secondary sm:text-2xl">{profile.role}</p>
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
      </Container>
    </section>
  );
}
