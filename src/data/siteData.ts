import { capabilities } from './capabilities';
export const siteData = {
 name: 'ATA Industries', tagline: 'From an idea to a considered manufacturing plan.',
 url: import.meta.env.PUBLIC_SITE_URL || 'https://ata-industries.example',
 description: 'Explore manufacturing processes, project considerations and production enquiries with ATA Industries.',
 license: '', phoneForTel: '', phoneFormatted: '', email: '',
 formsEnabled: import.meta.env.PUBLIC_ENABLE_FORMS === 'true',
 nav: [{label:'Home',href:'/'},{label:'About',href:'/about'},{label:'Capabilities',href:'/capabilities'},{label:'FAQs',href:'/faqs'},{label:'Contact',href:'/contact'}],
 services: capabilities,
 socials: {facebook:'',instagram:'',google:''},
 footerNav: [{title:'Explore',links:[{label:'Our approach',href:'/about/'},{label:'Manufacturing capabilities',href:'/capabilities/'},{label:'Project FAQs',href:'/faqs/'}]},{title:'Start a conversation',links:[{label:'Request a quote',href:'/request-a-quote/'},{label:'Contact',href:'/contact/'},{label:'Privacy information',href:'/privacy/'}]}]
} as const;
