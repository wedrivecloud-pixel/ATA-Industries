# ATA Industries

A static manufacturing website for stakeholder review, adapted from Alan Cuenca's MIT-licensed **Small Business Starter Version 2** (upstream commit recorded in CONTENT_AUDIT.md). Astro 7.3.2, Tailwind CSS v4, TypeScript and Playwright.

## Develop

Node >=22.12 (validated with Node 24). pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm dev --host 0.0.0.0
pnpm check
pnpm build
pnpm test
```

For the restricted cloud home directory, use:

```sh
XDG_DATA_HOME=/workspace/.local/share XDG_CACHE_HOME=/workspace/.cache pnpm install --frozen-lockfile --store-dir /workspace/.pnpm-store
```

On cloud machines with a read-only home directory, prefix Astro commands with `ASTRO_TELEMETRY_DISABLED=1`.

The Playwright suite uses system Chromium by default (`/usr/bin/chromium`). Set PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH to another installed Chromium path, or install a browser and change the launch configuration for your platform. Tests serve the production `dist/` with Python 3 on port 4323. Run `pnpm build` before testing. Run `pnpm preview` to inspect the static build separately.

## Content and styling

- `src/data/siteData.ts`: business identity, contact settings, navigation and form switch.
- `src/data/capabilities.ts`: original proposed service copy and technical considerations.
- `src/data/faqs.ts`: general manufacturing enquiry FAQs.
- `src/styles/theme.css`: original theme's Tailwind design tokens.
- `src/components/`: adapted theme components and shared enquiry/FAQ components.
- `src/pages/`: static informational pages and data-generated capability routes.
- `public/images/`: original temporary concept art. No borrowed company photographs.

The text-only wordmark is temporary. See CONTENT_AUDIT.md and CONTENT_GAPS.md for provenance and approval requirements. System fonts avoid third-party font requests.

## Build configuration and deployment

Copy `.env.example` to `.env` for local settings (no secrets required). Set PUBLIC_SITE_URL to the confirmed HTTPS production origin before launch. It controls canonicals, Open Graph URLs, schema and sitemap. The reserved `.example` fallback is for review only. Keep PUBLIC_LAUNCH_APPROVED=false until the review is complete.

Connect this GitHub repository in Netlify, build with `pnpm build`, and publish `dist/`. `netlify.toml` supplies static build settings. Other static hosts can serve `dist/`, but require a separate form integration. No deployment has been performed by this repository build.

## Forms

Both forms are disabled by default and explicitly state that nothing is sent. They include accessible labels, required fields, native browser validation, length limits and a honeypot. No upload or fake success interaction is included.

After approving contact and privacy details, deploy to Netlify with PUBLIC_ENABLE_FORMS=true, enable form detection, configure the two forms (`contact` and `quote`) and notification recipients, then test delivery and errors end to end. Do not enable forms on an arbitrary static host. This build has no custom server-side validation; add it if required by the production processing contract. Form values are sent by native POST, not placed in query strings. The generic landing page does not itself assert receipt.

Do not collect confidential drawings through this preview. Attachments need a separately approved secure upload implementation.

## Review status

The required reference site could not be crawled because of proxy policy. Seven proposed service pages follow the brief, not a verified claim of ATA capacity. Contact details, manufacturing facts, photography and production domain remain approval items. No Lighthouse score is claimed.
