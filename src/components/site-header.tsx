import { Container } from "@/components/container";
import { navItems } from "@/lib/portfolio";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 text-foreground">
      <Container className="flex flex-col gap-1 py-3 sm:min-h-20 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0">
        <a href="#main" className="w-fit py-2 text-sm font-medium tracking-tight transition-colors hover:text-accent" aria-label="Nithiwut Wilainuch home">
          Nithiwut<span className="text-accent">.</span>
        </a>
        <nav aria-label="Primary navigation" className="flex items-center justify-between gap-4 sm:gap-7">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="inline-flex min-h-11 items-center text-sm text-secondary transition-colors hover:text-accent">
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
