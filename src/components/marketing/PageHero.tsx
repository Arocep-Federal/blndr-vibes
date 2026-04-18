import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  sectionCode: string;
  fileId?: string;
  heading: ReactNode;
  subtitle: ReactNode;
  watermark?: string;
  right?: ReactNode;
  className?: string;
}

export const PageHero = ({
  sectionCode,
  fileId = "88.X-OMEGA",
  heading,
  subtitle,
  watermark,
  right,
  className,
}: Props) => {
  return (
    <section
      className={cn(
        "relative pt-12 md:pt-20 pb-14 md:pb-20 overflow-hidden",
        className
      )}
    >
      {watermark && (
        <div className="pointer-events-none absolute -top-10 left-0 right-0 flex justify-center opacity-[0.06] select-none">
          <span className="font-display text-[24vw] leading-none tracking-tighter">
            {watermark}
          </span>
        </div>
      )}
      <div className="container relative">
        <div className="flex items-center gap-3 mb-4">
          <span className="label-mono text-hazard border border-hazard px-2 py-0.5">
            {sectionCode}
          </span>
          <span className="label-mono text-ink-mute">FILE_ID {fileId}</span>
          <span className="label-mono text-ink-mute hidden sm:inline">
            ● LIVE FEED
          </span>
        </div>
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className={cn(right ? "lg:col-span-7" : "lg:col-span-12")}>
            <h1 className="display text-5xl md:text-7xl lg:text-8xl">{heading}</h1>
            <p className="typewriter text-base md:text-lg text-ink-soft mt-6 max-w-2xl">
              {subtitle}
            </p>
          </div>
          {right && <div className="lg:col-span-5">{right}</div>}
        </div>
      </div>
    </section>
  );
};
