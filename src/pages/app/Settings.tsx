import { AppShell } from "@/components/app/AppShell";
import { DossierCard } from "@/components/app/DossierCard";
import { StampBadge } from "@/components/app/StampBadge";
import { Save, Plus, MoreHorizontal } from "lucide-react";

const Settings = () => {
  return (
    <AppShell
      title="OPERATIONS SETTINGS"
      subtitle="Production defaults. Mixing, batching, calculations. Don't touch unless you know."
      fileId="CFG-007"
      actions={
        <button className="label-mono bg-hazard text-hazard-foreground border-2 border-ink px-4 btn-min shadow-[3px_3px_0_hsl(var(--ink))] flex items-center gap-2 hover:translate-y-[-1px] transition-transform">
          <Save className="w-3.5 h-3.5" /> SAVE SETTINGS
        </button>
      }
    >
      <div className="space-y-6">
        {/* Wax & Fragrance */}
        <DossierCard className="p-6" hover={false}>
          <div className="flex items-start justify-between border-b-2 border-ink/80 pb-4 mb-5">
            <div>
              <div className="label-mono text-hazard">▼ SECTION 01</div>
              <h2 className="font-display text-2xl mt-1">WAX & FRAGRANCE LOAD</h2>
              <p className="scribble text-[13px] text-ink-soft mt-1">
                Default wax and fragrance % for new blends. The math hates ambiguity.
              </p>
            </div>
            <StampBadge variant="approved" rotate={-4}>VERIFIED</StampBadge>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="label-mono mb-2">DEFAULT WAX</div>
              <select className="w-full border-2 border-ink/40 bg-paper px-3 btn-min label-mono hover:border-ink">
                <option>GOLDEN BRANDS 464 SOY WAX</option>
              </select>
              <div className="typewriter text-[12px] text-ink-mute mt-2">
                Load: 6–10% • Pour: 135°F • Cure: 7d
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <div className="label-mono">FRAGRANCE LOAD %</div>
                <div className="label-mono text-hazard">12%</div>
              </div>
              <div className="border-2 border-ink/40 bg-paper-deep/40 h-3 relative">
                <div className="absolute inset-y-0 left-0 bg-hazard" style={{ width: "100%" }} />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-5 bg-ink border-2 border-hazard" />
              </div>
              <div className="typewriter text-[12px] text-ink-mute mt-2">Recommended: 6–10%</div>
            </div>

            <div>
              <div className="label-mono mb-2">RECIPE RATIO BASE</div>
              <div className="flex items-center gap-2">
                <input type="text" defaultValue="10" className="w-24 border-2 border-ink/40 bg-paper px-3 btn-min label-mono hover:border-ink" />
                <span className="label-mono">OZ</span>
              </div>
              <div className="typewriter text-[12px] text-ink-mute mt-2">= 1.2 oz FO at 12%</div>
            </div>

            <div>
              <div className="label-mono mb-2">BATCH SIZE PRESETS</div>
              <div className="flex flex-wrap gap-1.5">
                {["1", "2", "4", "6", "12", "24"].map((n) => (
                  <button key={n} className="label-mono bg-ink text-paper border-2 border-ink w-10 h-10">{n}</button>
                ))}
                <button className="label-mono border-2 border-dashed border-ink/40 w-10 h-10 hover:border-ink">+</button>
              </div>
            </div>
          </div>
        </DossierCard>

        {/* Pour Pitcher */}
        <DossierCard className="p-6" hover={false}>
          <div className="border-b-2 border-ink/80 pb-4 mb-5">
            <div className="label-mono text-hazard">▼ SECTION 02</div>
            <h2 className="font-display text-2xl mt-1">POUR PITCHER</h2>
            <p className="scribble text-[13px] text-ink-soft mt-1">
              Pitcher capacity. Used to calculate pours per batch. Lying here is a war crime.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div>
              <div className="label-mono mb-2">CAPACITY</div>
              <div className="flex items-center gap-2">
                <input type="text" defaultValue="60" className="w-24 border-2 border-ink/40 bg-paper px-3 btn-min label-mono hover:border-ink" />
                <span className="label-mono">OZ</span>
              </div>
            </div>
            <div className="ml-auto flex flex-wrap gap-1.5">
              {["40oz", "60oz", "80oz", "100oz"].map((n, i) => (
                <button key={n} className={`label-mono px-3 btn-min border-2 ${i === 1 ? "bg-ink text-paper border-ink" : "border-ink/30 hover:border-ink"}`}>{n}</button>
              ))}
            </div>
          </div>
        </DossierCard>

        {/* Containers */}
        <DossierCard className="p-6" hover={false}>
          <div className="flex items-start justify-between border-b-2 border-ink/80 pb-4 mb-5">
            <div>
              <div className="label-mono text-hazard">▼ SECTION 03</div>
              <h2 className="font-display text-2xl mt-1">CONTAINER REGISTRY</h2>
              <p className="scribble text-[13px] text-ink-soft mt-1">
                Vessels of choice. Each with its own price and personality.
              </p>
            </div>
            <button className="label-mono border-2 border-ink/30 px-3 btn-min flex items-center gap-1.5 hover:border-ink">
              <Plus className="w-3 h-3" /> ADD
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
                <div className="flex flex-wrap gap-x-3 typewriter text-[12px] text-ink-soft">
                  <span>{c.o}</span>
                  <span>JAR: {c.j}</span>
                  <span>WICK: {c.w}</span>
                  <span>LID: {c.l}</span>
                </div>
                <div className="label-mono text-emerald-700 font-bold">{c.s}</div>
              </div>
            ))}
          </div>
        </DossierCard>

        {/* Integrations */}
        <DossierCard className="p-6" hover={false}>
          <div className="border-b-2 border-ink/80 pb-4 mb-5">
            <div className="label-mono text-hazard">▼ SECTION 04</div>
            <h2 className="font-display text-2xl mt-1">STORE SYNC</h2>
            <p className="scribble text-[13px] text-ink-soft mt-1">
              Channels for moving product. Connect, sync, profit. Or don't. Your call.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { n: "SHOPIFY", s: "Live storefront sync", connected: false },
              { n: "SQUARE", s: "POS + farmer's market", connected: false },
              { n: "CANDLESCIENCE", s: "Auto-import oils + MSDS", connected: true },
              { n: "STRIPE", s: "Direct payment intake", connected: false },
              { n: "QUICKBOOKS", s: "COGS sync + tax prep", connected: false },
              { n: "MAILCHIMP", s: "Customer dispatch", connected: false },
            ].map((i) => (
              <div key={i.n} className="border-2 border-ink/30 p-4 hover:border-ink transition-colors flex flex-col">
                <div className="flex items-start justify-between mb-1">
                  <div className="font-display text-base">{i.n}</div>
                  {i.connected ? (
                    <button aria-label="Manage" className="w-7 h-7 border border-ink/30 flex items-center justify-center hover:border-ink">
                      <MoreHorizontal className="w-3.5 h-3.5" />
                    </button>
                  ) : null}
                </div>
                <div className="scribble text-[12px] text-ink-soft mb-3 flex-1">{i.s}</div>
                <div className="flex items-center justify-between gap-2">
                  <span className={`label-mono-xs ${i.connected ? "text-emerald-700" : "text-ink-mute"}`}>
                    {i.connected ? "● CONNECTED" : "○ NOT LINKED"}
                  </span>
                  <button className={`label-mono btn-min-sm px-3 border-2 ${
                    i.connected
                      ? "border-ink/30 hover:border-ink"
                      : "border-ink hover:bg-ink hover:text-paper"
                  }`}>
                    {i.connected ? "MANAGE" : "LINK"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </DossierCard>
      </div>
    </AppShell>
  );
};

export default Settings;
