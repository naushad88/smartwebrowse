import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free IT Consultation | Schedule Expert Session',
  description: 'Book your free 60-minute IT consultation with Praelix Technologies experts. Get expert advice on cloud, cybersecurity, and digital transformation solutions.',
  keywords: 'free IT consultation, cloud consulting, cybersecurity advice, digital transformation, IT experts',
  openGraph: {
    title: 'Free IT Consultation | Schedule Expert Session',
    description: 'Book your free 60-minute IT consultation with Praelix Technologies experts. Get expert advice on cloud, cybersecurity, and digital transformation solutions.',
    url: 'https://www.praelixtechnologies.com/consultation',
    siteName: 'Praelix Technologies',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.praelixtechnologies.com/consultation',
  },
};

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
