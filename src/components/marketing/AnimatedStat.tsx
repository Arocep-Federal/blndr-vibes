import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export const AnimatedStat = ({ value, label, suffix = "", prefix = "" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(value * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex items-baseline gap-3">
      <div className="font-display text-5xl md:text-6xl text-hazard tabular-nums">
        {prefix}
        {n.toLocaleString()}
        {suffix}
      </div>
      <div className="label-mono text-ink-mute leading-tight max-w-[120px]">
        {label}
      </div>
    </div>
  );
};
