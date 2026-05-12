# Supabase Confirm Signup Email — Dossier Edition

Generate a single self-contained HTML file you can paste into **Supabase → Authentication → Email Templates → Confirm signup**, styled to match the BLNDR classified-dossier aesthetic.

## Deliverable

One file written to `/mnt/documents/blndr-confirm-signup.html`, surfaced as a `<presentation-artifact>` so you can download it.

## Design

- Cream paper background (`#F4ECDC`), ink-black borders (`#1F1B17`), hazard-rust accent (`#BF4220`)
- Monospace body (Courier/JetBrains Mono fallback stack) + heavy display headline
- Faux "stamp" header: `▲ CLEARANCE PENDING — FILE_ID: {{ .Email }}`
- Big display H1: **CONFIRM YOUR<br>TRANSMISSION.**
- Snarky typewriter copy ("Someone — allegedly you — requested access to the lab. Verify before we shut the door.")
- Solid black button → `{{ .ConfirmationURL }}` labeled `▸ VERIFY & ENTER`
- Mono fine print: 24-hour expiry, "ignore if you didn't request this", footer `// END TRANSMISSION`
- All styles inline (Supabase strips `<style>` inconsistently across clients); table-based layout for Outlook; max-width 560px; preheader text hidden
- Uses Supabase tokens: `{{ .ConfirmationURL }}`, `{{ .Email }}`, `{{ .SiteURL }}`

## Technical notes

- Pure HTML, no external CSS or JS, no remote images (avoids Gmail clipping + image-blocking)
- Web-safe font stack: `'Courier New', Courier, monospace` for body; `Impact, 'Arial Black', sans-serif` for display headline so it renders without webfonts
- Hazard accent and tape strip done with inline `background-color` + border tricks
- Dark-mode meta hint included; colors chosen to survive Gmail/Outlook dark inversion
- Subject line suggestion provided in a comment at top of file

## Out of scope

- No Lovable Cloud `auth-email-hook` wiring
- No project file changes
- No other auth templates (recovery, magic link, invite) — can add later if you want
