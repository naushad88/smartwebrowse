import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get a Quote | Custom IT Solutions Pricing',
  description: 'Get a free quote for custom IT solutions. Cloud services, cybersecurity, web development, mobile apps & DevOps. Transparent pricing for your business needs.',
  keywords: 'IT quote, custom software pricing, cloud services quote, cybersecurity pricing, web development cost',
  openGraph: {
    title: 'Get a Quote | Custom IT Solutions Pricing',
    description: 'Get a free quote for custom IT solutions. Cloud services, cybersecurity, web development, mobile apps & DevOps. Transparent pricing for your business needs.',
    url: 'https://www.smartwebrowse.com/get-a-quote',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.smartwebrowse.com/get-a-quote',
  },
};

export default function GetAQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
