# Apricity — the "Our Journeys" section

Handoff package for apricity.ooo (WordPress + **Semplice 6** theme).

This is not a plugin or a theme. Semplice builds pages in its own visual editor,
so the blocks are rebuilt inside the builder and this package serves as the
reference: exact values, structure, order of elements and copy. The HTML opens
in any browser as-is and shows the intended result.

---

## Contents

```
index.html                              homepage — includes the Our Journeys section
apricity-art-fashion.html               level 2 — Art & Fashion event catalogue
apricity-music.html                     level 2 — catalogue, no events yet
apricity-sport.html                     level 2 — catalogue, no events yet
apricity-spiritual.html                 level 2 — catalogue, no events yet
apricity-event-paris-fashion-week.html  level 3 — event page
apricity-event-art-basel-paris.html     level 3 — event page
images/                                 6 photographs, all 1200x1200, JPG
```

Navigation between the files is already wired with relative links.
Start from `index.html`.

---

## Structure

```
Our Journeys
├── Art & Fashion ──── catalogue ──┬── Paris Fashion Week
├── Music                          └── Art Basel Paris
├── Sport
└── Spiritual
```

Music, Sport and Spiritual have catalogue pages, but no events in them yet. They
show a "programme being finalised" state with a Get in touch button. When the
first event arrives, delete the `.apj-empty` block and put the `.apj-catalog`
grid from `apricity-art-fashion.html` in its place — the card markup is ready
there. A comment repeating this instruction sits in each of the three files.

**The section goes BEFORE Our Services** — between the "Exclusive Rewards
Program" section and "Our Services" — plus a new `#journeys` anchor in the header
and footer menus.

It cannot go below: the directions overlap with existing services (Sport ~ Elite
Sport Access, Art & Fashion ~ Red Carpet Access), and the visitor would read the
same offer twice.

**Three levels cannot be built with anchors** — real pages are required. The site
currently has none apart from the Cookie Policy. One page per direction and one
per event will be needed, so it is worth setting up a template rather than
assembling each event from scratch.

---

## Tokens

Every value below was measured on the live site. Nothing is invented.

| | |
|---|---|
| Text colour | `#777681` |
| Brand blue | `#00289B` |
| Light surface | `#F9F9F9` |
| Fonts | Poppins-Medium (500), Poppins-Regular (400) |
| Section H2 | 54 / 68, letter-spacing 0.8px |
| Card H3 | 26 / 40, letter-spacing 0.8px |
| Body | 16 / 30 |
| Eyebrow | 14 / 22, uppercase, letter-spacing 1.6px |
| Container / row / gutter | 1300 / 1270 / 15px |
| Section padding | 150px top, 100px bottom |
| Rounding | images 0, buttons 10px |
| Easing | `0.7s cubic-bezier(0.19, 1, 0.22, 1)` |

In these files Poppins is loaded from Google Fonts for preview. On the live site
the theme's local font files are already in place — keep those.

---

## Where the blue is used

One rule: blue means "this is clickable" or "this is a price".

- direction names in Our Journeys;
- event names in the catalogue and the H2 headings on event pages;
- the lead subheadings next to the photograph;
- eyebrows (Art & Fashion, What's arranged, Shows, Day one … Day six);
- prices and Price on request;
- the Get in touch button fill.

Everything else is `#777681`. No further blue should be added — it would stop
working as an accent.

---

## Points that need attention

**1. Clickability of the whole card.**
The entire card must be clickable, not just the heading. In Semplice the image,
heading and text are separate elements and there is no built-in way to link a
whole column. Solve it by wrapping the column in an `<a>` via custom code, or by
linking all three elements at once. This is the only place that requires
stepping outside the builder.

**2. Weight 600.**
The day headings on the Art Basel page use Poppins SemiBold. The site loads only
Regular and Medium, so this is a new font file that has to be added to Semplice.
If that is not possible, revert to `font-weight: 500` and keep the larger size;
a comment to that effect sits in the page code.

**3. The hairline divider.**
`1px rgba(119,118,129,.18)` is the only new element in the whole package. The
colour is not new — it is the existing `#777681` at 18% opacity. It is needed so
the price and itinerary lists read as lists rather than paragraphs.

**4. Tablet.**
Semplice has only two content variants, `xl` and `xs`, with nothing in between.
The 1024px breakpoint in the code is a recommendation; decide which variant
tablets should render.

**5. Mobile.**
Every block is built twice, for `xl` and for `xs`. Content does not carry over
between the variants automatically.

**6. Duplicated CSS.**
Each page is self-contained: its styles live inside the file. This is
deliberate, so the files open independently. During integration the shared part
should be moved into a single theme file.

---

## Images

All 1200x1200, strictly 1:1 — that is how the cards in the existing Our Services
section are built. On the site a card renders at 268px, so the density headroom
is more than fourfold.

Upload to `/wp-content/uploads/2026/journeys/` and replace `images/…` in the code
with that path.

The tonal register is shared across all six: warm muted light, low contrast, no
bright spots. New photographs must be chosen in the same register or the row
falls apart.

---

## Open questions for the client

- Exact dates for the Art Basel trip: day one is 20 or 21 October; the code
  currently says just "October 2026".
- In the PDF the Paris Fashion Week shows are laid out by day with times. The
  page currently uses a flat list sorted by price. A day-by-day layout would read
  more strongly.
