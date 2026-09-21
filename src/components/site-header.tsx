import { Container } from "@/components/container";
import { navItems, resume } from "@/lib/portfolio";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 text-foreground backdrop-blur-md">
      <Container className="flex min-h-16 items-center gap-4 sm:gap-6">
        <a href="#main" className="w-fit shrink-0 py-2 text-sm font-medium tracking-tight transition-colors hover:text-accent" aria-label="Nithiwut Wilainuch home">
          Nithiwut Wilainuch<span className="text-accent">.</span>
        </a>
        <nav aria-label="Primary navigation" className="ml-auto hidden items-center gap-5 lg:flex lg:gap-7">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="inline-flex min-h-11 shrink-0 items-center text-xs text-secondary transition-colors hover:text-accent lg:text-sm">
              {item.label}
            </a>
          ))}
        </nav>
        <a href={resume.href} download className="ml-auto inline-flex min-h-10 shrink-0 items-center rounded-lg bg-accent px-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover sm:min-h-11 sm:px-4 lg:ml-0">
          Resume <span aria-hidden="true" className="ml-2">↓</span>
        </a>
      </Container>
    </header>
  );
}
