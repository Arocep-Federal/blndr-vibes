import { AppShell } from "@/components/app/AppShell";
import { DossierCard } from "@/components/app/DossierCard";
import { Search, Check, Info, Trash2 } from "lucide-react";

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
          <button className="label-mono border-2 border-ink/30 px-3 btn-min hover:border-ink flex items-center gap-1.5 hidden md:flex">
            <Trash2 className="w-3 h-3" /> PURGE
          </button>
          <button className="label-mono bg-hazard text-hazard-foreground border-2 border-ink px-4 btn-min shadow-[3px_3px_0_hsl(var(--ink))] hover:translate-y-[-1px] transition-transform">
            SAVE SELECTED
          </button>
        </>
      }
    >
      {/* House filter */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {houses.map((h, i) => (
          <button
            key={h}
            className={`label-mono px-3 btn-min-sm border-2 ${i === 1 ? "bg-ink text-paper border-ink" : "border-ink/30 hover:border-ink"}`}
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
          placeholder="SEARCH BY NAME OR NOTE…"
          className="w-full bg-paper border-2 border-ink/40 pl-10 pr-4 btn-min label-mono placeholder:text-ink-mute focus:outline-none focus:border-ink"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {oils.map((oil) => (
          <DossierCard key={oil.name} className="p-5">
            <div className="flex items-start justify-between mb-2 gap-2">
              <div className="font-display text-base leading-tight">{oil.name}</div>
              <div className="flex items-center gap-1 shrink-0">
                <button aria-label="Info" className="w-6 h-6 border border-ink/40 flex items-center justify-center hover:border-ink hover:bg-paper-deep">
                  <Info className="w-3 h-3" />
                </button>
                <button
                  aria-label={oil.saved ? "Saved" : "Save to library"}
                  className={`w-6 h-6 border-2 flex items-center justify-center ${
                    oil.saved
                      ? "bg-hazard text-hazard-foreground border-hazard"
                      : "border-ink/40 hover:border-ink"
                  }`}
                >
                  {oil.saved && <Check className="w-3 h-3" strokeWidth={3} />}
                </button>
              </div>
            </div>
            <div className="label-mono-xs text-hazard mb-3">▸ {oil.house.toUpperCase()}</div>

            <div className="space-y-1.5 typewriter text-[13px] leading-snug">
              <div><span className="label-mono-xs text-ink-mute mr-1.5">T:</span>{oil.top}</div>
              <div><span className="label-mono-xs text-ink-mute mr-1.5">M:</span>{oil.mid}</div>
              <div><span className="label-mono-xs text-ink-mute mr-1.5">B:</span>{oil.base}</div>
            </div>

            <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-dashed border-ink/30">
              <span className="label-mono-xs border border-ink/40 px-1.5 py-0.5">CANDLE</span>
              <span className="label-mono-xs border border-ink/40 px-1.5 py-0.5">WAX MELT</span>
              <span className="label-mono-xs border border-emerald-700/50 text-emerald-800 px-1.5 py-0.5">PHTHALATE-FREE</span>
              {oil.saved && (
                <span className="label-mono-xs bg-hazard text-hazard-foreground px-1.5 py-0.5">IN LIBRARY</span>
              )}
            </div>
          </DossierCard>
        ))}
      </div>
    </AppShell>
  );
};

export default Library;
