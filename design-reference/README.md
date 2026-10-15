# ATA Industries — design reference (exported from Claude Design)

This folder is the approved website design. Rebuild the Astro site to match it.

## What's here

- `ata.css` — the design system: color tokens, type scale, layout helpers and components
  (`.wrap`, `.sec`, `.sec-head`, `.g2/.g3/.g4`, `.btn-*`, `.card`, `.badge`, `.chip`,
  `.eyebrow`, `.disp`, `.h1–.h4`, `.lead`, `.body`, `.mono`, `.ph` placeholders, `.spec-table`,
  `.trust`, `.stat-num`, `.crumbs`, …). Port it as the site's global stylesheet.
- `canvas.json` — index of every artboard with its title (e.g. "Home · desktop").
- `pages/*.dc.html` — one file per artboard.
  - Desktop templates: `Main` (brand & design-system sheet), `Header`, `Footer`, `CtaBand`,
    `Home`, `Services`, `Service-Laser` (service detail template), `Industries`,
    `Industry-DataCenters` (industry detail template), `About`, `Facility`, `Equipment`,
    `Quality`, `Certifications`, `Careers`, `Blog`, `BlogPost`, `ServiceArea`, `Legal`,
    `Quote`, `ThankYou`, `NotFound`.
  - `*-Mobile.dc.html` files only wrap the desktop page at 390 px wide. The layouts are
    fluid (flex-wrap, `clamp()`, `cqi` units), so mobile = the same markup. They are not
    separate designs.

## How to read a `.dc.html` file

- The real markup is inside `<x-dc> … </x-dc>`. `<helmet>` holds the Google Fonts link
  (Archivo, IBM Plex Sans, IBM Plex Mono) and small page styles.
- `<dc-import name="Header" active="about">` = include the `Header` component with that prop.
  Build `Header`, `Footer` and `CtaBand` as Astro components.
- `<sc-for list="{{items}}" as="x">` = a loop over data returned by `renderVals()` in the
  `<script type="text/x-dc">` block at the bottom of the file. `{{x.title}}` = a value from
  that data. Convert these into Astro `.map()` over arrays (take the arrays from the script).
- `<sc-if>` = conditional rendering.
- Interactive bits (mega-menu, blog category filter, facility tabs, quote form steps) are
  written as `setState` in that script. Re-implement with a small vanilla `<script>` in Astro
  or with static markup. No framework is needed.
- `cqi` units assume the page root is a size container. Add `container-type: inline-size`
  to the page wrapper (`.ata`), or swap `cqi` for `vw`.
- Links like `href="Quote.dc.html"` map to site routes (`/quote/`, `/about/`, …).
- `.ph` boxes with `[Photo: …]` / `[Registrar name]` text are intentional placeholders for
  content the client hasn't supplied. Keep them visible; don't invent facts.
