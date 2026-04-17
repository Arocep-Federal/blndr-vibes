import { AppShell } from "@/components/app/AppShell";
import { DossierCard } from "@/components/app/DossierCard";
import { StampBadge } from "@/components/app/StampBadge";
import { Plus, History, ArrowLeftRight, Upload, Edit, Star, Link2, Download, Trash2, AlertTriangle } from "lucide-react";

const blends = [
  {
    name: "HIGH HATS & SPATS", date: "APR 16 2026", total: "1.2 OZ FO", hazardous: true,
    bar: ["bg-rose-600", "bg-ink"], oils: [{ n: "LEATHER", a: "0.60 oz", c: "bg-amber-500" }, { n: "SUEDE & SMOKE", a: "0.60 oz", c: "bg-amber-600", flag: "10 oz left" }],
    notes: { TOP: ["Saffron"], MID: ["Incense"], BASE: ["Leather", "Amber"] },
  },
  {
    name: "HANZEL & GRETYL", date: "APR 16 2026", total: "1.2 OZ FO", hazardous: true,
    bar: ["bg-amber-500"], oils: [{ n: "GINGERBREAD", a: "1.20 oz", c: "bg-amber-500", flag: "10 oz left" }],
  },
  {
    name: "EDGEWOOD MANOR", date: "APR 16 2026", total: "1.2 OZ FO", hazardous: true,
    bar: ["bg-amber-600"], oils: [{ n: "REDWOOD & CEDAR", a: "1.20 oz", c: "bg-amber-700", flag: "10 oz left" }],
  },
  {
    name: "WHITE RABBIT", date: "APR 16 2026", total: "1.2 OZ FO",
    bar: ["bg-pink-400", "bg-sky-400"], oils: [{ n: "FIG TREE", a: "1.00 oz", c: "bg-pink-400" }, { n: "CLEAN COTTON", a: "0.20 oz", c: "bg-sky-400" }],
    notes: { TOP: ["Ozone", "Freesia", "Lemon", "Cotton"], MID: ["Jasmine", "Geranium", "Fig", "Cherry"], BASE: ["Bamboo", "Moss", "Powder", "Saffron"] },
  },
  {
    name: "CHESHIRE CAT", date: "APR 16 2026", total: "1.2 OZ FO",
    bar: ["bg-rose-700", "bg-stone-600", "bg-rose-500"], oils: [
      { n: "VELVET VANILLA", a: "0.37 oz", c: "bg-stone-700" },
      { n: "WHITE OAK + VANILLA", a: "0.36 oz", c: "bg-stone-500" },
      { n: "FIRESIDE", a: "0.36 oz", c: "bg-rose-700" },
      { n: "WHISKEY", a: "0.11 oz", c: "bg-amber-700" },
    ],
  },
  {
    name: "THE MAD TEA PARTY", date: "APR 16 2026", total: "1.2 OZ FO",
    bar: ["bg-violet-600", "bg-amber-500"], oils: [
      { n: "ALMOND MACARON", a: "0.40 oz", c: "bg-violet-600" },
      { n: "OAKMOSS + AMBER", a: "0.40 oz", c: "bg-amber-700" },
      { n: "LEMON VERBENA", a: "0.20 oz", c: "bg-yellow-500" },
      { n: "WHITE TEA", a: "0.20 oz", c: "bg-stone-300" },
    ],
  },
];

