import { AppShell } from "@/components/app/AppShell";
import { DossierCard } from "@/components/app/DossierCard";
import { StampBadge } from "@/components/app/StampBadge";
import { Search, Check, Info } from "lucide-react";

const houses = ["ALL HOUSES", "CANDLESCIENCE", "NATURE'S GARDEN", "FLAMING CANDLE"];

const oils = [
  { name: "AUTUMN GLOW", house: "CandleScience", top: "Apple, Cinnamon, Clove", mid: "Pine, Eucalyptus, Cranberry", base: "Cedar", saved: false },
  { name: "AZURE COAST", house: "CandleScience", top: "Marine, Honeydew, Apple", mid: "Lily, Jasmine", base: "Sandalwood, Musk", saved: false },
  { name: "BABY POWDER", house: "CandleScience", top: "Ozone, Orange", mid: "Rose, Orange Blossom", base: "Powder, Cedar", saved: false },
  { name: "BAKING SPICES", house: "CandleScience", top: "Nutmeg", mid: "Clove", base: "Allspice", saved: true },
  { name: "BALTIC DEW", house: "CandleScience", top: "Ozone, Apple, Lemon", mid: "Sage, Eucalyptus", base: "Amber, Patchouli", saved: false },
  { name: "BAMBOO + COCONUT", house: "CandleScience", top: "Spearmint, Pineapple", mid: "Bamboo, Floral", base: "Coconut Milk", saved: false },
  { name: "BANANA NUT BREAD", house: "CandleScience", top: "Banana, Lemon, Walnut", mid: "Sugar, Nutmeg", base: "Tonka, Butter, Vanilla", saved: true },
  { name: "BASIL ELEMENT", house: "CandleScience", top: "Basil", mid: "Basil", base: "Basil", saved: true },
  { name: "BEACH LINEN", house: "CandleScience", top: "Orange Blossom, Cotton", mid: "Linen, Ozone", base: "Powder, Sandalwood", saved: false },
  { name: "BEACHWOOD", house: "CandleScience", top: "Sea Salt, Orange Peel", mid: "Eucalyptus, Sage", base: "Patchouli, Teakwood", saved: false },
  { name: "BERGAMOT ELEMENT", house: "CandleScience", top: "Bergamot", mid: "Bergamot", base: "Bergamot", saved: false },
  { name: "BLACK CURRANT ABSINTHE", house: "CandleScience", top: "Anise, Eucalyptus", mid: "Blackberry, Currant", base: "Fennel", saved: false },
];

const Library = () => {
  return (
    <AppShell
      title="OIL LIBRARY"
      subtitle="75 specimens cataloged. Cross-referenced. Smell-tested by people of questionable judgment."
      fileId="LIB-003"
      actions={
        <>
          <button className="label-mono text-[10px] border-2 border-ink px-3 py-2 hover:bg-ink hover:text-paper">SELECT TO SAVE</button>
          <button className="label-mono text-[10px] border-2 border-hazard text-hazard px-3 py-2 hover:bg-hazard hover:text-hazard-foreground">PURGE LIBRARY</button>
        </>
      }
    >
      {/* House filter */}
      <div className="flex flex-wrap gap-2 mb-5">
        {houses.map((h, i) => (
          <button
            key={h}
            className={`label-mono text-[10px] px-3 py-2 border-2 ${i === 1 ? "bg-ink text-paper border-ink" : "border-ink/40 hover:border-ink"}`}
          >
            {h}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-mute" />
        <input
          type="text"
          placeholder="SEARCH BY NAME OR NOTE..."
          className="w-full bg-paper border-2 border-ink/60 pl-10 pr-4 py-3 label-mono text-xs placeholder:text-ink-mute focus:outline-none focus:border-hazard"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {oils.map((oil, i) => (
          <DossierCard key={oil.name} className="p-5" rotate={(i % 3 - 1) * 0.3}>
            <div className="flex items-start justify-between mb-2">
              <div className="font-display text-base leading-tight pr-2">{oil.name}</div>
              <div className="flex items-center gap-1 shrink-0">
                <button className="w-5 h-5 border border-ink/60 flex items-center justify-center hover:bg-ink hover:text-paper">
                  <Info className="w-3 h-3" />
                </button>
                <button
                  className={`w-5 h-5 border-2 flex items-center justify-center ${oil.saved ? "bg-hazard text-hazard-foreground border-hazard" : "border-ink/60"}`}
                >
                  {oil.saved && <Check className="w-3 h-3" strokeWidth={3} />}
                </button>
              </div>
            </div>
            <div className="label-mono text-[9px] text-hazard mb-3">▸ {oil.house.toUpperCase()}</div>

            <div className="space-y-1.5 typewriter text-xs leading-snug">
              <div><span className="label-mono text-[9px] text-ink-mute mr-1.5">T:</span>{oil.top}</div>
              <div><span className="label-mono text-[9px] text-ink-mute mr-1.5">M:</span>{oil.mid}</div>
              <div><span className="label-mono text-[9px] text-ink-mute mr-1.5">B:</span>{oil.base}</div>
            </div>

            <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-dashed border-ink/30">
              <span className="label-mono text-[8px] border border-ink/60 px-1.5 py-0.5">CANDLE</span>
              <span className="label-mono text-[8px] border border-ink/60 px-1.5 py-0.5">WAX MELT</span>
              <span className="label-mono text-[8px] border border-emerald-700/60 text-emerald-800 px-1.5 py-0.5">PHTHALATE-FREE</span>
              {oil.saved && (
                <span className="label-mono text-[8px] bg-hazard text-hazard-foreground px-1.5 py-0.5">IN LIBRARY</span>
              )}
            </div>
          </DossierCard>
        ))}
      </div>
    </AppShell>
  );
};

export default Library;
