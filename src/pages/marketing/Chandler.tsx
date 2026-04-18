import { useEffect, useState } from "react";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { PageHero } from "@/components/marketing/PageHero";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { CTAStrip } from "@/components/marketing/CTAStrip";
import { FadeInOnScroll } from "@/components/marketing/FadeInOnScroll";
import { TerminalDemo } from "@/components/marketing/TerminalDemo";
import { PaperCard } from "@/components/PaperCard";

const exchanges = [
  {
    user: "a fall candle that doesn't smell like every other pumpkin",
    thinking: "scanning 247 oils in your vault…",
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
    thinking: "pyramid match · 87% confidence…",
    formulaTitle: "Volcano // Working Dupe",
    formulaSubtitle: "10oz coconut wax",
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
    formulaSubtitle: "1.2 lb CP batch",
    hazard: "HAZ 2",
    flashpoint: "210°F",
    components: [
      { name: "MADAGASCAR VAN. STAB.", pct: 60 },
      { name: "TONKA (LOW VAN.)", pct: 25 },
      { name: "BENZOIN RESIN", pct: 15 },
    ],
  },
];

const briefs = [
  { brief: "a linen spray for a hotel client", take: "white tea + bergamot + musk. Never sweet." },
  { brief: "car freshener that isn't an insult", take: "teakwood + tobacco + mandarin. Quiet luxury." },
  { brief: "dupe Yankee MidSummer's Night", take: "musk + patchouli + spice. Layer twice." },
  { brief: "cold-process soap-safe lavender", take: "true lavender 40/42, anchor with cedar." },
  { brief: "man cave wax melt", take: "leather + tobacco + smoke. Flash 180+." },
  { brief: "hotel lobby reed diffuser", take: "white tea base, jasmine head, musk drydown." },
  { brief: "goth Christmas candle", take: "frankincense + dried orange + burnt pine." },
  { brief: "baby-shower-but-not-saccharine", take: "warm milk + chamomile + a whisper of vanilla." },
];

const wonts = [
  "Won't recommend oils flagged for vanillin discoloration in clear CP soap.",
  "Won't exceed IFRA Cat 12 caps for candles or Cat 5 for leave-on.",
  "Won't pretend to know flashpoints it doesn't have data for.",
  "Won't suggest oils you don't own (unless you ask 'what should I buy?').",
];

