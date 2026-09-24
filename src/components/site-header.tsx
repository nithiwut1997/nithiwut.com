"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/container";
import { navItems, resume } from "@/lib/portfolio";

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 text-foreground backdrop-blur-md">
      <Container>
        <div className="flex min-h-16 items-center gap-4 sm:gap-6">
          <Link href="/" className="w-fit shrink-0 py-2 text-lg font-semibold tracking-[-0.02em] transition-colors hover:text-accent" aria-label="Nithiwut Wilainuch home">
            Nithiwut Wilainuch<span className="text-accent">.</span>
          </Link>
          <nav aria-label="Primary navigation" className="ml-auto hidden items-center gap-5 lg:flex lg:gap-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`/${item.href}`}
                aria-current={activeSection === item.href ? "location" : undefined}
                className="relative inline-flex min-h-11 shrink-0 items-center text-xs text-secondary transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:text-accent aria-[current=location]:text-accent aria-[current=location]:after:scale-x-100 lg:text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            aria-label={`${isMenuOpen ? "Close" : "Open"} navigation menu`}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="ml-auto inline-flex min-h-10 items-center rounded-md border border-border bg-surface px-3.5 text-sm font-medium text-secondary transition-colors hover:border-accent hover:bg-accent-subtle hover:text-accent-hover lg:hidden"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
          <a href={resume.href} download className="hidden min-h-10 shrink-0 items-center rounded-md border border-border bg-surface px-3.5 text-sm font-medium text-secondary transition-colors hover:border-accent hover:bg-accent-subtle hover:text-accent-hover lg:inline-flex">
            Resume <span aria-hidden="true" className="ml-2">↓</span>
          </a>
        </div>
        <nav
          id={menuId}
          aria-label="Mobile navigation"
          hidden={!isMenuOpen}
          className="border-t border-border py-3 lg:hidden"
        >
          <div className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`/${item.href}`}
                aria-current={activeSection === item.href ? "location" : undefined}
                onClick={() => setIsMenuOpen(false)}
                className="flex min-h-11 items-center rounded-md px-2 text-sm text-secondary transition-colors hover:bg-accent-subtle hover:text-accent-hover aria-[current=location]:text-accent"
              >
                {item.label}
              </a>
            ))}
            <a
              href={resume.href}
              download
              onClick={() => setIsMenuOpen(false)}
              className="flex min-h-11 items-center rounded-md px-2 text-sm font-medium text-secondary transition-colors hover:bg-accent-subtle hover:text-accent-hover"
            >
              {resume.label} <span aria-hidden="true" className="ml-2">↓</span>
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}
