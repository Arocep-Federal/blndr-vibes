import { PaperCard } from "./PaperCard";
import { FadeInOnScroll } from "./marketing/FadeInOnScroll";
import { SectionHeader } from "./marketing/SectionHeader";

const blends = [
  {
    id: "88.X-OMEGA",
    name: "Vermont Cider Mill",
    format: "8OZ SOY CANDLE",
    operative: "@maple_op",
    when: "3 days ago",
    hazard: "CLASS 4 — EXTREME COZY",
    note: "Wood smoke, pressed apple skins, a barn that's been there since 1902.",
    components: [
      { label: "SMOKED MAPLE — CANDLESCIENCE", pct: 40 },
      { label: "BLACK PEPPER — NG", pct: 25 },
      { label: "APPLE SKIN — BRAMBLEBERRY", pct: 20 },
      { label: "VETIVER — INDIE", pct: 15 },
    ],
    rotate: -1.2,
  },
  {
    id: "44.K-NOVA",
    name: "Hotel Lobby Linen",
    format: "4OZ TIN CANDLE",
    operative: "@suite_404",
    when: "1 week ago",
    hazard: "CLASS 2 — QUIETLY EXPENSIVE",
    note: "The exact lobby scent from that boutique hotel you can't quite remember.",
    components: [
      { label: "WHITE TEA — CANDLESCIENCE", pct: 50 },
      { label: "BERGAMOT (BFC-FREE) — NG", pct: 30 },
      { label: "WHITE MUSK — LONE STAR", pct: 20 },
    ],
    rotate: 1.6,
  },
  {
    id: "21.J-DRIFT",
    name: "Volcano // Working Dupe",
    format: "10OZ COCONUT WAX",
    operative: "@coastal_pour",
    when: "2 days ago",
    hazard: "CLASS 3 — DUPE OPS",
    note: "Tropical fruit wall, sugared citrus, the candle every dental office bought in 2019.",
    components: [
      { label: "PINEAPPLE CILANTRO — CS", pct: 35 },
      { label: "SUGARED ORANGE — NG", pct: 30 },
      { label: "JASMINE PETALS — BB", pct: 20 },
      { label: "VANILLA HUSK — INDIE", pct: 15 },
    ],
    rotate: -0.6,
  },
  {
    id: "07.R-PURGE",
    name: "Cream Vanilla Melt",
    format: "WAX MELT, 1.2 LB BATCH",
    operative: "@lyebrigade",
    when: "5 days ago",
    hazard: "CLASS 2 — CLEAN WARMTH",
    note: "Soft vanilla built for wax melts without turning the room into a cupcake hostage situation.",
    components: [
      { label: "MADAGASCAR VANILLA STAB. — BB", pct: 60 },
      { label: "TONKA (LOW VAN.) — NG", pct: 25 },
      { label: "BENZOIN RESIN — INDIE", pct: 15 },
    ],
    rotate: 1.1,
  },
  {
    id: "55.M-FUR",
    name: "Goth Christmas",
    format: "WAX MELT, 2.5 OZ",
    operative: "@black_advent",
    when: "yesterday",
    hazard: "CLASS 4 — DOOM SEASONAL",
    note: "Frankincense, dried orange, smoldering pine. Christmas if Christmas had a leather jacket.",
    components: [
      { label: "FRANKINCENSE — INDIE", pct: 40 },
      { label: "DRIED ORANGE PEEL — NG", pct: 30 },
      { label: "BURNT PINE — CS", pct: 20 },
      { label: "BLACK AMBER — BB", pct: 10 },
    ],
    rotate: -1.8,
  },
  {
    id: "92.Z-VOID",
    name: "Car Freshener, Not Insulting",
    format: "AROMA BEAD VENT CLIP",
    operative: "@no_pine_tree",
    when: "4 days ago",
    hazard: "CLASS 3 — DAILY DRIVER",
    note: "Engineered to not smell like a 7-Eleven air freshener. Subtle, real, warm.",
    components: [
      { label: "TEAKWOOD — CS", pct: 45 },
      { label: "TOBACCO LEAF — NG", pct: 30 },
      { label: "MANDARIN — BB", pct: 25 },
    ],
    rotate: 0.8,
  },
];

export const Blends = () => {
  return (
    <section id="blends" className="py-20 md:py-28">
      <div className="container">
        <SectionHeader
          code="▼ ARCHIVE / SECTION 04 — DECLASSIFIED"
          heading={
            <>
              Real batches.<br />
              Real makers.
            </>
          }
          subtitle="Six production-ready formulas cleared for public viewing. The rest are still earning their keep in somebody's batch planner."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blends.map((b, i) => (
            <FadeInOnScroll key={b.id} delay={i * 60}>
              <PaperCard
                rotate={b.rotate}
                withTape={i % 3 === 0 ? "left" : i % 3 === 1 ? "center" : "right"}
                className="p-6 lift group h-full"
              >
                <div className="flex items-center justify-between border-b border-ink/30 pb-3">
                  <span className="label-mono text-ink-mute">FILE_ID {b.id}</span>
                  <span className="label-mono bg-ink text-paper px-2 py-0.5 text-[10px]">
                    {b.format}
                  </span>
                </div>
                <h3 className="display text-3xl mt-5">{b.name}</h3>
                <div className="redact-hazard label-mono mt-3 text-[10px]">
                  {b.hazard}
                </div>
                <p className="typewriter text-sm mt-4 text-ink-soft min-h-[60px]">
                  {b.note}
                </p>

                <div className="mt-5 space-y-2">
                  {b.components.map((c) => (
                    <div key={c.label}>
                      <div className="flex justify-between label-mono text-[10px]">
                        <span className="truncate pr-2">{c.label}</span>
                        <span>{c.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-paper-deep mt-1 relative overflow-hidden">
                        <div
                          className="absolute inset-y-0 left-0 bg-ink"
                          style={{ width: `${c.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-3 border-t border-ink/20 flex items-center justify-between label-mono text-[10px] text-ink-mute opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>BY {b.operative}</span>
                  <span>· {b.when}</span>
                </div>

                <button className="mt-4 w-full label-mono border border-ink py-2 hover:bg-ink hover:text-paper transition-colors">
                  REQUEST FORMULA →
                </button>
              </PaperCard>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
