import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PaperCard } from "./PaperCard";

const faqs = [
  {
    q: "Is BLNDR actually classified?",
    a: "Legally, no. Aesthetically, absolutely. We classify ourselves so the experience is more interesting.",
  },
  {
    q: "Where are you shipping from?",
    a: "An undisclosed industrial unit somewhere temperate. Orders ship in plain packaging within 5–7 days. No customs paperwork mentions feelings.",
  },
  {
    q: "Can I sell my blends?",
    a: "Yes. Once a formula is yours, you own it. Take a cut, build a brand, become the new beige conference room. We won't stop you, but we'll be disappointed.",
  },
  {
    q: "What if my blend is genuinely bad?",
    a: "Then you have learned something. The lab does not validate, it documents. Adjust ratios. Try again. The vault forgives.",
  },
  {
    q: "Hazard Class 5 — really?",
    a: "Internal classification. Refers to scents potent enough to derail meetings, end relationships, or get you remembered. Wear at your discretion.",
  },
  {
    q: "Will my data leak?",
    a: "Your account is encrypted. Your formulas are yours. We can't read them, sell them, or hand them over. The whole point is plausible deniability.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="label-mono text-hazard">SECTION 05 / FREQUENTLY REDACTED</div>
            <h2 className="display text-5xl md:text-6xl mt-3">
              Questions<br />we keep<br />getting.
            </h2>
            <p className="typewriter text-ink-soft mt-5 max-w-sm">
              Read carefully. We do not respond to emails about answers already filed below.
            </p>
          </div>

          <PaperCard className="lg:col-span-8 p-8 md:p-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-ink/30">
                  <AccordionTrigger className="text-left">
                    <span className="flex items-baseline gap-4">
                      <span className="label-mono text-hazard">Q.{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-display text-lg md:text-xl uppercase tracking-tight">
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
