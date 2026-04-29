import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Hero } from "@/components/Hero";
import { StatStrip } from "@/components/marketing/StatStrip";
import { WhatIsThis } from "@/components/marketing/WhatIsThis";
import { TerminalDemo } from "@/components/marketing/TerminalDemo";
import { LabTour } from "@/components/marketing/LabTour";
import { Blends } from "@/components/Blends";
import { FAQ } from "@/components/FAQ";
import { CTAStrip } from "@/components/marketing/CTAStrip";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { FadeInOnScroll } from "@/components/marketing/FadeInOnScroll";

const homeExchanges = [
  {
    user: "make 41 units of Queen of Hearts with my default 12% load",
    thinking: "checking presets, containers, oil stock, and storefront targets…",
    formulaTitle: "Queen of Hearts Batch",
    formulaSubtitle: "41 units · Square + Shopify ready",
    hazard: "COGS 67.7%",
    flashpoint: "$302.02 profit",
    components: [
      { name: "48OZ CANDLE", pct: 40 },
      { name: "16OZ CANDLE", pct: 25 },
      { name: "8OZ CANDLE", pct: 20 },
      { name: "MELTS", pct: 15 },
    ],
  },
  {
    user: "compare Gingerbread swaps after my vendor discontinued it",
    thinking: "same-name match first, then cross-vendor substitutes…",
    formulaTitle: "Gingerbread Swap Queue",
    formulaSubtitle: "same-name match ranked #1",
    hazard: "4 vendors",
    flashpoint: "$/lb normalized",
    components: [
      { name: "NATURE'S GARDEN", pct: 35 },
      { name: "THE FLAMING CANDLE", pct: 30 },
      { name: "MAKESY", pct: 20 },
      { name: "HIVE & HONEY", pct: 15 },
    ],
  },
  {
    user: "run this batch at 10% just this once",
    thinking: "applying batch-only override without touching saved recipe…",
    formulaTitle: "Temporary Load Override",
    formulaSubtitle: "saved formula remains 12%",
    hazard: "OVERRIDE",
    flashpoint: "this batch only",
    components: [
      { name: "WAX", pct: 60 },
      { name: "FRAGRANCE", pct: 25 },
      { name: "CONTAINER", pct: 15 },
    ],
  },
];

const Index = () => {
  return (
    <MarketingLayout>
      <Hero />
      <StatStrip />
      <WhatIsThis />

      {/* Operations demo section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                code="SECTION 02 / BATCH OPS LIVE"
                heading={
                  <>
                    Create a batch.<br />
                    Watch oil<br />
                    take the hit.<br />
                    <span className="text-hazard">Stock rises.</span>
                  </>
                }
                subtitle="BLNDR turns settings, recipes, inventory, and storefront stock into one clean production loop. The math moves with the batch."
              />
              <ul className="typewriter text-sm text-ink-soft space-y-2 mt-4">
                <li>▸ Multi-formula presets for wax + fragrance-load combinations</li>
                <li>▸ $/lb oil costs normalized across vendors for accurate COGS</li>
                <li>▸ Batch-only overrides that do not rewrite saved recipes</li>
                <li>▸ Square and Shopify stock pushes after production</li>
              </ul>
            </div>
            <div className="lg:col-span-7">
              <FadeInOnScroll>
                <TerminalDemo exchanges={homeExchanges} />
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>

      <LabTour />
      <Blends />
      <FAQ />
      <CTAStrip
        heading={
          <>
            Get out of<br />
            the <span className="text-hazard">scratchpads.</span>
          </>
        }
        subtitle="Defaults, recipes, batch math, oil tracking, and store stock in one workflow. No bad math."
        ctaLabel="OPEN HQ"
        to="/app"
      />
    </MarketingLayout>
  );
};

export default Index;
