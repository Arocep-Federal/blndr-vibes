import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DossierCardProps {
  children: ReactNode;
  className?: string;
  rotate?: number;
  tape?: boolean;
  hover?: boolean;
}

export const DossierCard = ({ children, className, rotate = 0, tape = false, hover = true }: DossierCardProps) => {
  return (
    <div
      className={cn("paper-card relative", hover && "lift", className)}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
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
