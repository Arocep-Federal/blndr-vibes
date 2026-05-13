# BLNDR Brand Guidelines — Agent Handoff

Produce a single self-contained markdown file at `/mnt/documents/blndr-brand-guidelines.md` that another AI agent can ingest to produce on-brand output (emails, copy, UI, marketing) without access to this codebase.

## Source of truth

Extracted from the live design system:
- `src/index.css` — HSL tokens, paper/ink/hazard palette, component classes (`.paper-card`, `.tape`, `.redact`, `.label-mono`, `.display`, `.typewriter`, `.scribble`, `.perf-divide`)
- `tailwind.config.ts` — font families, color scales
- `src/components/Footer.tsx`, `marketing/PageHero.tsx`, `marketing/CTAStrip.tsx`, `app/StampBadge.tsx`, `app/DossierCard.tsx` — voice, layout, motif usage
- The four auth email templates already shipped — confirmed working pattern

## Sections in the .md

1. **Brand essence** — name (BLNDR), tagline ("Unauthorized Extraction Unit"), one-paragraph positioning, the "classified dossier / rogue lab" concept
2. **Voice & tone** — snarky, typewriter-terse, second-person, lab/intel jargon ("transmission", "clearance", "file", "channel", "agent"). Do/don't examples. Subject line patterns (`▲ ALL CAPS — lowercase tail`)
3. **Lexicon** — recurring tokens: `▲`, `▸`, `//`, `FILE_ID`, `STATUS //`, `END TRANSMISSION`, `▸ DOSSIER PENDING`
4. **Color system** — HSL + hex equivalents:
   - Paper `#F4ECDC` / cream bg
   - Paper deep `#E8DCC0`
   - Ink `#1F1B17` (borders/text)
   - Ink soft / ink mute
   - Hazard rust `#BF4220` (single accent — use sparingly)
   - Tape warm beige
   - Selection + dark-mode notes
5. **Typography** — display: Archivo Black / Oswald / Impact fallback; body: IBM Plex Mono / JetBrains Mono / Courier New fallback. Sizes, leading, tracking, the `text-shadow` trick on `.display`. Email-safe stacks.
6. **Motifs** — paper card with deckled shadow, tape strip, redaction blocks (ink + hazard variants), stamp badges, perforated dividers, hazard stripe marquee, watermark display text
7. **Layout principles** — max-width 560 for email / 1400 container for web, generous whitespace, asymmetric grids, label-mono meta strips above headlines
8. **Component recipes (HTML/CSS snippets)** — inline-styled email-safe versions of: stamp header, hazard meta strip, FROM/TO swap card, solid-black CTA button, fallback URL block, footer. Copy-pasteable.
9. **Email template conventions** — table-based layout, max-width 560, inline styles only, no remote images, preheader hidden, Supabase token list (`{{ .ConfirmationURL }}`, `{{ .Email }}`, `{{ .NewEmail }}`, `{{ .SiteURL }}`), subject-line formula
10. **Don'ts** — no emoji (except ▲▸ glyphs), no rounded corners >2px, no gradients beyond the paper texture, no second accent color, no sans-serif body, no friendly corporate copy

## Format

Pure markdown, no frontmatter. Code fences for snippets. Tables for color/type tokens. ~400–600 lines, dense but scannable. Self-contained — another agent should need nothing else.

## Out of scope

- Logo files / image assets (none exist as standalone files)
- Project source edits
- Translating to other formats (Figma, JSON design tokens) — markdown only
