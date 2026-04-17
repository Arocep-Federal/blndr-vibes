import { AppShell } from "@/components/app/AppShell";
import { DossierCard } from "@/components/app/DossierCard";
import { Search, Plus } from "lucide-react";

const stats = [
  { label: "ALL OILS", value: "75", tone: "ink" },
  { label: "TRACKING", value: "0", tone: "ink" },
  { label: "LOW STOCK", value: "0", tone: "emerald" },
  { label: "OUT OF STOCK", value: "0", tone: "hazard" },
];

const scents = ["ALL SCENTS", "ORIENTAL (13)", "SPICE (12)", "CITRUS (10)", "GOURMAND (10)", "FLORAL (7)", "HERBAL (5)", "GREEN (4)", "WOODY (4)", "FRESH (4)", "FRUITY (3)", "AQUATIC (2)", "EARTHY (1)"];

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

const Inventory = () => {
  return (
    <AppShell
      title="INVENTORY"
      subtitle="75 specimens accounted for. Zero tracking. Auditor will not be amused."
      fileId="INV-006"
      actions={
        <button className="label-mono text-[10px] bg-ink text-paper border-2 border-ink px-3 py-2 flex items-center gap-1.5 hover:bg-hazard">
          <Plus className="w-3 h-3" /> TRACK ITEM
        </button>
      }
    >
      <div className="flex gap-2 mb-5">
        <button className="label-mono text-[10px] bg-ink text-paper border-2 border-ink px-3 py-2">STOCK (75)</button>
        <button className="label-mono text-[10px] border-2 border-ink/40 px-3 py-2 hover:border-ink">SHOPPING LIST</button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((s) => (
          <DossierCard key={s.label} className="p-4" rotate={Math.random() * 0.6 - 0.3}>
            <div className="label-mono text-[10px] text-ink-mute">{s.label}</div>
            <div className={`font-display text-4xl mt-1 ${s.tone === "hazard" ? "text-hazard" : s.tone === "emerald" ? "text-emerald-700" : "text-ink"}`}>{s.value}</div>
          </DossierCard>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {scents.map((s, i) => (
          <button key={s} className={`label-mono text-[9px] px-2.5 py-1.5 border ${i === 0 ? "bg-ink text-paper border-ink" : "border-ink/40 hover:border-ink"}`}>
            <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 ${
              i === 0 ? "bg-paper" : ["bg-rose-500", "bg-amber-500", "bg-yellow-500", "bg-violet-500", "bg-pink-400", "bg-emerald-600", "bg-lime-500", "bg-stone-600", "bg-sky-400", "bg-orange-500", "bg-blue-400", "bg-amber-800"][i - 1] || "bg-ink"
            }`} />
            {s}
          </button>
        ))}
      </div>

      <div className="relative mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-mute" />
        <input
          type="text"
          placeholder="SEARCH INVENTORY..."
          className="w-full bg-paper border-2 border-ink/60 pl-10 pr-4 py-2.5 label-mono text-[10px] focus:outline-none focus:border-hazard"
        />
      </div>

      <DossierCard className="overflow-hidden" hover={false}>
        <table className="w-full">
          <tbody>
            {items.map((it, i) => (
              <tr key={it.n} className={`border-b border-ink/20 ${i === items.length - 1 ? "border-b-0" : ""} hover:bg-paper-deep/30 transition-colors`}>
                <td className="py-3 pl-4 pr-2 w-2">
                  <span className={`block w-2 h-2 rounded-full ${
                    { rose: "bg-rose-500", violet: "bg-violet-500", emerald: "bg-emerald-600", sky: "bg-sky-400" }[it.color]
                  }`} />
                </td>
                <td className="py-3 px-2">
                  <div className="font-display text-sm">{it.n}</div>
                  <div className="flex flex-wrap gap-x-2 typewriter text-[10px] text-ink-mute mt-0.5">
                    {it.notes.map((n) => <span key={n} className="text-amber-700">{n}</span>)}
                  </div>
                </td>
                <td className="py-3 px-2 hidden md:table-cell">
                  <span className="label-mono text-[9px] text-hazard">▸ {it.h}</span>
                </td>
                <td className="py-3 px-2 hidden md:table-cell">
                  <span className={`label-mono text-[9px] border px-2 py-0.5 ${
                    { rose: "border-rose-500/60 text-rose-700", violet: "border-violet-500/60 text-violet-700", emerald: "border-emerald-600/60 text-emerald-700", sky: "border-sky-500/60 text-sky-700" }[it.color]
                  }`}>{it.t}</span>
                </td>
                <td className="py-3 pl-2 pr-4 text-right">
                  <button className="label-mono text-[10px] border-2 border-dashed border-ink/40 px-3 py-1 hover:border-ink hover:bg-ink hover:text-paper">
                    + TRACK
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DossierCard>
    </AppShell>
  );
};

export default Inventory;
