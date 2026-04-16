import { PaperCard } from "./PaperCard";

const blends = [
  {
    id: "88.X-OMEGA",
    name: "Olive Leaf & Fig",
    hazard: "CLASS 4 — EXTREME VIBE SHIFT",
    note: "The scent of a Tuscan villa aggressively asserting dominance over your living room.",
    components: [
      { label: "OLIVE LEAF & CITRON", pct: 67 },
      { label: "MEDITERRANEAN FIG", pct: 33 },
    ],
    rotate: -1.2,
  },
  {
    id: "44.K-NOVA",
    name: "Smoke & Cardamom",
    hazard: "CLASS 3 — UNSTABLE WARMTH",
    note: "Reads as: leather jacket borrowed from someone who just disappeared at a poetry reading.",
    components: [
      { label: "BURNT CEDAR", pct: 52 },
      { label: "BLACK CARDAMOM", pct: 28 },
      { label: "TONKA RESIDUE", pct: 20 },
    ],
    rotate: 1.6,
  },
  {
    id: "21.J-DRIFT",
    name: "Salt Driftwood",
    hazard: "CLASS 2 — COASTAL DELUSION",
    note: "Engineers a memory of a coastline you have never visited. Highly addictive.",
    components: [
      { label: "ATLANTIC SALT", pct: 44 },
      { label: "SUN-BLEACHED OAK", pct: 41 },
      { label: "AMBERGRIS GHOST", pct: 15 },
    ],
    rotate: -0.6,
  },
  {
    id: "07.R-PURGE",
    name: "Tomato Leaf Crime",
    hazard: "CLASS 5 — DO NOT WEAR INDOORS",
    note: "Smells like the moment your grandmother realizes you broke the greenhouse. Forbidden in 4 states.",
    components: [
      { label: "GREEN TOMATO LEAF", pct: 60 },
      { label: "CRUSHED BASIL", pct: 25 },
      { label: "WET SOIL", pct: 15 },
    ],
    rotate: 1.1,
  },
  {
    id: "55.M-FUR",
    name: "Old Money Mishap",
    hazard: "CLASS 3 — INHERITED ENERGY",
    note: "A generational wealth simulator. May cause involuntary references to 'the property in Maine'.",
    components: [
      { label: "IRIS POWDER", pct: 48 },
      { label: "VETIVER", pct: 32 },
      { label: "WORN SUEDE", pct: 20 },
    ],
    rotate: -1.8,
  },
  {
    id: "92.Z-VOID",
    name: "Library After Hours",
    hazard: "CLASS 2 — INTROVERT TRAP",
    note: "Engineered for people who pretend to read Borges. We see you. We approve.",
    components: [
      { label: "FOXED PAPER", pct: 55 },
      { label: "INK & GLUE", pct: 25 },
      { label: "DUST PARTICULATE", pct: 20 },
    ],
    rotate: 0.8,
  },
];

export const Blends = () => {
  return (
    <section id="blends" className="py-20 md:py-28">
      <div className="container">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div>
            <div className="label-mono text-hazard">▼ ARCHIVE / SECTION 02</div>
            <h2 className="display text-5xl md:text-7xl mt-3">
              Classified<br />Blends.
            </h2>
          </div>
          <p className="typewriter max-w-md text-ink-soft">
            Six profiles cleared for public viewing. The other 1,402 remain sealed
            pending review. <span className="redact">REASON WITHHELD</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blends.map((b, i) => (
            <PaperCard
              key={b.id}
              rotate={b.rotate}
              withTape={i % 3 === 0 ? "left" : i % 3 === 1 ? "center" : "right"}
              className="p-6 lift"
            >
              <div className="flex items-center justify-between border-b border-ink/30 pb-3">
                <span className="label-mono text-ink-mute">FILE_ID {b.id}</span>
                <span className="label-mono bg-ink text-paper px-2 py-0.5 text-[10px]">SEALED</span>
              </div>
              <h3 className="display text-3xl mt-5">{b.name}</h3>
              <div className="redact-hazard label-mono mt-3 text-[10px]">{b.hazard}</div>
              <p className="typewriter text-sm mt-4 text-ink-soft min-h-[60px]">{b.note}</p>

              <div className="mt-6 space-y-2">
                {b.components.map((c) => (
                  <div key={c.label}>
                    <div className="flex justify-between label-mono text-[11px]">
                      <span>{c.label}</span>
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

              <button className="mt-6 w-full label-mono border border-ink py-2 hover:bg-ink hover:text-paper transition-colors">
                REQUEST FORMULA →
              </button>
            </PaperCard>
          ))}
        </div>
      </div>
    </section>
  );
};
