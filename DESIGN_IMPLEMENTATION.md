# Approved design implementation

Source: the committed `design-reference/README.md`, `ata.css`, and desktop `.dc.html` files. Mobile artboards wrap the same templates at 390px.

The stylesheet is copied byte-for-byte into `src/styles/ata.css`; the original export is unchanged. Shared Header, Footer and CtaBand components reproduce the exported markup. The `.ata` wrapper is an inline-size container.

## Verification

Every one of the 34 built routes was rendered and captured at 1440px and 390px. A test-only renderer independently expands the original `.dc.html` imports, loops and initial state so screenshots can be compared against the exported design. Google Fonts was blocked by the environment policy, so **both sides use the same fallback fonts**. These comparisons establish layout fidelity under that condition, not verified final Google Fonts rendering.

| Width | Template | Actual dimensions | Export dimensions | Changed pixels at equal dimensions |
|---|---|---|---|---|
| 1440 | Home | 1440 × 10084 | 1440 × 10084 | 0.0008% |
| 1440 | Services | 1440 × 5750 | 1440 × 5750 | 0% |
| 1440 | Service-Laser | 1440 × 5962 | 1440 × 5962 | 0.0016% |
| 1440 | Industries | 1440 × 3404 | 1440 × 3404 | 0% |
| 1440 | Industry-DataCenters | 1440 × 5617 | 1440 × 5617 | 0.001% |
| 1440 | About | 1440 × 6067 | 1440 × 6067 | 0% |
| 1440 | Facility | 1440 × 4628 | 1440 × 4628 | 0.0012% |
| 1440 | Equipment | 1440 × 6496 | 1440 × 6496 | 0% |
| 1440 | Quality | 1440 × 4776 | 1440 × 4776 | 0% |
| 1440 | Certifications | 1440 × 2983 | 1440 × 2983 | 0% |
| 1440 | Careers | 1440 × 3844 | 1440 × 3775 | Different dimensions; see exceptions |
| 1440 | Blog | 1440 × 4210 | 1440 × 4210 | 0% |
| 1440 | BlogPost | 1440 × 4284 | 1440 × 4284 | 0% |
| 1440 | ServiceArea | 1440 × 3452 | 1440 × 3452 | 0% |
| 1440 | Legal | 1440 × 2358 | 1440 × 2358 | 0% |
| 1440 | Quote | 1440 × 2530 | 1440 × 2306 | Different dimensions; see exceptions |
| 1440 | ThankYou | 1440 × 1460 | 1440 × 1393 | Different dimensions; see exceptions |
| 1440 | NotFound | 1440 × 1492 | 1440 × 1492 | 0% |
| 390 | Home | 390 × 20921 | 390 × 20921 | 0.0037% |
| 390 | Services | 390 × 9137 | 390 × 9137 | 0.0045% |
| 390 | Service-Laser | 390 × 10871 | 390 × 10871 | 0.0057% |
| 390 | Industries | 390 × 6695 | 390 × 6695 | 0.0061% |
| 390 | Industry-DataCenters | 390 × 10313 | 390 × 10313 | 0.0065% |
| 390 | About | 390 × 12275 | 390 × 12275 | 0.0033% |
| 390 | Facility | 390 × 8977 | 390 × 8977 | 0.0069% |
| 390 | Equipment | 390 × 12184 | 390 × 12184 | 0.0034% |
| 390 | Quality | 390 × 8160 | 390 × 8160 | 0.005% |
| 390 | Certifications | 390 × 5360 | 390 × 5360 | 0.0077% |
| 390 | Careers | 390 × 7149 | 390 × 7058 | Different dimensions; see exceptions |
| 390 | Blog | 390 × 8029 | 390 × 8029 | 0.0051% |
| 390 | BlogPost | 390 × 6558 | 580 × 6558 | Different dimensions; see exceptions |
| 390 | ServiceArea | 390 × 6169 | 390 × 6169 | 0.0067% |
| 390 | Legal | 390 × 4711 | 390 × 4711 | 0.0087% |
| 390 | Quote | 390 × 5548 | 390 × 5301 | Different dimensions; see exceptions |
| 390 | ThankYou | 390 × 3219 | 390 × 3130 | Different dimensions; see exceptions |
| 390 | NotFound | 390 × 2825 | 390 × 2825 | 0.0145% |

## Intentional differences and limitations

- Quote retains all three visible stages from the export and adds validated Continue controls. Quote/careers include an honest disabled-processing notice; the thank-you template includes a design-preview notice when delivery is unavailable. These additions change page height.
- The mobile BlogPost hero placeholder is constrained to the available width; its original 21:9 ratio plus 240px minimum height otherwise creates 580px document width at a 390px viewport.
- Facility zones and equipment chips gain keyboard-operated selection. No additional manufacturing facts are introduced.
- No article bodies were invented. The 13 additional article routes preserve the exported title/category or home-card introduction and explicitly mark missing bodies.
- The source contains unspecified links and unavailable PDFs. Links use real overview anchors, related supplied article routes or the quote route; actual PDF downloads remain unavailable until files are supplied.
- Google Fonts links match the export exactly. The environment requires applied access to fonts.googleapis.com and fonts.gstatic.com before final typography can be verified.
- Main is a design-system artboard, and Header/Footer/CtaBand are shared components rather than public standalone routes.

Run `node scripts/compare-design-screenshots.mjs` after `pnpm build && pnpm test` to regenerate the numeric comparison. Screenshots and test-only generated HTML are ignored; approved source files are committed.
