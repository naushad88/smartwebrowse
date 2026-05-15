'use client';

import HeaderTransparent from '@/components/HeaderTransparent';
import HeroFullPage from '@/components/HeroFullPage';
import Stats from '@/components/Stats';
import ServicesOverview from '@/components/ServicesOverview';
import WhyChooseUs from '@/components/WhyChooseUs';
import FocusIndustries from '@/components/FocusIndustries';
import CTASection from '@/components/CTASection';

export default function HomePageClient() {
  return (
    <>
      <HeaderTransparent />
      <HeroFullPage />
      <Stats />
      <ServicesOverview />
      <WhyChooseUs />
      <FocusIndustries />
      <CTASection />
    </>
  );
}
