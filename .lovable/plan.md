

## Full content + animation map, page by page

Candle/B&B/home-fragrance vocabulary throughout. One workspace = **Mixer**. CHANDLER = AI inside it. Duping = a starter prompt, not a page.

---

### Global elements (every page)

**MarketingNav** — Lab · Chandler · Vault · Field Manual · Pricing · `Enter HQ →`
- Animation: marquee status bar persists; on scroll past 80px, nav shrinks + adds bottom border (smooth 200ms)
- Marquee copy rotates: `● TRANSMISSION ACTIVE` · `4,812 CANDLES POURED THIS WEEK` · `DO NOT EXCEED IFRA MAX LOAD` · `CURE TIME: 14 DAYS MINIMUM`

**MarketingFooter** — sitemap, "EST. 2024 / UNDISCLOSED INDUSTRIAL UNIT", legal redacted-bar links

**Section pattern** — snarky display heading + plain subtitle underneath. Always.

---

### `/` HOME

| Block | Copy | Animation/Interaction |
|---|---|---|
| **Hero L (dossier)** | Heading: *"Mix the scents they redacted."* Subtitle: *"A formulation studio for candle makers, soap chemists, and home-fragrance operatives. Build recipes, track oils, dupe the brands, ship the batch."* | Watermark "CLASSIFIED" parallax-drifts on scroll |
| **Hero R (LiveMixerDemo)** | 3 sliders: Vanilla Bean 45% / Smoked Oak 35% / Bergamot 20%. Live "HAZARD CLASS" badge | Drag sliders → percentages auto-rebalance, hazard class ticks 2→5, "FLASHPOINT: 168°F" updates |
| **Stat strip** | `4,812 candles poured` · `1,247 operatives` · `89 brands duped` | Count-up on scroll-in |
| **What Is This (4 tiles)** | THE MIXER / CHANDLER / THE VAULT / DUPE MODE — each 1-line plain description | Each tile has 3-frame loop: mixer slider wiggles, chat bubble types, inventory row ticks, perfume-bottle→formula-card morphs |
| **CHANDLER demo** | Scripted exchange: User: *"a fall candle that doesn't smell like every other pumpkin"* → CHANDLER: thinking dots → formula card snaps in (Smoked Maple 40 / Black Pepper 25 / Apple Skin 20 / Vetiver 15) | Typewriter stream, blinking cursor, formula card scale-in |
| **Lab Tour** | 5 annotated app-screen mocks: Mixer, Vault, Batch Math, Dupe Mode, Dossiers | Horizontal scroll-snap on desktop; fade-stack on mobile; labels fade in on snap |
| **Classified Blends grid** | Reframed: 6 user-submitted candle/soap/spray recipes w/ operative names + dates | Hover: paper-shuffle lift, reveals "by @operative_name · 3 days ago" |
| **FAQ** | 6 candle-maker questions (see below) | Accordion w/ existing animation |
| **CTA** | *"Initiate your own chaos."* | Hazard-stripe button pulse |

---

### `/lab` THE LAB (Mixer deep-dive)

| Block | Copy | Animation |
|---|---|---|
| **PageHero** | *"Where formulas get classified."* Subtitle: *"The Mixer is your bench. Drag sliders, lock ratios, watch flashpoint and IFRA max load update live. Save anything that doesn't catch fire."* | Watermark drift |
| **Workflow diagram** | Brief → Mix → Test → Batch → Pour | SVG path draws on scroll-in, nodes pulse sequentially |
| **Mixer screenshot tour** | 4 annotated callouts: ratio sliders, flashpoint guard, IFRA cap badge, save-to-vault | Callouts fade-in staggered |
| **Math explainer** | *"Why your 10% load is actually 8%."* Plain math on FO/wax ratios | Number ticks animate as you scroll |
| **IFRA note** | Plain: *"We pull the latest IFRA category caps. You stay legal. Mostly."* | Stamp rotates in |
| **CTA strip** | "Open the Mixer →" | |

---

### `/chandler` CHANDLER

| Block | Copy | Animation |
|---|---|---|
| **PageHero** | *"Your AI accomplice. Reads IFRA so you don't."* Subtitle: *"CHANDLER lives in the Mixer. Describe a vibe, paste a brand, drop a season — get a candle/soap/spray formula matched to oils you actually own."* | Terminal-style heading types out on load |
| **Persona card** | Codename, clearance level, specialty: gourmand / botanical / dupe ops | Stamp wobble on hover |
| **Looped TerminalDemo** | 3 scripted exchanges cycling every 10s: 1) Vermont cider mill candle, 2) Dupe Volcano by Capri Blue, 3) Soap-safe vanilla that won't discolor | Typewriter, thinking dots, formula card scale-in, fade-out, next prompt |
| **Example briefs grid** | 8 chips: *"a linen spray for a hotel client"* · *"car freshener that isn't an insult"* · *"dupe Yankee MidSummer's Night"* · *"cold-process soap-safe lavender"* · *"man cave wax melt"* · *"hotel lobby reed diffuser"* · *"goth Christmas candle"* · *"baby-shower-but-not-saccharine"* | Hover: chip flips to show CHANDLER's 1-line take |
| **What it won't do** | *"Won't recommend oils flagged for vanillin discoloration in clear soap. Won't exceed IFRA. Won't pretend to know flashpoints it doesn't."* | Redact bars sweep in |
| **CTA** | "Recruit CHANDLER →" | |

