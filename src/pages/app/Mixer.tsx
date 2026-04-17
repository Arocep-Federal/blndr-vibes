import { useEffect, useRef, useState } from "react";
import { AppShell } from "@/components/app/AppShell";
import { DossierCard } from "@/components/app/DossierCard";
import { StampBadge } from "@/components/app/StampBadge";
import {
  Sparkles,
  Send,
  Mic,
  Paperclip,
  ChevronDown,
  Beaker,
  Save,
  RotateCcw,
  AlertTriangle,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Msg =
  | { from: "chandler"; text: string; suggestions?: string[] }
  | { from: "operative"; text: string };

const STARTERS = [
  "A cozy fall blend with apple + bourbon, under $0.40/oz",
  "Something nobody's smelled before",
  "Dupe Diptyque Baies using oils I already have",
  "A clean linen blend for a 16oz vessel",
  "Make me a holiday gourmand from low-stock oils",
  "Surprise me — gothic, smoky, slightly inappropriate",
];

const BRIEFING = [
  { kind: "alert", text: "4 oils going stale — flagged in Inventory" },
  { kind: "gap", text: "Q4 candle gap: cozy gourmand category" },
  { kind: "win", text: "Last batch (Queen of Hearts) margin: 67.7% ✓" },
];

const Mixer = () => {
  const [input, setInput] = useState("");
  const [draftActive, setDraftActive] = useState(false);
  const [briefingOpen, setBriefingOpen] = useState(true);
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: "chandler",
      text:
        "Bench is warm. Pitchers are clean. Tell me what we're making, or pick a directive below — I'll do the math, you get the credit.",
      suggestions: STARTERS.slice(0, 4),
    },
  ]);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollerRef.current?.scrollTo({
      top: scrollerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text) return;
    setInput("");
    setDraftActive(true);
    setMessages((m) => [
      ...m,
      { from: "operative", text },
      {
        from: "chandler",
        text:
          "Copy that. I sketched a formula on the right — three oils, balanced top/mid/base, sits at $0.38/oz. Want me to run the batch math, swap a note, or save it as a dossier?",
        suggestions: [
          "Swap the base for something darker",
          "Run batch math at 12 units",
          "Name this blend",
          "Save as dossier",
        ],
      },
    ]);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  const reset = () => {
    setMessages([
      {
        from: "chandler",
        text:
          "Bench wiped clean. Tell me what we're making — describe a vibe, a vessel, a price, or a person you want to confuse.",
        suggestions: STARTERS.slice(0, 4),
      },
    ]);
    setDraftActive(false);
    inputRef.current?.focus();
  };

  return (
    <AppShell
      title="THE BENCH"
      subtitle="Walk in. Say a thing. Walk out with a formula. Chandler does the suspicious math."
      fileId="MIX-002"
      actions={
        <button
          onClick={reset}
          className="label-mono border-2 border-ink/30 px-3 btn-min flex items-center gap-1.5 hover:border-ink"
        >
          <RotateCcw className="w-3 h-3" /> NEW SESSION
        </button>
      }
    >
      {/* Daily briefing strip — collapsible */}
      <div className="mb-5 border-2 border-ink bg-paper-deep/40">
        <button
          onClick={() => setBriefingOpen((v) => !v)}
          className="w-full flex items-center gap-3 px-4 py-2 hover:bg-paper-deep/60 transition-colors"
        >
          <span className="label-mono-xs text-hazard">▼ TODAY'S DOSSIER</span>
          <span className="typewriter text-[12px] text-ink-soft hidden sm:inline">
            {BRIEFING.length} items from CHANDLER · updated 0.04s ago
          </span>
          <ChevronDown
            className={cn(
              "w-4 h-4 ml-auto transition-transform",
              !briefingOpen && "-rotate-90"
            )}
          />
        </button>
        {briefingOpen && (
          <div className="grid sm:grid-cols-3 gap-px bg-ink/30 border-t-2 border-ink">
            {BRIEFING.map((b) => (
              <div
                key={b.text}
                className="bg-paper-deep/30 p-3 flex items-start gap-2"
              >
                <span
                  className={cn(
                    "label-mono-xs px-1.5 py-0.5 shrink-0 mt-0.5",
                    b.kind === "alert" && "bg-hazard text-hazard-foreground",
                    b.kind === "gap" && "bg-ink text-paper",
                    b.kind === "win" && "bg-emerald-700 text-paper"
                  )}
                >
                  {b.kind.toUpperCase()}
                </span>
                <span className="typewriter text-[13px] text-ink-soft leading-snug">
                  {b.text}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Two-column workshop */}
      <div className="grid lg:grid-cols-[1fr_360px] gap-5">
        {/* Conversation column */}
        <DossierCard className="flex flex-col p-0 overflow-hidden min-h-[640px]" hover={false}>
          {/* Channel header */}
          <div className="bg-ink text-paper px-4 py-2.5 flex items-center justify-between border-b-2 border-ink">
            <div className="flex items-center gap-2 label-mono-xs">
              <span className="w-2 h-2 rounded-full bg-hazard animate-pulse" />
              <span>SECURE_CHANNEL // CHANDLER-7</span>
              <span className="text-paper/50 hidden md:inline">// END-TO-END ENCRYPTED</span>
            </div>
            <span className="label-mono-xs text-paper/60 hidden sm:inline">
              SESSION 88.X-OMEGA
            </span>
          </div>

          {/* Message stream */}
          <div
            ref={scrollerRef}
            className="flex-1 overflow-y-auto p-5 space-y-5 bg-[radial-gradient(circle_at_50%_0,hsl(40_30%_92%),transparent_60%)]"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[88%]",
                  m.from === "operative" ? "ml-auto" : "mr-auto"
                )}
              >
                {m.from === "chandler" ? (
                  <>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-6 h-6 bg-hazard text-hazard-foreground border-2 border-ink flex items-center justify-center">
                        <Sparkles className="w-3 h-3" />
                      </div>
                      <span className="label-mono-xs text-hazard">CHANDLER &gt;</span>
                      <span className="label-mono-xs text-ink-mute">
                        {new Date().toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <div className="border-2 border-ink/30 bg-paper p-3 typewriter text-[14px] leading-relaxed text-ink-soft shadow-[2px_2px_0_hsl(var(--ink)/0.15)]">
                      {m.text}
                    </div>
                    {m.suggestions && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {m.suggestions.map((s) => (
                          <button
                            key={s}
                            onClick={() => send(s)}
                            className="label-mono px-3 btn-min-sm border-2 border-ink/30 hover:border-ink hover:bg-ink hover:text-paper transition-colors text-left"
                          >
                            <span className="text-hazard mr-1">▸</span>
                            {s}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2 mb-1.5 justify-end">
                      <span className="label-mono-xs text-ink-mute">
                        {new Date().toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                      <span className="label-mono-xs">OPERATIVE_RJ &gt;</span>
                      <div className="w-6 h-6 bg-ink text-paper border-2 border-ink flex items-center justify-center label-mono-xs">
                        RJ
                      </div>
                    </div>
                    <div className="bg-ink text-paper p-3 typewriter text-[14px] leading-relaxed shadow-[2px_2px_0_hsl(var(--hazard))]">
                      {m.text}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Composer */}
          <div className="border-t-2 border-ink bg-paper p-3">
            <div className="border-2 border-ink/40 bg-paper-deep/20 focus-within:border-ink transition-colors">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Describe a scent, a vibe, a vessel, a price ceiling…"
                rows={2}
                className="w-full bg-transparent border-none outline-none resize-none typewriter text-[14px] text-ink p-3 placeholder:text-ink-mute"
              />
              <div className="flex items-center justify-between border-t border-ink/20 px-2 py-1.5">
                <div className="flex items-center gap-1">
                  <button
                    aria-label="Attach reference"
                    className="w-8 h-8 flex items-center justify-center text-ink-mute hover:text-hazard"
                  >
                    <Paperclip className="w-4 h-4" />
                  </button>
                  <button
                    aria-label="Voice input"
                    className="w-8 h-8 flex items-center justify-center text-ink-mute hover:text-hazard"
                  >
                    <Mic className="w-4 h-4" />
                  </button>
                  <span className="label-mono-xs text-ink-mute ml-2 hidden sm:inline">
                    ⏎ TRANSMIT · ⇧⏎ NEW LINE
                  </span>
                </div>
                <button
                  onClick={() => send(input)}
                  disabled={!input.trim()}
                  className="label-mono bg-hazard text-hazard-foreground border-2 border-ink px-4 btn-min flex items-center gap-2 shadow-[3px_3px_0_hsl(var(--ink))] hover:translate-y-[-1px] transition-transform disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0"
                >
                  TRANSMIT <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Starter rail when idle */}
            {!draftActive && messages.length === 1 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="label-mono-xs text-ink-mute self-center mr-1">
                  TRY:
                </span>
                {STARTERS.slice(4).map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="label-mono-xs px-2.5 btn-min-sm border border-ink/40 hover:border-ink hover:bg-paper-deep/40 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </DossierCard>

        {/* Live formula scratchpad */}
        <DossierCard className="p-5 self-start" hover={false} rotate={0.4} tilt={!draftActive}>
          <div className="absolute top-3 right-3">
            {draftActive ? (
              <StampBadge variant="hazard" rotate={6}>DRAFT</StampBadge>
            ) : (
              <StampBadge variant="ink" rotate={-4}>EMPTY</StampBadge>
            )}
          </div>

          <div className="label-mono text-hazard mb-1">▼ FORMULA UNDER DRAFT</div>
          <h3 className="font-display text-2xl mb-3 leading-tight">
            {draftActive ? "UNTITLED #042" : "AWAITING DIRECTIVE"}
          </h3>

          {!draftActive ? (
            <div className="border-2 border-dashed border-ink/40 p-6 text-center">
              <Beaker className="w-10 h-10 mx-auto mb-3 text-ink-mute" />
              <p className="scribble text-[13px] text-ink-soft leading-relaxed">
                Tell Chandler what you want. The formula will draft itself here as you talk.
              </p>
            </div>
          ) : (
            <>
              {/* Color bar */}
              <div className="flex gap-0.5 mb-3 border border-ink/30 p-0.5">
                <div className="h-2 flex-1 bg-amber-600" />
                <div className="h-2 flex-1 bg-stone-700" />
                <div className="h-2 flex-1 bg-rose-700" />
              </div>

              <div className="flex justify-between label-mono-xs text-ink-mute mb-3 pb-2 border-b border-dashed border-ink/30">
                <span>PER 10 OZ WAX @ 12%</span>
                <span className="text-ink">1.2 OZ FO</span>
              </div>

              <div className="space-y-1.5 mb-3">
                {[
                  { n: "APPLE ORCHARD", a: "0.50 oz", c: "bg-amber-600" },
                  { n: "BOURBON & OAK", a: "0.45 oz", c: "bg-stone-700" },
                  { n: "FIRESIDE", a: "0.25 oz", c: "bg-rose-700" },
                ].map((o) => (
                  <div key={o.n} className="flex items-center gap-2 typewriter text-[13px]">
                    <span className={`w-2 h-2 ${o.c} shrink-0`} />
                    <span className="flex-1 truncate">{o.n}</span>
                    <span className="label-mono">{o.a}</span>
                  </div>
                ))}
                <button className="label-mono-xs text-ink-mute hover:text-hazard flex items-center gap-1 mt-2">
                  <Plus className="w-3 h-3" /> ADD OIL MANUALLY
                </button>
              </div>

              <div className="space-y-1 typewriter text-[12px] mb-3 pt-3 border-t border-dashed border-ink/30">
                {[
                  ["TOP", "Apple, Bourbon"],
                  ["MID", "Cinnamon, Oak"],
                  ["BASE", "Smoke, Vanilla"],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-2">
                    <span className="label-mono-xs text-hazard w-9 shrink-0">{k}</span>
                    <span className="text-ink-soft">{v}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-2 bg-emerald-700/10 border border-emerald-700/40 p-2 mb-3 typewriter text-[12px] text-emerald-800">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>Estimated cost: $0.38/oz · in budget</span>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-dashed border-ink/30">
                <button className="label-mono flex-1 btn-min border-2 border-ink bg-ink text-paper hover:bg-hazard hover:border-hazard transition-colors flex items-center justify-center gap-1.5">
                  <Save className="w-3.5 h-3.5" /> SAVE DOSSIER
                </button>
                <button className="label-mono btn-min px-3 border-2 border-ink/40 hover:border-ink">
                  TO BATCH ▸
                </button>
              </div>
            </>
          )}
        </DossierCard>
      </div>
    </AppShell>
  );
};

export default Mixer;
