# PLAN — Big Tree BBQ website

_Phase B. Turns the audit into build inputs. One-page, mobile-first, informational-and-conversion site (no cart — the audit shows none of the comparators need one)._

---

## 1. Website recommendations

### Sitemap
Single scrolling page (best for a one-location roadside eatery — everything a hungry visitor needs on one screen), plus deep-linkable anchors:

1. **Sticky header** — wordmark left; anchor nav (Menu · The Tree · Reviews · Visit); **click-to-call** + "Get directions" far right.
2. **Hero** — the promise in one read + primary CTA (call) + hours-today + rating proof.
3. **Proof strip** — 4.8★ / ~737 reviews / "under the tree since 2015" / East End.
4. **The Menu** — The Pit, Caymanian home cooking, Sunday feast, Sides. (Prices marked "confirm.")
5. **How it works** — order at the garage → sit under the tree → we bring it out. (Distinct 3-step layout.)
6. **The story / The Tree** — Henry & Arvin, the Neem tree, retirement-hobby-to-institution.
7. **Reviews** — real TripAdvisor pull-quotes.
8. **Visit** — hours table, map pin, address, phone, payment, "worth the drive."
9. **Footer** — NAP, hours, socials, structured-data anchor, © 2026.

### Key features
- **Contact prominence:** click-to-call (`tel:`) in header, hero, and Visit; big tap targets (mobile roadside audience).
- **"Get directions"** → Google Maps deep link with the pin (drives the "hard to find / worth the drive" problem).
- **Hours-you-can-trust:** a real hours table + a JS "Open now / Closed — opens {day}" chip computed in America/Cayman time, so day-trippers don't drive out to a closed yard.
- **Sunday-feast highlight:** the marquee day gets its own callout.
- **Menu showcase** with real-photo slots (labelled placeholders until owner supplies).
- **No forms/cart.** One conversion goal: **call / get directions.** (A future enhancement note: call-ahead order line.)
- **WhatsApp/messaging:** Cayman is phone-and-WhatsApp heavy — include a WhatsApp click-to-chat **only if the owner confirms a business number** (flagged, not assumed).

### SEO priorities (fixes from A2)
1. Publish **canonical NAP**: "Big Tree BBQ, Austin Conolly Dr, Gun Bay, East End, Grand Cayman, KY" + `+1 345-938-8314` — identically in visible text, `LocalBusiness`/`Restaurant` structured data, and footer. (Address pending owner confirmation — placeholder-flagged in markup.)
2. **`Restaurant` + `menu` + `openingHoursSpecification`** JSON-LD with the confirmed hours and `servesCuisine` (Caribbean/Barbecue/Caymanian).
3. Standardise locality to **"Gun Bay, East End"** everywhere; retire "Gun Bay vs East End" ambiguity.
4. Own the phrase queries the audit surfaced: *"Big Tree BBQ East End," "best BBQ Grand Cayman," "Caymanian food East End," "Sunday turtle stew Cayman."*
5. Point the two Facebook pages + Google Business Profile at the new canonical site; consolidate the duplicate FB page.
6. Complete meta/OG/Twitter, favicon, `robots.txt`, `sitemap.xml`.

---

## 2. Copy plan (real, specific, benefit-led — no filler)

- **Eyebrow:** `GUN BAY · EAST END · GRAND CAYMAN`
- **Hero headline:** **"Slow-smoked under the big tree since 2015."**
- **Hero sub:** "Henry and Arvin Harris fire up the pit in their East End front yard — beef ribs, jerk-smoked chicken and real Caymanian home cooking, served in the shade with the ocean breeze. Worth the drive from anywhere on the island."
- **Primary CTA:** "Call to order — 345-938-8314" · **Secondary:** "Get directions"
- **Proof line:** "4.8★ on TripAdvisor · ~737 reviews · open Tue–Fri & Sun, 11–6."
- **Menu intro:** "Every plate comes off the charcoal and out from under the Neem tree. Mains come with your pick of real Caymanian sides."
- **How it works:** "Pull up at the yard. · Order at the garage. · Grab a seat under the tree — we'll bring it out."
- **Story headline:** "One family. One tree. One pit."
- **Story body:** draws on the confirmed A1 facts — 28 years at the Health Services Authority, retired at 60, a hobby that became an East End institution; father and son on the pit.
- **Sunday callout:** "Sundays are special: stewed turtle, conch and the seafood feast — the labour-of-love Caymanian dishes, only while they last."
- **Visit CTA (end, no dead end):** "Make the drive. Bring cash and an appetite. Call ahead on busy Sundays."

