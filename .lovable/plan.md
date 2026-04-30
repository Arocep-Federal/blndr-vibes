## Goal

Rebuild `/vault` as `/features` (page name **Features**) — keep all existing content, rename Vault → Owned Oils and Vault Hygiene → Oil Engine, drop hardcoded supplier counts, rewrite hero as a snarky factual list, and add three new animated showcase sections inspired by the screenshots.

## Routing & file moves

- New route `/features` → `src/pages/marketing/Features.tsx` (renamed from `Vault.tsx`).
- Old `/vault` redirects to `/features` via `<Navigate to="/features" replace />`.
- `MarketingNav.tsx` + `MarketingFooter.tsx`: link label **Features** → `/features`.
- Repoint any other in-page `Link to="/vault"` references.

## Renames (this page only)

- "The Vault" / "VAULT" watermark → **Owned Oils** / **OWNED OILS**
- "Vault Hygiene" → **Oil Engine**; "VAULT HYGIENE QUEUE" → **OIL ENGINE QUEUE**
- "HYGIENE / SWAPS" section code → **ENGINE / SWAPS**
- Remove the `<br>` in "Discontinued oil / does not get / the last word" → flow as one cleaner heading.
- Hero section code: `SECTION 03 / FEATURES`.

## Hero (rewrite — features list, not a pitch)

- Code: `SECTION 03 / FEATURES`
- Heading: **"Every System.<br/>One Surface."**
- Subtitle: **"Features. Owned oils. The oil engine. Restock alerts. Per-size store inventory. Recipe note search. That's the file."**
- Right-side card: keep the existing OIL COST CHECK PaperCard.

## Supplier count handling

- Stats strip: replace the `6 SUPPLIER CATALOGS` tile with a label-only tile **`GROWING` / SUPPLIER NETWORK**. Keep `4,444+ OILS INDEXED` and `3 SOURCE PDF TYPES`.
- Suppliers section header → `CATALOG / GROWING NETWORK`, panel header → **INDEXED SUPPLIERS — AND COUNTING**, footer line *"New catalogs added regularly."*

## Keep (existing content, with renames)

1. Hero with OIL COST CHECK card
2. Catalog stats strip (modified per above)
3. "Know what you own. Know what it costs." — 4 owned-oils feature cards (label VAULT → OWNED OILS)
4. Indexed suppliers panel (reframed)
5. Oil Engine Queue + Engine/Swaps copy block (renamed)
6. CTA strip — heading **"Open the<br/><span class='text-hazard'>Features.</span>"**

## New sections

### A. Restock Alerts → Batch Planner

After Oil Engine Queue.

- Code: **ALERTS / GO-TIME**
- Heading: "Low stock isn't a problem. It's a batch waiting to happen."
- PaperCard "RESTOCK ALERTS" panel, 3 rows: recipe name, oz needed, `10 oz left` hazard badge, hazard-yellow `[+ RESTOCK]` button.
- Each RESTOCK button is a `<Link to="/app/batch-planner?recipe=<id>">` (link only).
- Copy: "One tap from alert to mixed batch. The planner opens pre-loaded with the recipe, the wax math, and your owned-oil counts."

### B. Store Inventory (Per-Size Stock)

After Restock Alerts.

- Code: **STOCK / PER SIZE**
- Heading: "Inventory that knows what size you pour."
- PaperCard mock of the STORE INVENTORY twirl-down: recipe header (BEWITCHED) with sizes (3oz / 4oz / 7oz / 14oz / 48oz), unit counts, and `LOW (< N)` hazard badges where applicable.
- Animation: opens on scroll via `FadeInOnScroll` + CSS height transition.
- Copy: "Track finished-goods stock per pour size, not just oil. Square + Shopify sync keeps counts honest; low thresholds fire restock alerts automatically."

### C. Recipe Note Search (animated, looping)

After Store Inventory, before CTA strip.

- Code: **RECALL / NOTES**
- Heading: "A customer asks for violet. You answer in one search."
- Layout: single PaperCard styled like the screenshot — "MY RECIPES" header with a faux search input.

**Animation sequence (auto-loops; pauses on hover / off-screen; respects `prefers-reduced-motion`):**

```text
state 0  →  card shows 3 collapsed rows of the user's actual library:
            BEWITCHED, EDGEWOOD MANOR, OLIVE LEAF & FIG
            (notes twirled up, search input empty)
state 1  →  typewriter types "violet" into the search input
            (one char ~120ms, blinking caret)
state 1.5→  list smoothly swaps: the 3 non-matching rows fade/slide out
            and are replaced by the 3 matching rows —
            BLACK TIE, BLACK VIOLET & SAFFRON, DESERT BLOOM
            (still collapsed)
state 2  →  faux pointer ▶ glides to the first result and "clicks"
            (scale pulse on the row)
state 3  →  rows expand: TOP / MID / BASE chip rows fade-in staggered;
            the VIOLET chip in each gets a hazard pulse
            (bg-hazard/15 border-hazard text-hazard)
state 4  →  hold ~3s, collapse rows, clear search,
            swap back to the original 3 rows → loop
```

- Implement with a tiny local state machine (`phase` 0–4) inside a `RecipeNoteSearchDemo` component co-located in `Features.tsx`. `useEffect` interval drives phases; classNames drive the visuals using existing tokens (`animate-fade-in`, height transition, one-shot `animate-pulse` on the matched chip).
- Pointer cursor: small absolutely-positioned SVG arrow, animated via `translate` between phases.
- Pause when off-screen (IntersectionObserver) or on hover; skip animation entirely when `prefers-reduced-motion: reduce`.
- Copy: "Search any note across every saved recipe. Pull instant matches when a customer wants 'something with violet' or 'no patchouli' — turn a vague request into a sale."

## Files touched

- `src/pages/marketing/Features.tsx` (new; replaces `Vault.tsx`)
- `src/pages/marketing/Vault.tsx` (deleted)
- `src/App.tsx` — add `/features` route, redirect `/vault` → `/features`
- `src/components/marketing/MarketingNav.tsx` — label + path update
- `src/components/marketing/MarketingFooter.tsx` — same
- Any other `to="/vault"` references → `/features`

## Visual / technical notes

- All sections compose from existing primitives (`PaperCard`, `FadeInOnScroll`, `AnimatedStat`, label-mono, hazard tokens). No new global components, no new deps, no new colors.
- Restock buttons: `bg-hazard text-hazard-foreground`; "10 oz left" badges: `border border-hazard text-hazard label-mono`.
- Note chips reuse the bordered rectangle pattern; matched note chip uses `bg-hazard/15 border-hazard text-hazard` plus a one-shot pulse.
- Recipe Note Search animation lives entirely inside its section component — keeps the page self-contained.

## Out of scope

- No actual `/app/batch-planner?recipe=…` handler (link-only marketing demo).
- No nav/IA changes beyond Vault → Features rename.
- No business-logic changes; purely a marketing-page rebuild.
