import { Container } from "@/components/container";
import { navItems, resume } from "@/lib/portfolio";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 text-foreground backdrop-blur-md">
      <Container className="flex min-h-16 items-center gap-4 sm:gap-6">
        <a href="#main" className="w-fit shrink-0 py-2 text-lg font-semibold tracking-[-0.02em] transition-colors hover:text-accent" aria-label="Nithiwut Wilainuch home">
          Nithiwut Wilainuch<span className="text-accent">.</span>
        </a>
        <nav aria-label="Primary navigation" className="ml-auto hidden items-center gap-5 lg:flex lg:gap-7">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="inline-flex min-h-11 shrink-0 items-center text-xs text-secondary transition-colors hover:text-accent lg:text-sm">
              {item.label}
            </a>
          ))}
        </nav>
        <a href={resume.href} download className="ml-auto inline-flex min-h-9 shrink-0 items-center rounded-md border border-border bg-surface px-3 text-xs font-medium text-secondary transition-colors hover:border-accent hover:bg-accent-subtle hover:text-accent-hover sm:min-h-10 sm:px-3.5 sm:text-sm lg:ml-0">
          Resume <span aria-hidden="true" className="ml-2">↓</span>
        </a>
      </Container>
    </header>
  );
}
