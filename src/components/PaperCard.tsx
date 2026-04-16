import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PaperCardProps {
  children: ReactNode;
  className?: string;
  rotate?: number;
  withTape?: "left" | "center" | "right" | "none";
}

export const PaperCard = ({ children, className, rotate = 0, withTape = "none" }: PaperCardProps) => {
  return (
    <div
      className={cn("paper-card relative", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {withTape !== "none" && (
        <div
          className="tape"
          style={{
            top: "-14px",
            left: withTape === "left" ? "12%" : withTape === "right" ? "auto" : "50%",
            right: withTape === "right" ? "12%" : "auto",
            transform: `${withTape === "center" ? "translateX(-50%)" : ""} rotate(${withTape === "left" ? -4 : withTape === "right" ? 5 : -2}deg)`,
          }}
        />
      )}
      {children}
    </div>
  );
};
