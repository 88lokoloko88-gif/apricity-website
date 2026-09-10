# Prompt for the Claude Code agent

Paste everything below the line into Claude Code, with this folder open.

---

You are working on the website of **Apricity Tickets & Events Ltd**, a luxury
concierge and travel company (VIP event access, exclusive experiences, bespoke
travel). The live site is https://apricity.ooo/. This folder contains a section
built for it and full context on the existing site.

You will produce **two builds**:

- **v2 — design frozen.** Same look as today, down to the pixel. Everything
  improves except the visuals: architecture, content, conversion, code.
- **v3 — design evolved.** Your design work, but an evolution of the existing
  system rather than a replacement. v3 exists to be compared against v2.

Both are built in this repository, side by side, from one shared content source.

Work in phases. **Do not write production code until Phase 4 is approved.**

---

## Phase 0 — Read before anything else

In this order: `CONTEXT.md` (platform, constraints, tokens, content, and an
eleven-point decision log with reasoning), `README.md`, all seven HTML files
including their comments, and `screenshots/` (full-page renders at 1440px and
390px).

Then fetch https://apricity.ooo/ and inspect it yourself. `CONTEXT.md` §1
describes it; verify rather than trust, and take your own measurements — you
need them for Phase 1.

Report back in under 200 words: what this business sells, to whom, where the
current site helps and where it hurts, and any contradiction you found.

---

## Phase 1 — `BRANDBOOK.md`

Document the design system that already exists. Everything **measured, not
invented**. Where you cannot measure, say so instead of filling the gap.
`CONTEXT.md` §3 is a starting point — verify every value and go well beyond it.

Cover:

- **Colour.** Every value, its role, where it appears. The site runs on one text
  colour and one accent; document that discipline as a rule.
- **Type.** Every level: size, line-height, letter-spacing, case, weight. Note
  that only two font files load and both are weight 400 — the apparent bold is a
  separate face. Give the scale and the ratios between levels.
- **Spacing and grid.** Container, row, gutter, column width, section padding,
  vertical rhythm inside a card. Derive the underlying scale; where the site is
  inconsistent, document it and propose the canonical value.
- **Imagery.** Ratio, treatment, tonal register, what subjects work, resolution
  rules, and the existing defect where 150×150 images are stretched fourfold.
- **Motion.** The single easing curve, its duration, which properties may
  animate, hover behaviour.
- **Components.** Inventory everything on the live site and in this folder:
  services card, direction card, event card, price row, itinerary row, eyebrow,
  hairline divider, both button variants, back link, empty state. For each:
  anatomy, states, spacing, usage.
- **Voice.** Derive writing rules from the copy that exists — sentence length,
  concrete nouns, no exclamation, how prices are stated, how access is described.
  Three do/don't pairs taken from real lines.
- **Extension rules.** How to add a component that does not exist yet without
  breaking the system. One precedent exists here: a hairline divider derived from
  the existing colour at 18% opacity, introduced because 18 price rows needed to
  read as a list. Use it as the model — a new element is admissible only when an
  existing one cannot do the job, and must be derived from existing values.

Write it so a new designer could produce a correct page without seeing the old
one. This document governs v2 absolutely, and is the baseline v3 must argue
against.

---

## Phase 2 — `FINDINGS.md`

**Audit apricity.ooo as a sales instrument, not a design object:**

- **Conversion.** Every CTA is the same mailto link. There is not one form.
  What does that cost and what replaces it.
- **Architecture.** One page, five anchors, no inner pages except a cookie
  policy. The new section needs three levels.
- **Content.** Copy is general and priceless — no dates, no named events, no
  numbers. The PDF offers the company actually sends are far more concrete than
  the site.
- **Trust.** Partner logos, but no case studies, named clients, testimonials,
  company details or booking terms.
- **Technical.** Page weight, image sizes, Core Web Vitals, mobile behaviour,
  SEO basics, structured data, indexability of a one-page site.
- **Contradictions.** Site contacts differ from those on the commercial PDFs.
  Locale is Slovak. Nothing edited since June 2024.

Rank by revenue impact, not by ease of fixing.

**Market research** — web search, real named examples, cited. Three groups:

- Concierge and membership: Quintessentially, Ten Lifestyle Group, John Paul,
  Knightsbridge Circle, Velocity Black.
- Luxury bespoke travel: Black Tomato, Pelorus, Jacada, Original Travel,
  Scott Dunn.
- Event and hospitality access: operators selling fashion week, Formula 1
  paddock, Art Basel and comparable access.

For each group: how the catalogue is structured; whether prices are shown,
hidden or given as "from"; the enquiry mechanism; which trust signals carry
weight here; how an out-of-season or empty catalogue is handled; what the
strongest operators do that Apricity does not.

Separate structural findings from visual ones. Structural findings feed v2 and
v3 both. Visual findings feed only the v3 argument in Phase 5 — never v2.

---

## Phase 3 — `ARCHITECTURE.md`

Design the whole system before building any of it.

**Repository layout.** Propose and justify the full folder structure for a
repository holding shared content, two builds, brand documentation and assets.
Name every directory and what belongs in it. v2 and v3 must not duplicate
content or images.

