import { AppShell } from "@/components/app/AppShell";
import { DossierCard } from "@/components/app/DossierCard";
import { StampBadge } from "@/components/app/StampBadge";
import { Link } from "react-router-dom";
import {
  FlaskConical,
  Library,
  Droplet,
  Beaker,
  Boxes,
  Settings as SettingsIcon,
  Sparkles,
  ArrowRight,
  Send,
  Mic,
} from "lucide-react";

const tiles = [
  { to: "/app/library", icon: Library, label: "Browse Oil Library", meta: "1,785 oils on file", code: "DOC-03", color: "ink" },
  { to: "/app/blends", icon: Droplet, label: "My Blends", meta: "109 saved formulas", code: "DOC-04", color: "ink" },
  { to: "/app/batch", icon: Beaker, label: "Batch Planner", meta: "Calculate wax + FO", code: "DOC-05", color: "hazard" },
  { to: "/app/inventory", icon: Boxes, label: "Inventory", meta: "0 oils tracked", code: "DOC-06", color: "ink" },
  { to: "/app/settings", icon: SettingsIcon, label: "Settings", meta: "Brand voice, defaults", code: "DOC-07", color: "ink" },
  { to: "/app/upgrade", icon: Sparkles, label: "Upgrade to Pro", meta: "AI naming, all vendors", code: "DOC-99", color: "hazard" },
];

const Dashboard = () => {
  return (
    <AppShell
      title="WELCOME BACK, OPERATIVE"
      subtitle="What are we cooking up today, Rickjanusz?"
      fileId="DASH-001"
      actions={
        <span className="label-mono text-[10px] text-ink-mute hidden md:inline">
          LAST SYNC: 0.04s AGO
        </span>
      }
    >
      {/* AGENT BRIEFING — the agentic "let's get started" */}
      <DossierCard className="p-6 md:p-8 mb-8 relative overflow-hidden" hover={false}>
        <div
          className="tape"
          style={{ top: -12, left: "8%", transform: "rotate(-3deg)" }}
        />
        <div
          className="tape"
          style={{ top: -12, right: "8%", left: "auto", transform: "rotate(4deg)" }}
        />
        <div className="absolute top-4 right-4">
          <StampBadge variant="hazard" rotate={8}>EYES ONLY</StampBadge>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-10 items-start">
          {/* Briefing meta */}
          <div className="space-y-3">
            <div className="label-mono text-[10px] text-hazard">▼ AGENT BRIEFING</div>
            <h2 className="font-display text-3xl md:text-4xl leading-[0.95]">
              MEET <span className="redact-hazard">CHANDLER</span>
            </h2>
            <p className="scribble text-sm text-ink-soft leading-relaxed">
              Your in-house perfumer. Speaks fluent vanilla, knows every CandleScience SKU,
              never sleeps. Tell it what you want — it builds the dossier.
            </p>
            <div className="space-y-1.5 pt-2 label-mono text-[10px] text-ink-mute">
              <div className="flex justify-between border-b border-ink/30 pb-1">
                <span>CODENAME</span><span className="text-ink">CHANDLER-7</span>
              </div>
              <div className="flex justify-between border-b border-ink/30 pb-1">
                <span>STATUS</span><span className="text-emerald-700">● ONLINE</span>
              </div>
              <div className="flex justify-between border-b border-ink/30 pb-1">
                <span>CLEARANCE</span><span className="text-ink">UNRESTRICTED</span>
              </div>
              <div className="flex justify-between">
                <span>SPECIALTY</span><span className="text-ink">SCENT-CRAFT</span>
              </div>
            </div>
          </div>

          {/* Chat console */}
          <div className="bg-ink/95 text-paper border-2 border-ink shadow-[6px_6px_0_hsl(var(--hazard))]">
            <div className="flex items-center justify-between border-b border-paper/20 px-4 py-2 label-mono text-[10px]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-hazard animate-pulse" />
                <span>SECURE_CHANNEL // CHANDLER-7</span>
              </div>
              <span className="text-paper/60">END-TO-END ENCRYPTED</span>
            </div>

            <div className="p-4 space-y-3 typewriter text-sm min-h-[200px]">
              <div>
                <div className="label-mono text-[9px] text-hazard mb-0.5">CHANDLER &gt;</div>
                <div className="text-paper/90">
                  Evening, Rick. I scanned your last 109 blends. We've got 4 oils
                  going stale and a Q4 candle gap in <span className="underline decoration-hazard decoration-2 underline-offset-2">cozy gourmand</span>.
                  Shall we draft something or are we batching today?
                </div>
              </div>
              <div className="pl-4 border-l-2 border-hazard/60">
                <div className="label-mono text-[9px] text-hazard/80 mb-0.5">SUGGESTED MOVES &gt;</div>
                <div className="space-y-1.5 mt-2">
                  {[
                    "Draft a holiday gourmand using oils I already have",
                    "Plan a batch for the Queen of Hearts blend",
                    "Audit my low-stock oils and build a reorder list",
                    "Invent something nobody's smelled before",
                  ].map((s) => (
                    <button
                      key={s}
                      className="block w-full text-left text-paper/90 hover:text-hazard hover:translate-x-1 transition-all text-sm"
                    >
                      <span className="text-hazard mr-2">▸</span>{s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-paper/20 p-3 flex items-center gap-2">
              <button className="text-paper/60 hover:text-hazard p-1.5">
                <Mic className="w-4 h-4" />
              </button>
              <input
                type="text"
                placeholder="Type your directive, Operative..."
                className="flex-1 bg-transparent border-none outline-none typewriter text-sm text-paper placeholder:text-paper/40"
              />
              <button className="bg-hazard text-hazard-foreground px-3 py-1.5 label-mono text-[10px] flex items-center gap-1.5 hover:bg-hazard-deep transition-colors">
                TRANSMIT <Send className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </DossierCard>

      {/* Action tiles */}
      <div className="mb-3 flex items-end justify-between">
        <div>
          <div className="label-mono text-[10px] text-hazard">▼ AVAILABLE OPERATIONS</div>
          <h3 className="font-display text-2xl mt-1">DEPLOYMENT MENU</h3>
        </div>
        <span className="label-mono text-[10px] text-ink-mute hidden md:inline">06 ACTIVE FILES</span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tiles.map((t, i) => (
          <Link key={t.to} to={t.to} className="block">
            <DossierCard className="p-5 h-full" rotate={i % 2 === 0 ? -0.4 : 0.4}>
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 border-2 ${t.color === "hazard" ? "border-hazard text-hazard" : "border-ink text-ink"} flex items-center justify-center`}>
                  <t.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="label-mono text-[9px] text-ink-mute">{t.code}</span>
              </div>
              <div className="font-display text-lg leading-tight mb-1 uppercase">{t.label}</div>
              <div className="scribble text-xs text-ink-soft mb-3">{t.meta}</div>
              <div className="flex items-center gap-1 label-mono text-[10px] text-ink group-hover:text-hazard pt-2 border-t border-dashed border-ink/30">
                OPEN FILE <ArrowRight className="w-3 h-3" />
              </div>
            </DossierCard>
          </Link>
        ))}
      </div>
    </AppShell>
  );
};

export default Dashboard;
