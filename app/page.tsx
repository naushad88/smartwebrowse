import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Praelix Technologies | AI Services, Automation & Support - Praelix Technologies',
  description:
    'Transform your business with Praelix Technologies\'s AI services, intelligent automation, and 24/7 AI support. Leading AI startup delivering cutting-edge AI solutions, automation services, and AI consulting for modern businesses.',
  keywords:
    'AI services, automation services, AI support, AI consulting, AI integration, AI development, artificial intelligence, business automation, AI solutions, intelligent technology',
  alternates: {
    canonical: 'https://www.praelixtechnologies.com',
  },
  openGraph: {
    title: 'Praelix Technologies | AI Services, Automation & Support - Praelix Technologies',
    description:
      'Transform your business with Praelix Technologies\'s AI services, intelligent automation, and 24/7 AI support. Leading AI startup delivering cutting-edge AI solutions, automation services, and AI consulting for modern businesses.',
    url: 'https://www.praelixtechnologies.com/',
    siteName: 'Praelix Technologies',
    images: [
      {
        url: '/images/praelixtech-logo.png',
        width: 210,
        height: 61,
        alt: 'Praelix Technologies - AI Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
