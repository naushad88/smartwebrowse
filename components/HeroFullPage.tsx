'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Icon from './Icon';
import type { HeroData } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';
import HeaderTransparent from './HeaderTransparent';
import AIAutomationVisualization from './AIAutomationVisualization';

interface HeroProps {
  data?: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
  };
}

const HeroFullPage = ({ data }: HeroProps) => {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Base Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      
      {/* AI Automation Visualization */}
      <AIAutomationVisualization />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10">
        {/* Animated gradient orbs that follow mouse */}
        <div
          className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl transition-all duration-1500 ease-out animation-delay-2000"
          style={{
            left: `${100 - mousePosition.x}%`,
            top: `${100 - mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl transition-all duration-2000 ease-out animation-delay-4000"
          style={{
            left: `${50 + (mousePosition.x - 50) * 0.5}%`,
            top: `${50 + (mousePosition.y - 50) * 0.5}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Neural network pattern overlay */}
        <div className="absolute inset-0 neural-pattern opacity-30"></div>
        
        {/* Circuit pattern */}
        <div className="absolute inset-0 circuit-pattern opacity-20 animate-circuit-flow"></div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/60"></div>
      </div>

      {/* Integrated Header - Transparent when at top */}
      <HeaderTransparent isScrolled={isScrolled} />

      {/* Main Content */}
      <div className="relative z-20 flex-1 flex items-center justify-center pt-20">
        <div className="container-custom text-center text-white w-full">
            {/* Animated Badge - Smaller */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="glass-effect px-6 py-2 rounded-full text-xs md:text-sm font-semibold text-white/80 border border-white/20 shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 backdrop-blur-xl inline-block">
                <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                {heroData.subtitle}
              </span>
            </motion.div>

            {/* Main Title - Bold Statement */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-white drop-shadow-2xl leading-tight"
            >
              {heroData.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
            >
              {heroData.description}
            </motion.p>

            {/* CTA Buttons with Creative Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <Link
                href="/consultation"
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {t('hero.cta')}
                  <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform duration-300"></i>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
              
              <Link
                href="/about"
                className="group px-10 py-5 glass-effect border-2 border-white/40 text-white font-bold text-lg rounded-2xl hover:bg-white/10 hover:border-white/60 transition-all duration-300 hover:scale-110 shadow-2xl backdrop-blur-xl"
              >
                <span className="flex items-center gap-3">
                  {t('hero.ctaSecondary')}
                  <i className="fas fa-chevron-right group-hover:translate-x-1 transition-transform duration-300"></i>
                </span>
              </Link>
            </motion.div>

            {/* Features Grid with 3D Effect - Single Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center items-center gap-2 md:gap-3 lg:gap-4 flex-wrap"
            >
                {heroData.features.map((feature, index) => {
                  const icons = ['fa-sitemap', 'fa-project-diagram', 'fa-brain', 'fa-robot'];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="group"
                    >
                      <div className="glass-effect rounded-lg px-3 py-2 border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500/30 to-indigo-500/30 backdrop-blur-sm flex items-center justify-center group-hover:from-blue-500/50 group-hover:to-indigo-500/50 transition-all duration-300 flex-shrink-0">
                          <i className={`fas ${icons[index]} text-white text-xs`}></i>
                        </div>
                        <p className="text-xs font-semibold text-white/90 leading-tight group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                          {feature}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
        </div>
      </div>

      {/* Floating AI Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-15">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
          >
            <Icon
              name={i % 2 === 0 ? "fa-brain" : "fa-microchip"}
              className="text-white/10"
              size="4xl"
            />
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <i className="fas fa-chevron-down text-xl"></i>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroFullPage;

