import { Container } from "@/components/container";
import { CopyEmailButton } from "@/components/copy-email-button";
import { SectionHeading } from "@/components/section-heading";
import { contact, profile, socialLinks } from "@/lib/portfolio";

export function ContactFooter() {
  return (
    <footer data-reveal id="contact" aria-labelledby="contact-heading" className="bg-foreground pt-16 text-white [--secondary:#b9c5d1] [--muted:#95a5b5] sm:pt-20">
      <Container>
        <div className="pb-12 sm:pb-14">
          <div className="grid gap-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-12">
            <div className="max-w-2xl">
              <SectionHeading
                id="contact-heading"
                number="06"
                title="Get in touch"
                description="For conversations about backend engineering, production systems, or opportunities to work together."
              />
              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
                <a href={`mailto:${contact.email}`} className="inline-flex min-h-11 items-center break-all text-2xl font-medium tracking-tight text-white underline decoration-white/25 underline-offset-6 transition-colors hover:text-[#c8ddeb] sm:text-3xl">
                  {contact.email}
                </a>
                <CopyEmailButton email={contact.email} />
              </div>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm sm:justify-end">
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
            </div>
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
