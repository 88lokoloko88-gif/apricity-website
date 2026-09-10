# Prompt for the Claude Code agent

Paste everything below the line into Claude Code, with this folder open. The
folder must also contain the unpacked `apricity-our-journeys/` package: the
seven HTML files, `images/`, `screenshots/`, `README.md` and `CONTEXT.md`.

---

You are working on the website of **Apricity Tickets & Events Ltd** (London,
company no. 16111394) — a luxury concierge and travel company: VIP event access,
exclusive experiences, bespoke travel. Live site: https://apricity.ooo/.

This folder contains a completed reference section ("Our Journeys") and full
written context for the existing site. Nothing here is live.

## What you are producing

Two local builds, side by side in this repository, from one shared content
source:

- **v2 — design frozen.** Pixel-identical to today's visual system. Everything
  else improves: information architecture, content, conversion, code, SEO,
  maintainability.
- **v3 — design evolved.** Your design work, but an evolution of the existing
  system, not a replacement. v3 exists to be compared against v2, screen by
  screen.

**Important distinction, do not collapse it:** v2 and v3 are *local builds* —
the artefact I look at, click through and judge. The *integration route* into
the live site (rebuild natively in Semplice vs. inject custom code vs. move off
Semplice) is a separate decision you make in Phase 3 and describe as a plan. You
build v2 and v3 locally no matter which route you recommend. Do not skip
building because the recommendation is "stay in Semplice", and do not start
rebuilding the live site.

## Working rules

- **Phases are gates.** Work in order. At the end of each phase, stop, report,
  and wait for my approval before starting the next. No production code before
  Phase 4 is approved.
- **Talk to me in Russian. Write every deliverable and all site copy in
  English.** The site is entirely English; Russian inside it would read as
  pasted in.
- **Never invent facts.** No prices, dates, events, partners, testimonials,
  client names or statistics that are not in this folder or confirmed by me.
  Placeholders must be visibly marked as such.
- **Measure, don't assume.** Values in `CONTEXT.md` §3 were measured on the live
  site, but verify them yourself. Where a value is missing, measure it — do not
  fill the gap with a plausible number. If you cannot measure it, say so.
- **Ask instead of guessing.** A wrong assumption about this business costs more
  than a question. Batch questions at the end of a phase rather than
  interrupting mid-work.
- **Deliverables are few and load-bearing.** Exactly the files named below. Do
  not generate extra summaries, changelogs, status files or notes-to-self.
- Do not touch the live site. Do not publish anything. Do not email anyone.
- Prose, not decoration: no emoji, no exclamation marks, no marketing adjectives
  in documents.

## Time pressure — read this before planning

Today is **2 September 2026**. Paris Fashion Week SS27 runs **28 September —
6 October 2026** — roughly four weeks away, and the PDF states quotas are
tightest on Schiaparelli, Saint Laurent, Louis Vuitton and Miu Miu. Art Basel
Paris is October 2026.

So: the single most valuable outcome of this work is a **shareable, correct
Paris Fashion Week page a manager can paste into a WhatsApp message today**.
Sequence everything with that in mind, and in Phase 4 tell me explicitly what
the shortest path to that one page is, separately from the full plan.

---

## Phase 0 — Read, verify, reconcile

Read in this order: `CONTEXT.md` (platform, constraints, tokens, content,
decision log), `README.md`, all seven HTML files *including their comments*, then
`screenshots/` (full-page renders at 1440px and 390px).

Then open https://apricity.ooo/ yourself and take your own measurements — you
need them for Phase 1. If the site is unreachable or renders without styles, say
so plainly, work from this folder, and mark every value in Phase 1 as
"unverified against live" rather than pretending you measured it.

**Then reconcile the documentation against itself and against the code.** These
are known contradictions; find them and any others, and report each with the
evidence and your reading of which is correct:

1. `CONTEXT.md` §3 says both Poppins files are declared at `font-weight: 400`;
   `README.md` says Poppins-Medium is 500; the reference HTML uses
   `font-weight: 500` for headings. What actually ships on the live site?
