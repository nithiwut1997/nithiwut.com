import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { LinkButton } from "@/components/link-button";

const liveDemoUrl = "https://wealthhub.nithiwut.com";
const sourceCodeUrl = "https://github.com/nithiwut1997/wealthhub";

const domainConcepts = [
  {
    name: "Asset",
    description: "Describes what the investor owns or invests in, currently a stock or mutual fund.",
  },
  {
    name: "InvestmentTransaction",
    description: "The historical ledger and source of truth for BUY and SELL activity.",
  },
  {
    name: "Holding",
    description: "The derived open position: current quantity and weighted average cost.",
  },
  {
    name: "AssetPrice",
    description: "A historical market price, or NAV per unit for a mutual fund.",
  },
  {
    name: "Valuation",
    description: "Combines an open holding with its latest available price to value the position.",
  },
  {
    name: "MarketData",
    description: "The boundary between the portfolio domain and external price or NAV providers.",
  },
] as const;

const valuationMeasures = [
  ["totalCost", "Cost basis of all holdings"],
  ["pricedCost", "Cost basis only of holdings with a latest price"],
  ["totalMarketValue", "Market value only of priced holdings"],
  ["unrealizedGainLoss", "totalMarketValue − pricedCost"],
  ["unrealizedGainLossPercent", "unrealizedGainLoss ÷ pricedCost × 100; zero when pricedCost is zero"],
] as const;

export const metadata: Metadata = {
  title: "WealthHub case study",
  description:
    "A backend engineering case study covering WealthHub's transaction ledger, derived holdings, partial valuation, consolidated dashboard, and modular-monolith architecture.",
  alternates: { canonical: "/projects/wealthhub" },
  openGraph: {
    title: "WealthHub backend engineering case study",
    description:
      "Recorded investment transactions, consolidated THB valuation, market-data boundaries, and an intentional demo-first frontend architecture.",
    url: "/projects/wealthhub",
    type: "article",
  },
};

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-secondary sm:text-lg">{description}</p>
    </div>
  );
}

