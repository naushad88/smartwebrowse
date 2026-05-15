import type { Metadata } from 'next';
import AdsLandingClient from './AdsLandingClient';

export const metadata: Metadata = {
  title: 'Transform Your Business with Expert IT Solutions | Praelix Technologies',
  description: 'Trusted IT Solutions Partner for Businesses in the USA, Japan, Ireland & Beyond. Get IAM, Cloud, Cybersecurity & Digital Transformation Services. Free Consultation Available.',
  keywords: 'IT services USA, cloud migration Japan, cybersecurity Ireland, IAM services, digital transformation, enterprise IT solutions',
  openGraph: {
    title: 'Transform Your Business with Expert IT Solutions | Praelix Technologies',
    description: 'Trusted IT Solutions Partner for Businesses in the USA, Japan, Ireland & Beyond. Get IAM, Cloud, Cybersecurity & Digital Transformation Services. Free Consultation Available.',
    url: 'https://www.praelixtechnologies.com/ads-landing',
    siteName: 'Praelix Technologies',
    images: [
      {
        url: '/images/praelixtech-logo.png',
        width: 210,
        height: 61,
        alt: 'Praelix Technologies - IT Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.praelixtechnologies.com/ads-landing',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AdsLandingPage() {
  return <AdsLandingClient />;
}
