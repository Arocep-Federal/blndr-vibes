import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { PageHero } from "@/components/marketing/PageHero";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { CTAStrip } from "@/components/marketing/CTAStrip";
import { FadeInOnScroll } from "@/components/marketing/FadeInOnScroll";
import { AnimatedStat } from "@/components/marketing/AnimatedStat";
import { PaperCard } from "@/components/PaperCard";
import { cn } from "@/lib/utils";

const ownedOilFeatures = [
  {
    code: "01",
    title: "OWNED OIL STOCK",
    body: "Track the fragrance oils you actually have, then let committed batches decrement inventory when production happens.",
  },
  {
    code: "02",
    title: "NORMALIZED $/LB",
    body: "Compare vendor pricing at your preferred buy size while BLNDR keeps cost-of-goods tied to a common per-pound baseline.",
  },
  {
    code: "03",
    title: "SOURCE DOCUMENTS",
    body: "Keep IFRA certificates, SDS sheets, allergen statements, flashpoint, and wax-load reference data close to the oil record.",
  },
  {
    code: "04",
    title: "RESTOCK VISIBILITY",
    body: "Shortages surface where they matter: at batch time, before a planned pour turns into a surprise shopping trip.",
  },
];

const suppliers = [
  ["CandleScience", "297"],
  ["The Flaming Candle", "458"],
  ["Nature's Garden", "1,032"],
  ["Wholesale Supplies Plus", "1,997"],
  ["Hive & Honey", "275"],
  ["Makesy", "385"],
];

const swapRows = [
  ["Gingerbread", "Discontinued", "Same-name match first"],
  ["Black Sea", "Low stock", "Cross-vendor options"],
  ["Apple Maple Bourbon", "Price jump", "$/lb comparison"],
];

const restockAlerts = [
  { id: "bewitched", recipe: "Bewitched", needed: "32 oz", left: "10 oz left" },
  { id: "edgewood-manor", recipe: "Edgewood Manor", needed: "24 oz", left: "8 oz left" },
  { id: "olive-leaf-fig", recipe: "Olive Leaf & Fig", needed: "48 oz", left: "12 oz left" },
];

const inventorySizes = [
  { size: "3 oz", units: 24, low: false },
  { size: "4 oz", units: 11, low: false },
  { size: "7 oz", units: 4, low: true },
  { size: "14 oz", units: 6, low: true },
  { size: "48 oz", units: 2, low: true },
];

// ----- Recipe Note Search animated demo -----

type Recipe = {
  id: string;
  name: string;
  top: string[];
  mid: string[];
  base: string[];
};

const baselineRecipes: Recipe[] = [
  {
    id: "bewitched",
    name: "BEWITCHED",
    top: ["Bergamot", "Black Pepper"],
    mid: ["Smoked Plum", "Rose"],
    base: ["Oud", "Amber"],
  },
  {
    id: "edgewood-manor",
    name: "EDGEWOOD MANOR",
    top: ["Cedar", "Citrus Peel"],
    mid: ["Tobacco Leaf", "Saffron"],
    base: ["Leather", "Vetiver"],
  },
  {
    id: "olive-leaf-fig",
    name: "OLIVE LEAF & FIG",
    top: ["Green Olive", "Citrus"],
    mid: ["Fig", "Jasmine"],
    base: ["Sandalwood", "Musk"],
  },
];

const violetMatches: Recipe[] = [
  {
    id: "black-tie",
    name: "BLACK TIE",
    top: ["Bergamot", "Violet"],
    mid: ["Iris", "Black Tea"],
    base: ["Oakmoss", "Amber"],
  },
  {
    id: "black-violet-saffron",
    name: "BLACK VIOLET & SAFFRON",
    top: ["Saffron", "Violet"],
    mid: ["Rose", "Plum"],
    base: ["Patchouli", "Sandalwood"],
  },
  {
    id: "desert-bloom",
    name: "DESERT BLOOM",
    top: ["Cactus Flower", "Violet"],
    mid: ["Jasmine", "Heliotrope"],
    base: ["White Musk", "Cedar"],
  },
];

const SEARCH_TERM = "violet";

