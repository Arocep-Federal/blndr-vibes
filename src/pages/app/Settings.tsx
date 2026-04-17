import { AppShell } from "@/components/app/AppShell";
import { DossierCard } from "@/components/app/DossierCard";
import { StampBadge } from "@/components/app/StampBadge";
import { Save, Plus } from "lucide-react";

const Settings = () => {
  return (
    <AppShell
      title="OPERATIONS SETTINGS"
      subtitle="Production defaults. Mixing, batching, calculations. Don't touch unless you know."
      fileId="CFG-007"
      actions={
        <button className="label-mono text-[10px] bg-hazard text-hazard-foreground border-2 border-ink px-4 py-2 shadow-[3px_3px_0_hsl(var(--ink))] flex items-center gap-1.5">
          <Save className="w-3 h-3" /> SAVE SETTINGS
        </button>
      }
    >
      <div className="space-y-6">
        {/* Wax & Fragrance */}
        <DossierCard className="p-6" hover={false}>
          <div className="flex items-start justify-between border-b-2 border-ink/80 pb-4 mb-5">
            <div>
              <div className="label-mono text-[10px] text-hazard">▼ SECTION 01</div>
              <h2 className="font-display text-2xl mt-1">WAX & FRAGRANCE LOAD</h2>
              <p className="scribble text-sm text-ink-soft mt-1">
                Default wax and fragrance % for new blends. The math hates ambiguity.
              </p>
            </div>
            <StampBadge variant="approved" rotate={-4}>VERIFIED</StampBadge>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="label-mono text-[10px] mb-2">DEFAULT WAX</div>
              <select className="w-full border-2 border-ink/60 bg-paper px-3 py-2.5 label-mono text-xs">
                <option>GOLDEN BRANDS 464 SOY WAX</option>
              </select>
              <div className="typewriter text-[11px] text-ink-mute mt-2">
                Load: 6–10% • Pour: 135°F • Cure: 7d
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <div className="label-mono text-[10px]">FRAGRANCE LOAD %</div>
                <div className="label-mono text-[10px] text-hazard">12%</div>
              </div>
              <div className="border-2 border-ink/60 bg-paper-deep/40 h-3 relative">
                <div className="absolute inset-y-0 left-0 bg-hazard" style={{ width: "100%" }} />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-5 bg-ink border-2 border-hazard" />
              </div>
              <div className="typewriter text-[11px] text-ink-mute mt-2">Recommended: 6–10%</div>
            </div>

            <div>
              <div className="label-mono text-[10px] mb-2">RECIPE RATIO BASE</div>
              <div className="flex items-center gap-2">
                <input type="text" defaultValue="10" className="w-24 border-2 border-ink/60 bg-paper px-3 py-2 label-mono text-xs" />
                <span className="label-mono text-[10px]">OZ</span>
              </div>
              <div className="typewriter text-[11px] text-ink-mute mt-2">= 1.2 oz FO at 12%</div>
            </div>

            <div>
              <div className="label-mono text-[10px] mb-2">BATCH SIZE PRESETS</div>
              <div className="flex flex-wrap gap-1.5">
                {["1", "2", "4", "6", "12", "24"].map((n) => (
                  <button key={n} className="label-mono text-[10px] bg-ink text-paper border-2 border-ink w-9 h-9">{n}</button>
                ))}
                <button className="label-mono text-[10px] border-2 border-dashed border-ink/40 w-9 h-9">+</button>
              </div>
            </div>
          </div>
        </DossierCard>

        {/* Pour Pitcher */}
        <DossierCard className="p-6" hover={false}>
          <div className="border-b-2 border-ink/80 pb-4 mb-5">
            <div className="label-mono text-[10px] text-hazard">▼ SECTION 02</div>
            <h2 className="font-display text-2xl mt-1">POUR PITCHER</h2>
            <p className="scribble text-sm text-ink-soft mt-1">
              Pitcher capacity. Used to calculate pours per batch. Lying here is a war crime.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div>
              <div className="label-mono text-[10px] mb-2">CAPACITY</div>
              <div className="flex items-center gap-2">
                <input type="text" defaultValue="60" className="w-24 border-2 border-ink/60 bg-paper px-3 py-2 label-mono text-xs" />
                <span className="label-mono text-[10px]">OZ</span>
              </div>
            </div>
            <div className="ml-auto flex gap-1.5">
              {["40oz", "60oz", "80oz", "100oz"].map((n, i) => (
                <button key={n} className={`label-mono text-[10px] px-3 py-2 border-2 ${i === 1 ? "bg-ink text-paper border-ink" : "border-ink/40 hover:border-ink"}`}>{n}</button>
              ))}
            </div>
          </div>
        </DossierCard>

        {/* Containers */}
        <DossierCard className="p-6" hover={false}>
          <div className="flex items-start justify-between border-b-2 border-ink/80 pb-4 mb-5">
            <div>
              <div className="label-mono text-[10px] text-hazard">▼ SECTION 03</div>
              <h2 className="font-display text-2xl mt-1">CONTAINER REGISTRY</h2>
              <p className="scribble text-sm text-ink-soft mt-1">
                Vessels of choice. Each with its own price and personality.
              </p>
            </div>
            <button className="label-mono text-[10px] border-2 border-ink px-3 py-2 flex items-center gap-1.5">
              <Plus className="w-3 h-3" /> ADD CONTAINER
            </button>
          </div>

          <div className="space-y-2">
            {[
              { n: "48oz CANDLE", o: "48 oz", j: "$12.00", w: "$0.45", l: "$0.25", s: "$59.95" },
              { n: "16oz CANDLE", o: "14 oz", j: "$1.00", w: "$0.15", l: "$0.25", s: "$23.95" },
              { n: "8oz CANDLE", o: "8 oz", j: "$1.00", w: "$0.15", l: "$0.25", s: "$15.95" },
              { n: "4oz CANDLE", o: "4 oz", j: "$1.00", w: "$0.15", l: "$0.25", s: "$9.95" },
              { n: "2.7oz MELTS", o: "2.7 oz", j: "$0.30", w: "—", l: "—", s: "$5.95" },
            ].map((c) => (
              <div key={c.n} className="grid grid-cols-[auto_2fr_3fr_auto] gap-3 items-center border-2 border-ink/30 p-3 hover:border-ink hover:bg-paper-deep/30">
                <div className="w-10 h-10 border-2 border-ink flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-ink rounded-sm" />
                </div>
                <div className="font-display text-sm">{c.n}</div>
                <div className="flex flex-wrap gap-x-3 typewriter text-[10px] text-ink-soft">
                  <span>{c.o}</span>
                  <span>JAR: {c.j}</span>
                  <span>WICK: {c.w}</span>
                  <span>LID: {c.l}</span>
                </div>
                <div className="label-mono text-[11px] text-emerald-700 font-bold">{c.s}</div>
              </div>
            ))}
          </div>
        </DossierCard>

        {/* Integrations */}
        <DossierCard className="p-6" hover={false}>
          <div className="border-b-2 border-ink/80 pb-4 mb-5">
            <div className="label-mono text-[10px] text-hazard">▼ SECTION 04</div>
            <h2 className="font-display text-2xl mt-1">EXTERNAL OPERATIVES</h2>
            <p className="scribble text-sm text-ink-soft mt-1">
              Channels for moving product. Connect, sync, profit. Or don't. Your call.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { n: "SHOPIFY", s: "Live storefront sync", status: "DISCONNECTED" },
              { n: "SQUARE", s: "POS + farmer's market", status: "DISCONNECTED" },
              { n: "CANDLESCIENCE", s: "Auto-import oils + MSDS", status: "● CONNECTED" },
              { n: "STRIPE", s: "Direct payment intake", status: "DISCONNECTED" },
              { n: "QUICKBOOKS", s: "COGS sync + tax prep", status: "DISCONNECTED" },
              { n: "MAILCHIMP", s: "Customer dispatch", status: "DISCONNECTED" },
            ].map((i) => (
              <div key={i.n} className="border-2 border-ink/40 p-4 hover:border-ink relative">
                <div className="font-display text-base mb-1">{i.n}</div>
                <div className="scribble text-xs text-ink-soft mb-3">{i.s}</div>
                <div className={`label-mono text-[9px] ${i.status.startsWith("●") ? "text-emerald-700" : "text-ink-mute"}`}>{i.status}</div>
                <button className="absolute top-3 right-3 label-mono text-[9px] border border-ink px-2 py-0.5 hover:bg-ink hover:text-paper">
                  {i.status.startsWith("●") ? "MANAGE" : "LINK"}
                </button>
              </div>
            ))}
          </div>
        </DossierCard>
      </div>
    </AppShell>
  );
};

export default Settings;
