import { PaperCard } from "./PaperCard";

const steps = [
  {
    n: "01",
    title: "Infiltrate the Vault",
    body: "Sign in with one click. We don't ask questions; we don't keep records the courts can subpoena.",
  },
  {
    n: "02",
    title: "Select Components",
    body: "Pick from 1,408 raw accords. Sort by mood, decade, crime, or season. Combine up to seven.",
  },
  {
    n: "03",
    title: "Calibrate Ratios",
    body: "Adjust the percentages with the precision dial. Watch the hazard class shift in real time.",
  },
  {
    n: "04",
    title: "Document & Deploy",
    body: "Save the formula to your dossier. Order a 10ml run. Distribute. Deny everything.",
  },
];

export const Protocol = () => {
  return (
    <section id="protocol" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="label-mono text-hazard">SECTION 04 / OPERATING PROTOCOL</div>
          <h2 className="display text-5xl md:text-7xl mt-3">
            How to <span className="text-hazard">extract.</span>
          </h2>
          <p className="typewriter text-ink-soft mt-5">
            Four steps from civilian to credentialed mixologist. Memorize. Burn this page.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <PaperCard key={s.n} rotate={i % 2 === 0 ? -1 : 1.2} className="p-6 lift">
              <div className="flex items-baseline justify-between border-b border-ink/30 pb-3">
                <span className="font-display text-5xl">{s.n}</span>
                <span className="label-mono text-ink-mute">STEP</span>
              </div>
              <h3 className="font-display text-xl uppercase mt-5">{s.title}</h3>
              <p className="typewriter text-sm mt-3 text-ink-soft">{s.body}</p>
            </PaperCard>
          ))}
        </div>
      </div>
    </section>
  );
};