---

### `/vault` THE VAULT (library + inventory)

| Block | Copy | Animation |
|---|---|---|
| **PageHero** | *"Your oils. Indexed. Owned."* Subtitle: *"Load your CandleScience, Nature's Garden, Brambleberry, or indie-supplier oils once. CHANDLER reads them. The Mixer pulls from them. You stop re-typing."* | |
| **CSV-drop visual** | Animated file drops into vault → rows populate one by one | Stagger fade-in, count ticks up |
| **Multi-supplier showcase** | Logo wall (CandleScience, NG, Brambleberry, Lone Star, Aromatics, "your weird Etsy guy") | Logo grid lift on hover |
| **Private notes** | Mock vault row w/ expanded notes: *"smells like cough syrup in soap, fine in candles, never again in lotion"* | Row expands on click |
| **CHANDLER reads it** | Diagram: Vault → CHANDLER → Mixer | Arrow draws on scroll |
| **CTA** | "Stock the vault →" | |

---

### `/field-manual` FIELD MANUAL (docs/blog)

| Block | Copy | Animation |
|---|---|---|
| **PageHero** | *"Declassified knowledge."* Subtitle: *"How-tos, scent briefs, IFRA primers, and post-mortems on blends that should not have shipped."* | |
| **Category strip** | SCENT BRIEFS · TECHNIQUE · COMPLIANCE · DUPES · POST-MORTEMS | Active pill slides |
| **Article grid (12 placeholders)** | Real-feeling titles: *"Why your vanilla turns brown in CP soap"* · *"Volcano by Capri Blue: a working dupe"* · *"Cure time isn't optional"* · *"IFRA Cat 12 vs Cat 5: what candle makers miss"* · *"Pumpkin without the cliché: 6 starter formulas"* · *"Reed diffuser base ratios that actually wick"* | Card lift + paper-shuffle on hover |
| **CTA** | "Submit a brief →" | |

---

### `/dossiers` CASE FILES

| Block | Copy | Animation |
|---|---|---|
| **PageHero** | *"What operatives have made."* Subtitle: *"Real recipes, real makers, real product categories. Filter by candle, soap, spray, melt, diffuser, lotion."* | |
| **Filter bar** | Family · Format · Cure status · Recency | Pills with active-state slide |
| **Masonry grid** | 24 dossier cards w/ operative codename, format tag, hazard class, recipe peek | Hover: lift + reveal recipe peek + "REQUEST FORMULA" |
| **CTA** | "File your own dossier →" | |

---

### `/pricing` CLEARANCE LEVELS

| Block | Copy | Animation |
|---|---|---|
| **PageHero** | *"Pick your clearance."* Subtitle: *"Three tiers. No seat math. Cancel anytime — we won't even ask."* | |
| **3 tier cards** | RECRUIT (free) · OPERATIVE ($12/mo) · DIRECTOR ($29/mo) — feature lines plainly stated | Cards lift; on hover, "APPROVED" stamp rotates in |
| **Feature matrix** | Mixer / CHANDLER queries / Vault size / Dupe mode / Batch math / Export / Priority support | Row highlight on hover |
| **Pricing FAQ** | 4 Qs: refunds, upgrades, team accounts, "is CHANDLER metered?" | Accordion |
| **Enterprise** | *"Running a 5-chandler operation? Open a secure channel."* | Redact bar sweeps |

---

### `/manifesto` (own page now)

Existing manifesto content, trimmed. Sticky redacted seal scroll-pinned right. Signature block at bottom: *"— Filed by the Unauthorized Extraction Unit, 2024."*

---

### `/contact` SECURE CHANNEL

| Block | Copy | Animation |
|---|---|---|
| **PageHero** | *"Open a secure channel."* | Typewriter |
| **Tabs** | WAITLIST · PRESS · PARTNERSHIPS | Tab slide |
| **Form** | Styled as dossier intake — labels in label-mono, "TRANSMISSION RECEIVED" success state | Stamp rotates in on submit |

---

### Rewritten FAQ (home page)

1. *"Does this work with my CandleScience / Nature's Garden / Brambleberry oils?"* — Yes. Load them once into the Vault.
2. *"Is CHANDLER actually useful or just AI slop?"* — Useful. It only suggests oils you own and respects IFRA caps. It will tell you when it doesn't know.
3. *"Will my formulas leak?"* — Encrypted. Yours. We can't read them, sell them, or hand them over.
4. *"Can I dupe brand-name candles?"* — Yes. Paste the name, get a working starter recipe from your inventory. Volcano, MidSummer's Night, Mahogany Teakwood — all fair game.
5. *"Soap-safe? Lotion-safe?"* — Vault tracks it per-oil. CHANDLER won't suggest a vanillin-heavy FO for clear CP soap.
6. *"What about cure time, flashpoint, max load?"* — Surfaced everywhere. The Mixer warns you before you ship something that won't cure or will flash in the pour.

---

### Build sequencing (unchanged from prior plan)

- **Build 1:** Foundation (MarketingNav/Footer/Layout/shared components) + Home + Lab + Chandler
- **Build 2:** Vault + Field Manual + Dossiers + Pricing + Manifesto + Contact

CHANDLER demo = looped scripted (option B) unless you say otherwise.

