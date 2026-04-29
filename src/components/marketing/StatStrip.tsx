import { AnimatedStat } from "./AnimatedStat";

export const StatStrip = () => {
  return (
    <section className="py-12 border-y-2 border-ink/30 bg-paper/40">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          <AnimatedStat value={4444} label="OILS IN THE CROSS-VENDOR CATALOG" />
          <AnimatedStat value={6} label="SUPPLIER CATALOGS NORMALIZED" />
          <AnimatedStat value={2} label="STORE SYNC TARGETS: SQUARE + SHOPIFY" />
        </div>
      </div>
    </section>
  );
};
