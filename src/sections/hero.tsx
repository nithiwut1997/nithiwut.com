import { Container } from "@/components/container";
import { LinkButton } from "@/components/link-button";
import { contactLinks, heroStats, profile, socialLinks } from "@/lib/portfolio";

const currentWorkflows = [
  {
    title: "Buyer experience",
    detail:
      "Customer-facing marketplace website for browsing used car listings, searching vehicles, checking market pricing, and applying for financing services.",
    tag: "REST APIs",
  },
  {
    title: "Seller onboarding",
    detail:
      "Seller onboarding workflows supporting both dealers and individual sellers, including vehicle listing management, document submission, and vehicle inspection processes before publishing.",
    tag: "Workflow",
  },
  {
    title: "Admin operations",
    detail:
      "Internal administration systems for campaign management, content operations, seller document verification, and operational workflows supporting marketplace activities.",
    tag: "Internal UI",
  },
];

const productionStack = [
  "Spring Boot",
  "PostgreSQL",
  "Redis",
  "Elasticsearch",
  "AWS SQS",
  "Kubernetes",
];

export function Hero() {
  return (
    <section className="border-b border-white/10 py-20 sm:py-24 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="animate-fade-up">
          <p className="mb-5 text-sm font-semibold uppercase text-emerald-300">
            {profile.role}
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-zinc-300 sm:text-2xl">
            {profile.focus}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            {profile.summary}
          </p>
          <p className="mt-5 font-mono text-sm text-zinc-500">
            {profile.location}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/resume.pdf" download>
              Download resume
            </LinkButton>
            <LinkButton href="#projects" variant="secondary">
              View projects
            </LinkButton>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-zinc-400">
            {[...contactLinks, ...socialLinks].map((link) => {
              const label =
                "value" in link && typeof link.value === "string"
                  ? link.value
                  : link.label;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="font-medium transition hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>

        <aside
          className="animate-fade-up animation-delay-100 rounded-lg border border-white/10 bg-panel/[0.88] p-5 shadow-2xl shadow-black/40"
          aria-label="Engineering focus summary"
        >
          <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="font-mono text-xs text-zinc-500">
                portfolio/status
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Backend systems
              </h2>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs font-semibold text-emerald-200">
              <span className="status-dot h-2 w-2 rounded-full bg-emerald-300" />
              Available
            </div>
          </div>

          <dl className="grid grid-cols-1 border-b border-white/10 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="border-white/10 py-5 sm:border-r sm:px-4 last:sm:border-r-0"
              >
                <dt className="text-xs text-zinc-500">{stat.label}</dt>
                <dd className="mt-2 font-mono text-sm font-semibold text-zinc-100">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="py-6">
            <p className="font-mono text-xs uppercase text-zinc-500">
              Current marketplace scope
            </p>

            <div className="mt-4 divide-y divide-white/10 border-y border-white/10">
              {currentWorkflows.map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-3 py-4 sm:grid-cols-[2.25rem_1fr]"
                >
                  <span className="font-mono text-xs font-semibold text-emerald-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-zinc-100">
                        {item.title}
                      </h3>
                      <span className="font-mono text-xs text-zinc-500">
                        {item.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <p className="font-mono text-xs uppercase text-zinc-500">
                Production stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {productionStack.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-medium text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="surface-line h-px" />
          <p className="pt-5 font-mono text-sm leading-7 text-zinc-400">
            platform scope: buyer marketplace / seller onboarding / vehicle
            inspection / admin operations
          </p>
        </aside>
      </Container>
    </section>
  );
}
