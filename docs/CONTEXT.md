# Apricity — "Our Journeys" — full project context

Everything needed to pick this work up from zero, including in a fresh agent
session. `README.md` is the handoff note for the developer; this file is the
working context: what exists, what was decided, why, and what is still open.

Last updated: 28 August 2026.

---

## 1. The company and the site

**Apricity Tickets & Events Ltd** — luxury concierge and travel: VIP event
access, exclusive experiences, bespoke travel packages. Registered in London,
company no. 16111394.

**Live site: https://apricity.ooo/**

Facts established by inspecting the live site, not assumed:

| | |
|---|---|
| Platform | WordPress, theme **Semplice 6** (a visual page builder for portfolios) |
| Built by | Hason Digital |
| Page | single page, `page-id-16`, `static-mode` |
| Last edited | June 2024 — untouched for two years |
| Locale | `og:locale: sk_SK` |
| Media path | `/wp-content/uploads/2024/02/` |
| Analytics | Google Tag Manager, Cookiebot |

**Existing page order:** hero → partner logo marquee (Marriott, LVMH, Accor,
Aman, Four Seasons, LHW) → About → background video → Exclusive Rewards Program
(`section_hl2urjwhs`) → Our Services (`section_wo85g2j58`) → Contact → Instagram
→ final CTA → footer.

**Existing navigation** — five items, all anchors, duplicated in header and
footer:

```
#about   #members   #services   #contact   mailto:hello@apricity.ooo
```

There are no separate pages on the site apart from the Cookie Policy.

**Existing contact points on the site:** `hello@apricity.ooo`, plus floating
WhatsApp and Telegram widgets on a +971 number. Note these differ from the
contacts used on the commercial PDFs (`max@apricity.ooo`, +421 905 547 473).

**The only reusable component** is the Our Services block: image → H3 →
paragraph, repeated 8 times across two rows of four columns
(`row_anin9w7ak`, `row_4xcheo5cc`). Everything in this project is built on it.

**Known defect in the existing site:** the first services row uses 150×150
source images stretched fourfold. Do not repeat this.

---

## 2. Semplice constraints

These shape every decision below.

- Only two content variants exist: `xl` (desktop) and `xs` (mobile). **No tablet
  variant.** Every block is built twice; content does not carry between them.
- Image, heading and text are separate elements. There is **no built-in way to
  make a whole column clickable** — it needs custom code or three links.
- Layout lives in the builder's database, not in theme files. Raw HTML can only
  be injected through a custom-code element, which then sits outside the
  builder's responsive system.

---

## 3. Design tokens

Measured on the live site via the browser. Nothing invented.

```
--apj-ink        #777681      the only text colour on the entire site
--apj-blue       #00289B      Apricity brand blue, sampled from the PDF offers
--apj-surface    #F9F9F9      light section background
--apj-hairline   rgba(119,118,129,.18)
--apj-container  1300px
--apj-row        1270px
--apj-gutter     15px         → 288px content per column in a 4-up row
--apj-ease       0.7s cubic-bezier(0.19, 1, 0.22, 1)
```

Type — two font files only, `Poppins-Medium` and `Poppins-Regular`, both
declared at `font-weight: 400`:

| Role | Size / line-height | Tracking |
|---|---|---|
| H1 hero | 64 / 76 | 0.8px |
| H2 section | 54 / 68 | 0.8px |
| H3 large | 38 / 52 | 0.8px |
| H3 card | 26 / 40 | 0.8px |
| Body | 16 / 30 | normal |
| Eyebrow | 14 / 22, uppercase | 1.6px |
| Menu | 18 | normal |

Other: images `border-radius: 0`, ratio strictly 1:1, rendered at 268px in the
services grid. Buttons: header `.navbar-button` has a 2px `#000` border and
`radius 8px`; content `.ce-button` has `radius 10px`, `padding 14px 35px`,
16px Poppins-Medium, text `#F9F9F9`. Section padding 150px top / 100px bottom.

