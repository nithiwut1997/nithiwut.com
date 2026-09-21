import { Container } from "@/components/container";
import { LinkButton } from "@/components/link-button";
import { SectionHeading } from "@/components/section-heading";
import { contact, profile, resume, socialLinks } from "@/lib/portfolio";

export function ContactFooter() {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="bg-foreground pt-16 text-white [--secondary:#b9c5d1] [--muted:#95a5b5] sm:pt-20">
      <Container>
        <div className="grid gap-10 pb-14 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:gap-16">
          <div>
            <SectionHeading
              id="contact-heading"
              number="06"
              title="Get in touch"
              description="For conversations about backend engineering, production systems, or opportunities to work together."
            />
            <a href={`mailto:${contact.email}`} className="mt-6 inline-flex min-h-11 items-center break-all text-xl text-white underline decoration-white/25 underline-offset-4 transition-colors hover:text-[#c8ddeb] sm:text-2xl">
              {contact.email}
            </a>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 text-[#b9c5d1] transition-colors hover:text-white"
                >
                  {link.label}
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
              <a href={`tel:${contact.phone.replaceAll("-", "")}`} className="inline-flex min-h-11 items-center text-[#b9c5d1] transition-colors hover:text-white">
                {contact.phone}
              </a>
            </div>
          </div>
          <div className="md:pt-2">
            <h3 className="text-base font-medium">The full career history</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#b9c5d1]">
              My resume has the detailed chronology of roles, responsibilities,
              and technical experience.
            </p>
            <LinkButton href={resume.href} download variant="secondary" className="mt-5 border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white">
              Download resume <span className="text-[#b9c5d1]">PDF ↓</span>
            </LinkButton>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-white/15 py-7 text-xs text-[#95a5b5] sm:flex-row sm:justify-between">
          <p>{profile.name} · {profile.role}</p>
          <p>{profile.location}</p>
        </div>
      </Container>
    </footer>
  );
}
