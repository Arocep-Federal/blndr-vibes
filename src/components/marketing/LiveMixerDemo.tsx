import { useMemo, useState } from "react";
import { PaperCard } from "@/components/PaperCard";

interface Oil {
  id: string;
  name: string;
  supplier: string;
  flashpoint: number; // °F
  hazardWeight: number; // 1-5
}

const OILS: Oil[] = [
  { id: "vanilla", name: "VANILLA BEAN ABSOLUTE", supplier: "CandleScience", flashpoint: 200, hazardWeight: 2 },
  { id: "oak", name: "SMOKED OAK", supplier: "Nature's Garden", flashpoint: 160, hazardWeight: 4 },
  { id: "berg", name: "BERGAMOT (BFC-FREE)", supplier: "Brambleberry", flashpoint: 145, hazardWeight: 3 },
];

export const LiveMixerDemo = () => {
  const [vals, setVals] = useState([45, 35, 20]);

  const total = vals.reduce((a, b) => a + b, 0);

  // Auto-rebalance: when slider i changes, distribute remaining proportionally
  const update = (i: number, v: number) => {
    const next = [...vals];
    next[i] = v;
    const others = next.filter((_, j) => j !== i);
    const otherSum = others.reduce((a, b) => a + b, 0);
    const need = 100 - v;
    if (otherSum === 0) {
      // split evenly
      next.forEach((_, j) => {
        if (j !== i) next[j] = Math.round(need / 2);
      });
    } else {
      const ratio = need / otherSum;
      let acc = v;
      next.forEach((_, j) => {
        if (j === i) return;
        next[j] = Math.max(0, Math.round(vals[j] * ratio));
        acc += next[j];
      });
      // fix rounding: nudge first non-i
      const diff = 100 - acc;
      for (let j = 0; j < next.length; j++) {
        if (j !== i) {
          next[j] = Math.max(0, next[j] + diff);
          break;
        }
      }
    }
    setVals(next);
  };

  const flashpoint = useMemo(() => {
    const fp = OILS.reduce((acc, o, i) => acc + o.flashpoint * (vals[i] / 100), 0);
    return Math.round(fp);
  }, [vals]);

  const hazard = useMemo(() => {
    const h = OILS.reduce((acc, o, i) => acc + o.hazardWeight * (vals[i] / 100), 0);
    return Math.min(5, Math.max(1, Math.round(h)));
  }, [vals]);

  const ifraOk = vals.every((v) => v <= 60);

  return (
    <PaperCard className="p-5 md:p-6" rotate={0.6}>
      <div className="flex items-center justify-between border-b border-ink/40 pb-3">
        <div>
          <div className="label-mono text-ink-mute">LIVE MIXER // CANDLE</div>
          <div className="font-display text-xl mt-0.5">DRAG TO BLEND</div>
        </div>
        <span
          className={`label-mono text-[10px] px-2 py-1 ${
            hazard >= 4
              ? "bg-hazard text-hazard-foreground"
              : "bg-ink text-paper"
          }`}
        >
          HAZARD {hazard}
        </span>
      </div>

      <div className="mt-5 space-y-4">
        {OILS.map((o, i) => (
          <div key={o.id}>
            <div className="flex items-baseline justify-between gap-3">
              <div>
                <div className="label-mono text-[11px]">{o.name}</div>
                <div className="label-mono text-[9px] text-ink-mute">
                  {o.supplier}
                </div>
              </div>
              <div className="font-display text-2xl tabular-nums">
                {vals[i]}%
              </div>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={vals[i]}
              onChange={(e) => update(i, parseInt(e.target.value, 10))}
              className="mt-1.5 w-full accent-hazard cursor-grab active:cursor-grabbing"
              aria-label={`${o.name} percentage`}
            />
            <div className="h-1.5 bg-paper-deep mt-1 overflow-hidden">
              <div
                className="h-full bg-ink transition-all"
                style={{ width: `${vals[i]}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="perf-divide mt-5 pt-3 grid grid-cols-3 gap-2 label-mono text-[10px]">
        <div>
          <div className="text-ink-mute">TOTAL</div>
          <div className="text-ink text-base font-display">{total}%</div>
        </div>
        <div>
          <div className="text-ink-mute">FLASHPOINT</div>
          <div className="text-ink text-base font-display">{flashpoint}°F</div>
        </div>
        <div>
          <div className="text-ink-mute">IFRA (CAT 12)</div>
          <div
            className={`text-base font-display ${
              ifraOk ? "text-ink" : "text-hazard"
            }`}
          >
            {ifraOk ? "OK" : "OVER"}
          </div>
        </div>
      </div>

      <div className="mt-3 scribble text-xs text-ink-soft">
        *sliders auto-balance to 100%. Real Mixer locks ratios per oil.
      </div>
    </PaperCard>
  );
};
