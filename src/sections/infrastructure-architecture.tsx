import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const architectureFlow = [
  {
    label: "Browser",
    detail: "Recruiters and visitors request nithiwut.com.",
  },
  {
    label: "Cloudflare DNS",
    detail: "Cloudflare handles DNS resolution.",
  },
  {
    label: "CloudFront CDN + TLS",
    detail: "CloudFront provides CDN + HTTPS.",
  },
  {
    label: "OAC Authentication",
    detail: "OAC secures private bucket access.",
  },
  {
    label: "Private S3 Bucket",
    detail: "S3 stores static assets.",
  },
];

const architectureNotes = [
  {
    title: "GitHub Actions CI/CD",
    description:
      "GitHub Actions automates deployment by building the static export and syncing the out directory to S3.",
  },
  {
    title: "ACM TLS certificate",
    description:
      "ACM provides TLS certificates for the CloudFront distribution serving the portfolio over HTTPS.",
  },
  {
    title: "Private origin",
    description:
      "The S3 bucket stays private with Block Public Access enabled; CloudFront reaches it through OAC.",
  },
];

export function InfrastructureArchitecture() {
  return (
    <section id="architecture" className="border-b border-white/10 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Infrastructure"
            title="Production-grade static delivery on AWS."
            description="The portfolio is prepared for static export delivery through a private S3 origin, CloudFront CDN, Cloudflare DNS, and GitHub OIDC deployment."
          />
          <div className="w-fit rounded-lg border border-emerald-300/25 bg-emerald-300/10 px-4 py-3 text-sm font-semibold text-emerald-100">
            Production Architecture
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-lg border border-white/10 bg-panel/[0.82] p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="font-mono text-xs uppercase text-zinc-500">
                  Request path
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Browser to private origin
                </h3>
              </div>
              <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-xs text-zinc-400">
                OAC
              </span>
            </div>

            <ol className="mt-6" aria-label="Infrastructure request flow">
              {architectureFlow.map((item, index) => (
                <li key={item.label}>
                  <div className="grid grid-cols-[2.25rem_1fr] gap-3 border-b border-white/10 py-4 first:pt-0 last:border-b-0 last:pb-0">
                    <div className="flex flex-col items-center">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-300/25 bg-emerald-300/10 font-mono text-xs font-semibold text-emerald-200">
                        {index + 1}
                      </span>
                      {index < architectureFlow.length - 1 ? (
                        <span className="mt-2 h-6 w-px bg-gradient-to-b from-emerald-300/60 to-white/10" />
                      ) : null}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-sm font-semibold text-zinc-100">
                          {item.label}
                        </h4>
                        {index < architectureFlow.length - 1 ? (
                          <span
                            className="font-mono text-sm text-emerald-300"
                            aria-hidden="true"
                          >
                            ↓
                          </span>
                        ) : (
                          <span className="font-mono text-xs text-zinc-500">
                            origin
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <article className="rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-200 hover:border-cyan-300/25 hover:bg-white/[0.055] sm:col-span-2">
              <p className="font-mono text-xs uppercase text-zinc-500">
                CI/CD
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                GitHub Actions to S3
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                GitHub Actions uses OIDC role assumption, installs dependencies,
                builds the Next.js static export, deploys out to the private S3
                bucket, and can invalidate CloudFront after deployment.
              </p>
            </article>

            {architectureNotes.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-200 hover:border-emerald-300/30 hover:bg-white/[0.055]"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
