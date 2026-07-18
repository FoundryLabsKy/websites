# Phase 2 — Company Profile: Rankin's Jerk Pit

Source of truth for the website. Distilled from `research.md` (2026-07-18).

## 1. Company story

Rankin's Jerk Pit is a roadside jerk restaurant on Shamrock Road, just before you enter
Bodden Town, Grand Cayman. Miss Rankin runs it the way her mother taught her: chicken and
pork over real charcoal in drum grills, and old Caymanian dishes — turtle stew, oxtail,
curry goat — cooked slow in the kitchen. The family's own butcher shop and farm sit next
door and supply the meat and produce. You order at the window, take a picnic table in the
garden, and eat while chickens patrol the grass and the life-sized cow and pig statues
watch the road. Locals line up at lunch; when the day's jerk is gone, it's gone.

## 2. Products / services (site navigation order)

1. **From the pit** — jerk chicken, jerk pork (charcoal drum grill, house jerk sauce)
2. **Cayman kitchen** — turtle stew, lobster curry, oxtail, stew beef, curry goat, soups
3. **Sides** — rice and beans, festival, hamburgers
4. **Breakfast** — served from opening (details TBC with owner)
5. **Saturday** — Biggie's BBQ menu, Saturdays only
6. **Next door** — Rankin's butcher & farm (fresh meat and produce)

No prices published; site ships without them (owner to supply later).

## 3. Testimonials (5, real sources)

| Quote (condensed from real review) | Source |
| --- | --- |
| "Probably the best jerk chicken I've ever eaten — and I had it several times that trip." | Tripadvisor — "Best jerk chicken on Grand Cayman" |
| "Perfectly cooked on a charcoal grill, with a side of wickedly-hot jerk sauce." | Tripadvisor — "'Cayman Style' JERK!" |
| "Very authentic, delicious food — and the staff are so friendly and accommodating." | Tripadvisor — "Island Soul Food" |
| "Follow the line of locals. One large meal is enough for two, and it's one of the cheapest meals you'll have in Cayman." | Tripadvisor — "Follow The Line of Locals" |
| "We come back twice a year for their local Caribbean food — sit-down or take-out." | Tripadvisor — "Best Caribbean (Jamaican food)" |

Overall: 4.2/5 on Tripadvisor.

## 4a. Imagery (updated)

Site photography is CC-licensed stock from Wikimedia Commons, chosen for authenticity:
real charcoal-basket jerk, Jamaican dishes, and two genuinely local shots (the Historic
Bodden Town sign and the ocean view from Bodden Town). Attribution appears in each
page footer as the licenses require. These are placeholders-with-dignity: swap in the
owner's real photos of the yard, drums, cow & pig, and plates when available, and the
credit lines for replaced photos can be removed.

## 4. Brand identity notes & palette

No existing logo; the brand is the pit itself. Palette drawn from the premises (see 3A in
this doc): char/smoke browns, scotch-bonnet red, garden green, festival gold. Hex tokens
live in the site CSS (`site.css`); flagged for owner confirmation.

## 5. Competitor summary & how this site differs

Chicken! Chicken! owns the polished/franchise end with online ordering; Peppers is a
generic tourist grill; Red Bay Jerk and Sam's — the authentic rivals — have no web
presence at all. This site differs by being the *only* authentic roadside jerk spot with
a real web presence, and by refusing the polished-restaurant template: it looks like the
place — hand-painted, charcoal-fired, garden-green — and optimizes for the two real jobs:
"are they open / is the jerk still on?" (hours + click-to-call) and "how do I get there?"
(directions). No fake online ordering, no reservation theater.

## 6. Sitemap

- **Home** (`index.html`) — hero, story, menu highlights, reviews, hours/visit/contact
- **Menu** (`menu.html`) — full menu by category, breakfast + Saturday BBQ callouts
- Contact is a section of Home (roadside spot; a separate page would be padding).

## 7. SEO fixes needed (for owner; noted on site where possible)

1. Confirm street number (3032 vs 3023 Shamrock Rd) and standardize everywhere.
2. Standardize one trade name ("Rankin's Jerk Pit") across Facebook, Google, directories.
3. Merge/claim the duplicate Facebook page (Rankin's Jerk Center, 63 likes).
4. Claim Google Business Profile; fix hours; add photos.
5. Reconcile hours across CaymanVisitor vs Cayman Good Taste listings.
6. Point directory listings at the new site URL once live.
7. Publish an email address (none exists publicly).

## 8. Key features the site needs

- Click-to-call (+1 345-947-3155) — primary CTA everywhere
- "Open now"-style hours block with closed-Sunday and sell-out warning ("come early")
- Directions link (Google Maps, Shamrock Road plus code)
- Full menu with heat indicators; Saturday BBQ + breakfast callouts
- Real testimonials with sources
- Facebook link (only live social channel)
- Structured data (LocalBusiness/Restaurant JSON-LD) with NAP matching this profile
- No contact form pretending to be monitored — phone-first, matching how the business runs
  (a mailto can be added once the owner supplies an email)

---

# Phase 3A — Brand personality (written before any code)

**Three adjectives:** smoky, generous, unhurried.

**Dominant axis:** **Loud** (of Loud/Quiet). Roadside-sign loud — big painted letters you
can read from a moving car, not neon-web loud.

**Two sites this brand should feel nothing like:**
1. *Chicken! Chicken!* (and franchise fast-casual sites generally) — avoiding the clean
   white grid, glossy product photography, ordering-app energy.
2. *Resort/tourist grill sites like Peppers'* — avoiding script fonts, sunset stock
   photos, "island elegance" clichés.
   (Also deliberately unlike our own last two builds: Foundry Labs' cream+orange
   editorial and Rodney's dark teal/mint — different hue families, faces, and moves.)

**Signature move: the hand-painted plank.** Every section is labeled by a slightly
rotated, painted wooden-sign chip (like the plywood signs nailed up along Shamrock Road).
It appears on every major page — section labels, the menu category headers, the footer
sign-off — and doubles as the wayfinding system.

**Palette derivation (one sentence):** char-brown smoke from the drum grills, scotch-
bonnet red for the sauce-hot accent, deep garden green from Miss Rankin's yard and the
painted Caribbean roadside shack, festival-gold for warmth — all colors you can point to
while standing in the yard.

**Voice card.**
Would say: "Cooked slow over real coals." / "When the jerk's gone, it's gone — come
early." / "Plate food, not plated food."
Would never say: "an elevated island dining experience" / "book your culinary journey" /
"innovative fusion cuisine".

**Type:** Alfa Slab One (display — heavy slab, painted-sign letterforms) + Archivo
(body — sturdy grotesque). Ratio 1.4 (loud), 16px base. Radius 2–6px (hand-cut, nothing
pill). Justified against defaults: no Inter/Geist/Roboto, no purple gradients, no
cream+serif+sage.

**Differentiation test vs last two builds:** Foundry Labs = cream/orange/terracotta,
serif editorial, light. Rodney's = near-black blue, mint #17e5bd accent, Anton +
Instrument Serif. Rankin's = green/char/scotch-bonnet red, Alfa Slab One + Archivo,
painted-plank signature. No shared accent family, face, or move. Pass.
