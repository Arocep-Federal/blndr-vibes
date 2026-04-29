import { PaperCard } from "./PaperCard";
import { LiveMixerDemo } from "./marketing/LiveMixerDemo";
import classifiedStamp from "@/assets/classified-stamp.png";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
      {/* huge background watermark with parallax-ish drift */}
      <div className="pointer-events-none absolute -top-10 left-0 right-0 flex justify-center opacity-[0.06] select-none">
        <span
          className="font-display text-[28vw] leading-none tracking-tighter"
          style={{ animation: "watermark-drift 18s ease-in-out infinite" }}
        >
          CLASSIFIED
        </span>
      </div>

      <div className="container relative">
        <div className="flex items-center gap-3 mb-6">
            <span className="label-mono text-hazard border border-hazard px-2 py-0.5">
              MAKER OPS / LIVE
          </span>
          <span className="label-mono text-ink-mute">SET DEFAULTS → PUSH TO STORE</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT — dossier */}
          <div className="lg:col-span-7">
            <h1 className="display text-6xl sm:text-7xl md:text-8xl">
              Inventory,<br />
              recipes,<br />
              and batch math<br />
              <span className="text-hazard">in one place — finally.</span>
            </h1>
            <div className="mt-6 inline-block">
              <span className="redact-hazard label-mono">
                SET DEFAULTS → ADD RECIPES → MAKE BATCH
              </span>
            </div>
            <p className="typewriter mt-7 text-base md:text-lg leading-relaxed text-ink-soft max-w-xl">
              Get out of the notebook and scratchpads. BLNDR handles the defaults,
              recipes, batch math, oil drawdown, and store inventory push — no bad
              math hiding in the margins.
            </p>
            <p className="typewriter mt-3 text-sm text-ink-soft max-w-xl">
              Create a batch. Watch oil take the hit and stock rise.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/app"
                className="font-display text-2xl bg-ink text-paper px-6 py-4 inline-flex items-center gap-3 hover:bg-hazard transition-colors"
              >
                OPEN HQ
                <span>→</span>
              </Link>
              <Link
                to="/lab"
                className="label-mono border-2 border-ink px-5 py-4 inline-flex items-center gap-2 hover:bg-ink hover:text-paper transition-colors"
              >
                SEE THE WORKFLOW
              </Link>
            </div>
            <div className="mt-3 label-mono text-ink-mute">
              4,444 OILS INDEXED · SQUARE + SHOPIFY READY · NO SPREADSHEET DRIFT
            </div>
          </div>

          {/* RIGHT — Live Mixer Demo */}
          <div className="lg:col-span-5 relative">
            <span className="absolute -top-3 -left-2 scribble text-sm rotate-[-6deg] z-10">
              *try it. no signup.*
            </span>
            <LiveMixerDemo />
            <div className="mt-5 flex items-start gap-4">
              <img
                src={classifiedStamp}
                alt=""
                className="w-20 mix-blend-multiply opacity-80 rotate-[-8deg] shrink-0"
                width={200}
                height={130}
              />
              <PaperCard className="p-3 flex-1" rotate={1.2}>
                <div className="label-mono text-hazard text-[10px]">▲ CHANDLER LOG</div>
                <div className="typewriter text-xs mt-1 text-ink-soft leading-snug">
                  &gt; batch: queen of hearts · 41 units<br />
                  &gt; oil drawdown: cherry eclipse -26.2oz<br />
                  &gt; store push: stock +41<br />
                  <span className="text-ink">&gt; done.</span>
                </div>
              </PaperCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
