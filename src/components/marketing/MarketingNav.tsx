import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const links = [
  { to: "/lab", label: "Lab" },
  { to: "/chandler", label: "Chandler" },
  { to: "/vault", label: "Vault" },
  { to: "/field-manual", label: "Field Manual" },
  { to: "/pricing", label: "Pricing" },
];

const marqueeItems = [
  "● TRANSMISSION ACTIVE",
  "4,812 CANDLES POURED THIS WEEK",
  "DO NOT EXCEED IFRA MAX LOAD",
  "CURE TIME: 14 DAYS MINIMUM",
  "● UNAUTHORIZED EXTRACTION UNIT",
  "FILE_ID 88.X-OMEGA",
];

export const MarketingNav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm">
      <div
        className={cn(
          "bg-paper/85 transition-all duration-200",
          scrolled ? "border-b-2 border-ink py-1" : "border-b border-ink/30 py-3"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-3">
            <span className="font-display text-2xl tracking-tight">BLNDR</span>
            <span className="hidden sm:inline label-mono text-ink-mute">
              UNAUTH. EXTRACTION UNIT
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "label-mono transition-colors",
                    isActive ? "text-hazard" : "hover:text-hazard"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/app"
              className="label-mono bg-ink text-paper px-4 py-2 hover:bg-hazard transition-colors"
            >
              Enter HQ →
            </Link>
          </nav>
          <button
            className="md:hidden label-mono border border-ink px-3 py-1.5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all",
            open ? "max-h-96" : "max-h-0"
          )}
        >
          <div className="container flex flex-col gap-3 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className="label-mono"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/app"
              className="label-mono bg-ink text-paper px-4 py-2 inline-block w-fit"
            >
              Enter HQ →
            </Link>
          </div>
        </div>
      </div>
      {/* Status marquee */}
      <div className="bg-ink text-paper/90 overflow-hidden">
        <div className="flex marquee-track whitespace-nowrap label-mono py-1.5">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-8 px-8 shrink-0">
              {marqueeItems.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
