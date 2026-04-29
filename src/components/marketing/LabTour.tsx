import { FlaskConical, Boxes, Beaker, Copy, FileText } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const screens = [
  {
    icon: FlaskConical,
    code: "01",
    title: "SETTINGS",
    note: "Preset wax + fragrance load combinations for repeat production.",
    rows: ["CANDLE LOAD — 8%", "MELT LOAD — 12%", "PITCHER CAP — 64OZ"],
    badge: "DEFAULTS",
  },
  {
    icon: Boxes,
    code: "02",
    title: "LIBRARY",
    note: "4,444 oils normalized across six vendor catalogs.",
    rows: ["$/LB NORMALIZED", "IFRA · SDS · ALLERGEN PDFS", "NAME MATCH SEARCH"],
    badge: "4,444",
  },
  {
    icon: Beaker,
    code: "03",
    title: "BATCH MATH",
    note: "Container counts drive wax, oil, COGS, and pitchers.",
    rows: ["41 UNITS", "WAX: 218.6 OZ", "FO: 26.2 OZ"],
    badge: "NO BAD MATH",
  },
  {
    icon: Copy,
    code: "04",
    title: "VAULT",
    note: "Make Batch decrements oil and flags true restock needs.",
    rows: ["CHERRY ECLIPSE -21.8OZ", "LEATHER -4.5OZ", "RESTOCK QUEUE READY"],
    badge: "TRACKED",
  },
  {
    icon: FileText,
    code: "05",
    title: "STORE PUSH",
    note: "Finished inventory rises where you sell.",
    rows: ["SQUARE +41", "SHOPIFY +41", "SYNC LOG SAVED"],
    badge: "DONE",
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
              One workflow.<br />
              No notebook math.
            </>
          }
          subtitle="Set Defaults → Add Recipes → Make Batch → Oil Tracked → Push to Store → Done."
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