const Chandler = () => {
  const heading = "Your AI accomplice.";
  const sub = "Reads IFRA so you don't.";
  const [typed, setTyped] = useState("");
  const [typed2, setTyped2] = useState("");

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setTyped(heading.slice(0, i));
      if (i >= heading.length) {
        clearInterval(t);
        let j = 0;
        const t2 = setInterval(() => {
          j++;
          setTyped2(sub.slice(0, j));
          if (j >= sub.length) clearInterval(t2);
        }, 30);
      }
    }, 35);
    return () => clearInterval(t);
  }, []);

  return (
    <MarketingLayout>
      <section className="relative pt-12 md:pt-20 pb-14 md:pb-20 overflow-hidden">
        <div className="pointer-events-none absolute -top-10 left-0 right-0 flex justify-center opacity-[0.06] select-none">
          <span className="font-display text-[24vw] leading-none tracking-tighter">
            CHANDLER
          </span>
        </div>
        <div className="container relative">
          <div className="flex items-center gap-3 mb-4">
            <span className="label-mono text-hazard border border-hazard px-2 py-0.5">
              SECTION 02 / CHANDLER
            </span>
            <span className="label-mono text-ink-mute">FILE_ID 88.X-OMEGA</span>
          </div>
          <h1 className="display text-5xl md:text-7xl lg:text-8xl">
            {typed}
            <span className="inline-block w-3 h-[0.9em] bg-hazard ml-1 align-middle animate-pulse" />
            <br />
            <span className="text-hazard">{typed2}</span>
          </h1>
          <p className="typewriter text-base md:text-lg text-ink-soft mt-6 max-w-2xl">
            CHANDLER lives inside the Mixer. Describe a vibe, paste a brand,
            drop a season — get a candle, soap, spray, melt, or diffuser
            formula matched to oils you actually own.
          </p>
        </div>
      </section>

      {/* Persona + demo */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-5">
              <PaperCard className="p-6 lift-tilt" rotate={-1.2} withTape="left">
                <div className="flex items-center justify-between border-b border-ink/30 pb-3">
                  <span className="label-mono text-ink-mute">PERSONA FILE</span>
                  <span className="label-mono bg-ink text-paper px-2 py-0.5 text-[10px]">
                    CLEARANCE: BETA
                  </span>
                </div>
                <div className="mt-5">
                  <div className="font-display text-4xl">CHANDLER-7</div>
                  <div className="label-mono text-hazard mt-1">
                    UNIT 7 // FRAGRANCE OPS
                  </div>
                </div>
                <div className="mt-5 space-y-2 typewriter text-sm text-ink-soft">
                  <div className="flex justify-between border-b border-ink/20 pb-1">
                    <span className="label-mono text-[10px] text-ink-mute">SPECIALTY</span>
                    <span>Gourmand · Botanical · Dupe Ops</span>
                  </div>
                  <div className="flex justify-between border-b border-ink/20 pb-1">
                    <span className="label-mono text-[10px] text-ink-mute">FORMATS</span>
                    <span>Candle · Soap · Spray · Melt · Diffuser</span>
                  </div>
                  <div className="flex justify-between border-b border-ink/20 pb-1">
                    <span className="label-mono text-[10px] text-ink-mute">READS</span>
                    <span>IFRA · SDS · Your Vault</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="label-mono text-[10px] text-ink-mute">PERSONALITY</span>
                    <span>Helpful. Mildly judgmental.</span>
                  </div>
                </div>
              </PaperCard>
            </div>
            <div className="lg:col-span-7">
              <FadeInOnScroll>
                <TerminalDemo exchanges={exchanges} holdMs={5000} />
              </FadeInOnScroll>
              <p className="scribble text-xs mt-3 text-center">
                *looped scripted demo. real CHANDLER answers in your Mixer.*
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example briefs */}
      <section className="py-16 md:py-24 bg-paper/30">
        <div className="container">
          <SectionHeader
            code="EXAMPLE BRIEFS / TRY IT"
            heading={
              <>
                Eight things<br />
                operatives ask.
              </>
            }
            subtitle="Hover any chip — CHANDLER's one-line take. These are real prompts from the lab."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {briefs.map((b, i) => (
              <FadeInOnScroll key={b.brief} delay={i * 50}>
                <div className="group relative h-28 [perspective:1000px]">
                  <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 paper-card p-4 [backface-visibility:hidden] flex items-center">
                      <div className="typewriter text-sm leading-snug">
                        <span className="text-hazard mr-1">▸</span>
                        {b.brief}
                      </div>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 bg-ink text-paper p-4 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center">
                      <div className="label-mono-xs text-hazard mb-1">
                        CHANDLER &gt;
                      </div>
                      <div className="typewriter text-sm leading-snug">{b.take}</div>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* What it won't do */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeader
            code="GUARDRAILS / WHAT IT WON'T DO"
            heading={
              <>
                The boring,<br />
                important part.
              </>
            }
          />
          <div className="space-y-3 max-w-3xl">
            {wonts.map((w, i) => (
              <FadeInOnScroll key={i} delay={i * 100}>
                <div className="flex items-start gap-4 paper-card p-4 lift">
                  <span className="redact label-mono shrink-0 mt-0.5">
                    ─────
                  </span>
                  <p className="typewriter text-base text-ink-soft">{w}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        heading={
          <>
            Recruit<br />
            <span className="text-hazard">CHANDLER.</span>
          </>
        }
        subtitle="Free tier includes 20 CHANDLER queries a month. Upgrade for unlimited."
        ctaLabel="RECRUIT CHANDLER"
        to="/app/mixer"
      />
    </MarketingLayout>
  );
};

export default Chandler;
