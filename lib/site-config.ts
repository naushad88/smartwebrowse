export const SITE_NAME = 'Praelix Technologies';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://www.praelixtechnologies.com';

export const SITE_EMAIL = {
  contact: 'contact@praelixtechnologies.com',
  sales: 'sales@praelixtechnologies.com',
  hr: 'hr@praelixtechnologies.com',
  reachus: 'contact@praelixtechnologies.com',
  info: 'info@praelixtechnologies.com',
  legal: 'legal@praelixtechnologies.com',
  privacy: 'privacy@praelixtechnologies.com',
  noreply: 'contact@praelixtechnologies.com',
} as const;

export const MAIL_HOST = process.env.EMAIL_HOST || 'mail.praelixtechnologies.com';

export const CALENDLY_URL =
  process.env.CALENDLY_URL || 'https://calendly.com/contact-praelixtechnologies/30min';

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/praelixtechnologies',
  x: 'https://x.com/praelixtechnologies',
  linkedin: 'https://www.linkedin.com/company/praelixtechnologies',
  instagram: 'https://www.instagram.com/praelixtechnologies/',
  youtube: 'https://www.youtube.com/@praelixtechnologies',
} as const;
