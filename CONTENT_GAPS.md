# Required stakeholder approvals before launch

- Complete the LMI page audit after network access is restored; current structure derives from the brief and does not claim full reference coverage.
- Confirm each of the seven proposed capabilities, available processes, equipment, materials, tolerances, capacity and inspection arrangements. Public pages explicitly mark these as proposed.
- Approve company introduction, legal entity, company history, location, team and business coverage. No certifications, awards, customers or years of experience have been invented.
- Supply ATA Industries email, phone, postal address and hours; centralized fields currently remain empty. No other company's details are reused.
- Approve the temporary text wordmark and original concept illustration. Supply licensed, process-specific photos and image permission records.
- Confirm production domain; `ata-industries.example` is a reserved placeholder. Set PUBLIC_SITE_URL at build time.
- Approve privacy notice, data controller, processors, retention, rights and jurisdiction before enabling collection.
- Configure Netlify Forms, notifications, spam protection, recipient and end-to-end delivery. Forms are disabled by default. PUBLIC_ENABLE_FORMS=true is a deployment switch, not evidence of backend readiness.
- Netlify provides hosted processing/spam handling, but this static project has no custom server validation. Add a server/edge endpoint with independent field validation if required for production. Client validation is not a security boundary.
- File uploads are deliberately unavailable; agree secure transfer and confidentiality terms separately.
- No pricing, lead times, minimum quantities or delivery guarantees are approved or published.
- No industries-served or portfolio claims are verified. Add corresponding pages only after audit and stakeholder approval.
- Set PUBLIC_LAUNCH_APPROVED=true only after approvals and production review. Default noindex protects the stakeholder preview from indexing; robots.txt permits crawling so crawlers can observe that directive.
