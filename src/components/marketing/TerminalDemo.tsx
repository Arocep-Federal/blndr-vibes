import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface DemoExchange {
  user: string;
  thinking?: string;
  formulaTitle: string;
  formulaSubtitle?: string;
  components: { name: string; pct: number }[];
  hazard?: string;
  flashpoint?: string;
}

interface Props {
  exchanges: DemoExchange[];
  /** ms each full exchange remains before advancing */
  holdMs?: number;
  className?: string;
}

const TYPE_SPEED = 28; // ms per char

export const TerminalDemo = ({
  exchanges,
  holdMs = 4500,
  className,
}: Props) => {
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "thinking" | "result" | "fading">(
    "typing"
  );
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const ex = exchanges[idx];

  // Activate when scrolled into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Drive the state machine
  useEffect(() => {
    if (!active) return;
    setTyped("");
    setPhase("typing");
    let cancelled = false;
    let i = 0;
    const text = ex.user;

    const type = () => {
      if (cancelled) return;
      if (i <= text.length) {
        setTyped(text.slice(0, i));
        i++;
        setTimeout(type, TYPE_SPEED);
      } else {
        setTimeout(() => !cancelled && setPhase("thinking"), 300);
      }
    };
    type();

    return () => {
      cancelled = true;
    };
  }, [idx, active, ex.user]);

  useEffect(() => {
    if (phase !== "thinking") return;
    const t = setTimeout(() => setPhase("result"), 1100);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "result") return;
    const t = setTimeout(() => setPhase("fading"), holdMs);
    return () => clearTimeout(t);
  }, [phase, holdMs]);

  useEffect(() => {
    if (phase !== "fading") return;
    const t = setTimeout(() => {
      setIdx((i) => (i + 1) % exchanges.length);
    }, 500);
    return () => clearTimeout(t);
  }, [phase, exchanges.length]);

  return (
    <div
      ref={ref}
      className={cn(
        "bg-ink text-paper border-2 border-ink shadow-[6px_6px_0_hsl(var(--hazard))] relative",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-paper/20 px-3 h-10 label-mono text-[11px]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-hazard animate-pulse" />
          <span>CHANDLER-7</span>
          <span className="text-paper/50 hidden sm:inline">// LIVE DEMO</span>
        </div>
        <div className="flex gap-1">
          {exchanges.map((_, i) => (
            <span
              key={i}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-colors",
                i === idx ? "bg-hazard" : "bg-paper/30"
              )}
            />
          ))}
        </div>
      </div>

      <div className="p-4 md:p-5 min-h-[340px] typewriter text-[13px] space-y-4">
        {/* User prompt */}
        <div>
          <div className="label-mono-xs text-paper/50 mb-1">OPERATIVE &gt;</div>
          <div className="text-paper leading-relaxed">
            {typed}
            <span className="inline-block w-2 h-4 bg-hazard ml-0.5 align-middle animate-pulse" />
          </div>
        </div>

        {/* CHANDLER thinking */}
        {(phase === "thinking" || phase === "result" || phase === "fading") && (
          <div>
            <div className="label-mono-xs text-hazard mb-1">CHANDLER &gt;</div>
            {phase === "thinking" ? (
              <div className="flex gap-1.5 items-center text-paper/70">
                <span className="w-1.5 h-1.5 rounded-full bg-hazard animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-hazard animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-hazard animate-bounce" style={{ animationDelay: "300ms" }} />
                <span className="ml-2 text-paper/50 text-[11px]">
                  {ex.thinking || "checking your vault…"}
                </span>
              </div>
            ) : (
              <div
                className={cn(
                  "transition-all duration-500",
                  phase === "fading" ? "opacity-0 scale-95" : "opacity-100 scale-100"
                )}
                style={{ transformOrigin: "top left" }}
              >
                {/* Formula card */}
                <div className="bg-paper text-ink border border-paper/40 p-3 mt-2">
                  <div className="flex items-start justify-between gap-3 border-b border-ink/30 pb-2">
                    <div>
                      <div className="font-display text-lg leading-tight">
                        {ex.formulaTitle}
                      </div>
                      {ex.formulaSubtitle && (
                        <div className="label-mono text-ink-mute text-[10px] mt-0.5">
                          {ex.formulaSubtitle}
                        </div>
                      )}
                    </div>
                    {ex.hazard && (
                      <span className="redact-hazard label-mono text-[9px] shrink-0">
                        {ex.hazard}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 space-y-1.5">
                    {ex.components.map((c) => (
                      <div key={c.name}>
                        <div className="flex justify-between label-mono text-[10px]">
                          <span>{c.name}</span>
                          <span>{c.pct}%</span>
                        </div>
                        <div className="h-1 bg-paper-deep mt-0.5 overflow-hidden">
                          <div
                            className="h-full bg-ink transition-all duration-700"
                            style={{ width: `${c.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  {ex.flashpoint && (
                    <div className="mt-3 pt-2 border-t border-ink/20 flex justify-between label-mono text-[10px] text-ink-mute">
                      <span>FLASHPOINT</span>
                      <span>{ex.flashpoint}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-paper/20 px-3 py-2 flex items-center justify-between label-mono text-[10px] text-paper/50">
        <span>SECURE CHANNEL</span>
        <span>
          {idx + 1} / {exchanges.length} • LOOPING
        </span>
      </div>
    </div>
  );
};