**Content model.** Events, directions and prices are data, not markup. Define
the schema: what fields an event has (name, direction, location, dates, lead,
what's arranged, itinerary by day, price list, price-on-request flag, cover
image, status), how a direction is defined, and how an empty catalogue is
expressed in data. Design it so that **adding an event or changing 18 prices
means editing one data file and touching no layout**. This is the single most
important requirement in this document: prices change every season.

**Sitemap.** Every page and its final URL. Include the pages that do not exist
yet but obviously should — booking terms, about, contact, privacy — and mark
which are in scope.

**Every entry point.** Map how a person actually arrives, and what each arrival
requires:

- direct link to a specific event, pasted into WhatsApp or Telegram by a manager
  mid-conversation;
- link from a commercial PDF the company emails;
- Instagram bio and stories;
- organic search for an event name plus a term like "tickets" or "access";
- the homepage, cold;
- return visit to a page seen earlier.

For each: what the visitor must see within the first screen, what the page must
carry for it to work when shared (title, description, preview image, canonical
URL, structured data), and what the next step is. A one-page site cannot serve
most of these; say concretely what changes.

**Conversion paths.** Every route from arrival to enquiry, and what happens after
the enquiry is sent — where it lands, what the person receives, what the company
sees. Name the mechanism, not the intention.

**Technology, with a real trade-off rather than a default.** The live site is
WordPress with the Semplice 6 page builder, built by an agency. Options: stay in
Semplice; move to WordPress with a conventional theme; move to a static or
Next.js build. Each changes who can update prices without a developer. State
that consequence for each option, then recommend one and say what it costs to
reverse.

**Migration and risk.** How v2 replaces the live site without losing what works,
what could break, and what the rollback is.

---

## Phase 4 — `PROPOSAL.md`, then build v2 — STOP FOR APPROVAL

`PROPOSAL.md`: what stays, what changes, what is deleted and why; the conversion
path in detail; whether prices stay public — they are today, per guest, on the
fashion week page, so argue both sides before recommending; which new components
are genuinely needed and how each is built from `BRANDBOOK.md` tokens, each
passing the extension rule; a phased plan; effort per phase.

Ask me anything whose answer would change the proposal. Do not guess at business
facts. Then stop.

After I approve, build **v2**. Design frozen. Every value checkable against
`BRANDBOOK.md` — if it is not in the brand book, it does not go in the code.
Small reviewable steps; show me each before continuing.

---

## Phase 5 — v3, the design evolution

Only after v2 exists and works.

v3 is where you do design work. The rules:

- **Evolution, not replacement.** The current design is quiet, restrained,
  expensive-looking, built on one text colour, one accent, no rounding, warm
  low-contrast imagery and a single slow easing curve. That restraint is the
  brand's asset and the reason it does not look like every other concierge site.
  Keep the DNA.
- **Every departure is argued.** Write `DESIGN-V3.md`: for each change, what it
  is, what problem it solves, what is gained, what is risked. A change that only
  makes things "more modern" is not a change worth making.
- **Earn it with evidence.** A departure is justified by something in
  `FINDINGS.md` — a conversion problem, a legibility problem, a hierarchy that
  fails on mobile, a component the system genuinely lacks. Not by taste.
- **Show, don't replace.** Build v3 alongside v2 from the same content. I judge
  them side by side, screen by screen.
- **Failure mode to avoid:** generic premium — huge hero, gradient overlays,
  glassmorphism, rounded cards, drop shadows, a second accent colour, animation
  on scroll. If v3 looks like a template, it has failed regardless of how well it
  is coded.

Deliver a comparison: the same three screens in v2 and v3, at desktop and mobile,
with the reasoning next to each.

---

## Non-negotiables, all phases

- **v2's design does not change.** Colours, type, grid, spacing, rounding, motion,
  image treatment are fixed. v3 may evolve them, on the record, with reasons.
- **Never invent facts.** No prices, dates, events, partnerships, testimonials,
  client names or statistics that are not in this folder or confirmed by me.
  Mark placeholders clearly.
- **Brand accent is `#00289B`**, sampled from the company's own PDF offers. Blue
  means "clickable" or "this is a price" and nothing else.
- **Trademark caution.** Fashion house names and Art Basel are third-party marks.
  The company resells access and is not an official partner. Do not add logos, do
  not imply partnership, and flag anything already on the pages that reads as an
  endorsement claim.
- **English only**, matching the existing site.
- Accessibility and performance are requirements: real focus states, sufficient
  contrast, correct heading order, responsive images.
- Do not touch the live site. Everything here is local.
- When uncertain, ask. A wrong assumption about this business costs more than a
  question.

## Definition of done

`BRANDBOOK.md`, `FINDINGS.md`, `ARCHITECTURE.md` and `PROPOSAL.md` together let
me know exactly what is being built, what it costs, who can maintain it and what
we give up — without opening another file. v2 looks identical to today's site and
works better. v3 is recognisably the same brand, demonstrably better, and every
difference from v2 has a written reason.