**Blue rule:** blue means "clickable" or "this is a price". Direction names,
event names, event H2s, lead subheadings, eyebrows, prices, `Price on request`,
and the Get in touch fill. Everything else stays `#777681`. Adding more blue
destroys the accent — this was tested and reverted once already.

---

## 4. What was built

Three levels:

```
Homepage                              index.html (includes Our Journeys)
├── Art & Fashion    → catalogue      apricity-art-fashion.html
│   ├── Paris Fashion Week            apricity-event-paris-fashion-week.html
│   └── Art Basel Paris               apricity-event-art-basel-paris.html
├── Music            → empty state    apricity-music.html
├── Sport            → empty state    apricity-sport.html
└── Spiritual        → empty state    apricity-spiritual.html
```

Plus `images/` (6 files, all 1200×1200 JPG), `README.md` (developer handoff),
`screenshots/` (desktop 1440px and mobile 390px, full-page, of all seven pages).

Each page is self-contained: its CSS lives in the file. Deliberate, so files open
independently; consolidate during integration.

Images use relative `images/…` paths. On the site they go to
`/wp-content/uploads/2026/journeys/`.

### Image inventory

| File | Subject |
|---|---|
| `journey-art-fashion.jpg` | gallery interior, two framed paintings |
| `journey-music.jpg` | orchestra from behind the strings, harp in frame |
| `journey-sport.jpg` | golf irons and balls on turf, overhead |
| `journey-spiritual.jpg` | figure seated before an oval opening onto the sea |
| `event-paris-fashion-week.jpg` | model walking away down a runway |
| `event-art-basel-paris.jpg` | fair interior, wall reading PARIS |

All warm, low-contrast, muted. New images must match this register or the grid
falls apart.

---

## 5. Content

### Paris Fashion Week

Paris · 28 September — 6 October 2026 · SS27 women's ready-to-wear.
Source of truth: `Apricity_VIP_Paris_Fashion_Week_SS27.pdf`.

Price per guest. 18 houses, sorted high to low on the page:

```
Saint Laurent     €12,500     Schiaparelli       €12,500
Miu Miu           €12,000     Louis Vuitton      €12,000
Balmain           €11,000     Balenciaga         €10,500
Loewe             €10,500     Hermès             €10,500
Valentino         €10,500     Chloé               €9,500
Victoria Beckham   €8,500     Elie Saab           €8,500
Zimmermann         €8,500     Stella McCartney    €7,000
Casablanca         €7,000     Ottolinger          €7,000
Mugler             €7,000     Gabriela Hearst     €7,000
```

House names were corrected to official spelling from the client's list:
Miu Miu (was Miumiu), Chloé, Hermès, Zimmermann (was Zimmerman),
Gabriela Hearst (was "Gabriela Hearts").

Nina Ricci was in an early list at €6,000, is absent from the PDF, and is not on
the page.

The PDF also carries terms not yet on the page: full prepayment required, no
refunds on cancellation, name changes by agreement, venue addresses released
24–72 hours before, dress code total look or smart casual, quotas tightest on
Schiaparelli / Saint Laurent / Louis Vuitton / Miu Miu, and flights,
accommodation, transfers, stylist and photographer excluded.

### Art Basel Paris

Paris & Normandy · October 2026 · six days · price on request.
Theme: "From the Salon des Refusés to Art Basel — how Paris invented modern art".

Day 1 — dinner with an art dealer at Lapérouse, private room.
Day 2 — Art Basel opening; lunch at the Grand Palais; evening at Cassaro.
Day 3 — Art Basel again optional; Design Miami Paris; historic brasserie; Left
Bank with a guide; unlisted dinner, then Club 51.
Day 4 — vintage market; lunch; Maison Gainsbourg (tickets in advance; Musée
Rodin as alternative); drive to Normandy; dinner at Le Drakkar.
Day 5 — coastal picnic; Monet's house at Giverny; Museum of Impressionisms;
wine dinner.
Day 6 — breakfast; the gardens at Étretat; airport.

**Factual corrections made:** the client's brief named a "Ginzburg museum" — the
intended venue is Maison Gainsbourg. The brief attributed *Luncheon on the Grass* to Monet; it is
**Manet**, and it is the painting rejected by the Salon jury, which is the origin
of the tour's own theme. The page carries no attribution so as not to fix the
error in print; the guide should say Manet.

