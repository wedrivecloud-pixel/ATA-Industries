# SEO and launch checklist

- Unique route titles and relevant descriptions, configurable canonical URLs, Open Graph metadata, Organization JSON-LD, XML sitemap and robots.txt are implemented.
- `PUBLIC_LAUNCH_APPROVED` behaviour is preserved: `noindex,nofollow` unless explicitly set to `true` at build time.
- `PUBLIC_SITE_URL` must be the confirmed production HTTPS origin before launch.
- Source-template links resolve to Astro routes. Unprovided service/industry detail links use the real overview sections or enquiry route, rather than invented detail copy. Unprovided PDF assets remain unavailable.
- Legal privacy, cookie and sitemap variants have distinct routes and titles.
- Old `/capabilities/`, `/request-a-quote/`, `/contact/`, `/faqs/`, `/privacy/` and `/enquiry-received/` pages have been removed as requested. No legacy redirect requirements were provided.
- Placeholder article bodies, policy text and missing photography/downloads require content approval before enabling indexing.
- No Lighthouse score or deployed Cloudflare verification is claimed. This is a static Worker assets build; live deployment is managed by Cloudflare Workers Builds.
