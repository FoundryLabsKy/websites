# Vivine's Kitchen — website

Marketing website for **Vivine's Kitchen**, an authentic Caymanian home-kitchen
restaurant in Gun Bay, East End, Grand Cayman. Vivine and Ray Watler cook traditional
island food — turtle stew, curried goat, fresh fish and conch — from their own home and
serve it at picnic tables by the sea.

Live (after deploy): https://foundrylabsky.github.io/websites/vivines-kitchen-cayman/

## What it is
A fast, accessible, static four-page site:

- `index.html` — Home (hero, story teaser, blackboard highlights, reviews, hours & find-us)
- `menu.html` — The Blackboard (menu by category, framed as daily & seasonal)
- `story.html` — Our Story (Vivine & Ray, East End heritage)
- `visit.html` — Visit & Contact (hours, directions, tips, FAQ, contact form)

## Stack
- Plain **HTML, CSS and vanilla JavaScript** — no build step, no framework.
- Self-hosted **variable web fonts** (Fraunces, Caveat, Source Sans 3), latin subset,
  in `assets/fonts/` and declared in `assets/fonts.css` (preloaded for performance).
- All imagery is **authored inline SVG** (logo, icons, illustrations, location card) — no
  stock photos, no external image requests.
- `Restaurant` JSON-LD, `sitemap.xml`, `robots.txt`, Open Graph image (`og-image.png`).
- Design tokens, rationale and QA notes live in `docs/`.

## Run it locally
No dependencies. Serve the folder over HTTP (needed so the fonts and OG template load
correctly):

```bash
cd vivines-kitchen-cayman
python3 -m http.server 8000
# then open http://localhost:8000
```

Or open `index.html` directly in a browser (fonts still work; a couple of features prefer
being served over HTTP).

## Deployment
This site is one directory in the `FoundryLabsKy/websites` repo, published via GitHub
Pages. Pushing to `main` runs `.github/workflows/deploy-pages.yml`, which mirrors `main`
to the `gh-pages` branch. Use relative asset paths so the `/websites/vivines-kitchen-cayman/`
subpath keeps working.

## Owner to-do before going fully live
See `docs/PHASE-1-RESEARCH.md` §"Open items" and `docs/PHASE-2-PROFILE.md`. In short:
confirm exact opening hours, confirm the WhatsApp number, optionally wire the contact form
to a Formspree endpoint (`data-endpoint` on the form in `visit.html`), and supply a real
logo/photos if you'd like to replace the illustrations.
