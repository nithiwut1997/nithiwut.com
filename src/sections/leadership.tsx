import { SectionHeading } from "@/components/section-heading";
import { engineeringOwnership } from "@/lib/portfolio";

export function EngineeringOwnership() {
  return (
    <div className="grid gap-12 border-t border-white/10 pt-16 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Engineering Ownership"
            title="Senior contribution beyond implementation."
            description="Technical input, delivery support, and cross-functional collaboration without overstating formal authority."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {engineeringOwnership.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-200 hover:border-emerald-300/30 hover:bg-white/[0.055]"
              >
                <h3 className="text-base font-semibold text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
    </div>
  );
}
