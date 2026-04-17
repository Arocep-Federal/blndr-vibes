import { AppShell } from "@/components/app/AppShell";
import { DossierCard } from "@/components/app/DossierCard";
import { StampBadge } from "@/components/app/StampBadge";
import { Printer, ChevronUp, AlertTriangle, Plus } from "lucide-react";

const containers = [
  { name: "48oz CANDLE", profit: "49.3%", sell: "$59.95", cost: "$30.41", p: "$29.54", color: "amber" },
  { name: "16oz CANDLE", profit: "72.6%", sell: "$23.95", cost: "$6.57", p: "$17.38", color: "ink" },
  { name: "8oz CANDLE", profit: "72.7%", sell: "$15.95", cost: "$4.35", p: "$11.60", color: "ink" },
  { name: "4oz CANDLE", profit: "71.1%", sell: "$9.95", cost: "$2.88", p: "$7.07", color: "ink" },
  { name: "2.7oz MELTS", profit: "78.2%", sell: "$5.95", cost: "$1.30", p: "$4.65", color: "ink" },
];

const BatchPlanner = () => {
  return (
    <AppShell
      title="BATCH PLANNER"
      subtitle="Math, hazards, and a stiff dose of capitalism. Calculations refuse to lie."
      fileId="BAT-005"
      actions={
        <button className="label-mono text-[10px] border-2 border-ink px-3 py-2 flex items-center gap-1.5"><Printer className="w-3 h-3" /> PRINT DOSSIER</button>
      }
    >
      {/* Profit & Margin */}
      <DossierCard className="p-6 mb-6" hover={false}>
        <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-ink/80">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="font-display text-2xl">PROFIT & MARGIN</h2>
            <span className="label-mono text-[10px] text-ink-mute">· QUEEN OF HEARTS · 41 UNITS</span>
            <StampBadge variant="approved" rotate={-4}>67.7%</StampBadge>
          </div>
          <ChevronUp className="w-5 h-5" />
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-6">
          {/* Cost breakdown */}
          <div>
            <div className="label-mono text-[10px] text-hazard mb-3">▼ COST BREAKDOWN</div>
            <div className="space-y-2 typewriter text-sm">
              {[["Wax", "$32.79"], ["Fragrance oils", "$57.55"], ["Containers", "$46.20"], ["Wicks", "$3.15"], ["Lids", "$4.25"]].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-dashed border-ink/30 pb-1.5">
                  <span>{k}</span><span>{v}</span>
                </div>
              ))}
              <div className="flex justify-between pt-2 font-display text-base">
                <span>TOTAL COGS</span><span>$143.93</span>
              </div>
            </div>
          </div>

          {/* Per container */}
          <div>
            <div className="label-mono text-[10px] text-hazard mb-3">▼ PER CONTAINER</div>
            <div className="grid sm:grid-cols-2 gap-3">
              {containers.map((c) => (
                <div key={c.name} className="border-2 border-ink/40 p-3 bg-paper-deep/20">
                  <div className="flex justify-between items-baseline mb-2">
                    <div className="font-display text-sm">(2) {c.name}</div>
                    <div className={`label-mono text-xs font-bold ${c.color === "amber" ? "text-amber-700" : "text-ink"}`}>{c.profit}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-1 typewriter text-[10px]">
                    <div><div className="label-mono text-[8px] text-ink-mute">SELL</div><div>{c.sell}</div></div>
                    <div><div className="label-mono text-[8px] text-ink-mute">COST</div><div>{c.cost}</div></div>
                    <div><div className="label-mono text-[8px] text-ink-mute">PROFIT</div><div className="text-emerald-700">{c.p}</div></div>
                  </div>
                  <div className="h-1 mt-2 border border-ink/40 flex">
                    <div className={`h-full ${c.color === "amber" ? "bg-amber-500" : "bg-ink"}`} style={{ width: c.profit }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total batch */}
          <div className="bg-ink text-paper p-5 border-2 border-ink relative">
            <div className="absolute -top-3 left-3"><StampBadge variant="hazard" rotate={-3}>OVERALL</StampBadge></div>
            <div className="label-mono text-[10px] text-paper/70 mb-1 mt-2">TOTAL BATCH OVERALL</div>
            <div className="font-display text-6xl text-hazard leading-none mb-1">67.7<span className="text-2xl">%</span></div>
            <div className="typewriter text-xs text-paper/80 mb-4">Strong — premium positioning. Industry: 50–65%</div>
            <div className="space-y-1.5 pt-4 border-t border-paper/30">
              <div className="flex justify-between label-mono text-[10px]"><span className="text-paper/60">REVENUE</span><span>$445.95</span></div>
              <div className="flex justify-between label-mono text-[10px]"><span className="text-paper/60">COST</span><span>$143.93</span></div>
              <div className="flex justify-between label-mono text-[11px]"><span className="text-hazard">PROFIT</span><span className="text-hazard">$302.02</span></div>
            </div>
          </div>
        </div>
      </DossierCard>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Recipe */}
        <DossierCard className="p-5" rotate={-0.4} tape>
          <div className="label-mono text-[10px] text-hazard mb-2">▼ RECIPE</div>
          <h3 className="font-display text-xl mb-3">QUEEN OF HEARTS</h3>
          <select className="w-full border-2 border-ink/60 bg-paper px-3 py-2 label-mono text-[10px] mb-3">
            <option>QUEEN OF HEARTS ▾</option>
          </select>
          <div className="space-y-1.5 typewriter text-xs">
            <div><span className="label-mono text-[9px] text-ink-mute mr-2">WAX:</span>Unknown</div>
            <div><span className="label-mono text-[9px] text-ink-mute mr-2">LOAD:</span>12% (from settings)</div>
            <div><span className="label-mono text-[9px] text-ink-mute mr-2">OILS:</span>Cherry Eclipse, Leather</div>
          </div>
          <div className="mt-4 pt-3 border-t border-dashed border-ink/30 flex items-center gap-2 text-hazard typewriter text-xs">
            <AlertTriangle className="w-3 h-3" /> Not enough stock — 21.8 oz short
          </div>
          <button className="w-full mt-3 label-mono text-[11px] bg-ink text-paper border-2 border-ink py-2.5 hover:bg-hazard">
            ▸ MAKE BATCH
          </button>
        </DossierCard>

        {/* Containers */}
        <DossierCard className="p-5" rotate={0.3}>
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="label-mono text-[10px] text-hazard">▼ CONTAINERS</div>
              <h3 className="font-display text-xl">UNITS</h3>
            </div>
            <button className="label-mono text-[10px] border border-ink/60 px-2 py-1 flex items-center gap-1"><Plus className="w-3 h-3" /> ADD</button>
          </div>

          {[{ s: "48oz CANDLE", p: "48 oz · $12", a: 2 }, { s: "16oz CANDLE", p: "14 oz · $1", a: 2 }].map((c) => (
            <div key={c.s} className="mb-4">
              <div className="flex justify-between mb-1.5">
                <div className="label-mono text-[10px]">{c.s}</div>
                <div className="label-mono text-[9px] text-ink-mute">{c.p}</div>
              </div>
              <div className="grid grid-cols-6 gap-1">
                {["NONE", "1", "2", "4", "6", "12"].map((n, i) => (
                  <button key={n} className={`label-mono text-[9px] py-1.5 border-2 ${i === c.a ? "bg-ink text-paper border-ink" : "border-ink/30 hover:border-ink"}`}>
                    {n}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </DossierCard>

        {/* Batch Summary */}
        <DossierCard className="p-5" rotate={-0.2}>
          <div className="label-mono text-[10px] text-hazard mb-2">▼ BATCH SUMMARY</div>
          <h3 className="font-display text-xl mb-4">TALLY SHEET</h3>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="border-2 border-ink/40 p-3">
              <div className="label-mono text-[9px] text-ink-mute">TOTAL WAX</div>
              <div className="font-display text-xl">218.6 OZ</div>
            </div>
            <div className="border-2 border-hazard/60 p-3">
              <div className="label-mono text-[9px] text-hazard">TOTAL FRAGRANCE</div>
              <div className="font-display text-xl text-hazard">26.2 OZ</div>
            </div>
            <div className="border-2 border-ink/40 p-3">
              <div className="label-mono text-[9px] text-ink-mute">PITCHERS</div>
              <div className="font-display text-xl">4</div>
            </div>
            <div className="border-2 border-ink/40 p-3">
              <div className="label-mono text-[9px] text-ink-mute">CANDLES</div>
              <div className="font-display text-xl">41</div>
            </div>
          </div>

          <div className="bg-paper-deep/40 border-2 border-ink/40 p-3 typewriter text-[10px] space-y-1">
            <div className="label-mono text-[9px] text-ink-mute mb-1">STOCK CHECK</div>
            <div className="flex justify-between text-hazard"><span>● Cherry Eclipse</span><span>SHORT 21.8 oz</span></div>
            <div className="flex justify-between text-hazard"><span>● Leather</span><span>SHORT 4.5 oz</span></div>
          </div>
        </DossierCard>
      </div>
    </AppShell>
  );
};

export default BatchPlanner;
