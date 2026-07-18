# Phase 2 — Company Profile (Source of Truth)

**Business:** Vivine's Kitchen · East End, Grand Cayman, Cayman Islands
**Prepared:** 2026-07-18 · Built from `PHASE-1-RESEARCH.md`

This is the canonical reference the website is built from. Anything marked
**[CONFIRM]** is a placeholder awaiting owner confirmation and must not be presented on
the live site as settled fact without a visible "call to confirm" affordance.

---

## 1. Company story & background

Vivine's Kitchen is authentic Caymanian home cooking, served from the Watler family's own
waterfront home at the far east tip of Grand Cayman. Vivine Watler, a native Caymanian,
cooks the way the island has always eaten — turtle stew, curried goat, fresh-caught
snapper, cassava heavy cake — from her own kitchen, and brings it out to picnic tables in
a sea-grape courtyard above the surf in Gun Bay, East End.

There is no printed menu. What's cooking is chalked on a blackboard each day and depends
on what came in fresh and what's in season. It's cash only, there's no bar (just fresh
tamarind, mango and sorrel juice), and when the day's pots are empty, the kitchen's done.
For years it's been the answer to "where do I get *real* Caymanian food?" — a genuine
local institution and one of the last places you can still order traditional turtle stew.

**Positioning line:** *A true taste of the Cayman Islands — cooked at home, served by the
sea in East End.*

## 2. Products / services — organized for navigation

Presented as a "what's on the blackboard" menu, clearly framed as *rotating daily &
seasonal*, not a fixed list.

- **From the Sea** — fresh snapper & fried fish, cracked & stewed conch, lobster
  (seasonal), whelks
- **Caymanian Classics** — turtle stew (signature, seasonal), curried goat, curry
  chicken, chicken stew, oxtail
- **From the Grill** — BBQ chicken, BBQ ribs
- **Sides** — cassava, sweet-potato heavy cake, rice & beans, plantain, potato salad
- **Something Sweet** — pineapple upside-down cake, rum cake, carrot cake, cassava cake
- **Fresh Juices** — tamarind, mango, sorrel (no alcohol served)

Practical, always-visible facts: **Cash only · Order at the window · Call ahead — we cook
till it's gone.**

## 3. Testimonials (real, sourced — 5 for the site)

Use with an on-page note that reviews are from Tripadvisor/travel press. Names shown as
provided publicly (many Tripadvisor handles are first-name/initial only); where a full
name isn't public, attribute honestly (e.g. "Tripadvisor reviewer").

1. **"One of the most authentic and tastiest meals we've had on this side of the island."**
   — Tripadvisor reviewer
2. **"A local gem that is an extension of Vivine's home. The food is homemade and delicious."**
   — Tripadvisor reviewer
3. **"It's like eating at Grandma's!"** — Tripadvisor reviewer
4. **"Popular for excellent Cayman-style food."** — Tripadvisor reviewer
5. **"Very tasty, and excellent prices."** — Tripadvisor reviewer

(Reserve: *"Authentic feeling Caribbean experience and food."*) All are real review
text gathered in Phase 1; none invented. Owner can swap in Google/Facebook reviews with
full names when available.

## 4. Brand identity & hex palette

**Character:** warm, genuine, unpretentious, Caymanian, homemade, of-the-sea.
**Derived from the real place** (East End water, sand, sea-grape courtyard, chalkboard
menu, island fruit), **not** from a design trend.

**[CONFIRM against real signage/logo — colors below are derived from the setting, not the
actual logo, which could not be inspected.]**

| Token | Hex | Where it comes from |
| --- | --- | --- |
| Deep sea (primary dark) | `#0e3b3b` | The deep East End water / shade under the sea grapes |
| Sea turquoise (primary) | `#1f8a8c` | Cayman shallows |
| Sea-grape green (secondary) | `#5b7a3b` | The courtyard trees |
| **Mango (accent — CTAs only)** | `#e8791f` | Ripe island mango / the food itself |
| Sorrel (deep warm red, sparing) | `#9e2b25` | Sorrel juice / hibiscus |
| Warm sand (tinted neutral light) | `#f4ede1` | The beach/driftwood |
| Chalkboard (tinted near-black) | `#1a1c1a` | The blackboard menu |

