import { Link } from "react-router-dom";
import { Check, Lock, Minus } from "lucide-react";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { PageHero } from "@/components/marketing/PageHero";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { CTAStrip } from "@/components/marketing/CTAStrip";
import { FadeInOnScroll } from "@/components/marketing/FadeInOnScroll";
import { PaperCard } from "@/components/PaperCard";

const tiers = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    label: "Try the system",
    badge: "START HERE",
    sections: [
      {
        title: "Included",
        items: [
          "Frag Lab full mixer",
          "3 lifetime batches",
          "2 saved recipes",
          "20 oils in Library",
          "1 wax",
          "Preset + temporary containers",
          "Limited AI-assisted blending",
        ],
      },
    ],
    limitations: ["No inventory quantities", "No exports or sharing", "No sales integrations", "No saved containers"],
  },
  {
    name: "Lab",
    price: "$9.95",
    cadence: "month",
    label: "Experiment and build formulas",
    badge: "FORMULA MODE",
    sections: [
      {
        title: "Everything in Free, plus",
        items: ["Unlimited batches", "20 saved recipes", "Unlimited oils in Library", "Up to 3 waxes"],
      },
      {
        title: "Inventory — oils only",
        items: ["Track up to 20 oils", "Automatic decrement from batches", "Low inventory alerts"],
      },
      {
        title: "Workflow",
        items: ["AI-assisted blending, limited", "Recipe sharing with public links", "CSV export"],
      },
    ],
    limitations: ["Oils only", "No saved containers", "No COGS or profit tracking", "No Square or Shopify integrations"],
  },
  {
    name: "Maker",
    price: "$19.95",
    cadence: "month",
    label: "Run your candle business",
    badge: "BEST FIT",
    featured: true,
    sections: [
      {
        title: "Business tools",
        items: ["Profit margin + full COGS", "Container Registry: save and reuse containers"],
      },
      {
        title: "Full inventory system",
        items: [
          "Track up to 50 oils",
          "Track wicks, lids, and containers",
          "Inventory decrement across all materials",
          "Low alerts across all materials",
        ],
      },
      {
        title: "Sales integrations",
        items: ["Square 2-way sync", "Shopify 1 store", "Product sync", "Inventory sync", "Basic order visibility"],
      },
      {
        title: "Operations",
        items: ["Use What I Have blends", "High-usage AI-assisted blending", "50 saved recipes", "Unlimited batches and waxes", "Bulk actions + full exports"],
      },
    ],
  },
  {
    name: "Brand",
    price: "$39.95",
    cadence: "month",
    label: "Built for growing brands",
    badge: "SCALE OPS",
    sections: [
      {
        title: "Team + control",
        items: ["1 owner + 2 seats", "Additional seats $10/user", "Roles and permissions", "Recipe locking and approvals", "Version history audit trail"],
      },
      {
        title: "Advanced sales system",
        items: ["Unified Square + Shopify view", "Multi-store Shopify support", "Variants, bundles, kits", "Multi-SKU formulas"],
      },
      {
        title: "Performance intelligence",
        items: ["Revenue by product", "Margin by SKU", "Top-performing formulas", "Oil usage tied to sales"],
      },
      {
        title: "Automation + brand layer",
        items: ["Sales → production suggestions", "Low stock → batch recommendations", "API webhooks", "Workflow automation", "Custom branding on shared recipes", "Shared container registry"],
      },
    ],
  },
];

const containerRules = [
  ["Free", "Use presets or temporary custom containers during batch creation."],
  ["Lab", "Still usable at batch time, but containers do not become a reusable system."],
  ["Maker", "Save containers, attach costs, reuse them, and feed COGS correctly."],
  ["Brand", "Share and standardize the container registry across the team."],
];