---

## 6. Decision log

Every non-obvious choice and its reason. Reverse any of these knowingly.

1. **Section goes above Our Services, not below.** The four directions overlap
   with existing services (Sport ≈ Elite Sport Access, Art & Fashion ≈ Red Carpet
   Access). Below, the visitor reads the same offer twice. Above, it works as the
   top level of choice.
2. **English copy.** The site is entirely English; Russian headings inside it
   would read as pasted in.
3. **Catalogue grid is 2 columns, not 4.** One event in a four-up row looks
   orphaned; 2/4/6 fill rows evenly.
4. **Three levels, not anchors.** A catalogue plus event detail cannot live on
   one anchored page without the page becoming unusable.
5. **Prices sorted high to low.** 18 rows in arbitrary order read as noise.
6. **One new visual element only** — the hairline divider, derived from the
   existing colour at 18% opacity. Without it the lists read as paragraphs.
7. **Hover is opacity only.** The site has no card hover; the only existing
   device is a slow fade on the signature curve.
8. **Empty states sell.** Music/Sport/Spiritual do not say "coming soon"; they
   say the programme is being finalised and invite a request now, with a live
   button. An empty section works as a lead form instead of a dead end.
9. **Day headings use weight 600.** Requires adding Poppins SemiBold to Semplice.
   Fallback documented in the code: revert to 500, keep the larger size.
10. **Art Basel cover replaced.** The original frame carried the Art Basel
    wordmark; using a third party's trademark as marketing material without a
    partner agreement is a risk. The replacement reads PARIS only.
11. **Blue on names was tried and reverted.** Colouring the house names as well
    as the prices made the price list the brightest object on the page, louder
    than the button.

---

## 7. Links

| What | Where |
|---|---|
| Live site | https://apricity.ooo/ |
| Existing anchors | `#about` `#members` `#services` `#contact` |
| New anchor to add | `#journeys` |
| Site contact | `mailto:hello@apricity.ooo` |
| Event CTAs | `mailto:hello@apricity.ooo?subject=Paris%20Fashion%20Week` and `…?subject=Art%20Basel%20Paris` |
| Empty-state CTAs | `…?subject=Music%20journeys`, `Sport%20journeys`, `Spiritual%20journeys` |
| Target upload path | `/wp-content/uploads/2026/journeys/` |
| Fonts (preview only) | Google Fonts, Poppins 400/500/600 |

Internal links are all relative and already wired: each catalogue links back to
`index.html`.

---

## 8. Still open

- **Art Basel dates.** Day one is 20 or 21 October; the page says only
  "October 2026".
- **Show list layout.** The PDF lays the shows out by day with times
  (Saint Laurent Tuesday 21:00, Louis Vuitton closing 6 October 18:30). The page
  uses a flat list sorted by price. Day-by-day would read more strongly and would
  match the rhythm of the Art Basel page.
- **Booking terms.** The PDF terms listed in §5 are not on the site yet.
- **Music, Sport, Spiritual** have no events.
- **Integration route not chosen.** Rebuild natively in Semplice (slower, but the
  client can then edit prices and copy himself) versus inject as custom code
  (fast, exact, but every price change goes through the developer). Prices change
  every season, which argues for the first.
- **Developer questions unanswered:** how column-level clickability will be
  solved; whether an event page template will be created; whether Poppins
  SemiBold will be added; what happens on tablet.

---

## 9. If you are an agent picking this up

- The HTML in this folder is a **reference**, not the production site. The live
  site is WordPress + Semplice and cannot ingest these files directly.
- Do not introduce colours, fonts, radii or easing beyond §3. The whole project
  is constrained to the existing design system; that constraint is the point.
- Do not restyle or restructure the existing site. Any change to it must be the
  minimum required to add this section.
- Values in §3 were measured, not guessed. If you need a value that is not there,
  measure it on the live site rather than inventing one.
- Screenshots in `screenshots/` show the intended result at 1440px and 390px.
