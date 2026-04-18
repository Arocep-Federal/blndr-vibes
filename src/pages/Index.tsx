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
    user: "a fall candle that doesn't smell like every other pumpkin",
    thinking: "scanning your vault for non-cliché fall…",
    formulaTitle: "Vermont Cider Mill",
    formulaSubtitle: "8oz soy · cure 14 days",
    hazard: "HAZ 4",
    flashpoint: "168°F",
    components: [
      { name: "SMOKED MAPLE", pct: 40 },
      { name: "BLACK PEPPER", pct: 25 },
      { name: "APPLE SKIN", pct: 20 },
      { name: "VETIVER", pct: 15 },
    ],
  },
  {
    user: "dupe Volcano by Capri Blue with my CandleScience oils",
    thinking: "matching pyramid to your inventory…",
    formulaTitle: "Volcano // Working Dupe",
    formulaSubtitle: "10oz coconut wax · 87% match",
    hazard: "HAZ 3",
    flashpoint: "180°F",
    components: [
      { name: "PINEAPPLE CILANTRO", pct: 35 },
      { name: "SUGARED ORANGE", pct: 30 },
      { name: "JASMINE PETALS", pct: 20 },
      { name: "VANILLA HUSK", pct: 15 },
    ],
  },
  {
    user: "soap-safe vanilla that won't discolor my CP soap",
    thinking: "filtering vanillin under 2%…",
    formulaTitle: "Stable Vanilla, Cream Trace",
    formulaSubtitle: "1.2 lb CP batch · low vanillin",
    hazard: "HAZ 2",
    flashpoint: "210°F",
    components: [
      { name: "MADAGASCAR VAN. STAB.", pct: 60 },
      { name: "TONKA (LOW VAN.)", pct: 25 },
      { name: "BENZOIN RESIN", pct: 15 },
    ],
  },
];

const Index = () => {
  return (
    <MarketingLayout>
      <Hero />
      <StatStrip />
      <WhatIsThis />

      {/* CHANDLER demo section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                code="SECTION 02 / CHANDLER LIVE"
                heading={
                  <>
                    Tell it<br />
                    a vibe.<br />
                    Get a<br />
                    <span className="text-hazard">formula.</span>
                  </>
                }
                subtitle="CHANDLER is your AI accomplice. Describe a season, paste a brand, name a feeling — it pulls from oils you own, respects IFRA, and shows its work."
              />
              <ul className="typewriter text-sm text-ink-soft space-y-2 mt-4">
                <li>▸ Reads your Vault — won't suggest oils you don't have</li>
                <li>▸ Caps to IFRA Cat 12 (candles) and Cat 5 (leave-on) by default</li>
                <li>▸ Flags vanillin discoloration risk for clear soap</li>
                <li>▸ Tells you when it's guessing</li>
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
            Initiate your<br />
            own <span className="text-hazard">chaos.</span>
          </>
        }
        subtitle="Free tier. Three blends on us. No credit card. We will not email you about anything boring."
        ctaLabel="ENTER HQ"
        to="/app"
      />
    </MarketingLayout>
  );
};

export default Index;