const NoteChip = ({ note, matched }: { note: string; matched: boolean }) => (
  <span
    className={cn(
      "inline-flex items-center label-mono text-[11px] border px-2 py-1 transition-colors",
      matched
        ? "bg-hazard/15 border-hazard text-hazard animate-pulse"
        : "border-ink/30 text-ink-soft"
    )}
  >
    {note.toUpperCase()}
  </span>
);

const RecipeRow = ({
  recipe,
  expanded,
  pulse,
}: {
  recipe: Recipe;
  expanded: boolean;
  pulse: boolean;
}) => {
  const isMatch = (n: string) => n.toLowerCase().includes(SEARCH_TERM);
  return (
    <div
      className={cn(
        "border-2 border-ink/20 transition-transform duration-300",
        pulse && "scale-[1.015] border-hazard"
      )}
    >
      <div className="grid grid-cols-[1fr_auto] gap-3 p-3 items-center">
        <div className="font-display text-lg uppercase leading-none">{recipe.name}</div>
        <span
          className={cn(
            "label-mono text-[10px] transition-transform duration-300",
            expanded && "rotate-180"
          )}
          aria-hidden
        >
          ▾
        </span>
      </div>
      <div
        className="grid transition-[grid-template-rows] duration-500 ease-out"
        style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-3 pb-3 space-y-2 border-t border-ink/15 pt-3">
            {(["top", "mid", "base"] as const).map((tier, i) => (
              <div
                key={tier}
                className="grid grid-cols-[60px_1fr] gap-2 items-start"
                style={{
                  opacity: expanded ? 1 : 0,
                  transform: expanded ? "translateY(0)" : "translateY(4px)",
                  transition: `opacity 350ms ease-out ${i * 120}ms, transform 350ms ease-out ${i * 120}ms`,
                }}
              >
                <span className="label-mono text-[10px] text-ink-mute pt-1">
                  {tier.toUpperCase()}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {recipe[tier].map((n) => (
                    <NoteChip key={n} note={n} matched={isMatch(n)} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const RecipeNoteSearchDemo = () => {
  // phases:
  // 0 baseline collapsed, no query
  // 1 typing query
  // 2 swap to matches (still collapsed), pointer glides
  // 3 pointer click → first row expands, then others expand
  // 4 hold, then collapse + reset
  const [phase, setPhase] = useState(0);
  const [typed, setTyped] = useState("");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [pulseId, setPulseId] = useState<string | null>(null);
  const [showMatches, setShowMatches] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(true);
  const hoverRef = useRef(false);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion.current) {
      // Static end-state: matches expanded
      setShowMatches(true);
      setTyped(SEARCH_TERM);
      setExpanded(Object.fromEntries(violetMatches.map((r) => [r.id, true])));
      return;
    }

    let cancelled = false;
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const start = performance.now();
        const step = (t: number) => {
          if (cancelled) return resolve();
          if (!visibleRef.current || hoverRef.current) {
            requestAnimationFrame(step);
            return;
          }
          if (t - start >= ms) resolve();
          else requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });

    const run = async () => {
      while (!cancelled) {
        // phase 0
        setPhase(0);
        setTyped("");
        setShowMatches(false);
        setExpanded({});
        setPulseId(null);
        await wait(1400);

        // phase 1: type
        setPhase(1);
        for (let i = 1; i <= SEARCH_TERM.length; i++) {
          if (cancelled) return;
          setTyped(SEARCH_TERM.slice(0, i));
          await wait(140);
        }
        await wait(500);

        // phase 1.5: swap
        setShowMatches(true);
        await wait(900);

        // phase 2: pointer glides → click first row
        setPhase(2);
        await wait(900);
        setPulseId(violetMatches[0].id);
        setExpanded({ [violetMatches[0].id]: true });
        await wait(450);
        setPulseId(null);

        // phase 3: cascade-expand the rest
        setExpanded({
          [violetMatches[0].id]: true,
          [violetMatches[1].id]: true,
        });
        await wait(350);
        setExpanded({
          [violetMatches[0].id]: true,
          [violetMatches[1].id]: true,
          [violetMatches[2].id]: true,
        });

        // phase 4: hold then reset
        setPhase(4);
        await wait(3600);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const rows = showMatches ? violetMatches : baselineRecipes;

  // Pointer position per phase (relative to card)
  const pointer =
    phase >= 2
      ? { top: "138px", left: "62%", opacity: 1, scale: pulseId ? 0.85 : 1 }
      : { top: "70px", left: "85%", opacity: 0, scale: 1 };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      <PaperCard className="p-6 relative" rotate={-0.3}>
        <div className="flex items-baseline justify-between border-b border-ink/30 pb-3">
          <span className="label-mono text-hazard">MY RECIPES</span>
          <span className="label-mono text-ink-mute">SEARCH ALL NOTES</span>
        </div>

        {/* Faux search input */}
        <div className="mt-4 border-2 border-ink bg-paper px-3 py-2 flex items-center gap-2">
          <span className="label-mono text-ink-mute">⌕</span>
          <span className="typewriter text-base">
            {typed}
            <span
              className="inline-block w-[2px] h-4 bg-ink ml-0.5 align-middle"
              style={{ animation: "blink 1s steps(2) infinite" }}
            />
          </span>
          {typed && (
            <span className="ml-auto label-mono text-[10px] text-hazard">
              {violetMatches.length} MATCHES
            </span>
          )}
        </div>

        {/* Recipe list */}
        <div className="mt-4 space-y-3 relative">
          {rows.map((r) => (
            <div
              key={r.id}
              style={{
                animation: "fade-in 350ms ease-out both",
              }}
            >
              <RecipeRow
                recipe={r}
                expanded={!!expanded[r.id]}
                pulse={pulseId === r.id}
              />
            </div>
          ))}

          {/* Faux pointer cursor */}
          <div
            className="pointer-events-none absolute z-10 transition-all duration-700 ease-out"
            style={{
              top: pointer.top,
              left: pointer.left,
              opacity: pointer.opacity,
              transform: `scale(${pointer.scale})`,
            }}
            aria-hidden
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M3 2 L3 18 L8 14 L11 20 L14 19 L11 13 L18 13 Z"
                fill="hsl(var(--ink))"
                stroke="hsl(var(--paper))"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </PaperCard>

      {/* Inline keyframes for caret blink */}
      <style>{`@keyframes blink { 0%,49% { opacity: 1 } 50%,100% { opacity: 0 } }`}</style>
    </div>
  );
};

const Features = () => {
  return (
    <MarketingLayout>
      <PageHero
        sectionCode="SECTION 03 / FEATURES"
        heading={
          <>
            Every System.<br />
            <span className="text-hazard">One Surface.</span>
          </>
        }
        subtitle="Features. Owned oils. The oil engine. Restock alerts. Per-size store inventory. Recipe note search. That's the file."
        watermark="FEATURES"
        right={
          <FadeInOnScroll>
            <PaperCard className="p-6" rotate={0.5}>
              <div className="flex items-baseline justify-between border-b border-ink/30 pb-3">
                <span className="label-mono">OIL COST CHECK</span>
                <span className="label-mono text-hazard">$/LB</span>
              </div>
              <div className="mt-5 space-y-4">
                {[
                  ["Amber + Driftwood", "$21.12", "preferred 16oz"],
                  ["Black Currant Absinthe", "$18.40", "preferred 5lb"],
                  ["Baking Spices", "$24.88", "preferred 8oz"],
                ].map(([oil, cost, size]) => (
                  <div
                    key={oil}
                    className="grid grid-cols-[1fr_auto] gap-3 border-b border-ink/20 pb-3 last:border-0 last:pb-0"
                  >
                    <div>
                      <div className="font-display text-xl uppercase leading-none">{oil}</div>
                      <div className="typewriter text-xs text-ink-mute mt-1">{size}</div>
                    </div>
                    <div className="font-display text-2xl text-hazard">{cost}</div>
                  </div>
                ))}
              </div>
            </PaperCard>
          </FadeInOnScroll>
        }
      />

      {/* Catalog stats strip */}
      <section className="py-12 md:py-16 border-y-2 border-ink/30 bg-paper/40">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            <AnimatedStat value={4444} label="OILS INDEXED" suffix="+" />
            <div className="flex items-baseline gap-3">
              <div className="font-display text-5xl md:text-6xl text-hazard">GROWING</div>
              <div className="label-mono text-ink-mute leading-tight max-w-[140px]">
                SUPPLIER NETWORK
              </div>
            </div>
            <AnimatedStat value={3} label="SOURCE PDF TYPES" />
          </div>
        </div>
      </section>

      {/* Owned oils features */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeader
            code="OWNED OILS / COST TRUTH"
            heading={
              <>
                Know what you own.<br />
                Know what it costs.
              </>
            }
            subtitle="BLNDR treats oil inventory as production data, not a loose list of bottles hiding on a shelf."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {ownedOilFeatures.map((feature, i) => (
              <FadeInOnScroll key={feature.code} delay={i * 80}>
                <PaperCard className="p-6 lift" rotate={i % 2 === 0 ? -0.5 : 0.6}>
                  <div className="flex items-baseline justify-between border-b border-ink/30 pb-3">
                    <span className="font-display text-4xl">{feature.code}</span>
                    <span className="label-mono text-ink-mute">OWNED OILS</span>
                  </div>
                  <h3 className="font-display text-2xl uppercase mt-4">{feature.title}</h3>
                  <p className="typewriter text-sm text-ink-soft mt-2">{feature.body}</p>
                </PaperCard>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Suppliers */}
      <section className="py-16 md:py-24 bg-paper/30">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                code="CATALOG / GROWING NETWORK"
                heading={
                  <>
                    The catalog<br />
                    behind the shelf.
                  </>
                }
                subtitle="Live name-match search and supplier metadata power Library lookup, the Oil Engine, swap suggestions, and cost comparisons."
              />
            </div>
            <div className="lg:col-span-7">
              <FadeInOnScroll>
                <PaperCard className="p-6" rotate={-0.4}>
                  <div className="label-mono text-hazard border-b border-ink/30 pb-3">
                    INDEXED SUPPLIERS — AND COUNTING
                  </div>
                  <div className="mt-4 divide-y divide-ink/20">
                    {suppliers.map(([name, count]) => (
                      <div key={name} className="grid grid-cols-[1fr_auto] gap-4 py-3">
                        <span className="font-display text-xl uppercase">{name}</span>
                        <span className="label-mono text-ink-soft">{count} oils</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-ink/20 typewriter text-xs text-ink-mute">
                    New catalogs added regularly.
                  </div>
                </PaperCard>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Oil Engine + Swaps */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <FadeInOnScroll>
                <PaperCard className="p-6" rotate={0.3}>
                  <div className="label-mono text-hazard border-b border-ink/30 pb-3">
                    OIL ENGINE QUEUE
                  </div>
                  <div className="mt-4 space-y-3">
                    {swapRows.map(([oil, status, action]) => (
                      <div
                        key={oil}
                        className="grid md:grid-cols-[1fr_120px_1fr] gap-3 border-2 border-ink/20 p-3"
                      >
                        <div>
                          <div className="font-display text-lg uppercase leading-none">{oil}</div>
                          <div className="typewriter text-xs text-ink-mute mt-1">owned oil</div>
                        </div>
                        <div className="label-mono text-hazard">{status}</div>
                        <div className="typewriter text-xs text-ink-soft">{action}</div>
                      </div>
                    ))}
                  </div>
                </PaperCard>
              </FadeInOnScroll>
            </div>
            <div className="lg:col-span-6">
              <SectionHeader
                code="ENGINE / SWAPS"
                heading={<>Discontinued oil does not get the last word.</>}
                subtitle="If one supplier drops Gingerbread and another sells Gingerbread, that same-name match tops the list. Broader alternatives can follow after exact matches."
              />
              <p className="typewriter text-sm text-ink-soft max-w-md">
                The Oil Engine keeps production moving without pretending a catalog match is a compliance decision. Makers still review source documents; BLNDR keeps the search and costing sane.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Restock Alerts → Batch Planner */}
      <section className="py-16 md:py-24 bg-paper/30">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <SectionHeader
                code="ALERTS / GO-TIME"
                heading={<>Low stock isn't a problem. It's a batch waiting to happen.</>}
                subtitle="One tap from alert to mixed batch. The planner opens pre-loaded with the recipe, the wax math, and your owned-oil counts."
              />
            </div>
            <div className="lg:col-span-6">
              <FadeInOnScroll>
                <PaperCard className="p-6" rotate={-0.4}>
                  <div className="flex items-baseline justify-between border-b border-ink/30 pb-3">
                    <span className="label-mono text-hazard">RESTOCK ALERTS</span>
                    <span className="label-mono text-ink-mute">GO-TIME</span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {restockAlerts.map((row) => (
                      <div
                        key={row.id}
                        className="grid grid-cols-[1fr_auto] gap-3 border-2 border-ink/20 p-3 items-center"
                      >
                        <div>
                          <div className="font-display text-lg uppercase leading-none">
                            {row.recipe}
                          </div>
                          <div className="typewriter text-xs text-ink-mute mt-1">
                            needs {row.needed}
                          </div>
                          <span className="inline-block mt-2 label-mono text-[10px] border border-hazard text-hazard px-2 py-0.5">
                            {row.left.toUpperCase()}
                          </span>
                        </div>
                        <Link
                          to={`/app/batch?recipe=${row.id}`}
                          className="label-mono text-[11px] bg-hazard text-hazard-foreground px-3 py-2 hover:bg-ink hover:text-paper transition-colors"
                        >
                          + RESTOCK →
                        </Link>
                      </div>
                    ))}
                  </div>
                </PaperCard>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Store Inventory per size */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <FadeInOnScroll>
                <PaperCard className="p-6" rotate={0.3}>
                  <div className="flex items-baseline justify-between border-b border-ink/30 pb-3">
                    <span className="label-mono text-hazard">STORE INVENTORY</span>
                    <span className="label-mono text-ink-mute">PER SIZE</span>
                  </div>
                  <div className="mt-4 border-2 border-ink/20">
                    <div className="grid grid-cols-[1fr_auto] gap-3 p-3 bg-ink/[0.04] border-b border-ink/20 items-center">
                      <div className="font-display text-xl uppercase leading-none">
                        BEWITCHED
                      </div>
                      <span className="label-mono text-[10px] text-ink-mute">▾ EXPANDED</span>
                    </div>
                    <div className="divide-y divide-ink/15">
                      {inventorySizes.map((row, i) => (
                        <FadeInOnScroll key={row.size} delay={i * 60} offset={6}>
                          <div className="grid grid-cols-[80px_1fr_auto] gap-3 p-3 items-center">
                            <span className="font-display text-lg">{row.size}</span>
                            <span className="typewriter text-sm text-ink-soft">
                              {row.units} units in stock
                            </span>
                            {row.low && (
                              <span className="label-mono text-[10px] border border-hazard text-hazard px-2 py-0.5">
                                LOW (&lt; 10)
                              </span>
                            )}
                          </div>
                        </FadeInOnScroll>
                      ))}
                    </div>
                  </div>
                </PaperCard>
              </FadeInOnScroll>
            </div>
            <div className="lg:col-span-6">
              <SectionHeader
                code="STOCK / PER SIZE"
                heading={<>Inventory that knows what size you pour.</>}
                subtitle="Track finished-goods stock per pour size, not just oil. Square + Shopify sync keeps counts honest; low thresholds fire restock alerts automatically."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Note Search animated */}
      <section className="py-16 md:py-24 bg-paper/30">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                code="RECALL / NOTES"
                heading={
                  <>
                    A customer asks for violet.<br />
                    You answer in one search.
                  </>
                }
                subtitle="Search any note across every saved recipe. Pull instant matches when a customer wants 'something with violet' or 'no patchouli' — turn a vague request into a sale."
              />
            </div>
            <div className="lg:col-span-7">
              <RecipeNoteSearchDemo />
            </div>
          </div>
        </div>
      </section>

      <CTAStrip
        heading={
          <>
            Open the<br />
            <span className="text-hazard">Features.</span>
          </>
        }
        subtitle="Track oil, compare normalized costs, catch shortages, and keep source documents within reach."
        ctaLabel="OPEN HQ"
        to="/app"
      />
    </MarketingLayout>
  );
};

export default Features;
