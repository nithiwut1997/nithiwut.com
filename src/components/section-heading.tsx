type SectionHeadingProps = {
  id: string;
  number: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  id,
  number,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-baseline gap-3.5 sm:gap-4">
        <span aria-hidden="true" className="font-mono text-sm font-medium tracking-[0.08em] text-accent">
          {number}
        </span>
        <h2 id={id} className="text-2xl font-medium tracking-tight sm:text-3xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="mt-4 text-base leading-7 text-secondary">{description}</p>
      ) : null}
    </div>
  );
}