2. Site contacts (`hello@apricity.ooo`, WhatsApp/Telegram on a +971 number)
   differ from the commercial PDFs (`max@apricity.ooo`, +421 905 547 473).
3. `og:locale` is `sk_SK` on an English-only site.
4. Decision log #9 requires Poppins SemiBold, which the site does not load.
5. Art Basel day one is 20 or 21 October; the page says only "October 2026".

**Report back in under 250 words:** what this business sells and to whom, where
the current site helps and where it hurts, and the contradictions you found. No
recommendations yet.

**Gate:** wait for my confirmation before Phase 1.

---

## Phase 1 — `BRANDBOOK.md`

Document the design system that already exists — measured, not invented. Where
you cannot measure, write "not measured" rather than guessing. `CONTEXT.md` §3
is a starting point; verify every value and go well beyond it.

Cover:

- **Colour.** Every value, its role, where it appears. The site runs on one text
  colour (`#777681`) and one accent (`#00289B`). Document that discipline as a
  rule, including the tested-and-reverted case in decision log #11.
- **Type.** Every level: size, line-height, letter-spacing, case, weight. Give
  the scale and the ratios between levels. Resolve the weight contradiction from
  Phase 0 here.
- **Spacing and grid.** Container, row, gutter, computed column width, section
  padding, vertical rhythm inside a card. Derive the underlying scale; where the
  site is inconsistent, document the inconsistency and propose the canonical
  value.
- **Imagery.** Ratio, treatment, tonal register, what subjects work, resolution
  rules, and the existing defect where 150×150 sources are stretched fourfold.
- **Motion.** The single easing curve, its duration, which properties may
  animate, hover behaviour (opacity only).
- **Components.** Inventory everything on the live site and in this folder:
  services card, direction card, event card, price row, itinerary/day row,
  eyebrow, hairline divider, both button variants, back link, empty state. For
  each: anatomy, states, spacing, usage, and the class name it carries in the
  reference build (`.apj-*`).
- **Voice.** Derive writing rules from the copy that exists — sentence length,
  concrete nouns, no exclamation, how prices are stated, how access is
  described. Three do/don't pairs, each quoting a real line.
- **Extension rules.** How to add a component that does not exist yet without
  breaking the system. One precedent exists: the hairline divider, derived from
  the existing text colour at 18% opacity, admitted because 18 price rows needed
  to read as a list. Use it as the model — a new element is admissible only when
  no existing one can do the job, and must be derived from existing values.

**Acceptance test:** a designer who has never seen the site could produce a
correct new page from this document alone, and every number in it is traceable
to a measurement or marked as unmeasured.

This document governs v2 absolutely and is the baseline v3 must argue against.

**Gate:** stop. I read it before Phase 2.

---

## Phase 2 — `FINDINGS.md`

Audit apricity.ooo as a **sales instrument**, not a design object.

- **Conversion.** Every CTA is the same `mailto:` link. There is not one form.
  What does that cost, and what replaces it?
- **Architecture.** One page, five anchors, no inner pages except the Cookie
  Policy. The new section needs three levels.
- **Content.** Copy is general and priceless — no dates, no named events, no
  numbers. The PDF offers the company actually sends are far more concrete than
  the site.
- **Trust.** Partner logos (Marriott, LVMH, Accor, Aman, Four Seasons, LHW) but
  no case studies, named clients, testimonials, company details or booking
  terms. Note that logo walls without a stated relationship carry their own
  risk.
- **Technical.** Page weight, image sizes, Core Web Vitals, mobile behaviour,
  SEO basics, structured data, and the indexability of a one-page site.
- **Contradictions.** Everything from Phase 0, restated with its revenue
  consequence.

Rank findings by revenue impact, not by ease of fixing. For each: the finding,
the evidence, the estimated cost of leaving it, and the fix.

**Market research** — real named operators, cited. Three groups:

- Concierge and membership: Quintessentially, Ten Lifestyle Group, John Paul,
  Knightsbridge Circle, Velocity Black.
- Luxury bespoke travel: Black Tomato, Pelorus, Jacada, Original Travel,
  Scott Dunn.
- Event and hospitality access: operators selling fashion week, Formula 1
  paddock, Art Basel and comparable access.

