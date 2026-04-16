import { useState } from "react";
import { PaperCard } from "./PaperCard";
import { toast } from "sonner";

export const CTA = () => {
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast("Clearance pending. Check your inbox.", {
      description: "FILE_ID assigned. Welcome to the lab.",
    });
    setEmail("");
  };

  return (
    <section id="cta" className="py-20 md:py-28">
      <div className="container">
        <PaperCard className="p-8 md:p-16 relative overflow-hidden" withTape="center">
          <div className="absolute -right-10 -top-10 font-display text-[12rem] text-hazard/10 leading-none select-none">
            JOIN
          </div>

          <div className="grid md:grid-cols-2 gap-12 relative">
            <div>
              <div className="label-mono text-hazard">▲ FINAL TRANSMISSION</div>
              <h2 className="display text-5xl md:text-7xl mt-3">
                Initiate<br />your own<br /><span className="text-hazard">chaos.</span>
              </h2>
              <p className="typewriter text-ink-soft mt-6 max-w-md">
                Receive your clearance. Access the vault. Mix the first three blends free.
                We will not email you about anything boring.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <form onSubmit={submit} className="space-y-4">
                <label className="label-mono block">▸ ENTER COMMS CHANNEL</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="agent@undisclosed.location"
                  className="w-full bg-paper border-2 border-ink px-4 py-4 typewriter focus:outline-none focus:border-hazard"
                />
                <button
                  type="submit"
                  className="w-full font-display text-2xl bg-ink text-paper px-6 py-5 hover:bg-hazard transition-colors flex items-center justify-between"
                >
                  REQUEST CLEARANCE
                  <span>→</span>
                </button>
                <p className="label-mono text-ink-mute text-center">
                  (BEFORE THEY SHUT US DOWN)
                </p>
              </form>
            </div>
          </div>
        </PaperCard>
      </div>
    </section>
  );
};
