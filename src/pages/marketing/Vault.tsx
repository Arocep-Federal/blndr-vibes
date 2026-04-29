import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { PageHero } from "@/components/marketing/PageHero";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { CTAStrip } from "@/components/marketing/CTAStrip";
import { FadeInOnScroll } from "@/components/marketing/FadeInOnScroll";
import { AnimatedStat } from "@/components/marketing/AnimatedStat";
import { PaperCard } from "@/components/PaperCard";

const catalogStats = [
  { value: 4444, label: "OILS INDEXED" },
  { value: 6, label: "SUPPLIER CATALOGS" },
  { value: 3, label: "SOURCE PDF TYPES" },
];

const vaultFeatures = [
  {
    code: "01",
    title: "OWNED OIL STOCK",
    body: "Track the fragrance oils you actually have, then let committed batches decrement inventory when production happens.",
  },
  {
    code: "02",
    title: "NORMALIZED $/LB",
    body: "Compare vendor pricing at your preferred buy size while BLNDR keeps cost-of-goods tied to a common per-pound baseline.",
  },
  {
    code: "03",
    title: "SOURCE DOCUMENTS",
    body: "Keep IFRA certificates, SDS sheets, allergen statements, flashpoint, and wax-load reference data close to the oil record.",
  },
  {
    code: "04",
    title: "RESTOCK VISIBILITY",
    body: "Shortages surface where they matter: at batch time, before a planned pour turns into a surprise shopping trip.",
  },
];

const suppliers = [
  ["CandleScience", "297"],
  ["The Flaming Candle", "458"],
  ["Nature's Garden", "1,032"],
  ["Wholesale Supplies Plus", "1,997"],
  ["Hive & Honey", "275"],
  ["Makesy", "385"],
];

const swapRows = [
  ["Gingerbread", "Discontinued", "Same-name match first"],
  ["Black Sea", "Low stock", "Cross-vendor options"],
  ["Apple Maple Bourbon", "Price jump", "$/lb comparison"],
];

const Vault = () => {
  return (
    <MarketingLayout>
      <PageHero
        sectionCode="SECTION 03 / THE VAULT"
        heading={
          <>
            Your oils.<br />
            Costed.<br />
            <span className="text-hazard">Tracked.</span>
          </>
        }
        subtitle="The Vault is owned oil inventory backed by a 4,444-oil cross-vendor catalog: normalized $/lb pricing, source PDFs, name-match search, and discontinued-oil swap hygiene."
        watermark="VAULT"
        right={
          <FadeInOnScroll>
            <PaperCard className="p-6" rotate={0.5}>
              <div className="flex items-baseline justify-between border-b border-ink/30 pb-3">
                <span className="label-mono">OIL COST CHECK</span>
                <span className="label-mono text-hazard">$/LB</span>
              </div>
              <div className="mt-5 space-y-4">
                {[
                  ["Amber + Driftwood", "$21.12", "preferred 16oz"],
                  ["Black Currant Absinthe", "$18.40", "preferred 5lb"],
                  ["Baking Spices", "$24.88", "preferred 8oz"],
                ].map(([oil, cost, size]) => (
                  <div key={oil} className="grid grid-cols-[1fr_auto] gap-3 border-b border-ink/20 pb-3 last:border-0 last:pb-0">
                    <div>
                      <div className="font-display text-xl uppercase leading-none">{oil}</div>
                      <div className="typewriter text-xs text-ink-mute mt-1">{size}</div>
                    </div>
                    <div className="font-display text-2xl text-hazard">{cost}</div>
                  </div>
                ))}
              </div>
            </PaperCard>
          </FadeInOnScroll>
        }
      />

      <section className="py-12 md:py-16 border-y-2 border-ink/30 bg-paper/40">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {catalogStats.map((stat) => (
              <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeader
            code="INVENTORY / COST TRUTH"
            heading={
              <>
                Know what you own.<br />
                Know what it costs.
              </>
            }
            subtitle="BLNDR treats oil inventory as production data, not a loose list of bottles hiding on a shelf."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {vaultFeatures.map((feature, i) => (
              <FadeInOnScroll key={feature.code} delay={i * 80}>
                <PaperCard className="p-6 lift" rotate={i % 2 === 0 ? -0.5 : 0.6}>
                  <div className="flex items-baseline justify-between border-b border-ink/30 pb-3">
                    <span className="font-display text-4xl">{feature.code}</span>
                    <span className="label-mono text-ink-mute">VAULT</span>
                  </div>
                  <h3 className="font-display text-2xl uppercase mt-4">{feature.title}</h3>
                  <p className="typewriter text-sm text-ink-soft mt-2">{feature.body}</p>
                </PaperCard>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-paper/30">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                code="CATALOG / SIX SUPPLIERS"
                heading={
                  <>
                    The catalog<br />
                    behind the shelf.
                  </>
                }
                subtitle="Live name-match search and supplier metadata power Library lookup, Vault Hygiene, swap suggestions, and cost comparisons."
              />
            </div>
            <div className="lg:col-span-7">
              <FadeInOnScroll>
                <PaperCard className="p-6" rotate={-0.4}>
                  <div className="label-mono text-hazard border-b border-ink/30 pb-3">INDEXED SUPPLIERS</div>
                  <div className="mt-4 divide-y divide-ink/20">
                    {suppliers.map(([name, count]) => (
                      <div key={name} className="grid grid-cols-[1fr_auto] gap-4 py-3">
                        <span className="font-display text-xl uppercase">{name}</span>
                        <span className="label-mono text-ink-soft">{count} oils</span>
                      </div>
                    ))}
                  </div>
                </PaperCard>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <FadeInOnScroll>
                <PaperCard className="p-6" rotate={0.3}>
                  <div className="label-mono text-hazard border-b border-ink/30 pb-3">VAULT HYGIENE QUEUE</div>
                  <div className="mt-4 space-y-3">
                    {swapRows.map(([oil, status, action]) => (
                      <div key={oil} className="grid md:grid-cols-[1fr_120px_1fr] gap-3 border-2 border-ink/20 p-3">
                        <div>
                          <div className="font-display text-lg uppercase leading-none">{oil}</div>
                          <div className="typewriter text-xs text-ink-mute mt-1">owned oil</div>
                        </div>
                        <div className="label-mono text-hazard">{status}</div>
                        <div className="typewriter text-xs text-ink-soft">{action}</div>
                      </div>
                    ))}
                  </div>
                </PaperCard>
              </FadeInOnScroll>
            </div>
            <div className="lg:col-span-6">
              <SectionHeader
                code="HYGIENE / SWAPS"
                heading={
                  <>
                    Discontinued oil<br />
                    does not get<br />
                    the last word.
                  </>
                }
                subtitle="If one supplier drops Gingerbread and another sells Gingerbread, that same-name match tops the list. Broader alternatives can follow after exact matches."
              />
              <p className="typewriter text-sm text-ink-soft max-w-md">
                Swap hygiene keeps production moving without pretending a catalog match is a compliance decision. Makers still review source documents; BLNDR keeps the search and costing sane.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip
        heading={
          <>
            Stock the<br />
            <span className="text-hazard">Vault.</span>
          </>
        }
        subtitle="Track oil, compare normalized costs, catch shortages, and keep source documents within reach."
        ctaLabel="OPEN INVENTORY"
        to="/app/inventory"
      />
    </MarketingLayout>
  );
};

export default Vault;
