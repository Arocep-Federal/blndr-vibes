import { PaperCard } from "./PaperCard";
import classifiedStamp from "@/assets/classified-stamp.png";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-12 md:pt-20 pb-24 overflow-hidden">
      {/* huge background watermark */}
      <div className="pointer-events-none absolute -top-10 left-0 right-0 flex justify-center opacity-[0.07] select-none">
        <span className="font-display text-[28vw] leading-none tracking-tighter">CLASSIFIED</span>
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* LEFT — main dossier */}
          <PaperCard className="lg:col-span-8 p-8 md:p-12" withTape="center">
            <div className="flex items-center justify-between border-b border-ink/40 pb-4">
              <div>
                <div className="font-display text-3xl">BLNDR</div>
                <div className="label-mono text-ink-mute mt-1">UNAUTHORIZED EXTRACTION UNIT</div>
              </div>
              <div className="label-mono bg-ink text-paper px-3 py-1.5">FILE_ID: 88.X-OMEGA</div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mt-10">
              <div>
                <h1 className="display text-6xl md:text-7xl lg:text-8xl">
                  Mix the<br />
                  scents<br />
                  they<br />
                  <span className="text-hazard">redacted.</span>
                </h1>
                <div className="mt-6 inline-block">
                  <span className="redact-hazard label-mono">HAZARD CLASS 4 — EXTREME VIBE SHIFT</span>
                </div>
                <p className="typewriter mt-8 text-base leading-relaxed text-ink-soft">
                  Legal advised against releasing this platform. They muttered something about
                  "olfactory sensory overload" and "civil liability." We ignored them.
                </p>
                <p className="typewriter mt-4 text-base leading-relaxed text-ink-soft">
                  BLNDR is a classified laboratory for the chronically scent-curious. Architect
                  your own fragrance. Document the chaos.
                </p>
              </div>

              <div className="space-y-5 relative">
                <span className="absolute -top-4 right-0 scribble text-sm rotate-[-6deg]">
                  *do not deviate from ratios*
                </span>
                <PaperCard rotate={-1.5} className="p-5">
                  <div className="flex items-center justify-between border-b border-ink/30 pb-2">
                    <span className="label-mono">COMPONENT A</span>
                    <span className="font-display text-3xl">67%</span>
                  </div>
                  <div className="font-display text-xl mt-3">OLIVE LEAF & CITRON</div>
                  <p className="typewriter text-sm mt-1 text-ink-soft">
                    Extracted from the northern groves. Aggressively bright.
                  </p>
                </PaperCard>
                <PaperCard rotate={2} className="p-5 ml-6">
                  <div className="flex items-center justify-between border-b border-ink/30 pb-2">
                    <span className="label-mono">COMPONENT B</span>
                    <span className="font-display text-3xl">33%</span>
                  </div>
                  <div className="font-display text-xl mt-3">MEDITERRANEAN FIG</div>
                  <p className="typewriter text-sm mt-1 text-ink-soft">
                    Uncomfortably sensual. Prevents component A from completely dissolving the atmosphere.
                  </p>
                </PaperCard>
              </div>
            </div>

            <div className="perf-divide mt-12 pt-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="label-mono">INITIATE YOUR OWN CHAOS.</div>
                <div className="typewriter text-sm text-ink-soft mt-1">
                  Access the lab. Mix your own classified blends.
                </div>
              </div>
              <a
                href="#cta"
                className="font-display text-2xl bg-ink text-paper px-6 py-4 inline-flex flex-col items-start hover:bg-hazard transition-colors w-fit"
              >
                GET STARTED FREE
                <span className="label-mono font-normal text-xs mt-1 opacity-80">
                  (BEFORE THEY SHUT US DOWN)
                </span>
              </a>
            </div>
          </PaperCard>

          {/* RIGHT — stamp + meta */}
          <div className="lg:col-span-4 space-y-6 lg:pt-8">
            <div className="relative">
              <img
                src={classifiedStamp}
                alt=""
                className="w-full max-w-[260px] mx-auto opacity-80 rotate-[-8deg] mix-blend-multiply"
                width={520}
                height={340}
              />
            </div>

            <PaperCard className="p-6" rotate={1.5}>
              <div className="label-mono text-hazard">▲ TRANSMISSION LOG</div>
              <ul className="typewriter text-sm mt-3 space-y-2 text-ink-soft">
                <li>&gt; 04:12 — perimeter clear</li>
                <li>&gt; 04:18 — vials secured</li>
                <li>&gt; 04:33 — formula extracted</li>
                <li>&gt; 04:34 — uploaded to BLNDR</li>
                <li className="text-ink">&gt; 04:35 — your move.</li>
              </ul>
            </PaperCard>

            <div className="flex items-center gap-4 px-2">
              <div className="font-display text-5xl text-hazard">12,408</div>
              <div className="label-mono leading-tight text-ink-soft">
                BLENDS<br />ARCHIVED<br />THIS WEEK
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
