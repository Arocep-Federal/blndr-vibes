import redactedSeal from "@/assets/redacted-seal.png";
import { PaperCard } from "./PaperCard";

export const Manifesto = () => {
  return (
    <section id="manifesto" className="py-20 md:py-28 relative">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-3 lg:sticky lg:top-32">
            <img
              src={redactedSeal}
              alt=""
              loading="lazy"
              width={520}
              height={520}
              className="w-48 mix-blend-multiply opacity-90"
            />
            <div className="label-mono mt-6 text-hazard">SECTION 03 / DOCTRINE</div>
            <h2 className="display text-5xl mt-2">The<br />Manifesto.</h2>
          </div>

          <PaperCard className="lg:col-span-9 p-8 md:p-14" withTape="left">
            <div className="space-y-6 typewriter text-base md:text-lg leading-relaxed text-ink-soft max-w-3xl">
              <p>
                Fragrance has been held hostage by men in beige conference rooms for forty
                years. A handful of houses, six identical "fresh aquatics," and a marketing
                budget that could end small wars.
              </p>
              <p>
                We are not those men.
              </p>
              <p>
                BLNDR is a <span className="redact">covert</span> laboratory. We give you raw
                accords, gross molecular truth, and a slider. You give us a profile that
                shouldn't exist. Together we make something the focus group would have
                killed in 2009.
              </p>
              <p>
                <span className="font-display text-2xl text-ink">Rule one:</span> there is no
                "tasteful." Only honest, dishonest, or thrilling.
              </p>
              <p>
                <span className="font-display text-2xl text-ink">Rule two:</span> if it
                doesn't make a stranger ask, you mixed it wrong. Try again. The lab is open
                until they find us.
              </p>
            </div>

            <div className="mt-12 pt-6 perf-divide flex flex-wrap gap-x-12 gap-y-6">
              {[
                { k: "1,408", v: "ACCORDS IN VAULT" },
                { k: "∞", v: "POSSIBLE FORMULAS" },
                { k: "0", v: "FOCUS GROUPS USED" },
                { k: "4", v: "LAWSUITS PENDING" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-4xl text-hazard">{s.k}</div>
                  <div className="label-mono text-ink-mute mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </PaperCard>
        </div>
      </div>
    </section>
  );
};
