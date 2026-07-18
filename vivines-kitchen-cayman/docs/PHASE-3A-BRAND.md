# Phase 3A — Brand Personality (written before any code)

## 3 adjectives (brand as a person)
**Warm-hearted · Unhurried · Genuinely Caymanian.** She's the aunt who feeds everyone,
doesn't rush, and has zero interest in pretending to be a fancy restaurant.

## Dominant personality axis
**Warm** (on the Warm ↔ Clinical axis). Every decision biases toward hand-made warmth over
slick precision. Secondary lean: **Quiet** over Loud — confident, not shouty.

## Two sites this should feel NOTHING like
1. **A slick venture-backed SaaS landing page** (e.g. a Linear/Stripe-style dark gradient
   hero). Avoiding: purple/indigo gradients, glassmorphism, ultra-tight geometric sans,
   "fade-in-everything," centered hero + 3 identical cards.
2. **A big-chain restaurant template** (think a generic franchise site with a red hero,
   stock food photography, "ORDER NOW" everywhere). Avoiding: stock imagery, aggressive
   upsell, sterile grid of menu cards with identical framing, hollow marketing voice.

## ONE signature move (on every major page)
**The chalkboard.** Vivine's real menu is hand-chalked on a blackboard, so the site's
signature is a **chalk-on-slate treatment**: a dark, faintly-textured "slate" surface with
a hand-lettered display face and a thin chalk-underline that's hand-drawn (an irregular SVG
stroke, not a straight rule). It appears as: the hero's dish-of-the-day panel, each page's
section dividers (the chalk underline under headings), and the menu itself rendered as a
board. It's not decoration — it's how this business actually communicates, so it also
*works* (it's where daily/seasonal info lives).

## Color palette reasoning (one sentence)
The palette is lifted straight from the place itself — deep East End sea-teal and turquoise
water, warm sand and driftwood neutrals, sea-grape courtyard green, chalkboard slate for
the menu, and one ripe-mango orange for calls to action — so the screen feels like standing
in Vivine's courtyard, not like a template.

## Voice card
**3 phrases the brand would say:**
- "Come hungry — we cook till it's gone."
- "Whatever came in fresh today, that's what's good today."
- "Real Caymanian food, the way we've always made it."

**3 phrases the brand would never say:**
- "Elevated island-inspired culinary experiences."
- "Book your table online in seconds!"
- "Synergizing authentic flavor solutions."

## Avoided-defaults ledger (per the brief)
- ❌ Indigo/violet/purple gradients → using real sea-teal + sand + mango instead.
- ❌ Cream + serif + sage as a default → warm sand yes, but paired with a chalkboard slate
  and a hand-lettered display + humanist sans, driven by the blackboard idea, not the trend.
- ❌ Inter/Geist/Roboto as display → display is a warm, slightly imperfect face
  (**Caveat** hand-lettering for the chalk moments + **Fraunces** for headings); body is a
  readable humanist sans (**Source Sans 3**), not a default geometric.
- ❌ Centered hero + 3 cards → hero is asymmetric (story left, chalk dish-panel right);
  page structures vary section to section (see Phase 3D layout notes).
- ❌ Flat gradients / glassmorphism → flat warm fills + layered soft shadows, one light
  source; the only "texture" is a subtle chalk/slate grain used deliberately.
- ❌ Fade-in-everything → motion budget spent on the signature (chalk underline drawing
  itself in on scroll); everything else is near-instant.

## Type system rationale
- **Fraunces** (display serif, soft/"wonky" optical settings) — headings. Warm, hand-made,
  editorial; not a default sans. Carries the "home cooking with soul" feel.
- **Caveat** (hand-lettering) — used *only* for chalk moments (dish of the day, "today's
  board", chalk labels). This is the signature texture; kept scarce so it stays special.
- **Source Sans 3** (humanist sans) — body/UI. Highly readable at 16px+, friendly, not
  Inter/Roboto. Weights 400/600/700.
All three are self-hosted (subset + preloaded) for performance and to avoid CLS.

## Radius & feel
Gently rounded (not pill, not sharp): cards ~10–14px, buttons ~8px, images ~12px — friendly
and hand-made without being cutesy. Matches "warm, quiet."