_Every line is checked against A1/A4/A5. No "innovative solutions" filler. Turtle described factually per A7._

---

## 3. Testimonial map (real TripAdvisor review titles — verbatim bodies to be owner-approved per A4)

| Placement | Quote (source) |
| --- | --- |
| Proof strip micro-quote | *"Best BBQ on Cayman."* — TripAdvisor |
| Reviews card 1 | *"An East End must."* — TripAdvisor |
| Reviews card 2 | *"Cayman BBQ perfection."* — TripAdvisor |
| Reviews card 3 | *"Big Tree, little gem."* — TripAdvisor |
| Reviews card 4 | *"Great food under the Big Tree."* — TripAdvisor |
| Near Visit CTA | *"Go to Big Tree BBQ if on Grand Cayman."* — TripAdvisor |

Marked on-page as sourced from TripAdvisor; a visible note in the repo README lists these as **client-to-approve** (verbatim text + reviewer names).

---

## 4. Design tokens (derived from A5 — the tree, the embers, the smoke, the cornbread)

**Rationale:** deep Neem-canopy **green** = the "Big Tree"; a single glowing **ember** red-orange = charcoal + BBQ sauce (CTAs only); warm **cornbread cream** and **smoke charcoal** neutrals (never pure black/gray). Deliberately **not** the cream+editorial-serif+sage cliché — display type is a **smokehouse slab serif**, accent is hot ember not sage, neutrals are warm-brown-tinted.

### Color — replace defaults, don't extend
Primary — **Neem green** (full scale):
`50 #eef4ef · 100 #d6e5da · 200 #adcab5 · 300 #7ea98b · 400 #548266 · 500 #356449 · 600 #285039 · 700 #21402f · 800 #1b3326 · 900 #142619`

- **Secondary:** warm **ember gold** `#b8792a` (deep, AA-safe on cream) / `#e8a13c` (on dark) — **reserved for the star rating** only.
- **Accent (EXACTLY ONE saturated, CTAs only):** ember `#cf4420`; hover/active `#b23817`. White text on it = 4.67:1 (AA). ✓
- **Neutrals (warm-tinted):** cream `#f7f1e6`, cream-2 `#efe6d5`, charcoal `#1a1613` (darkest, warm ≈ #111827 role), charcoal-2 `#241e19`, body ink `#2b2521`, muted `#5f564b`, line `rgba(26,22,19,.12)`.
- **Semantic:** success `#2f7d4f`, warning `#c9860f`, error `#b3341c`, info `#2f6d7d`.
- **60-30-10:** ~60% cream/charcoal neutral, ~30% green, ~10% ember (CTAs + key moments only).

_All pairs verified with a contrast script — body 13.45:1, muted 6.4:1, green-on-cream 8.13:1, white-on-ember-button 4.67:1, cream-on-charcoal 15.3:1. Ember never used as body text (only ≥24px / bold or as button fill)._

### Type — 2 families, distinctive, brand-justified
- **Display (headings, smokehouse signage):** **Zilla Slab** (600/700) — a slab serif that reads like a painted roadside/butcher sign. _Not_ Inter/Roboto/Fraunces.
- **Body & UI:** **Hanken Grotesk** (400/500/600/700) — warm humanist grotesque, highly legible small.
- Scale: 1rem base, ratio **1.25** → `0.8 / 1 / 1.25 / 1.563 / 1.953 / 2.441` + `clamp()` display sizes. Body line-height 1.6; headings 1.05–1.15. Body measure 60–70ch.

### Spacing / radius / elevation
- **Spacing:** 8px base; named scale `4 8 12 16 24 32 48 64 96`. No arbitrary values.
- **Radius:** deliberate, slightly rustic-friendly — `--r-sm 4px · --r-md 8px · --r-lg 14px · --r-pill 999px` (tags/chips). Not 8px-on-everything.
- **Elevation:** warm smoke-tinted, layered from one top light source —
  `--e1: 0 1px 2px rgba(26,17,10,.12)`
  `--e2: 0 2px 4px rgba(26,17,10,.10), 0 6px 14px rgba(26,17,10,.10)`
  `--e3: 0 4px 8px rgba(26,17,10,.12), 0 16px 32px rgba(26,17,10,.14)`
  `--e-cta: 0 1px 2px rgba(120,30,8,.5), 0 10px 24px rgba(207,68,32,.28)`.
- **Grayscale-first:** hierarchy designed in tone; ember added last, only on CTAs.

---

## GATE B — status
Sitemap ✓, real copy outline ✓, testimonial map ✓, SEO fix-list ✓, first token set ✓ (contrast-verified). **→ Proceed to Phase C build.**
