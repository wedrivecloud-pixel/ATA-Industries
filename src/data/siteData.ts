export const siteData = {
 name: 'ATA Industries',
 url: import.meta.env.PUBLIC_SITE_URL || 'https://ata-industries.example',
 formsEnabled: import.meta.env.PUBLIC_ENABLE_FORMS === 'true',
 launchApproved: import.meta.env.PUBLIC_LAUNCH_APPROVED === 'true',
 // No submission backend is included in this static Worker. Enabling the feature
 // flag alone must not send personal information to a nonexistent handler.
 formEndpoint: '',
 phone: '(262) 629-5527', phoneHref: 'tel:+12626295527'
} as const;
