# Phase 3E — Differentiation Audit & Phase 4 — Test Report

**Date:** 2026-07-18 · Tooling: headless Chromium (Playwright) + axe-core 4.10

## Phase 3E — Final differentiation audit
- **Could this be mistaken for a generic AI-built site?** No. The chalkboard/slate
  signature, hand-lettered Caveat accents, warm sea-teal + sand + mango palette, authored
  SVG illustrations, and section-by-section narrative are specific to a Caymanian
  home-kitchen. No indigo/violet, no glassmorphism, no default sans, no centered-hero +
  3-identical-cards.
- **Logo-swap test:** Fails in the right way — swap the logo and the copy ("we cook till
  it's gone", "turtle stew", "Gun Bay, East End"), the blackboard, and the island map card
  still make it unmistakably Vivine's. Not generic.
- **Signature present on every major page?** Yes — the chalk underline draws in under the
  main heading on Home, Menu, Story and Visit, and the slate "board" surface appears on
  Home + Menu; the chalk voice recurs in eyebrows/labels throughout. Useful, not gimmicky
  (it's literally how the business communicates its menu).
- **Voice check:** Copy matches the voice card ("Come hungry — we cook till it's gone",
  "Whatever came in fresh today, that's what's good today"); none of the banned phrases.

## Phase 4 — Test results

### 1. Functional
- Internal link inventory across all pages: **0 broken links**.
- Mobile nav: collapsed by default, opens on tap, `aria-expanded` toggles, icon swaps.
- FAQ accordion: opens/closes correctly (native `<details>`).
- Contact form: invalid submit blocks and marks 3 fields + shows status; valid submit
  shows success and builds the correct `wa.me` WhatsApp deep link (verified URL). Wired to
  optionally POST to a Formspree endpoint if the owner sets `data-endpoint`.
- All `target="_blank"` links carry `rel="noopener"`.

### 2. Cross-device
- Verified at 390 (mobile), 820 (tablet), 1280 (desktop). Hero reflows (chalkboard leads
  on mobile), grids collapse to single column, nav becomes a drawer.
- Touch targets: primary buttons, nav toggle, utility links (mobile), footer social, and
  FAQ summaries all ≥44px. Remaining sub-44 items are inline text links (breadcrumbs,
  in-sentence links) — exempt under WCAG 2.5.8.

### 3. Cross-browser
- Only Chromium is available in this build environment, so Chromium was exercised
  directly. Code was reviewed for cross-browser-safe features only: CSS grid/flex/gap,
  custom properties, `clamp()`, `aspect-ratio`, `:focus-visible`, `<details>`, variable
  woff2, inline SVG `<use href>` (not xlink), `IntersectionObserver` (with a no-JS/reduced
  -motion fallback). Added `-webkit-backdrop-filter` for Safari. **Recommend the owner do a
  final manual spot-check in Safari and Firefox after deploy.**

### 4. Accessibility (blocker)
- axe-core (wcag2a/2aa, wcag21a/21aa, best-practice) on all 4 pages: **0 violations,
  0 critical, 0 serious.** Semantic landmarks, correct heading order, real buttons,
  visible focus, labelled form fields, alt/role on meaningful SVG, skip link, keyboard
  operable.

### 5. Performance (blocker)
- CLS: 0.000–0.003 (target < 0.1). ✓
- FCP: ~90–250 ms; page weight is small; fonts self-hosted, subset (latin), preloaded;
  no render-blocking third-party requests. LCP comfortably < 2.5 s on GitHub Pages. ✓
- INP: interactions are trivial vanilla JS well under 200 ms. ✓
- (Full field Lighthouse/PSI requires a public URL — run once live to capture lab scores.)

### 6. Content
- No lorem/placeholder copy. Copyright year set dynamically (2026 fallback). No `<img>` —
  all imagery is authored inline SVG, so no broken images. OG image (1200×630) rendered.

### 7. SEO
- Every page: unique `<title>`, meta description, canonical, Open Graph + Twitter tags.
  `sitemap.xml`, `robots.txt`, and `Restaurant` JSON-LD present. NAP consistent across all
  pages and structured data: **Vivine's Kitchen · 524 Austin Conolly Drive, Gun Bay, East
  End KY1-1801, Grand Cayman · +1 345-947-7435.**

### 8. Screenshot / template test
- Full-page screenshots (Home, Menu, Visit) confirm a distinctive, branded design — not a
  generic template.

## Known placeholders shipped (flagged, not fabricated)
- **Opening hours** carry a visible "to confirm" flag + "call ahead" messaging (sources
  conflicted).
- **WhatsApp** number reuses the verified phone number with a "confirm no." flag.
- **Contact form** defaults to WhatsApp hand-off; owner can set a Formspree `data-endpoint`
  for email.
- Testimonials attributed honestly to "Tripadvisor reviewer" (public handles are partial).
