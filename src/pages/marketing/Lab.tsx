import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { PageHero } from "@/components/marketing/PageHero";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { CTAStrip } from "@/components/marketing/CTAStrip";
import { FadeInOnScroll } from "@/components/marketing/FadeInOnScroll";
import { PaperCard } from "@/components/PaperCard";
import { LiveMixerDemo } from "@/components/marketing/LiveMixerDemo";
import { AnimatedStat } from "@/components/marketing/AnimatedStat";

const workflow = [
  { code: "01", title: "SET DEFAULTS", body: "Choose wax, pitcher capacity, costs, and saved FO-load presets." },
  { code: "02", title: "ADD RECIPES", body: "Keep formulas clean while defaults do the repetitive math." },
  { code: "03", title: "MAKE BATCH", body: "Unit counts calculate wax, oil, COGS, and pitcher needs." },
  { code: "04", title: "OIL TRACKED", body: "Committed batches decrement oil and expose restock gaps." },
  { code: "05", title: "PUSH TO STORE", body: "Finished stock rises in Square or Shopify when production is done." },
];

const callouts = [
  {
    code: "01",
    title: "MULTI-FORMULA PRESETS",
    body: "Save wax + fragrance-load combinations and switch per batch from a dropdown.",
  },
  {
    code: "02",
    title: "BATCH-ONLY OVERRIDES",
    body: "Custom FL% or custom container for this batch only, without rewriting saved data.",
  },
  {
    code: "03",
    title: "WAX-SPEC ADVISORY",
    body: "Soft warnings when fragrance load is outside the wax's published range.",
  },
  {
    code: "04",
    title: "PER-PITCHER BREAKDOWNS",
    body: "Large batches split into pitcher-level ingredient totals with remainder handling.",
  },
];

