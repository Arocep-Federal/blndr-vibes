import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PaperCard } from "./PaperCard";

const faqs = [
  {
    q: "How big is the oil catalog?",
    a: "4,444 oils across CandleScience, The Flaming Candle, Nature's Garden, Wholesale Supplies Plus, Hive & Honey, and Makesy — with manufacturer sub-brands, name-match search, and IFRA, SDS, and allergen PDFs linked per oil.",
  },
  {
    q: "What happens when I make a batch?",
    a: "BLNDR calculates wax, fragrance oil, COGS, pitchers, per-pitcher breakdowns, and remainders. When you commit the batch, oil inventory decrements and finished stock can push to Square or Shopify.",
  },
  {
    q: "Can I use different fragrance loads for different products?",
    a: "Yes. Save multi-formula presets like 8% candle load and 12% wax-melt load, then switch per batch from a dropdown without rebuilding your settings every time.",
  },
  {
    q: "Will one-off changes mess up my saved recipes?",
    a: "No. Batch-only fragrance-load and container overrides stay on that batch. They do not write back to your saved formula or your container registry.",
  },
  {
    q: "What compliance or safety data does it handle?",
    a: "BLNDR links IFRA certificate, SDS, and allergen statement PDFs per oil and shows wax-spec advisory text when a fragrance load is above or below the wax's published range. It does not claim IFRA enforcement, hard usage-cap validation, compliance reporting, or regulatory threshold policing.",
  },
  {
    q: "How do discontinued-oil swaps work?",
    a: "Cross-vendor matching starts with same-name-always-wins. If a vendor drops Gingerbread and another vendor sells Gingerbread, that match rises to the top before broader replacement suggestions.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="label-mono text-hazard">SECTION 06 / FREQUENTLY REDACTED</div>
            <h2 className="display text-5xl md:text-6xl mt-3">
              Questions<br />
              we keep<br />
              getting.
            </h2>
            <p className="typewriter text-ink-soft mt-5 max-w-sm">
              Real questions from makers who are tired of discovering stockouts
              after the wax is melted.
            </p>
          </div>

          <PaperCard className="lg:col-span-8 p-8 md:p-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-ink/30"
                >
                  <AccordionTrigger className="text-left">
                    <span className="flex items-baseline gap-4">
                      <span className="label-mono text-hazard">
                        Q.{String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-base md:text-lg uppercase tracking-tight">
                        {f.q}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="typewriter text-base text-ink-soft pl-12">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </PaperCard>
        </div>
      </div>
    </section>
  );
};
