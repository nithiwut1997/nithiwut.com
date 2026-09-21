import { Container } from "@/components/container";
import { navItems, resume } from "@/lib/portfolio";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 text-foreground backdrop-blur-md">
      <Container className="flex min-h-16 flex-wrap items-center justify-between gap-x-5 sm:flex-nowrap">
        <a href="#main" className="w-fit py-2 text-sm font-medium tracking-tight transition-colors hover:text-accent" aria-label="Nithiwut Wilainuch home">
          Nithiwut Wilainuch<span className="text-accent">.</span>
        </a>
        <nav aria-label="Primary navigation" className="order-3 flex w-full items-center justify-between border-t border-border py-1 sm:order-none sm:w-auto sm:justify-start sm:border-0 sm:py-0 sm:gap-7">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={`inline-flex min-h-11 shrink-0 items-center text-xs text-secondary transition-colors hover:text-accent sm:text-sm ${item.href === "#contact" ? "hidden lg:inline-flex" : ""}`}>
              {item.label}
            </a>
          ))}
          <a href={resume.href} download className="absolute right-5 top-3 inline-flex min-h-10 shrink-0 items-center rounded-md bg-accent px-4 text-sm font-medium text-white transition-colors hover:bg-accent-hover sm:static">
            Resume <span aria-hidden="true" className="ml-2">↓</span>
          </a>
        </nav>
      </Container>
    </header>
  );
}
