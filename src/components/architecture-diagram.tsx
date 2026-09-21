type ArchitectureDiagramProps = {
  caption: string;
  steps: readonly string[];
  compact?: boolean;
};

export function ArchitectureDiagram({
  caption,
  steps,
  compact = false,
}: ArchitectureDiagramProps) {
  return (
    <figure className={`overflow-hidden rounded-lg border border-diagram-border bg-surface-secondary text-foreground ${compact ? "p-4" : "p-4 sm:p-6"}`}>
      <figcaption className="mb-4 flex items-center gap-3 font-mono text-xs font-semibold uppercase leading-5 tracking-[0.08em] text-secondary sm:mb-5">
        <span aria-hidden="true" className="h-0.5 w-5 bg-accent" />{caption}
      </figcaption>
      <ol aria-label={caption} className="flex flex-col sm:flex-row sm:items-stretch">
        {steps.map((step, index) => (
          <li key={step} className="flex min-w-0 flex-1 flex-col items-center sm:flex-row">
            <span className={`diagram-node relative w-full rounded-md border border-diagram-border bg-surface text-center font-mono text-xs font-semibold leading-4 text-foreground shadow-[0_6px_16px_-12px_rgba(23,32,51,0.8)] ${compact ? "px-2 py-2.5" : "px-3 py-3.5"}`}>
              <span aria-hidden="true" className="absolute left-2 top-2 h-1 w-1 rounded-full bg-accent" />{step}</span>
            {index < steps.length - 1 ? (
              <span aria-hidden="true" className="shrink-0 py-1 font-mono text-sm font-semibold text-diagram-connector sm:px-2 sm:py-0">
                  <span className="sm:hidden">↓</span>
                  <span className="hidden sm:inline">→</span>
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  );
}
