import { FlaskConical, Boxes, Beaker, Copy, FileText } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const screens = [
  {
    icon: FlaskConical,
    code: "01",
    title: "MIXER",
    note: "Sliders, ratio lock, IFRA caps, flashpoint live.",
    rows: ["VANILLA BEAN — 45%", "SMOKED OAK — 35%", "BERGAMOT — 20%"],
    badge: "HAZARD 3",
  },
  {
    icon: Boxes,
    code: "02",
    title: "VAULT",
    note: "Every oil you own. Notes only you can read.",
    rows: ["247 OILS LOADED", "12 LOW STOCK", "3 DISCONTINUED"],
    badge: "INDEXED",
  },
  {
    icon: Beaker,
    code: "03",
    title: "BATCH MATH",
    note: "Pour 1 candle or 200. The math holds.",
    rows: ["12 × 8OZ JARS", "WAX: 5.2 LB", "FO: 8.3 OZ"],
    badge: "READY",
  },
  {
    icon: Copy,
    code: "04",
    title: "DUPE MODE",
    note: "Paste a brand. Get a starter recipe.",
    rows: ["TARGET: VOLCANO", "MATCH: 87%", "OILS USED: 4"],
    badge: "MATCHED",
  },
  {
    icon: FileText,
    code: "05",
    title: "DOSSIERS",
    note: "Every formula filed. Every batch logged.",
    rows: ["48 ACTIVE BLENDS", "LAST POUR: 04:33", "EXPORT: CSV / PDF"],
    badge: "ARCHIVED",
  },
];

export const LabTour = () => {
  return (
    <section className="py-16 md:py-24 bg-paper/30">
      <div className="container">
        <SectionHeader
          code="SECTION 03 / WALK THE LAB"
          heading={
            <>
              Five rooms.<br />
              No tour guide.
            </>
          }
          subtitle="Scroll sideways. Each screen does one thing well — and they all talk to each other."
        />
      </div>
      <div className="overflow-x-auto pb-6 px-4 md:px-8 scrollbar-thin">
        <div className="flex gap-5 snap-x snap-mandatory min-w-max md:px-12">
          {screens.map((s) => (
            <div
              key={s.code}
              className="snap-center w-[280px] md:w-[320px] shrink-0 paper-card p-5 lift"
            >
              <div className="flex items-center justify-between border-b border-ink/30 pb-3">
                <div className="flex items-center gap-2">
                  <s.icon className="w-4 h-4 text-hazard" />
                  <span className="label-mono text-[10px]">SCREEN {s.code}</span>
                </div>
                <span className="label-mono bg-ink text-paper text-[9px] px-1.5 py-0.5">
                  {s.badge}
                </span>
              </div>
              <div className="font-display text-3xl mt-4">{s.title}</div>
              <p className="scribble text-xs mt-1">{s.note}</p>
              <div className="mt-4 space-y-1.5">
                {s.rows.map((r) => (
                  <div
                    key={r}
                    className="label-mono text-[10px] border-b border-ink/20 pb-1 flex justify-between"
                  >
                    <span>{r}</span>
                    <span className="text-hazard">●</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
