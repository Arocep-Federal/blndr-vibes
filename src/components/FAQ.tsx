import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PaperCard } from "./PaperCard";

const faqs = [
  {
    q: "Does this work with my CandleScience / Nature's Garden / Brambleberry oils?",
    a: "Yes. Load your oils into the Vault once — by supplier, SKU, or just paste a CSV. CHANDLER and the Mixer pull from what you actually own. We support every major US fragrance-oil supplier and 'your weird Etsy guy' is also fine.",
  },
  {
    q: "Is CHANDLER actually useful or just AI slop?",
    a: "Useful. It only suggests oils you own, respects IFRA category caps for the format you're making (candle, CP soap, leave-on lotion), and tells you when it doesn't know. It will not invent oils, hallucinate flashpoints, or bluff compliance.",
  },
  {
    q: "Can I dupe brand-name candles?",
    a: "Yes. Paste the name — Volcano, MidSummer's Night, Mahogany Teakwood, Anthropologie Capri Blue, anything — and CHANDLER returns a working starter recipe from your inventory. Fair use, your formula, your bottle.",
  },
  {
    q: "Soap-safe? Lotion-safe?",
    a: "The Vault tracks safety per oil and format. CHANDLER won't suggest a vanillin-heavy FO for clear cold-process soap. It won't suggest something flagged for leave-on max load above the cap. It'll say so out loud.",
  },
  {
    q: "What about cure time, flashpoint, max load?",
    a: "Surfaced everywhere. The Mixer warns you before you ship something that won't cure, will flash in the pour, or exceeds max load for the wax type. Cold throw vs hot throw notes are tracked per blend.",
  },
  {
    q: "Will my formulas leak?",
    a: "Encrypted. Yours. We can't read them, sell them, or hand them over. The whole point is plausible deniability — and your own signature scent profile staying yours.",
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
              Real questions from real chandlers, soapers, and home-fragrance
              operatives. We do not respond to emails about answers already
              filed below.
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
