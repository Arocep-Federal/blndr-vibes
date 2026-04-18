import { AnimatedStat } from "./AnimatedStat";

export const StatStrip = () => {
  return (
    <section className="py-12 border-y-2 border-ink/30 bg-paper/40">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          <AnimatedStat value={4812} label="CANDLES POURED THIS WEEK" />
          <AnimatedStat value={1247} label="OPERATIVES IN THE FIELD" />
          <AnimatedStat value={89} label="BRAND DUPES ARCHIVED" />
        </div>
      </div>
    </section>
  );
};
