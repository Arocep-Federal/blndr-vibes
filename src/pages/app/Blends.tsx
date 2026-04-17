import { AppShell } from "@/components/app/AppShell";
import { DossierCard } from "@/components/app/DossierCard";
import { StampBadge } from "@/components/app/StampBadge";
import {
  Plus,
  History,
  ArrowLeftRight,
  Upload,
  MoreHorizontal,
  Star,
  AlertTriangle,
  Search,
} from "lucide-react";

const blends = [
  {
    name: "HIGH HATS & SPATS", date: "APR 16 2026", total: "1.2 OZ FO", hazardous: true, starred: true,
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
    name: "WHITE RABBIT", date: "APR 16 2026", total: "1.2 OZ FO", starred: true,
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
        <button className="label-mono bg-hazard text-hazard-foreground border-2 border-ink px-4 btn-min flex items-center gap-2 shadow-[3px_3px_0_hsl(var(--ink))] hover:translate-y-[-1px] transition-transform">
          <Plus className="w-3.5 h-3.5" /> NEW BLEND
        </button>
      }
    >
      {/* Toolbar — secondary actions, calm */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <div className="flex items-center gap-1 mr-2">
          <button className="label-mono bg-ink text-paper border-2 border-ink px-3 btn-min-sm">ALL · 109</button>
          <button className="label-mono border-2 border-ink/30 px-3 btn-min-sm hover:border-ink flex items-center gap-1.5">
            <Star className="w-3 h-3" /> STARRED
          </button>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-ink-mute" />
            <input
              type="text"
              placeholder="SEARCH FILES…"
              className="bg-paper border-2 border-ink/40 pl-8 pr-3 btn-min-sm label-mono focus:outline-none focus:border-ink w-56"
            />
          </div>
          <button className="label-mono border-2 border-ink/30 px-3 btn-min-sm hover:border-ink flex items-center gap-1.5">
            <History className="w-3 h-3" /> HISTORY
          </button>
          <button className="label-mono border-2 border-ink/30 px-3 btn-min-sm hover:border-ink hidden md:flex items-center gap-1.5">
            <ArrowLeftRight className="w-3 h-3" /> SWAP OIL
          </button>
          <button className="label-mono border-2 border-ink/30 px-3 btn-min-sm hover:border-ink hidden md:flex items-center gap-1.5">
            <Upload className="w-3 h-3" /> IMPORT
          </button>
          <button className="label-mono border-2 border-ink/30 px-3 btn-min-sm hover:border-ink">NEWEST ▾</button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blends.map((b, i) => (
          <DossierCard
            key={b.name}
            className="p-5 group/card"
            // Only the first card gets the playful tilt — hero treatment.
            rotate={i === 0 ? -0.6 : 0}
            tilt={i === 0}
            tape={i === 0}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-1">
              <h3 className="font-display text-xl leading-tight">{b.name}</h3>
              <div className="flex items-center gap-1.5 shrink-0">
                {b.starred && <Star className="w-3.5 h-3.5 fill-hazard text-hazard" />}
                {b.hazardous && <StampBadge variant="hazard" rotate={5}>FLAGGED</StampBadge>}
              </div>
            </div>
            <div className="label-mono-xs text-ink-mute mb-3">
              {b.date} · FILE_{(i + 1).toString().padStart(3, "0")}
            </div>

            {/* Color bar */}
            <div className="flex gap-0.5 mb-3 border border-ink/30 p-0.5">
              {b.bar.map((c, j) => (
                <div key={j} className={`h-2 flex-1 ${c}`} />
              ))}
            </div>

            <div className="flex justify-between label-mono-xs text-ink-mute mb-3 pb-2 border-b border-dashed border-ink/30">
              <span>PER 10 OZ WAX @ 12%</span>
              <span className="text-ink">{b.total}</span>
            </div>

            {/* Oils */}
            <div className="space-y-1.5 mb-3">
              {b.oils.map((o) => (
                <div key={o.n} className="flex items-center gap-2 typewriter text-[13px]">
                  <span className={`w-2 h-2 ${o.c} shrink-0`} />
                  <span className="flex-1 truncate">{o.n}</span>
                  {o.flag && (
                    <span className="label-mono-xs bg-hazard/15 text-hazard-deep px-1.5 py-0.5">
                      {o.flag}
                    </span>
                  )}
                  <span className="label-mono">{o.a}</span>
                </div>
              ))}
            </div>

            {b.notes && (
              <div className="space-y-1 typewriter text-[12px] mb-3 pt-3 border-t border-dashed border-ink/30">
                {Object.entries(b.notes).map(([k, v]) => (
                  <div key={k} className="flex gap-2">
                    <span className="label-mono-xs text-hazard w-9 shrink-0">{k}</span>
                    <span className="text-ink-soft">{v.join(" · ")}</span>
                  </div>
                ))}
              </div>
            )}

            {b.hazardous && (
              <div className="flex items-start gap-2 bg-hazard/10 border border-hazard/40 p-2 mb-3 typewriter text-[12px] text-hazard-deep">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>Contains discontinued oils — limited stock remaining</span>
              </div>
            )}

            {/* Footer: ONE primary action, overflow menu for the rest */}
            <div className="flex items-center gap-2 pt-3 border-t border-dashed border-ink/30">
              <button className="label-mono flex-1 btn-min-sm border-2 border-ink hover:bg-ink hover:text-paper transition-colors">
                OPEN FILE
              </button>
              <button
                aria-label="More actions"
                className="w-8 h-8 border border-ink/40 flex items-center justify-center hover:border-ink hover:bg-paper-deep"
              >
                <MoreHorizontal className="w-3.5 h-3.5" />
              </button>
            </div>
          </DossierCard>
        ))}
      </div>
    </AppShell>
  );
};

export default Blends;
