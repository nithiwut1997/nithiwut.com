import { Container } from "@/components/container";
import { contact, contactLinks, profile, socialLinks } from "@/lib/portfolio";

export function ContactFooter() {
  return (
    <footer id="contact" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-emerald-300">Contact</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
              Open to full-stack roles with backend and cloud ownership.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
              Based in {contact.location}. Reach out for full-stack product work, backend-heavy teams, squad lead roles, cloud platforms, or production reliability opportunities.
            </p>
          </div>

          <div className="flex flex-col justify-end gap-3 md:items-end">
            {[...contactLinks, ...socialLinks].map((link) => {
              const label =
                "value" in link && typeof link.value === "string"
                  ? link.value
                  : link.label;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.035] px-5 py-4 text-sm font-semibold text-zinc-200 transition hover:border-emerald-300/35 hover:bg-emerald-300/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 md:w-64"
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{profile.name}</p>
          <p>{profile.role}</p>
        </div>
      </Container>
    </footer>
  );
}
