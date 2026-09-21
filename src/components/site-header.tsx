"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/container";
import { navItems, resume } from "@/lib/portfolio";

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(`#${visible[0].target.id}`);
      },
      { rootMargin: "-80px 0px -55%", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 text-foreground backdrop-blur-md">
      <Container className="flex min-h-16 items-center gap-4 sm:gap-6">
        <a href="#main" className="w-fit shrink-0 py-2 text-lg font-semibold tracking-[-0.02em] transition-colors hover:text-accent" aria-label="Nithiwut Wilainuch home">
          Nithiwut Wilainuch<span className="text-accent">.</span>
        </a>
        <nav aria-label="Primary navigation" className="ml-auto hidden items-center gap-5 lg:flex lg:gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeSection === item.href ? "location" : undefined}
              className="relative inline-flex min-h-11 shrink-0 items-center text-xs text-secondary transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:text-accent aria-[current=location]:text-accent aria-[current=location]:after:scale-x-100 lg:text-sm"
            >
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
