import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { PageHero } from "@/components/marketing/PageHero";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { CTAStrip } from "@/components/marketing/CTAStrip";
import { FadeInOnScroll } from "@/components/marketing/FadeInOnScroll";
import { PaperCard } from "@/components/PaperCard";
import { LiveMixerDemo } from "@/components/marketing/LiveMixerDemo";
import { AnimatedStat } from "@/components/marketing/AnimatedStat";

const workflow = [
  { code: "01", title: "BRIEF", body: "Describe the candle, soap, or spray you want." },
  { code: "02", title: "MIX", body: "Drag sliders. Lock ratios. Watch caps update live." },
  { code: "03", title: "TEST", body: "Pour a tester. Note cold/hot throw in the dossier." },
  { code: "04", title: "BATCH", body: "Scale 1 → 200. The math holds. Reorder list auto-builds." },
  { code: "05", title: "POUR", body: "Print labels. Ship. File the dossier. Repeat." },
];

const callouts = [
  {
    code: "01",
    title: "RATIO SLIDERS",
    body: "Drag any oil; the others auto-rebalance. Lock pin to keep one fixed.",
  },
  {
    code: "02",
    title: "FLASHPOINT GUARD",
    body: "Live weighted-average flashpoint vs your wax pour temp. Red if you'd flash.",
  },
  {
    code: "03",
    title: "IFRA CAP BADGE",
    body: "Cat 12 for candles, Cat 5 for leave-on. Auto-clamp or warn — your call.",
  },
  {
    code: "04",
    title: "SAVE TO VAULT",
    body: "Every iteration auto-versions. Roll back. Branch. Compare side-by-side.",
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
        subtitle="The Mixer is your bench. Drag sliders, lock ratios, watch flashpoint and IFRA max load update live. Save anything that doesn't catch fire."
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
                Brief → Mix →<br />
                Test → Batch → Pour.
              </>
            }
            subtitle="One unbroken loop. CHANDLER rides shotgun the whole way."
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
                Four guards<br />
                stop you<br />
                shipping garbage.
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
                    Why your<br />
                    10% load<br />
                    is actually 8%.
                  </>
                }
                subtitle="The math everyone in the Facebook groups gets wrong."
              />
              <div className="typewriter text-sm text-ink-soft space-y-3 max-w-md">
                <p>
                  When you say "10% FO load," you usually mean 10% of the total
                  weight — wax + FO. Most calculators do it as 10% of the wax
                  alone. That's a 2% error on every candle.
                </p>
                <p>
                  The Mixer does both, side by side, so you ship what you meant
                  to ship.
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
                Latest IFRA caps.<br />
                You stay legal.<br />
                <span className="text-hazard">Mostly.</span>
              </h2>
              <p className="typewriter text-ink-soft mt-5 max-w-xl mx-auto">
                We pull the most recent IFRA category caps for the format
                you're making (Cat 12 for candles, Cat 5 for leave-on). The
                Mixer warns or auto-clamps before you exceed them. It will
                also tell you when an oil's IFRA data is missing.
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
            Open the<br />
            <span className="text-hazard">Mixer.</span>
          </>
        }
        subtitle="Three free blends. Save them, scale them, batch them. No card required."
        ctaLabel="OPEN THE MIXER"
        to="/app/mixer"
      />
    </MarketingLayout>
  );
};

export default Lab;
