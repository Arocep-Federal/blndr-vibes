import { AppShell } from "@/components/app/AppShell";
import { DossierCard } from "@/components/app/DossierCard";
import { Search, Plus } from "lucide-react";

const stats = [
  { label: "ALL OILS", value: "75", tone: "ink" },
  { label: "TRACKING", value: "0", tone: "ink" },
  { label: "LOW STOCK", value: "0", tone: "emerald" },
  { label: "OUT OF STOCK", value: "0", tone: "hazard" },
];

const scents = [
  "ALL SCENTS", "ORIENTAL (13)", "SPICE (12)", "CITRUS (10)", "GOURMAND (10)",
  "FLORAL (7)", "HERBAL (5)", "GREEN (4)", "WOODY (4)", "FRESH (4)",
  "FRUITY (3)", "AQUATIC (2)", "EARTHY (1)",
];

const items = [
  { n: "AMBER & DRIFTWOOD", h: "CandleScience", t: "Oriental", color: "rose", notes: ["Ozone", "Citrus", "Sandalwood", "Benzoin", "Dark Musk"] },
  { n: "APPLES & MAPLE BOURBON", h: "CandleScience", t: "Gourmand", color: "violet", notes: ["Apple", "Orange", "Bourbon", "Coconut", "Vanilla"] },
  { n: "BAKING SPICES", h: "CandleScience", t: "Spice", color: "rose", notes: ["Nutmeg", "Clove", "Allspice"] },
  { n: "BANANA NUT BREAD", h: "CandleScience", t: "Gourmand", color: "violet", notes: ["Banana", "Lemon Peel", "Sugar", "Nutmeg", "Tonka Bean"] },
  { n: "BASIL ELEMENT", h: "CandleScience", t: "Herbal", color: "emerald", notes: ["Basil", "Basil", "Basil"] },
  { n: "BLACK CORAL & MOSS", h: "CandleScience", t: "Oriental", color: "rose", notes: ["Marine", "Camphor", "Lavender", "Bamboo", "Dark Musk"] },
  { n: "BLACK CURRANT ABSINTHE", h: "CandleScience", t: "Oriental", color: "rose", notes: ["Anise", "Eucalyptus", "Blackberry", "Black Currant", "Fennel"] },
  { n: "BLACK SEA", h: "CandleScience", t: "Aquatic", color: "sky", notes: ["Sea Salt", "Ozone", "Plum", "Orchid"] },
];

const dotColor: Record<string, string> = {
  rose: "bg-rose-500",
  violet: "bg-violet-500",
  emerald: "bg-emerald-600",
  sky: "bg-sky-400",
};
const tagColor: Record<string, string> = {
  rose: "border-rose-500/50 text-rose-700 bg-rose-500/5",
  violet: "border-violet-500/50 text-violet-700 bg-violet-500/5",
  emerald: "border-emerald-600/50 text-emerald-700 bg-emerald-600/5",
  sky: "border-sky-500/50 text-sky-700 bg-sky-500/5",
};

const Inventory = () => {
  return (
    <AppShell
      title="INVENTORY"
      subtitle="75 specimens accounted for. Zero tracking. Auditor will not be amused."
      fileId="INV-006"
      actions={
        <button className="label-mono bg-hazard text-hazard-foreground border-2 border-ink px-4 btn-min flex items-center gap-2 shadow-[3px_3px_0_hsl(var(--ink))] hover:translate-y-[-1px] transition-transform">
          <Plus className="w-3.5 h-3.5" /> TRACK ITEM
        </button>
      }
    >
      {/* Tabs */}
      <div className="flex gap-1 mb-5">
        <button className="label-mono bg-ink text-paper border-2 border-ink px-3 btn-min-sm">STOCK · 75</button>
        <button className="label-mono border-2 border-ink/30 px-3 btn-min-sm hover:border-ink">SHOPPING LIST</button>
      </div>

      {/* Stats — flat, no random rotation */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((s) => (
          <DossierCard key={s.label} className="p-4">
            <div className="label-mono-xs text-ink-mute">{s.label}</div>
            <div
              className={`font-display text-4xl mt-1 ${
                s.tone === "hazard"
                  ? "text-hazard"
                  : s.tone === "emerald"
                  ? "text-emerald-700"
                  : "text-ink"
              }`}
            >
              {s.value}
            </div>
          </DossierCard>
        ))}
      </div>

      {/* Scent filters */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {scents.map((s, i) => (
          <button
            key={s}
            className={`label-mono px-2.5 btn-min-sm border-2 ${
              i === 0 ? "bg-ink text-paper border-ink" : "border-ink/30 hover:border-ink"
            }`}
          >
            <span
              className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle ${
                i === 0
                  ? "bg-paper"
                  : ["bg-rose-500", "bg-amber-500", "bg-yellow-500", "bg-violet-500", "bg-pink-400", "bg-emerald-600", "bg-lime-500", "bg-stone-600", "bg-sky-400", "bg-orange-500", "bg-blue-400", "bg-amber-800"][i - 1] || "bg-ink"
              }`}
            />
            {s}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-mute" />
        <input
          type="text"
          placeholder="SEARCH INVENTORY…"
          className="w-full bg-paper border-2 border-ink/40 pl-10 pr-4 btn-min label-mono focus:outline-none focus:border-ink"
        />
      </div>

      {/* Manila-folder table — flat, scannable, one accent column (TYPE) */}
      <div className="border-2 border-ink bg-paper/60 overflow-hidden">
        {/* Folder tab */}
        <div className="bg-ink text-paper px-4 py-2 flex items-center justify-between">
          <span className="label-mono-xs">SPECIMEN MANIFEST · 75 ENTRIES</span>
          <span className="label-mono-xs text-paper/60">SORT: A → Z ▾</span>
        </div>

        {/* Column headers */}
        <div className="hidden md:grid grid-cols-[24px_minmax(0,2.5fr)_1fr_140px_120px] gap-3 px-4 py-2 border-b-2 border-ink/40 bg-paper-deep/30 label-mono-xs text-ink-mute">
          <span />
          <span>SPECIMEN</span>
          <span>SOURCE</span>
          <span>FAMILY</span>
          <span className="text-right">ACTION</span>
        </div>

        <ul>
          {items.map((it, i) => (
            <li
              key={it.n}
              className={`grid md:grid-cols-[24px_minmax(0,2.5fr)_1fr_140px_120px] gap-3 px-4 py-3 items-center transition-colors ${
                i % 2 === 1 ? "bg-paper-deep/20" : ""
              } hover:bg-hazard/5`}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${dotColor[it.color]}`} />

              <div className="min-w-0">
                <div className="font-display text-[15px] leading-tight">{it.n}</div>
                <div className="typewriter text-[12px] text-ink-mute mt-0.5 truncate">
                  {it.notes.map((n, idx) => (
                    <span key={idx}>
                      <span className="text-amber-700">{n}</span>
                      {idx < it.notes.length - 1 && <span className="text-ink-mute/50"> · </span>}
                    </span>
                  ))}
                </div>
              </div>

              <span className="label-mono-xs text-hazard hidden md:block truncate">▸ {it.h}</span>

              <span className="hidden md:block">
                <span className={`label-mono-xs border px-2 py-1 ${tagColor[it.color]}`}>
                  {it.t}
                </span>
              </span>

              <div className="md:text-right">
                <button className="label-mono btn-min-sm px-3 border-2 border-ink/40 hover:border-ink hover:bg-ink hover:text-paper transition-colors">
                  + TRACK
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AppShell>
  );
};

export default Inventory;