const Pricing = () => {
  return (
    <MarketingLayout>
      <PageHero
        sectionCode="SECTION 06 / PRICING"
        heading={
          <>
            Pick your<br />
            <span className="text-hazard">production lane.</span>
          </>
        }
        subtitle="Start with batch math. Upgrade when you need persistent inventory, COGS, saved containers, store sync, team controls, and production intelligence. Core workflow stays usable; scale is what unlocks."
        watermark="PRICING"
        right={
          <FadeInOnScroll>
            <PaperCard className="p-6" rotate={0.4}>
              <div className="label-mono text-hazard border-b border-ink/30 pb-3">CONTAINER RULE</div>
              <h2 className="font-display text-4xl uppercase mt-5">Use is free. Systems are paid.</h2>
              <p className="typewriter text-sm text-ink-soft mt-3">
                Everyone can select a container and make a batch. Maker unlocks saved containers, persistent costs, reuse, and real COGS.
              </p>
            </PaperCard>
          </FadeInOnScroll>
        }
      />

      <section className="py-12 md:py-20 border-y-2 border-ink/30 bg-paper/40">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-5 items-stretch">
            {tiers.map((tier, i) => (
              <FadeInOnScroll key={tier.name} delay={i * 70}>
                <PaperCard
                  className={`h-full p-5 md:p-6 flex flex-col ${tier.featured ? "border-hazard shadow-[8px_8px_0_hsl(var(--hazard)/0.35)]" : ""}`}
                  rotate={tier.featured ? 0 : i % 2 === 0 ? -0.35 : 0.35}
                >
                  <div className="flex items-start justify-between gap-3 border-b border-ink/30 pb-4">
                    <div>
                      <div className="label-mono text-hazard">{tier.badge}</div>
                      <h2 className="font-display text-4xl uppercase mt-1">{tier.name}</h2>
                    </div>
                    {tier.featured ? <span className="label-mono bg-hazard text-hazard-foreground px-2 py-1">PRO</span> : null}
                  </div>

                  <div className="py-5 border-b border-ink/20">
                    <div className="flex items-end gap-2">
                      <span className="font-display text-5xl leading-none">{tier.price}</span>
                      <span className="label-mono text-ink-mute mb-1">/ {tier.cadence}</span>
                    </div>
                    <p className="typewriter text-sm text-ink-soft mt-2">{tier.label}</p>
                  </div>

                  <div className="flex-1 py-5 space-y-5">
                    {tier.sections.map((section) => (
                      <div key={section.title}>
                        <h3 className="label-mono mb-2">{section.title}</h3>
                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <li key={item} className="grid grid-cols-[18px_1fr] gap-2 typewriter text-sm text-ink-soft">
                              <Check className="w-4 h-4 text-hazard mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {tier.limitations ? (
                      <div className="border-t border-ink/20 pt-4">
                        <h3 className="label-mono mb-2 text-ink-mute">Limitations</h3>
                        <ul className="space-y-2">
                          {tier.limitations.map((item) => (
                            <li key={item} className="grid grid-cols-[18px_1fr] gap-2 typewriter text-sm text-ink-mute">
                              <Minus className="w-4 h-4 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  <Link
                    to="/app"
                    className={`font-display text-xl justify-center px-5 py-3 inline-flex items-center gap-2 transition-colors ${
                      tier.featured
                        ? "bg-hazard text-hazard-foreground hover:bg-ink hover:text-paper"
                        : "border-2 border-ink hover:bg-ink hover:text-paper"
                    }`}
                  >
                    OPEN HQ <span>→</span>
                  </Link>
                </PaperCard>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeader
            code="UPGRADE MOMENT / CONTAINER REGISTRY"
            heading={
              <>
                Don&apos;t block the batch.<br />
                Gate the system.
              </>
            }
            subtitle="Lower tiers can still finish production math. Paid tiers make container data persistent, reusable, costed, and standardized."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {containerRules.map(([tier, rule], i) => (
              <FadeInOnScroll key={tier} delay={i * 70}>
                <PaperCard className="p-5 h-full" rotate={i % 2 === 0 ? -0.3 : 0.4}>
                  <div className="flex items-center justify-between border-b border-ink/30 pb-3">
                    <h3 className="font-display text-2xl uppercase">{tier}</h3>
                    {i < 2 ? <Lock className="w-4 h-4 text-ink-mute" /> : <Check className="w-4 h-4 text-hazard" />}
                  </div>
                  <p className="typewriter text-sm text-ink-soft mt-4">{rule}</p>
                </PaperCard>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        heading={
          <>
            Run a consistent,<br />
            <span className="text-hazard">profitable line.</span>
          </>
        }
        subtitle="Use BLNDR for free. Upgrade when saved containers, full COGS, inventory, sales sync, and team operations start paying for themselves."
        ctaLabel="OPEN HQ"
        to="/app"
      />
    </MarketingLayout>
  );
};

export default Pricing;