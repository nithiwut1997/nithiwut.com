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
    <figure className={`rounded-lg border border-border bg-surface-secondary text-foreground ${compact ? "p-4" : "p-5 sm:p-6"}`}>
      <figcaption className="mb-5 font-mono text-xs leading-5 text-secondary">
        {caption}
      </figcaption>
      <ol aria-label={caption} className="flex flex-col sm:flex-row sm:items-stretch">
        {steps.map((step, index) => (
          <li key={step} className="flex min-w-0 flex-1 flex-col items-center sm:flex-row">
            <span className={`relative w-full rounded-md border border-diagram-border bg-surface text-center font-mono text-[0.68rem] leading-4 text-foreground shadow-sm ${compact ? "px-2 py-2" : "px-2 py-3"}`}><span aria-hidden="true" className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
              {step}</span>
            {index < steps.length - 1 ? (
              <span aria-hidden="true" className="shrink-0 py-1 text-diagram-connector sm:px-1 sm:py-0">
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
