# Remaining content and production requirements

The current design source is the user-approved Claude Design export, committed under `design-reference/`. Visible copy, company names, specifications, contact details and claims come from that source; the earlier proposal copy has been replaced. These supplied facts have not been independently verified by this implementation.

- Keep all bracketed text and `.ph` boxes as supplied. Photos, hero video, map image, headshots, testimonials, sample-project/case-study details, registrar/certificate information and policy text still require supplied assets/content.
- The design's proposed download controls have no real PDF assets. Supply the ISO certificate, capabilities sheet and equipment list before enabling downloads.
- The export includes one sample BlogPost body. Other article cards now resolve to the same detail layout with an explicit content placeholder, never an invented body or duplicated robotic-welding article.
- Privacy and cookie policy placeholders require legal approval. The HTML sitemap variant is available separately.
- No quote/application processing or secure upload backend is included. Both forms remain disabled by default; server validation, file limits/type inspection, malware scanning as appropriate, retention, spam handling and notification/delivery need production implementation and testing.
- The example quote attachment is a design example, not a real upload. The thank-you route is labelled as a design preview while processing is unavailable.
- Confirm the deployed HTTPS origin in `PUBLIC_SITE_URL`; keep `PUBLIC_LAUNCH_APPROVED=false` until the production review is complete.
- Google Fonts requires `fonts.googleapis.com` and `fonts.gstatic.com`. Both destinations were added to the environment draft for review, but a draft save alone does not apply network policy. A blocked font request causes browser fallback; do not describe fallback-font screenshots as verified final typography.

Original LMI audit limitations remain in `CONTENT_AUDIT.md` for historical context. The approved design, rather than the inaccessible source crawl, now controls this rebuild.
- GitHub access also currently requires applying the saved `github.com` domain addition. The current CONNECT 403 occurs before GitHub authentication; do not replace credentials based on that error.