const Lab = () => {
  return (
    <MarketingLayout>
      <PageHero
        sectionCode="SECTION 01 / THE LAB"
        heading={
          <>
            Where formulas<br />
            get <span className="text-hazard">classified.</span>
          </>
        }
        subtitle="The Batch Planner is where defaults become production math. Set the load, add recipes, make the batch, decrement oil, and push finished stock to the store."
        watermark="THE LAB"
        right={
          <FadeInOnScroll>
            <LiveMixerDemo />
          </FadeInOnScroll>
        }
      />

      {/* Workflow */}
      <section className="py-16 md:py-24 bg-paper/30">
        <div className="container">
          <SectionHeader
            code="WORKFLOW / FIVE STEPS"
            heading={
              <>
                Set Defaults →<br />
                Add Recipes →<br />
                Make Batch.
              </>
            }
            subtitle="Saving a plan is optional. The required loop is production: oil tracked, stock pushed, done."
          />
          <div className="relative">
            {/* connecting line */}
            <div className="absolute top-10 left-0 right-0 hidden md:block">
              <svg viewBox="0 0 100 2" preserveAspectRatio="none" className="w-full h-1">
                <line
                  x1="0"
                  y1="1"
                  x2="100"
                  y2="1"
                  stroke="hsl(var(--ink))"
                  strokeWidth="0.4"
                  strokeDasharray="2 2"
                />
              </svg>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5 relative">
              {workflow.map((s, i) => (
                <FadeInOnScroll key={s.code} delay={i * 100}>
                  <div className="paper-card p-4 lift text-center">
                    <div className="w-12 h-12 mx-auto rounded-full bg-ink text-paper flex items-center justify-center font-display text-lg">
                      {s.code}
                    </div>
                    <div className="font-display text-xl mt-4">{s.title}</div>
                    <p className="typewriter text-xs text-ink-soft mt-2">{s.body}</p>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Callouts */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeader
            code="UNDER THE HOOD / THE MIXER"
            heading={
              <>
                Flex where<br />
                makers actually<br />
                need it.
              </>
            }
          />
          <div className="grid md:grid-cols-2 gap-6">
            {callouts.map((c, i) => (
              <FadeInOnScroll key={c.code} delay={i * 80}>
                <PaperCard className="p-6 lift" rotate={i % 2 === 0 ? -0.6 : 0.8}>
                  <div className="flex items-baseline justify-between border-b border-ink/30 pb-3">
                    <span className="font-display text-4xl">{c.code}</span>
                    <span className="label-mono text-ink-mute">CALLOUT</span>
                  </div>
                  <h3 className="font-display text-2xl uppercase mt-4">{c.title}</h3>
                  <p className="typewriter text-sm text-ink-soft mt-2">{c.body}</p>
                </PaperCard>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Math explainer */}
      <section className="py-16 md:py-24 bg-paper/30">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <SectionHeader
                code="THE MATH / FO LOAD"
                heading={
                  <>
                    No more<br />
                    notebook math.
                  </>
                }
                subtitle="Container counts drive the batch. BLNDR keeps the formula, costs, pitcher math, and inventory movement in sync."
              />
              <div className="typewriter text-sm text-ink-soft space-y-3 max-w-md">
                <p>
                  Make 41 units and the planner calculates wax, fragrance oil,
                  containers, COGS, pitcher count, and any partial-pitcher remainder.
                </p>
                <p>
                  Commit the batch and the Vault takes the oil hit while finished
                  inventory rises for Square or Shopify.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <FadeInOnScroll>
                <PaperCard className="p-6" rotate={0.4}>
                  <div className="space-y-5">
                    <div className="flex items-baseline justify-between border-b border-ink/30 pb-3">
                      <span className="label-mono">8oz CANDLE · 10% FO</span>
                      <span className="label-mono text-hazard">LIVE MATH</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <AnimatedStat value={228} label="g WAX" suffix="" />
                      <AnimatedStat value={23} label="g FO" suffix="" />
                      <AnimatedStat value={251} label="g TOTAL" suffix="" />
                    </div>
                    <div className="border-t border-ink/30 pt-4 grid grid-cols-2 gap-3 label-mono text-xs">
                      <div>
                        <div className="text-ink-mute">% OF TOTAL</div>
                        <div className="font-display text-2xl text-ink">9.2%</div>
                      </div>
                      <div>
                        <div className="text-ink-mute">% OF WAX</div>
                        <div className="font-display text-2xl text-hazard">10.0%</div>
                      </div>
                    </div>
                    <div className="scribble text-xs">
                      *toggle which you're working in. The Mixer shows both.*
                    </div>
                  </div>
                </PaperCard>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* IFRA note */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeInOnScroll>
            <div className="paper-card p-8 md:p-12 text-center max-w-3xl mx-auto relative">
              <div className="absolute -top-6 right-6 redact-hazard label-mono rotate-6">
                COMPLIANCE
              </div>
              <div className="label-mono text-hazard">IFRA / WHAT WE PULL</div>
              <h2 className="display text-4xl md:text-5xl mt-3">
                Clear advisories.<br />
                No fake<br />
                <span className="text-hazard">compliance claims.</span>
              </h2>
              <p className="typewriter text-ink-soft mt-5 max-w-xl mx-auto">
                BLNDR links IFRA cert, SDS, and allergen statement PDFs per oil.
                It also shows wax-spec advisory text when a fragrance load is
                outside the wax's published range. It does not enforce IFRA,
                validate hard regulatory thresholds, or generate compliance reports.
              </p>
              <p className="scribble text-sm mt-3">
                *not legal advice. but better than guessing.*
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <CTAStrip
        heading={
          <>
            Make the<br />
            <span className="text-hazard">batch.</span>
          </>
        }
        subtitle="Defaults, recipes, COGS, pitchers, oil tracking, and store stock in one production pass."
        ctaLabel="OPEN HQ"
        to="/app"
      />
    </MarketingLayout>
  );
};

export default Lab;
