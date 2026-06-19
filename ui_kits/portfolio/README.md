# Portfolio UI Kit — Shail K Patel

A high-fidelity, **redesigned** recreation of the single-page portfolio, elevated to the bolder "larger-than-life" editorial direction.

## Run
Open `index.html`. React + Babel load from CDN; styles come from the system root (`../../colors_and_type.css`). Assets resolve from `../../assets/`.

## What's interactive
- **Theme toggle** (top-right) — flips dark ⇄ light, persisted to `localStorage`.
- **Sticky nav** — blurred, active section tracks on scroll, smooth-scroll on click.
- **Hover states** — buttons lift + glow, cards lift, skill pills invert, contact arrows nudge.
- **Scroll reveal** — sections fade + rise via IntersectionObserver.

## Components
| File | Exports | Notes |
|---|---|---|
| `Primitives.jsx` | `Eyebrow`, `SectionTitle`, `Button`, `Tag`, `Card`, `Reveal` | Shared building blocks |
| `Nav.jsx` | `Nav` | Sticky blurred nav + theme toggle |
| `Hero.jsx` | `Hero` | Oversized serif name, portrait w/ ember arc, grid + morph shapes |
| `Sections.jsx` | `Experience`, `Publications`, `Projects`, `Skills` | Real portfolio content |
| `Contact.jsx` | `Contact` (+ `Footer`) | Editorial link rows |
| `App.jsx` | mounts `<App/>` | Theme state + assembly |

## Design notes
- Dark is the default theme (the brand's signature); light is the warm-bone alternate.
- Ember (`#f2531b`) is the only accent — CTA, links, dates, `→` bullets, one key word.
- Content (experience, projects, publications, skills, links) is pulled verbatim from the original site.

## Cut corners (intentionally)
- The original's PDF.js publication viewer and Notion certificates embed are represented by a clean publication card / omitted, since they depend on external services. Re-add if needed.
- Mobile hamburger menu is simplified (nav links hide < 820px).
