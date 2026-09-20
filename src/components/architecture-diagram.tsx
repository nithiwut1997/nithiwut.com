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
    <figure className={`border border-border bg-surface-secondary text-foreground ${compact ? "p-4" : "p-5 sm:p-6"}`}>
      <figcaption className="mb-5 font-mono text-xs leading-5 text-secondary">
        {caption}
      </figcaption>
      <ol aria-label={caption} className={compact ? "flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center" : "flex flex-col"}>
        {steps.map((step, index) => (
          <li key={step} className={`flex items-center ${compact ? "flex-col gap-2 sm:flex-row" : "flex-col"}`}>
            <span className={`border border-diagram-border bg-surface text-center font-mono text-xs text-foreground ${compact ? "px-2 py-2" : "w-full px-3 py-3"}`}>
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span aria-hidden="true" className={compact ? "text-diagram-connector" : "py-1.5 text-diagram-connector"}>
                {compact ? (
                  <>
                    <span className="sm:hidden">↓</span>
                    <span className="hidden sm:inline">→</span>
                  </>
                ) : "↓"}
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  );
}
