import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DossierCardProps {
  children: ReactNode;
  className?: string;
  /** Static rotation in degrees. Capped at ±0.4 unless `tilt` is true. */
  rotate?: number;
  tape?: boolean;
  hover?: boolean;
  /** Allow full rotation + playful hover wobble. Use sparingly (hero / empty / success). */
  tilt?: boolean;
}

export const DossierCard = ({
  children,
  className,
  rotate = 0,
  tape = false,
  hover = true,
  tilt = false,
}: DossierCardProps) => {
  // Calm by default: cap rotation so dense grids don't feel chaotic.
  const r = tilt ? rotate : Math.max(-0.4, Math.min(0.4, rotate));
  return (
    <div
      className={cn(
        "paper-card relative",
        hover && (tilt ? "lift lift-tilt" : "lift"),
        className
      )}
      style={{ transform: r ? `rotate(${r}deg)` : undefined }}
    >
      {tape && (
        <div
          className="tape"
          style={{ top: -12, left: "50%", transform: "translateX(-50%) rotate(-2deg)" }}
        />
      )}
      {children}
    </div>
  );
};
