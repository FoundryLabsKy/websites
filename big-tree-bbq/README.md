# Big Tree BBQ — website

Marketing site for **Big Tree BBQ**, the family-run open-air barbecue slow-smoked
under the big tree in Gun Bay, East End, Grand Cayman. Built for Foundry Labs and
hosted on GitHub Pages.

**Live:** https://foundrylabsky.github.io/websites/big-tree-bbq/

## What it is

A single-page, mobile-first informational + conversion site. One clear goal:
get a hungry visitor to **call to order** or **get directions**. No cart — the
research showed none of the local comparators need one.

## Stack

- Static HTML + CSS + a small vanilla-JS enhancement (`script.js`). No build step,
  no framework, no dependencies.
- Custom design tokens (no Tailwind/shadcn defaults). Fonts: Zilla Slab + Hanken
  Grotesk via Google Fonts (preloaded, `font-display:swap`, with system fallbacks).
- Real photography (`photos/`): CC BY 2.0 licensed barbecue photos with full
  attribution in `PHOTO-CREDITS.md` — clearly labelled on-site as representative
  stand-ins until the family's own photos arrive. No AI-generated imagery.
  The favicon/logo mark and UI icons remain hand-authored SVG.
- `Restaurant` JSON-LD, full OG/Twitter meta, `robots.txt`, `sitemap.xml`.
- Accessibility verified with axe-core (0 critical/serious), keyboard-operable,
  44px targets, WCAG AA contrast.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole site (inline CSS + design tokens) |
| `script.js` | Live "open now" (Cayman time), mobile nav, star render, scroll reveal |
| `favicon.svg` · `og-image.png` | Logo mark & photographic social card |
| `photos/` · `PHOTO-CREDITS.md` | CC BY 2.0 photography + attribution |
| `robots.txt` · `sitemap.xml` | Crawl/SEO |
| `AUDIT-big-tree-bbq.md` | Phase A — sourced research audit |
| `PLAN-big-tree-bbq.md` | Phase B — sitemap, copy, tokens, SEO fixes |
| `QA-LOG.md` | Phase D — QA loop iterations & final score |

## Run locally

It's static — open `index.html`, or serve the folder:

```bash
cd big-tree-bbq
python3 -m http.server 8080   # then visit http://localhost:8080
```

## ⚠️ Client to-do — confirm before public launch (nothing here is invented)

Everything below is shown on-site as a **clearly-labelled placeholder** or is drawn
from public listings pending confirmation. None of it is fabricated.

1. **Logo / wordmark** and official brand colours (current wordmark & palette are our proposal).
2. **Real photography** — the tree, the pit, plated food, Henry & Arvin. The site currently uses licensed CC BY 2.0 barbecue photos (credited in `PHOTO-CREDITS.md`, labelled representative on-site); the family's own shots should replace them.
3. **Exact street address** — confirm "Austin Conolly Drive, Gun Bay" (a "503 Austin Conolly Dr" appears in aggregators) before it goes in the map pin + structured data.
4. **Owner name spelling** — Arvin vs Arvid.
5. **Exact founding year** (we show "since 2015" from press coverage).
6. **Current menu + prices** — prices show as "Market"; confirm items, Sunday-only specials, and seasonal lobster.
7. **Payment methods** — cash only? cards? USD? (shown as "cash safest, card/USD to confirm").
8. **Canonical hours** — confirm Tue–Fri & Sun 11:00–18:00 (closed Mon & Sat). Drives the live open/closed badge in `script.js`.
9. **Verbatim testimonials + reviewer names** — on-page quotes are real TripAdvisor review *titles*; approve full text/names before swapping in.
10. **Contact email** and confirmation of the official **Facebook** page (a duplicate ID exists — consolidate).

## Sourcing

All facts are cited in `AUDIT-big-tree-bbq.md`. Rating (4.8★, ~737 reviews) and
review titles are from TripAdvisor; founding story from Cayman Compass (2015).
