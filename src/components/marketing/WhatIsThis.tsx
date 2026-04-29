import { FlaskConical, Boxes, Copy, Store } from "lucide-react";
import { FadeInOnScroll } from "./FadeInOnScroll";
import { SectionHeader } from "./SectionHeader";

const tiles = [
  {
    icon: FlaskConical,
    code: "01",
    title: "SET DEFAULTS",
    body: "Save wax + fragrance-load presets once, then switch between candle and melt loads per batch.",
    visual: "slider",
  },
  {
    icon: Copy,
    code: "02",
    title: "ADD RECIPES",
    body: "Keep formulas clean. Batch-only fragrance-load or container overrides never pollute saved recipe data.",
    visual: "chat",
  },
  {
    icon: Boxes,
    code: "03",
    title: "MAKE BATCH",
    body: "Container counts drive wax, oil, COGS, pitchers, per-pitcher breakdowns, and remainder handling.",
    visual: "rows",
  },
  {
    icon: Store,
    code: "04",
    title: "PUSH TO STORE",
    body: "Oil inventory decrements, finished stock rises, and Square or Shopify stays aligned.",
    visual: "morph",
  },
];

const TileVisual = ({ kind }: { kind: string }) => {
  switch (kind) {
    case "slider":
      return (
        <div className="space-y-1.5">
          {[60, 30, 10].map((w, i) => (
            <div key={i}>
              <div className="h-1 bg-paper-deep overflow-hidden">
                <div
                  className="h-full bg-ink"
                  style={{
                    width: `${w}%`,
                    animation: `slider-wiggle 3s ease-in-out ${i * 0.3}s infinite`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      );
    case "chat":
      return (
        <div className="space-y-1.5 typewriter text-[10px]">
          <div className="bg-ink text-paper px-2 py-1 inline-block">
            need a fall candle…
          </div>
          <div className="flex gap-1 ml-1">
            <span
              className="w-1 h-1 rounded-full bg-hazard"
              style={{ animation: "bounce 1s infinite 0ms" }}
            />
            <span
              className="w-1 h-1 rounded-full bg-hazard"
              style={{ animation: "bounce 1s infinite 150ms" }}
            />
            <span
              className="w-1 h-1 rounded-full bg-hazard"
              style={{ animation: "bounce 1s infinite 300ms" }}
            />
          </div>
        </div>
      );
    case "rows":
      return (
        <div className="space-y-1">
          {["BERGAMOT 2OZ", "OAK MOSS 4OZ", "VANILLA 1OZ"].map((r, i) => (
            <div
              key={i}
              className="flex justify-between label-mono text-[9px] border-b border-ink/30 pb-0.5"
              style={{ animation: `fade-in 0.6s ease-out ${i * 0.2}s both` }}
            >
              <span>{r}</span>
              <span className="text-hazard">✓</span>
            </div>
          ))}
        </div>
      );
    case "morph":
      return (
        <div className="flex items-center gap-2 label-mono text-[10px]">
          <div className="border border-ink px-2 py-1">VOLCANO</div>
          <span className="text-hazard">→</span>
          <div className="bg-ink text-paper px-2 py-1">FORMULA</div>
        </div>
      );
    default:
      return null;
  }
};

export const WhatIsThis = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionHeader
          code="SECTION 01 / WHAT IS THIS"
          heading={
            <>
              Set defaults.<br />
              Make batch.<br />
              Done.
            </>
          }
          subtitle="The launch workflow is simple: Set Defaults → Add Recipes → Make Batch → Oil Tracked → Push to Store → Done."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiles.map((t, i) => (
            <FadeInOnScroll key={t.code} delay={i * 90}>
              <div className="paper-card p-5 lift h-full flex flex-col">
                <div className="flex items-center justify-between border-b border-ink/30 pb-3">
                  <t.icon className="w-5 h-5 text-hazard" />
                  <span className="label-mono text-ink-mute text-[10px]">
                    OP.{t.code}
                  </span>
                </div>
                <h3 className="font-display text-2xl mt-4">{t.title}</h3>
                <p className="typewriter text-sm mt-2 text-ink-soft flex-1">
                  {t.body}
                </p>
                <div className="mt-4 pt-3 border-t border-ink/20">
                  <TileVisual kind={t.visual} />
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