For each group answer: how the catalogue is structured; whether prices are
shown, hidden or given as "from"; the enquiry mechanism; which trust signals
carry weight in this market; how an out-of-season or empty catalogue is handled;
what the strongest operators do that Apricity does not.

Research constraints: at most three operators examined in depth per group; every
claim carries a URL and the date you accessed it; anything behind a login or
paywall is marked "not verified" rather than inferred; no invented traffic,
revenue or conversion numbers.

**Separate structural findings from visual ones.** Structural findings feed both
v2 and v3. Visual findings feed only the v3 argument in Phase 5 — never v2.

**Gate:** stop.

---

## Phase 3 — `ARCHITECTURE.md`

Design the whole system before building any of it.

**Repository layout.** Propose and justify the full folder structure for a
repository holding shared content, two builds, brand documentation and assets.
Name every directory and what belongs in it. State explicitly what happens to
the files currently in this folder — which move, which become fixtures, which
stay as historical reference. v2 and v3 must share content and images, never
duplicate them.

**Content model — the most important requirement in this document.** Events,
directions and prices are data, not markup. Define the schema: an event's fields
(name, direction, location, dates, lead, what's arranged, itinerary by day,
price list, price-on-request flag, cover image, status, share metadata), how a
direction is defined, and how an empty catalogue is expressed *in data* rather
than in a hand-written page.

  *Acceptance test, state it in the document and design against it:* adding one
  event, or changing all 18 Paris Fashion Week prices, means editing exactly one
  data file and touching no layout file. Prices change every season and the
  person changing them is not a developer.

**Sitemap.** Every page and its final URL, including the pages that do not exist
yet but obviously should — booking terms, about, contact, privacy. Mark which
are in scope for v2.

  For any page type with no existing design precedent (booking terms, about),
  state that it will be composed only from components already in
  `BRANDBOOK.md`. If that is impossible, the extension rule applies and the new
  component must be argued for.

**Every entry point.** Map how a person actually arrives and what each arrival
requires:

- a direct link to one event, pasted into WhatsApp or Telegram by a manager
  mid-conversation;
- a link from a commercial PDF the company emails;
- Instagram bio and stories;
- organic search for an event name plus "tickets" or "access";
- the homepage, cold;
- a return visit to a page seen earlier.

For each: what the visitor must see in the first screen, what the page must
carry for the link to work when shared (title, description, preview image,
canonical URL, structured data), and what the next step is. A one-page site
cannot serve most of these — say concretely what changes.

**Conversion paths.** Every route from arrival to enquiry, and what happens
*after* the enquiry is sent: where it lands, what the person receives, what the
company sees. Name the mechanism, not the intention. Include the failure cases —
what a visitor on a phone with no mail client configured experiences today.

**Technology, as a real trade-off rather than a default.** The live site is
WordPress with the Semplice 6 page builder, built by Hason Digital. Options:
stay in Semplice; move to WordPress with a conventional theme; move to a static
or Next.js build. For each, state the same three things: who can change 18
prices without a developer, what it costs to get there, and what it costs to
reverse. Then recommend one. Remember the Semplice constraints in `CONTEXT.md`
§2 — two content variants only, no tablet, no native way to link a whole column.

**Migration and risk.** How v2 replaces the live site without losing what works,
what could break, what the rollback is, and what must be preserved (GTM,
Cookiebot, existing URLs, the Cookie Policy page).

**Gate:** stop.

---

## Phase 4 — `PROPOSAL.md`, then build v2

`PROPOSAL.md`, in this order:

1. The shortest path to a shareable Paris Fashion Week page — what it takes,
   what it excludes, how many days.
2. What stays, what changes, what is deleted, and why.
3. The conversion path in detail, end to end.
4. Whether prices stay public. They are public today, per guest, on the fashion
   week page. Argue both sides on this market's evidence from `FINDINGS.md`
   before recommending.
5. Which new components are genuinely needed, how each is built from
   `BRANDBOOK.md` tokens, and how each passes the extension rule.
