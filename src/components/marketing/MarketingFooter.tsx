import { Link } from "react-router-dom";

const cols = [
  {
    title: "▸ THE APP",
    items: [
      { label: "The Lab", to: "/lab" },
      { label: "The Vault", to: "/vault" },
      { label: "Batch Planner", to: "/app/batch" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    title: "▸ ARCHIVE",
    items: [
      { label: "Manifesto", to: "/manifesto" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "▸ COMMS",
    items: [
      { label: "agent@blndr.lab", to: "/contact" },
      { label: "Instagram // pending", to: "/contact" },
      { label: "Substack // pending", to: "/contact" },
      { label: "Press kit", to: "/contact" },
    ],
  },
];

export const MarketingFooter = () => {
  return (
    <footer className="border-t-2 border-ink/40 mt-10">
      <div className="container py-12">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="font-display text-3xl">BLNDR</div>
            <div className="label-mono text-ink-mute mt-1">
              MAKER OPS SYSTEM
            </div>
            <p className="typewriter text-sm text-ink-soft mt-4 max-w-sm">
              Inventory, recipes, and batch math in one place — finally. Set
              defaults, add recipes, make batches, track oil, and push stock to
              Square or Shopify.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="redact label-mono text-[10px]">
                EST. 2024
              </span>
              <span className="redact label-mono text-[10px]">
                UNDISCLOSED INDUSTRIAL UNIT
              </span>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="label-mono mb-3">{c.title}</div>
              <ul className="typewriter text-sm space-y-2">
                {c.items.map((it) => (
                  <li key={it.label}>
                    <Link to={it.to} className="hover:text-hazard transition-colors">
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="perf-divide mt-12 pt-6 flex flex-col md:flex-row gap-3 justify-between label-mono text-ink-mute">
          <div>© BLNDR LAB — ALL RATIOS RESERVED.</div>
          <div className="flex flex-wrap gap-6">
            <span>FILE_ID 88.X-OMEGA</span>
            <span>v0.04 // BETA</span>
            <Link to="/manifesto" className="hover:text-hazard">
              MANIFESTO
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
