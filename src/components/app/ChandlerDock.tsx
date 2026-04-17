import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Sparkles, Send, Mic, X, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const contextSuggestions: Record<string, string[]> = {
  "/app": [
    "Draft a holiday gourmand using oils I have",
    "Audit my low-stock oils",
    "Invent something new",
  ],
  "/app/mixer": [
    "Build me a cozy fall blend under $0.40/oz",
    "Suggest a dupe for Diptyque Baies",
    "Pick three oils I haven't used",
  ],
  "/app/library": [
    "Find oils with bergamot in the top",
    "Recommend a phthalate-free woody",
    "Show me everything under $1.50/oz",
  ],
  "/app/blends": [
    "Find blends I haven't made in 90 days",
    "Suggest a name for my last draft",
    "Which blends use discontinued oils?",
  ],
  "/app/batch": [
    "Plan a 12-unit batch of Queen of Hearts",
    "Optimize containers for max margin",
    "Calculate reorder list for short oils",
  ],
  "/app/inventory": [
    "Build a reorder cart for low stock",
    "Audit oils I haven't touched",
    "Group inventory by scent family",
  ],
  "/app/settings": [
    "Help me pick a fragrance load %",
    "Connect Shopify (walk me through it)",
    "Suggest container pricing for 50% margin",
  ],
};

export const ChandlerDock = () => {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const { pathname } = useLocation();

  const suggestions =
    contextSuggestions[pathname] || contextSuggestions["/app"];

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 group flex items-center gap-2 bg-hazard text-hazard-foreground border-2 border-ink shadow-[4px_4px_0_hsl(var(--ink))] pl-3 pr-4 h-12 hover:translate-y-[-2px] transition-transform z-40"
        aria-label="Open Chandler agent"
      >
        <Sparkles className="w-5 h-5" />
        <span className="label-mono text-[11px]">ASK CHANDLER</span>
        <span className="w-1.5 h-1.5 rounded-full bg-paper animate-pulse" />
      </button>
    );
  }

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 w-[min(380px,calc(100vw-2rem))] bg-ink text-paper border-2 border-ink shadow-[6px_6px_0_hsl(var(--hazard))] z-40 transition-all",
        minimized ? "h-12" : "h-auto"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-paper/20 px-3 h-12 label-mono text-[11px]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-hazard animate-pulse" />
          <span>CHANDLER-7</span>
          <span className="text-paper/50 hidden sm:inline">// SECURE</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setMinimized((v) => !v)}
            className="w-7 h-7 flex items-center justify-center text-paper/70 hover:text-hazard"
            aria-label={minimized ? "Expand" : "Minimize"}
          >
            <ChevronUp
              className={cn("w-4 h-4 transition-transform", minimized && "rotate-180")}
            />
          </button>
          <button
            onClick={() => setOpen(false)}
            className="w-7 h-7 flex items-center justify-center text-paper/70 hover:text-hazard"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!minimized && (
        <>
          {/* Body */}
          <div className="p-3 space-y-3 typewriter text-[13px] max-h-[50vh] overflow-y-auto">
            <div>
              <div className="label-mono-xs text-hazard mb-1">CHANDLER &gt;</div>
              <div className="text-paper/90 leading-relaxed">
                I see you on this screen. Want a hand, or just lurking?
              </div>
            </div>

            <div className="pl-3 border-l-2 border-hazard/60">
              <div className="label-mono-xs text-hazard/80 mb-1.5">
                CONTEXTUAL MOVES &gt;
              </div>
              <div className="space-y-1">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    className="block w-full text-left text-paper/85 hover:text-hazard hover:translate-x-1 transition-all text-[13px] leading-snug"
                  >
                    <span className="text-hazard mr-1.5">▸</span>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-paper/20 p-2 flex items-center gap-1.5">
            <button
              className="w-8 h-8 flex items-center justify-center text-paper/60 hover:text-hazard"
              aria-label="Voice input"
            >
              <Mic className="w-4 h-4" />
            </button>
            <input
              type="text"
              placeholder="Type a directive…"
              className="flex-1 bg-transparent border-none outline-none typewriter text-[13px] text-paper placeholder:text-paper/40 px-1"
            />
            <button
              className="bg-hazard text-hazard-foreground btn-min-sm px-3 label-mono flex items-center gap-1.5 hover:bg-hazard-deep transition-colors"
              aria-label="Send"
            >
              SEND <Send className="w-3 h-3" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
