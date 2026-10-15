> Historical initial-build audit. Superseded for design/content implementation by the approved `design-reference/` export. Current routes are listed in `design-reference/ROUTE_MAP.json` and the README.

# Reference content audit

Audit date: 15 October 2026. **Incomplete: network access blocked.**

## Access evidence

| Attempted URL | Result |
|---|---|
| https://www.lmimanufacturing.com/ | Proxy CONNECT 403; no page received |
| https://lmimanufacturing.com/ | Proxy CONNECT 403; no page received |
| https://www.lmimanufacturing.com/robots.txt | Proxy CONNECT 403; no document received |
| https://www.lmimanufacturing.com/sitemap.xml | Proxy CONNECT 403; no document received |

No internal reference pages were discovered. Page titles, metadata, H1s, sections, services, internal links, CTAs, forms, prices and images could not be observed. Do not interpret guessed paths as discovered reference pages. A complete reference crawl remains required once access is enabled. Record all reachable navigation, footer and sitemap links, then fill those fields for each page.

## Proposed ATA information architecture

The following comes from the user's brief, **not a completed LMI audit**. Exact source URLs and matching slugs are unverified.

| Reference mapping | Proposed ATA route | Purpose |
|---|---|---|
| Homepage URL above; content unavailable | / | Manufacturing introduction |
| Undiscovered | /about/ | Brand introduction and proposed approach |
| Undiscovered | /capabilities/ | Proposed process overview |
| Undiscovered | /capabilities/laser-cutting/ | General laser cutting guidance |
| Undiscovered | /capabilities/sheet-metal-punching/ | General punching guidance |
| Undiscovered | /capabilities/sheet-metal-forming/ | General forming guidance |
| Undiscovered | /capabilities/roll-forming/ | General continuous forming guidance |
| Undiscovered | /capabilities/tube-bending/ | General tube bending guidance |
| Undiscovered | /capabilities/welding-and-grinding/ | General joining and finishing guidance |
| Undiscovered | /capabilities/cnc-machining/ | General machining guidance |
| Undiscovered | /faqs/ | Original general project questions |
| Undiscovered | /contact/ | General enquiry interface |
| Undiscovered | /request-a-quote/ | Detailed project enquiry interface |
| ATA-only draft | /privacy/ | Privacy approval requirements |
| ATA-only system page | /enquiry-received/ | Form service landing page |

Industries-served, gallery, testimonials, portfolio, pricing and team pages were not added because their factual basis and reference support could not be verified. No external-domain redirects are configured. No claim is made about inherited rankings or SEO authority.

## Image inventory

| Source | Subject | Destination | Permission | Replacement |
|---|---|---|---|---|
| LMI website | Unobservable | None | Unknown; no reuse permitted | Audit after access restored |
| public/images/manufacturing-study.svg | Original conceptual metal component illustration | Homepage and capability pages | Created for this project | Replace with approved process-specific manufacturing photography |
| public/og-image.png | Original text-based brand preview | Social metadata | Created for this project | Approve temporary wordmark or replace |

No LMI or ATA Photobooths photographs or marketing content are included. No reference image URLs were accessible to inventory. The supplied SVG is clearly labelled as a concept, not equipment or completed work.

## Theme provenance

Actual foundation: https://github.com/alancuenca/small-business-starter-v2
Upstream commit: 6d3b959d10be00b5c009bc6d3902dc02f5927033.
The requested astro.build listing was blocked. The version-2 source repository identifies itself as Small Business Starter and ships Astro 7 / Tailwind v4. MIT license retained. Existing BaseLayout, Header, Footer, Hero, Services, CTA, token stylesheet and global styling are adapted in this project. Google font build fetches were replaced with system stacks for reproducible offline typography.
