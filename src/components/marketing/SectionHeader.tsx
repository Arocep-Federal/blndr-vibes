import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  code: string;
  heading: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader = ({
  code,
  heading,
  subtitle,
  align = "left",
  className,
}: Props) => {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" && "text-center mx-auto max-w-2xl",
        className
      )}
    >
      <div className="label-mono text-hazard">{code}</div>
      <h2 className="display text-4xl md:text-6xl mt-3">{heading}</h2>
      {subtitle && (
        <p className="typewriter text-ink-soft mt-4 max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
