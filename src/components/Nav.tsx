import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#blends", label: "Blends" },
  { href: "#manifesto", label: "Manifesto" },
  { href: "#protocol", label: "Protocol" },
  { href: "#faq", label: "FAQ" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm">
      <div className="border-b border-ink/30 bg-paper/80">
        <div className="container flex items-center justify-between py-4">
          <a href="#top" className="flex items-baseline gap-3">
            <span className="font-display text-2xl tracking-tight">BLNDR</span>
            <span className="hidden sm:inline label-mono text-ink-mute">UNAUTH. EXTRACTION UNIT</span>
          </a>
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="label-mono hover:text-hazard transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              className="label-mono bg-ink text-paper px-4 py-2 hover:bg-hazard transition-colors"
            >
              Get Access →
            </a>
          </nav>
          <button
            className="md:hidden label-mono border border-ink px-3 py-1.5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
        <div className={cn("md:hidden overflow-hidden transition-all", open ? "max-h-72" : "max-h-0")}>
          <div className="container flex flex-col gap-3 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="label-mono" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#cta" className="label-mono bg-ink text-paper px-4 py-2 inline-block w-fit">
              Get Access →
            </a>
          </div>
        </div>
      </div>
      {/* Status bar */}
      <div className="bg-ink text-paper/90 overflow-hidden">
        <div className="flex marquee-track whitespace-nowrap label-mono py-1.5">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-8 px-8 shrink-0">
              <span>● TRANSMISSION ACTIVE</span>
              <span>FILE_ID 88.X-OMEGA</span>
              <span>HAZARD CLASS 4 — VIBE SHIFT IMMINENT</span>
              <span>DO NOT DEVIATE FROM RATIOS</span>
              <span>● UNAUTHORIZED EXTRACTION UNIT</span>
              <span>EST. 2024 — UNDISCLOSED LOCATION</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
