# ATA Industries

Static Astro 7 website rebuilt from the approved Claude Design export in [`design-reference/`](design-reference/README.md). The export is committed unchanged; `ROUTE_MAP.json` records the implementation mapping. The previous starter implementation remains in Git history.

## Development

Node 24 and pnpm 11.25.0 were used for validation.

```sh
pnpm install --frozen-lockfile
pnpm dev --host 0.0.0.0
pnpm check
pnpm build
pnpm test
```

On the managed cloud machine, prefix Astro commands with `ASTRO_TELEMETRY_DISABLED=1`. If its home directory is read-only, install with:

```sh
XDG_DATA_HOME=/workspace/.local/share XDG_CACHE_HOME=/workspace/.cache pnpm install --frozen-lockfile --store-dir /workspace/.pnpm-store
```

Tests require Python 3 and Chromium. They serve the actual `dist/` and test-only rendered design references on loopback port 4323. Set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` if Chromium is not at `/usr/bin/chromium`. Build before running tests. Full-page comparison screenshots are saved under ignored `visual-results/1440/` and `visual-results/390/`.

## Design and content

- `src/styles/ata.css`: verbatim exported tokens, typography and component classes. `global.css` adds small runtime/accessibility and narrow-screen fixes. No Tailwind reset overrides the approved design.
- `src/components/Header.astro`, `Footer.astro`, `CtaBand.astro`: shared components transcribed from their respective exports.
- `src/components/Interactions.astro`: small vanilla scripts for mega menus, mobile menu, FAQs, category filtering, equipment navigation, facility selection and validated quote-stage progression. No UI framework.
- `src/data/*.ts`: the exported `renderVals()` arrays converted to typed data for Astro `.map()` loops.
- `src/pages/`: one route per supplied page template plus legal variants and article routes. Blog bodies not present in the export remain explicitly marked `[Article content to be supplied]`; the supplied robotic welding article retains its sample body.
- Archivo, IBM Plex Sans and IBM Plex Mono load from the exact Google Fonts stylesheet URL used by the design. The `.ata` wrapper has `container-type: inline-size` for `cqi` units and container queries.

Keep bracketed copy and `.ph` boxes until approved content is supplied. Facts and company details reproduced from the approved export have not been independently audited; no extra equipment, capacity or history claims were added.

## Cloudflare Workers Builds — static assets

This project deploys to a **Cloudflare Worker named `ata-industries`**, not Cloudflare Pages. `wrangler.jsonc` declares static `dist/` assets and `404-page` handling. No Cloudflare Astro adapter, Worker code, or Wrangler package dependency is required.

In the existing Worker's Builds settings, connect `wedrivecloud-pixel/ATA-Industries`, branch `main`, with repository root as the working directory:

| Setting | Value |
|---|---|
| Build command | `pnpm build` |
| Deploy command | `npx wrangler deploy` |
| Node | `NODE_VERSION=24` |
| pnpm | `PNPM_VERSION=11.25.0` |

Cloudflare's build/deploy runner supplies Wrangler via the deploy command. Do not install it into this project's dependencies. Set build variables:

- `PUBLIC_SITE_URL`: actual HTTPS Worker/custom-domain origin; controls canonicals, Open Graph, sitemap and schema. Reserved fallback is `https://ata-industries.example`.
- `PUBLIC_ENABLE_FORMS=false`: keep disabled pending a submission backend.
- `PUBLIC_LAUNCH_APPROVED=false`: keeps `noindex,nofollow` on every page while reviewing.

Only enable indexing after content and legal review. Build-time variables require a rebuild. This task updates and pushes the repository; deployment success must be checked in Cloudflare's build logs and against the assigned URL.

## Forms and downloads

Quote and careers forms preserve the reference interfaces and have native validation. Quote steps remain visible, matching the export, with Continue controls that validate the current stage and advance focus. There is no fake request or simulated success redirect.

`PUBLIC_ENABLE_FORMS` is preserved. Actual POST/file transfer additionally requires a deliberately configured HTTPS `formEndpoint` in `src/data/siteData.ts`; it is currently empty. Thus a feature flag alone cannot send data to a nonexistent handler. Keep both forms disabled until a backend, server validation, notification recipient, spam protection, privacy policy and secure upload handling are implemented. No Netlify form integration remains.

The example file row is from the design and is labelled as an example for assistive technology; it is not an uploaded file. File pickers are disabled until a backend is connected. The thank-you route labels itself as a confirmation design preview while submissions are unavailable.

Certificate and capabilities PDFs were not included in the export. Their controls retain the design but are marked unavailable. Do not invent or generate certificates. See `CONTENT_GAPS.md` and `VALIDATION.md`.