6. A phased plan with effort per phase and what I have to supply for each.
7. Every question whose answer would change the proposal — including the open
   items in `CONTEXT.md` §8: Art Basel exact dates, whether the fashion week
   shows go day-by-day with times instead of sorted by price, whether the PDF
   booking terms go on the site, whether Poppins SemiBold can be added, what
   tablet renders, and how column-level clickability gets solved.

Then **stop and wait for approval.** Do not guess at business facts.

After I approve, build **v2**. Design frozen. Every value checkable against
`BRANDBOOK.md` — if it is not in the brand book, it does not go in the code.
Work in small reviewable steps and show me each before continuing.

**How "design frozen" is verified, build so this passes:**

- Every colour, size, spacing and easing value in v2 traces to a line in
  `BRANDBOOK.md`. No literals that don't.
- The seven pages that exist in `screenshots/` render in v2 materially
  identically at 1440px and 390px. Produce your own full-page screenshots and
  compare them against `screenshots/` side by side; list every difference you
  find and justify each one as a bug fix, or revert it.
- Accessibility and performance are requirements, not extras: real visible focus
  states, sufficient contrast, correct heading order, responsive images, no
  layout shift. Where an accessibility fix changes a visual value, flag it as an
  explicit exception with the reason — that is the only category of visual change
  v2 is allowed.

**Gate:** stop. v2 is reviewed before v3 starts.

---

## Phase 5 — v3, the design evolution

Only after v2 exists and works.

- **Evolution, not replacement.** The current design is quiet, restrained,
  expensive-looking: one text colour, one accent, no rounding, warm low-contrast
  imagery, a single slow easing curve. That restraint is the brand's asset and
  the reason it does not look like every other concierge site. Keep the DNA.
- **Every departure is argued.** Write `DESIGN-V3.md`: for each change — what it
  is, what problem it solves, what is gained, what is risked, and what it costs
  to maintain. A change that only makes things "more modern" is not a change
  worth making.
- **Earn it with evidence.** A departure is justified by something in
  `FINDINGS.md`: a conversion problem, a legibility problem, a hierarchy that
  fails on mobile, a component the system genuinely lacks. Not by taste.
- **Show, don't replace.** Build v3 alongside v2 from the same content. I judge
  them side by side.
- **Failure mode to avoid — generic premium:** huge hero, gradient overlays,
  glassmorphism, rounded cards, drop shadows, a second accent colour, scroll
  animation. If v3 looks like a template it has failed, however well it is
  coded.

Deliver a comparison of the same three screens in v2 and v3, desktop and mobile,
with the reasoning beside each.

---

## Non-negotiables, all phases

- **v2's design does not change.** Colour, type, grid, spacing, rounding, motion
  and image treatment are fixed. Only v3 may evolve them, on the record.
- **Brand accent is `#00289B`**, sampled from the company's own PDF offers. Blue
  means "clickable" or "this is a price" and nothing else. Text is `#777681`.
- **Trademark caution.** Fashion house names and Art Basel are third-party
  marks. Apricity resells access and is not an official partner. Do not add
  logos, do not imply partnership, and flag anything already on these pages that
  reads as an endorsement claim. Decision log #10 exists for this reason.
- **Legal and commercial text is supplied, never drafted.** Booking terms,
  cancellation and refund wording, and company details come from me verbatim.
  Mark the slot and leave it empty rather than writing plausible terms.
- **Factual corrections already made stay made:** official house spellings
  (Miu Miu, Chloé, Hermès, Zimmermann, Gabriela Hearst); Nina Ricci is not on
  the page; *Luncheon on the Grass* is Manet, not Monet; the venue is Maison
  Gainsbourg, not "Ginzburg".
- English only on the site. Russian in conversation with me.
- Do not touch the live site. Everything here is local.

## Definition of done

- `BRANDBOOK.md`, `FINDINGS.md`, `ARCHITECTURE.md` and `PROPOSAL.md` together
  tell me what is being built, what it costs, who can maintain it and what we
  give up — without opening another file.
- v2 looks like today's site under the comparison above, and works better.
- Changing all 18 prices means editing one data file. Demonstrate it.
- One event page can be pasted into WhatsApp and sells on its own.
- v3 is recognisably the same brand, demonstrably better, and every difference
  from v2 has a written reason.
