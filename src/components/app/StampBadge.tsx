import { cn } from "@/lib/utils";

interface StampBadgeProps {
  children: React.ReactNode;
  variant?: "hazard" | "ink" | "approved";
  rotate?: number;
  className?: string;
}

export const StampBadge = ({ children, variant = "hazard", rotate = -6, className }: StampBadgeProps) => {
  const variants = {
    hazard: "border-hazard text-hazard",
    ink: "border-ink text-ink",
    approved: "border-emerald-700 text-emerald-700",
  };
  return (
    <span
      className={cn(
        "inline-block border-2 px-2 py-0.5 label-mono text-[10px] font-bold opacity-90",
        variants[variant],
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
};
