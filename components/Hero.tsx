'use client';

import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';
import type { HeroData } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroProps {
  data?: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
  };
}

const Hero = ({ data }: HeroProps) => {
  const { t } = useLanguage();
  
  // Default data if none provided
  const heroData = data || {
    title: t('hero.title'),
    subtitle: t('hero.subtitle'),
    description: t('hero.description'),
    features: [
      t('hero.feature1'),
      t('hero.feature2'),
      t('hero.feature3'),
      t('hero.feature4')
    ]
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Modern AI Background with Gradient */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        
        {/* Animated neural network pattern */}
        <div className="absolute inset-0 neural-pattern animate-neural-pulse"></div>
        
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 circuit-pattern opacity-30 animate-circuit-flow"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/60 to-indigo-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Subtitle */}
          <div className="mb-6 mt-8 md:mt-0">
            <span className="inline-block glass-effect px-6 py-3 rounded-full text-sm font-semibold text-white/90 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              {heroData.subtitle}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="heading-1 mb-6 text-white drop-shadow-lg">
            <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
              {heroData.title}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            {heroData.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/consultation" className="relative group text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10">{t('hero.cta')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link href="/about" className="glass-effect text-lg px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-lg">
              {t('hero.ctaSecondary')}
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-8 md:mb-12">
            {heroData.features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="glass-effect rounded-2xl p-4 md:p-6 border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                  <div className="mb-3 flex justify-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/30 to-indigo-500/30 backdrop-blur-sm flex items-center justify-center group-hover:from-blue-500/50 group-hover:to-indigo-500/50 transition-all duration-300 animate-glow-pulse">
                      {index === 0 && <Icon name="fa-sitemap" className="text-white" size="xl" />}
                      {index === 1 && <Icon name="fa-project-diagram" className="text-white" size="xl" />}
                      {index === 2 && <Icon name="fa-brain" className="text-white" size="xl" />}
                      {index === 3 && <Icon name="fa-robot" className="text-white" size="xl" />}
                    </div>
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-white/90 leading-tight group-hover:text-white transition-colors duration-300">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Removed as requested */}

      {/* Animated Floating AI Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Neural Network Nodes */}
        <div className="absolute top-16 md:top-20 left-4 md:left-10 text-white/10 animate-float">
          <Icon name="fa-brain" className="text-white/10" size="4xl" />
        </div>
        
        <div className="absolute top-24 md:top-32 right-4 md:right-20 text-white/10 animate-float animation-delay-2000">
          <Icon name="fa-project-diagram" className="text-white/10" size="3xl" />
        </div>
        
        <div className="absolute bottom-20 md:bottom-32 left-4 md:left-20 text-white/10 animate-float animation-delay-4000">
          <Icon name="fa-microchip" className="text-white/10" size="3xl" />
        </div>
        
        <div className="absolute top-1/2 right-10 text-white/10 animate-float animation-delay-600">
          <Icon name="fa-robot" className="text-white/10" size="2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