Full tonal scales, neutrals, and semantic (success/warning/error/info) colors are defined
in Phase 3C. Neutrals are **tinted warm**, never pure gray/black.

**Signature heritage cue:** the **hand-chalked blackboard** — carried into the site as a
recurring "chalk" treatment (see Phase 3A signature move).

**Tagline options:** "A true taste of the Cayman Islands." / "Cooked at home. Served by
the sea." / "Real Caymanian cooking, East End."

## 5. Competitor summary & how this site differs

Authentic local spots (Heritage Kitchen, Grape Tree Café) have little to no real website
and live on social + word of mouth; tourist-polished spots (Tukka, Da Fish Shack) have
proper sites with menus/booking but little soul or story.

**How Vivine's site wins:** be the one authentic Caymanian home-kitchen with a warm,
story-first site that (a) tells Vivine's real story, (b) makes the practical stuff
(hours, call-ahead, cash-only, the drive out east) impossible to miss so nobody arrives
to a closed kitchen, and (c) nails local SEO with consistent NAP. Not a booking engine —
a beautiful, trustworthy front door with tap-to-call and directions.

## 6. Recommended sitemap

Single-scroll-friendly but multi-page for SEO & clarity:

- **Home** (`index.html`) — hero, the story in brief, blackboard highlights, why come,
  testimonials, hours + find-us, clear CTA.
- **Menu** (`menu.html`) — the blackboard, organized by category, framed as daily/seasonal.
- **Our Story** (`story.html`) — Vivine & Ray, East End, heritage, the way it's cooked.
- **Visit** (`visit.html`) — hours, call-ahead, cash-only, map/directions, what to expect,
  FAQ, contact form.

Global: tap-to-call + directions in a top strip on every page; footer with NAP, hours,
Facebook, copyright. (Gallery is folded into Home/Story rather than a thin stock gallery,
since we have no verified owner photos yet — see §8.)

## 7. SEO fixes needed

- **Claim the canonical home:** no official site exists → this becomes it; set consistent
  title/description/OG per page + `LocalBusiness`/`Restaurant` JSON-LD with exact NAP.
- **NAP consistency (critical):** standardize everywhere to
  **Vivine's Kitchen · 524 Austin Conolly Drive, Gun Bay, East End KY1-1801, Grand
  Cayman, Cayman Islands · +1 345-947-7435.** Fix variants ("Vivene's", "Miss Vivian's",
  "George Town" mislistings on Wanderlog, "Austin Dr" vs "Austin Conolly Dr").
- **Claim/verify** Google Business Profile and the Facebook page; align hours across
  Google, Facebook, Tripadvisor, Destination Cayman, Cityplugged, Trip.com.
- **Confirm real hours** and publish one authoritative set (sources currently conflict).
- Provide `sitemap.xml`, `robots.txt`, alt text, canonical URLs.
- No old site/domain to redirect (none exists).

## 8. Key features the site needs

- **Click-to-call** (`tel:`) — primary CTA (cash-only, remote → phone matters most).
- **WhatsApp link** to the same number **[CONFIRM number is on WhatsApp]**.
- **Get Directions** (Google Maps deep link to the East End address).
- **Prominent hours + "call ahead / we cook till it's gone"** messaging.
- **Contact form** (single column, labeled, validated) — static-host friendly
  (mailto/Formspree-style endpoint placeholder, clearly marked for owner to wire up).
- **Menu/blackboard showcase** with seasonal framing.
- **Real testimonials** with honest attribution.
- **Cash-only + no-alcohol** notices so visitors aren't caught out.
- Fully responsive, fast, accessible (see Phase 3D blockers).

---

**Consistency check:** NAP, menu, testimonials, palette, sitemap, and features above are
internally consistent and traceable to Phase 1 sources. Placeholders that must not ship as
fact are tagged **[CONFIRM]**. → Cleared to proceed to Phase 3.