const Blends = () => {
  return (
    <AppShell
      title="MY BLENDS"
      subtitle="109 custom dossiers on file. Each one, a small sin against blandness."
      fileId="BLD-004"
      actions={
        <>
          <button className="label-mono text-[10px] bg-ink text-paper border-2 border-ink px-3 py-2 flex items-center gap-1.5 hover:bg-hazard">
            <Plus className="w-3 h-3" /> NEW BLEND
          </button>
          <button className="label-mono text-[10px] border-2 border-ink px-3 py-2 hidden sm:flex items-center gap-1.5"><History className="w-3 h-3" /> HISTORY</button>
          <button className="label-mono text-[10px] border-2 border-ink px-3 py-2 hidden md:flex items-center gap-1.5"><ArrowLeftRight className="w-3 h-3" /> SWAP OIL</button>
          <button className="label-mono text-[10px] border-2 border-ink px-3 py-2 hidden md:flex items-center gap-1.5"><Upload className="w-3 h-3" /> IMPORT</button>
        </>
      }
    >
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <button className="label-mono text-[10px] bg-ink text-paper border-2 border-ink px-3 py-1.5">ALL (109)</button>
        <button className="label-mono text-[10px] border-2 border-ink/40 px-3 py-1.5 hover:border-ink">★ STARRED</button>
        <div className="ml-auto flex items-center gap-2">
          <input
            type="text"
            placeholder="SEARCH FILES..."
            className="bg-paper border-2 border-ink/60 px-3 py-1.5 label-mono text-[10px] focus:outline-none focus:border-hazard w-48"
          />
          <button className="label-mono text-[10px] border-2 border-ink px-3 py-1.5">NEWEST ▾</button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blends.map((b, i) => (
          <DossierCard key={b.name} className="p-5" rotate={(i % 3 - 1) * 0.5} tape={i % 4 === 0}>
            <div className="flex items-start justify-between mb-1">
              <h3 className="font-display text-xl leading-tight pr-3">{b.name}</h3>
              {b.hazardous && <StampBadge variant="hazard" rotate={5}>FLAGGED</StampBadge>}
            </div>
            <div className="label-mono text-[9px] text-ink-mute mb-3">{b.date} • FILE_{(i + 1).toString().padStart(3, "0")}</div>

            <div className="flex gap-1 mb-3 border border-ink/40 p-0.5">
              {b.bar.map((c, j) => (
                <div key={j} className={`h-2.5 flex-1 ${c}`} />
              ))}
            </div>

            <div className="flex justify-between label-mono text-[9px] text-ink-mute mb-3 pb-2 border-b border-dashed border-ink/30">
              <span>PER 10 OZ WAX @ 12%</span>
              <span className="text-ink">{b.total}</span>
            </div>

            <div className="space-y-2 mb-3">
              {b.oils.map((o) => (
                <div key={o.n} className="flex items-center gap-2 typewriter text-xs">
                  <span className={`w-2 h-2 ${o.c} shrink-0`} />
                  <span className="flex-1 truncate">{o.n}</span>
                  {o.flag && <span className="label-mono text-[8px] bg-hazard/20 text-hazard-deep px-1 py-0.5">{o.flag}</span>}
                  <span className="label-mono text-[10px]">{o.a}</span>
                </div>
              ))}
            </div>

            {b.notes && (
              <div className="space-y-1 typewriter text-[11px] mb-3 pt-3 border-t border-dashed border-ink/30">
                {Object.entries(b.notes).map(([k, v]) => (
                  <div key={k} className="flex gap-2">
                    <span className="label-mono text-[9px] text-hazard w-9 shrink-0">{k}</span>
                    <span className="text-ink-soft">{v.join(" · ")}</span>
                  </div>
                ))}
              </div>
            )}

            {b.hazardous && (
              <div className="flex items-start gap-2 bg-hazard/10 border border-hazard/40 p-2 mb-3 typewriter text-[10px] text-hazard-deep">
                <AlertTriangle className="w-3 h-3 shrink-0 mt-0.5" />
                Contains discontinued oils — limited stock remaining
              </div>
            )}

            <div className="flex items-center gap-2 pt-3 border-t border-dashed border-ink/30">
              {[Edit, Star, Link2, Download].map((Ic, j) => (
                <button key={j} className="w-7 h-7 border border-ink/40 flex items-center justify-center hover:bg-ink hover:text-paper">
                  <Ic className="w-3 h-3" />
                </button>
              ))}
              <button className="w-7 h-7 border border-hazard/40 text-hazard ml-auto flex items-center justify-center hover:bg-hazard hover:text-hazard-foreground">
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          </DossierCard>
        ))}
      </div>
    </AppShell>
  );
};

export default Blends;
