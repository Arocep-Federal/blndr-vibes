export const Footer = () => {
  return (
    <footer className="border-t-2 border-ink/40 mt-10">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="font-display text-3xl">BLNDR</div>
            <div className="label-mono text-ink-mute mt-1">UNAUTHORIZED EXTRACTION UNIT</div>
            <p className="typewriter text-sm text-ink-soft mt-4 max-w-sm">
              A laboratory for fragrance you weren't supposed to make. Operating
              from somewhere temperate since 2024.
            </p>
          </div>
          <div>
            <div className="label-mono mb-3">▸ ARCHIVE</div>
            <ul className="typewriter text-sm space-y-2">
              <li><a href="#blends" className="hover:text-hazard">Classified Blends</a></li>
              <li><a href="#manifesto" className="hover:text-hazard">Manifesto</a></li>
              <li><a href="#protocol" className="hover:text-hazard">Protocol</a></li>
              <li><a href="#faq" className="hover:text-hazard">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="label-mono mb-3">▸ COMMS</div>
            <ul className="typewriter text-sm space-y-2">
              <li>agent@blndr.lab</li>
              <li>Instagram <span className="text-ink-mute">// pending</span></li>
              <li>Substack <span className="text-ink-mute">// pending</span></li>
            </ul>
          </div>
        </div>

        <div className="perf-divide mt-12 pt-6 flex flex-col md:flex-row gap-3 justify-between label-mono text-ink-mute">
          <div>© BLNDR LAB — ALL RATIOS RESERVED.</div>
          <div className="flex gap-6">
            <span>FILE_ID 88.X-OMEGA</span>
            <span>v0.04 // BETA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
