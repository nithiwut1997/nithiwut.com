import { Container } from "@/components/container";
import { navItems } from "@/lib/portfolio";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/[0.72] backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <a
          href="#main"
          className="font-mono text-sm font-semibold text-white transition hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
          aria-label="Nithiwut Wilainuch home"
        >
          Nithiwut Wilainuch
        </a>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-400 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