export default function WealthHubPage() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="border-b border-border py-16 sm:py-20 lg:py-24">
        <Container>
          <Link href="/#work" className="text-link inline-flex min-h-11 items-center text-sm font-medium">
            <span aria-hidden="true" className="mr-2">←</span> Engineering work
          </Link>
          <div className="mt-8 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">Backend engineering case study</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">WealthHub</h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-secondary sm:text-2xl sm:leading-9">
              A personal investment portfolio and wealth tracking system built around a transaction ledger, consistent open positions, and explainable valuation. BUY and SELL entries record investment activity that happened elsewhere; WealthHub does not execute orders.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">The current MVP tracks Thai investments and values portfolios in THB.</p>
          </div>
          <ul aria-label="Technology stack" className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm text-muted">
            {["Java 21", "Spring Boot", "PostgreSQL", "Liquibase", "JPA / JDBC", "REST API", "Modular Monolith"].map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <LinkButton href={liveDemoUrl} target="_blank">
              View Interactive Demo <span aria-hidden="true">↗</span>
            </LinkButton>
            <LinkButton href={sourceCodeUrl} target="_blank" variant="secondary">
              View Source Code <span aria-hidden="true">↗</span>
            </LinkButton>
          </div>
          <p className="mt-3 text-sm text-muted">Explore the product experience with sample investment data.</p>
        </Container>
      </section>

      <section className="border-b border-border bg-surface py-14 sm:py-18">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionIntro
              eyebrow="01 / What I built"
              title="More than a CRUD portfolio"
              description="WealthHub models the relationship between recorded investment activity, current positions, historical prices, and portfolio value. Its central concern is keeping the transaction ledger and derived holdings consistent as BUY and SELL records change a position."
            />
            <p className="mt-5 max-w-3xl text-sm leading-6 text-muted">
              AI-assisted development was part of the implementation workflow; architecture, domain decisions, review, and validation remained part of my engineering process.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-lg border border-border bg-background p-5">
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent">Write model</p>
              <h3 className="mt-3 text-lg font-medium">Transaction ledger</h3>
              <p className="mt-2 text-sm leading-7 text-secondary">Recorded BUY and SELL transactions remain the historical record and source of truth.</p>
            </article>
            <article className="rounded-lg border border-border bg-background p-5">
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent">Current state</p>
              <h3 className="mt-3 text-lg font-medium">Open holdings</h3>
              <p className="mt-2 text-sm leading-7 text-secondary">Holdings make current quantity and weighted average cost explicit without replacing transaction history.</p>
            </article>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-14 sm:py-18">
        <Container>
          <SectionIntro
            eyebrow="02 / Domain model"
            title="A ledger, a derived position, and a valuation"
            description="The model separates recorded investment activity from the current position and from price-dependent calculations. In the current implementation, a Portfolio groups the assets, transactions, holdings, and valuations that belong to it."
          />
          <figure className="mt-8 overflow-hidden rounded-xl border border-diagram-border bg-surface-secondary p-5 sm:p-7">
            <figcaption className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-secondary">Portfolio domain</figcaption>
            <div className="mt-5 grid gap-3 md:grid-cols-[0.75fr_auto_1fr_auto_1fr] md:items-center">
              <div className="rounded-md border border-diagram-border bg-surface p-4 text-center font-mono text-sm font-semibold">Portfolio + Asset</div>
              <span aria-hidden="true" className="text-center font-mono text-diagram-connector">→</span>
              <div className="rounded-md border border-accent bg-accent-subtle p-4 text-center font-mono text-sm font-semibold text-accent-hover">Transaction Ledger<br /><span className="font-normal">BUY / SELL</span></div>
              <span aria-hidden="true" className="text-center font-mono text-diagram-connector">→</span>
              <div className="rounded-md border border-diagram-border bg-surface p-4 text-center font-mono text-sm font-semibold">Holding<br /><span className="font-normal">Quantity + average cost</span></div>
            </div>
            <div className="mx-auto mt-3 max-w-md border-l border-diagram-connector pl-4 text-sm leading-6 text-secondary md:ml-auto md:mr-0">
              Latest AssetPrice → Valuation → cost basis, market value, and unrealized P&amp;L
            </div>
          </figure>
          <dl className="mt-7 grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {domainConcepts.map((concept) => (
              <div key={concept.name} className="border-t border-border py-5">
                <dt className="font-mono text-sm font-semibold text-foreground">{concept.name}</dt>
                <dd className="mt-2 text-sm leading-6 text-secondary">{concept.description}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-b border-border bg-surface py-14 sm:py-18">
        <Container>
          <SectionIntro
            eyebrow="03 / Transaction & consistency"
            title="Every recorded transaction updates history and current holdings together"
            description="POST /api/v1/transactions records BUY and SELL investment activity transactionally. These entries describe activity completed outside WealthHub: the ledger preserves what happened, while the Holding captures what remains open."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <article className="rounded-xl border border-border bg-background p-6 sm:p-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-accent">BUY</p>
              <h3 className="mt-3 text-xl font-medium">Build the position</h3>
              <ol className="mt-5 space-y-3 text-sm leading-6 text-secondary">
                <li><span className="mr-3 font-mono text-accent">01</span>Create or update the Holding.</li>
                <li><span className="mr-3 font-mono text-accent">02</span>Increase the open quantity.</li>
                <li><span className="mr-3 font-mono text-accent">03</span>Recalculate weighted average cost.</li>
              </ol>
            </article>
            <article className="rounded-xl border border-border bg-background p-6 sm:p-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-accent">SELL</p>
              <h3 className="mt-3 text-xl font-medium">Reduce the position safely</h3>
              <ol className="mt-5 space-y-3 text-sm leading-6 text-secondary">
                <li><span className="mr-3 font-mono text-accent">01</span>Reject a sale above the available quantity.</li>
                <li><span className="mr-3 font-mono text-accent">02</span>Calculate realized P&amp;L from the pre-sell weighted average cost.</li>
                <li><span className="mr-3 font-mono text-accent">03</span>Atomically reduce the Holding, removing it when fully closed.</li>
              </ol>
            </article>
          </div>
          <aside className="mt-5 border-l-2 border-accent bg-accent-subtle/70 px-5 py-4 text-sm leading-7 text-secondary">
            <strong className="font-semibold text-foreground">Database consistency:</strong> the SELL path uses PostgreSQL-specific atomic conditional updates and <code className="font-mono text-xs text-accent-hover">UPDATE ... RETURNING</code> where useful. This keeps the availability check and quantity reduction together instead of relying on a stale application-side read.
          </aside>
        </Container>
      </section>

      <section className="border-b border-border py-14 sm:py-18">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <SectionIntro
              eyebrow="04 / Valuation"
              title="Partial valuation without false precision"
              description="Each holding valuation combines the open position with the latest known AssetPrice. Portfolio valuation remains useful when an external price is missing: it returns the priced portion and exposes how much of the portfolio is covered."
            />
            <dl className="mt-7">
              {valuationMeasures.map(([term, detail]) => (
                <div key={term} className="grid border-t border-border py-4 sm:grid-cols-[10rem_1fr] sm:gap-5">
                  <dt className="font-medium">{term}</dt>
                  <dd className="mt-1 text-sm text-secondary sm:mt-0">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="self-end rounded-xl border border-border bg-surface p-6 sm:p-7">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-accent">Valuation invariant</p>
            <h3 className="mt-3 text-xl font-medium">Missing price ≠ zero-valued asset</h3>
            <p className="mt-3 text-sm leading-7 text-secondary">Total cost includes every holding. Priced cost and market value include only holdings with a latest price, so unrealized P&amp;L is market value minus priced cost—not the cost of unpriced positions.</p>
            <p className="mt-3 text-sm leading-7 text-secondary">The percentage uses priced cost as its denominator and is zero when priced cost is zero. <code className="font-mono text-xs text-accent-hover">holdingCount</code>, <code className="font-mono text-xs text-accent-hover">pricedHoldingCount</code>, and <code className="font-mono text-xs text-accent-hover">missingPriceCount</code> make coverage explicit without failing the entire summary.</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-surface py-14 sm:py-18">
        <Container>
          <SectionIntro
            eyebrow="05 / Consolidated dashboard"
            title="One wealth overview across multiple portfolios"
            description="A Portfolio Summary values one portfolio. The Dashboard combines every portfolio into a consolidated THB overview while retaining a per-portfolio breakdown. It reports total cost, total market value, unrealized P&amp;L and percentage, plus portfolio, holding, and asset counts."
          />
          <figure className="mt-8 overflow-hidden rounded-xl border border-diagram-border bg-background p-5 sm:p-7">
            <figcaption className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-secondary">Consolidated valuation flow</figcaption>
            <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
              <div className="rounded-md border border-diagram-border bg-surface p-4 text-center font-mono text-sm font-semibold">Recorded BUY / SELL<br /><span className="font-normal">Transaction ledger</span></div>
              <span aria-hidden="true" className="text-center font-mono text-diagram-connector">→</span>
              <div className="rounded-md border border-diagram-border bg-surface p-4 text-center font-mono text-sm font-semibold">Derived Holding<br /><span className="font-normal">Latest price / NAV</span></div>
              <span aria-hidden="true" className="text-center font-mono text-diagram-connector">→</span>
              <div className="rounded-md border border-accent bg-accent-subtle p-4 text-center font-mono text-sm font-semibold text-accent-hover">Portfolio Valuation<br /><span className="font-normal">Consolidated overview</span></div>
            </div>
          </figure>
          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <article className="rounded-xl border border-border bg-background p-6 sm:p-7">
              <h3 className="text-xl font-medium">Coverage survives aggregation</h3>
              <p className="mt-3 text-sm leading-7 text-secondary">The same partial-valuation rules apply at portfolio and dashboard level. Missing prices neither fail the response nor become zero; coverage counts show which holdings contribute to market value and unrealized P&amp;L.</p>
            </article>
            <article className="rounded-xl border border-border bg-background p-6 sm:p-7">
              <h3 className="text-xl font-medium">Batch the latest-price lookup</h3>
              <p className="mt-3 text-sm leading-7 text-secondary">The backend loads portfolios and holdings, collects unique asset IDs, and fetches their latest AssetPrice rows in one PostgreSQL <code className="font-mono text-xs text-accent-hover">DISTINCT ON</code> query. It then calculates portfolio valuations in memory and combines them, avoiding a portfolio-by-portfolio N+1 pattern.</p>
            </article>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-14 sm:py-18">
        <Container>
          <SectionIntro
            eyebrow="06 / Market data"
            title="External data stays behind a provider boundary"
            description="MarketDataProvider separates provider-specific retrieval from portfolio logic. Market prices and mutual-fund NAV share the AssetPrice model, and explicit manual refresh is sufficient for a daily or end-of-day valuation workflow."
          />
          <div className="mt-8 grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
            <div className="rounded-lg border border-border bg-background p-5">
              <p className="font-mono text-sm font-semibold">MarketDataProvider</p>
              <p className="mt-2 text-sm leading-6 text-secondary">The stable application boundary for retrieving market prices and NAV data.</p>
            </div>
            <span aria-hidden="true" className="self-center text-center font-mono text-diagram-connector">→</span>
            <div className="rounded-lg border border-border bg-background p-5">
              <p className="font-mono text-sm font-semibold">SecMutualFundMarketDataProvider</p>
              <p className="mt-2 text-sm leading-6 text-secondary">Retrieves Thai mutual-fund NAV data using the asset&apos;s external identifier / SEC project ID.</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-muted">STOCK and MUTUAL_FUND are supported asset types. A stock market-data provider is a future extension of the boundary, not a current integration.</p>
        </Container>
      </section>

      <section className="border-b border-border bg-surface py-14 sm:py-18">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionIntro
            eyebrow="07 / Architecture"
            title="A modular monolith, deliberately"
            description="The architecture matches the problem today: cohesive domain logic, strong transaction boundaries, and no distributed coordination that the system does not need."
          />
          <div>
            <div className="border-t border-border py-5">
              <h3 className="font-medium">Transaction and Holding stay together</h3>
              <p className="mt-2 text-sm leading-7 text-secondary">Recorded transaction handling and open-position consistency change together. Keeping them in one boundary makes the database transaction direct and understandable.</p>
            </div>
            <div className="border-t border-border py-5">
              <h3 className="font-medium">Complexity must earn its place</h3>
              <p className="mt-2 text-sm leading-7 text-secondary">The current scope does not require microservices, distributed transactions, Kafka, Redis, or Kubernetes. The modular monolith keeps deployment and consistency simple.</p>
            </div>
            <div className="border-y border-border py-5">
              <h3 className="font-medium">A boundary where change is plausible</h3>
              <p className="mt-2 text-sm leading-7 text-secondary">MarketData is isolated behind providers because external integrations vary independently. It can be separated later if operational requirements justify that change—not as an architectural goal by itself.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-14 sm:py-18">
        <Container>
          <SectionIntro
            eyebrow="08 / Demo-first frontend"
            title="Two explicit data sources, one set of domain semantics"
            description="The interactive preview is an engineering portfolio experience, not a continuously running commercial service. Demo Mode is a first-class deployment decision: visitors can explore realistic investment data without requiring backend availability, while Live API Mode remains a separate, explicit choice."
          />
          <figure className="mt-8 overflow-hidden rounded-xl border border-diagram-border bg-surface p-5 sm:p-7">
            <figcaption className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-secondary">Frontend data boundary</figcaption>
            <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto_1.4fr] md:items-center">
              <div className="rounded-md border border-diagram-border bg-background p-4 text-center font-mono text-sm font-semibold">UI / TanStack Query</div>
              <span aria-hidden="true" className="text-center font-mono text-diagram-connector">→</span>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-md border border-accent bg-accent-subtle p-4 text-center font-mono text-sm font-semibold text-accent-hover">MockDataSource<br /><span className="font-normal">Demo Mode</span></div>
                <div className="rounded-md border border-diagram-border bg-background p-4 text-center font-mono text-sm font-semibold">ApiDataSource<br /><span className="font-normal">Live API Mode</span></div>
              </div>
            </div>
          </figure>
          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <article className="rounded-xl border border-border bg-surface p-6 sm:p-7">
              <h3 className="text-xl font-medium">Demo behavior stays honest</h3>
              <p className="mt-3 text-sm leading-7 text-secondary">The Demo Dashboard derives consolidated valuation from mock portfolio and holding state instead of unrelated hardcoded totals. There is no silent fallback from Live API Mode to demo data.</p>
            </article>
            <article className="rounded-xl border border-border bg-surface p-6 sm:p-7">
              <h3 className="text-xl font-medium">Static delivery keeps hosting simple</h3>
              <p className="mt-3 text-sm leading-7 text-secondary"><span className="font-mono text-xs">wealthhub-web main → GitHub Actions → Next.js static export → Amazon S3 → CloudFront → wealthhub.nithiwut.com</span>. The static frontend remains inexpensive to host while the preview stays available independently of the backend.</p>
            </article>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-18">
        <Container>
          <div className="rounded-xl border border-border bg-surface px-6 py-9 sm:px-10 sm:py-11 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-accent">Interactive product preview</p>
              <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">See the domain model in the interface</h2>
              <p className="mt-4 leading-7 text-secondary">Explore multiple portfolios, recorded transactions, derived holdings, consolidated THB valuation, and explicit price coverage with realistic sample investment data.</p>
            </div>
            <LinkButton href={liveDemoUrl} target="_blank" className="mt-7 shrink-0 lg:mt-0">
              View Interactive Demo <span aria-hidden="true">↗</span>
            </LinkButton>
          </div>
        </Container>
      </section>
    </main>
  );
}
