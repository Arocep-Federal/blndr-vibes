import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface Props {
  heading: ReactNode;
  subtitle?: ReactNode;
  ctaLabel: string;
  to?: string;
}

export const CTAStrip = ({
  heading,
  subtitle,
  ctaLabel,
  to = "/app",
}: Props) => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="border-2 border-ink bg-ink text-paper p-8 md:p-12 relative overflow-hidden">
          {/* Hazard stripe pulse */}
          <div
            className="absolute inset-x-0 top-0 h-1.5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, hsl(var(--hazard)) 0 12px, hsl(var(--ink)) 12px 24px)",
              animation: "marquee 4s linear infinite",
              backgroundSize: "200% 100%",
            }}
          />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="label-mono text-hazard mb-3">▲ FINAL TRANSMISSION</div>
              <h3 className="display text-4xl md:text-5xl">{heading}</h3>
              {subtitle && (
                <p className="typewriter text-paper/80 mt-4 max-w-md">
                  {subtitle}
                </p>
              )}
            </div>
            <div className="md:text-right">
              <Link
                to={to}
                className="font-display text-2xl bg-hazard text-hazard-foreground px-6 py-4 inline-flex items-center gap-3 hover:bg-paper hover:text-ink transition-colors"
              >
                {ctaLabel}
                <span>→</span>
              </Link>
              <div className="label-mono text-paper/60 mt-3">
                (BEFORE THEY SHUT US DOWN)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
