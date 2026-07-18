# QA LOG — Big Tree BBQ (Phase D)

Adversarial self-review against the Phase C checklist. Tested in headless Chromium
(Playwright) at 1280 / 820 / 390px with **axe-core 4** (WCAG 2.0/2.1 A & AA),
plus scripted checks for heading order, tap-target size, alt text, and the
live "open now" logic. Contrast ratios verified with a standalone WCAG script.

## Loop iterations

### Loop 1 — first full audit
**Failures found**
1. `aria-prohibited-attr` (serious, 5 nodes) — star rating `<span>`s carried `aria-label` without a role that permits a name.
2. `definition-list` / `dlitem` (serious, 7 nodes) — the Visit `<dl>` wrapped `<dt>/<dd>` in an extra `<div>`, so they weren't valid direct group children.
3. Tap targets < 44px — desktop nav links "Menu" (36×23) and "Visit" (27×23).
4. Reveal-on-scroll left content at `opacity:0` if JS/IntersectionObserver didn't run — a robustness/no-JS risk.

**Fixes**
1. Added `role="img"` to the five review star spans (decorative stars elsewhere stay `aria-hidden`).
2. Rebuilt the `<dl>` so each `.row` directly contains `<dt>` (icon + label) and `<dd>`; updated CSS.
3. Gave `.nav-links a` `min-height:44px`; bumped `.nav-call` to 44px.
4. Gated the hidden state on `html.js` (added by the script itself) — no JS ⇒ everything visible. Reduced-motion already forces visible.

### Loop 2 — re-audit
**Failure found**
- `color-contrast` (serious, 1 node) — mobile call CTA `.m-call`: the generic `.nav-links a` rule (cream @ `opacity:.82`) overrode its white-on-ember styling → 3.9:1.

**Fix**
- `.nav-links a.m-call{opacity:1;color:#fff}` (white on ember `#cf4420` = 4.67:1); tightened its show/hide specificity.
- Lowered IntersectionObserver threshold to 0.01 so reveals trigger on the first visible pixel (guards tall sections / fast scroll).

### Loop 3 — final audit → ship
- **axe critical/serious: 0.** Moderate/minor: 0.
- Tap targets < 44px: none. Images without alt: 0. Heading order: strict H1→H2→H3 (H4 only in footer nav groups).
- "Open now" logic verified against fixed America/Cayman (UTC-5) offset — on a Saturday it correctly reads **"Closed · opens tomorrow 11am."**
- Full-page render reviewed at desktop + mobile; section rhythm, hierarchy and copy confirmed.

## BLOCKER phase scoring (must be 100%)

| Phase | Result |
| --- | --- |
| 0 — Foundation (content-first, custom tokens, grayscale-first) | 100% |
| 1 — Color (60-30-10, one accent, AA contrast verified, color never sole signal) | 100% |
| 2 — Typography (measure ≤75ch, line-height, weight set, alignment) | 100% |
| 6 — Accessibility (semantic landmarks, keyboard, 44px targets, alt, axe zero) | 100% |
| 7 — Performance (inline CSS, no raster hero, fonts preloaded + swap, explicit media dims, no CLS) | 100% |

## Non-blocker phases

| Phase | Result | Notes |
| --- | --- | --- |
| 3 — Layout & composition | 100% | Varied section layouts; asymmetric reviews grid; one centered section (Sunday) by intent; no hero+3-cards. |
| 4 — Components & interaction | 100% | Full state set on interactives; one primary/view; custom-drawn icon set; no emoji UI; motion ≤300ms, reduced-motion respected. |
| 5 — UX, conversion & states | 98% | One conversion goal (call/directions); live open-now; honest empty/placeholder states; every section ends in a next step. No forms by design (no cart needed per audit). |

## Anti-vibecoded audit — pass

- ✔ Not mistakable for generic AI output — warm smoke/ember/foliage system, slab display, custom SVG scene.
- ✔ No default shadcn/Tailwind fingerprint (no slate/zinc, no Inter, no 8px-everywhere, no 1px slate card borders).
- ✔ No AI purple/indigo, no gradient hero text.
- ✔ Not the cream+editorial-serif+sage cliché — display is a **slab** (smokehouse sign), accent is **hot ember** (not sage), greens are deep **Neem canopy**.
- ✔ No hero-plus-three-cards symmetry; layouts alternate density/tone.
- ✔ Signature authored detail: the custom tree + ember-pit + drifting-smoke SVG hero, and the dotted-leader menu board.
- ✔ Technical debris cleared: complete OG/Twitter/meta, favicon, dynamic copyright year, JSON-LD, robots + sitemap, correct heading hierarchy, no debug/lorem content.
- ✔ Copy is Big-Tree-specific (Henry & Arvin, 28 years at HSA, the Neem tree, Sunday turtle).

## Final score

**BLOCKER phases: 100% · Overall: ~99% · Anti-vibecoded audit: pass.** → **Ship.**

## Known honest gaps (flagged on-page + in README, not defects)
- Real photography, exact street address, exact prices, payment methods, verbatim testimonial text, and logo are **owner-confirm items** — shown as clearly-labelled placeholders, never faked.
