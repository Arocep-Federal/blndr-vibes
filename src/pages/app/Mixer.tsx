import { AppShell } from "@/components/app/AppShell";
import { DossierCard } from "@/components/app/DossierCard";
import { StampBadge } from "@/components/app/StampBadge";
import { Sparkles, Plus, FlaskConical, Mic, Send } from "lucide-react";

const Mixer = () => {
  return (
    <AppShell
      title="FRAGRANCE MIXER"
      subtitle="Blend oils into custom scent profiles. Or let Chandler do the heavy lifting."
      fileId="MIX-002"
      actions={
        <button className="label-mono text-[10px] bg-ink text-paper px-3 py-2 flex items-center gap-1.5 border-2 border-ink hover:bg-hazard">
          <Plus className="w-3.5 h-3.5" /> ADD FRAGRANCE
        </button>
      }
    >
      <DossierCard className="p-10 md:p-16 relative" hover={false}>
        <div className="tape" style={{ top: -12, left: "10%", transform: "rotate(-4deg)" }} />
        <div className="tape" style={{ top: -12, right: "10%", left: "auto", transform: "rotate(3deg)" }} />
        <div className="absolute top-4 right-4">
          <StampBadge variant="ink" rotate={6}>BENCH ACTIVE</StampBadge>
        </div>

        <div className="border-2 border-dashed border-ink/40 p-12 md:p-16 text-center max-w-3xl mx-auto">
          <div className="flex justify-center gap-4 mb-6">
            <div className="w-16 h-24 border-2 border-ink relative bg-paper-deep/40">
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-hazard/50" />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 border-2 border-ink bg-paper" />
            </div>
            <div className="w-20 h-28 border-2 border-ink relative bg-paper-deep/40">
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-ink/70" />
              <FlaskConical className="absolute inset-0 m-auto w-8 h-8 text-paper opacity-60" />
            </div>
            <div className="w-16 h-24 border-2 border-ink relative bg-paper-deep/40">
              <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-tape" />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 border-2 border-ink bg-paper" />
            </div>
          </div>

          <div className="label-mono text-[10px] text-hazard mb-2">▼ NO ACTIVE FORMULA</div>
          <h2 className="font-display text-4xl md:text-5xl mb-3">
            START YOUR <span className="redact-hazard">BLEND</span>
          </h2>
          <p className="scribble text-ink-soft mb-8 max-w-md mx-auto">
            Describe what you want, pick from the library, or let our agent fabricate
            something with plausible deniability.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="label-mono text-[11px] border-2 border-ink px-5 py-3 hover:bg-ink hover:text-paper transition-colors">
              ▸ BROWSE FRAGRANCES
            </button>
            <button className="label-mono text-[11px] bg-hazard text-hazard-foreground border-2 border-ink px-5 py-3 shadow-[3px_3px_0_hsl(var(--ink))] flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-transform">
              <Sparkles className="w-4 h-4" /> DESCRIBE A SCENT
            </button>
          </div>
        </div>

        {/* Agent prompt strip */}
        <div className="mt-8 bg-ink text-paper p-4 flex items-center gap-3 border-2 border-ink">
          <Sparkles className="w-5 h-5 text-hazard shrink-0" />
          <div className="flex-1 typewriter text-sm">
            <span className="label-mono text-[9px] text-hazard">CHANDLER &gt; </span>
            "Try: <span className="underline decoration-hazard">a cozy fall blend with apple and bourbon, under $0.40/oz</span>"
          </div>
          <button className="text-paper/60 hover:text-hazard">
            <Mic className="w-4 h-4" />
          </button>
          <button className="bg-hazard text-hazard-foreground px-3 py-1.5 label-mono text-[10px] flex items-center gap-1.5">
            <Send className="w-3 h-3" />
          </button>
        </div>
      </DossierCard>
    </AppShell>
  );
};

export default Mixer;
