import type { Metadata } from 'next';
import HeroFullPage from '@/components/HeroFullPage';
import ServicesOverview from '@/components/ServicesOverview';
import WhyChooseUs from '@/components/WhyChooseUs';
import FocusIndustries from '@/components/FocusIndustries';
import BlogSection from '@/components/BlogSection';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Stats from '@/components/Stats';
// Removed WordPress API dependency

export const metadata: Metadata = {
  title: 'SWB | AI Services, Automation & Support - Smartwebrowse India Private Limited',
  description: 'Transform your business with Smartwebrowse India Private Limited\'s AI services, intelligent automation, and 24/7 AI support. Leading AI startup delivering cutting-edge AI solutions, automation services, and AI consulting for modern businesses.',
  keywords: 'AI services, automation services, AI support, AI consulting, AI integration, AI development, artificial intelligence, business automation, AI solutions, intelligent technology',
  alternates: {
    canonical: 'https://www.smartwebrowse.com',
  },
  openGraph: {
    title: 'SWB | AI Services, Automation & Support - Smartwebrowse India Private Limited',
    description: 'Transform your business with Smartwebrowse India Private Limited\'s AI services, intelligent automation, and 24/7 AI support. Leading AI startup delivering cutting-edge AI solutions, automation services, and AI consulting for modern businesses.',
    url: 'https://www.smartwebrowse.com/',
    siteName: 'Smartwebrowse India Private Limited',
    images: [
      {
        url: '/images/Smartwebrowse-Logo.png',
        width: 210,
        height: 61,
        alt: 'Smartwebrowse India Private Limited - AI Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default async function HomePage() {

  return (
    <>
      <HeroFullPage />
      <Stats />
      <ServicesOverview />
      <WhyChooseUs />
      <FocusIndustries />
      <BlogSection />
      {/* <Testimonials /> */}
      <CTASection />
    </>
  );
}
