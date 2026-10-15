import { siteData } from '../data/siteData';
export const brand = { name: siteData.name, tagline: 'Precision Manufacturing Solutions', description: siteData.description, url: siteData.url, locale: 'en_US', fonts: {body:'Inter',display:'Oswald'} } as const;
