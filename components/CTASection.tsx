'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import type { CTAData } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';

interface CTASectionProps {
  data?: CTAData;
}

const CTASection = ({ data }: CTASectionProps) => {
  const { t } = useLanguage();
  
  // Default data if none provided
  const ctaData = data || {
    title: t('cta.title'),
    description: t('cta.description'),
    primaryCta: {
      text: t('cta.primary'),
      link: "/get-a-quote"
    },
    secondaryCta: {
      text: t('cta.secondary'),
      link: "/consultation"
    }
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Base Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      
      {/* Animated Neural Network Pattern */}
      <div className="absolute inset-0 neural-pattern opacity-40"></div>
      
      {/* Circuit Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-30 animate-circuit-flow"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* Tech Icons Background - Server Racks */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-20 left-10 text-blue-400/20"
      >
        <i className="fas fa-server text-8xl"></i>
      </motion.div>
      
      {/* Network Diagram */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 right-20 text-blue-400/20"
      >
        <i className="fas fa-project-diagram text-7xl"></i>
      </motion.div>
      
      {/* Brain Icon */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-32 left-20 text-blue-400/20"
      >
        <i className="fas fa-brain text-6xl"></i>
      </motion.div>
      
      {/* Robot Icon */}
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-32 right-20 text-purple-400/20"
      >
        <i className="fas fa-robot text-6xl"></i>
      </motion.div>
      
      {/* Microchip Icon */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-10 text-indigo-400/20"
      >
        <i className="fas fa-microchip text-5xl"></i>
      </motion.div>
      
      {/* Cloud Icon */}
      <motion.div
        animate={{ 
          x: [0, 20, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 9, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-40 left-1/4 text-cyan-400/20"
      >
        <i className="fas fa-cloud text-6xl"></i>
      </motion.div>
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-blue-900/50 to-indigo-900/70"></div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Title with Gradient */}
          <motion.h2 
            variants={itemVariants}
            className="heading-2 mb-6 text-white drop-shadow-2xl"
          >
            <span className="bg-gradient-to-r from-white via-blue-200 via-cyan-200 to-indigo-200 bg-clip-text text-transparent">
              {ctaData.title}
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
          >
            {ctaData.description}
          </motion.p>

          {/* CTA Buttons with Modern Design */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link 
              href={ctaData.primaryCta.link}
              className="group relative px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                {ctaData.primaryCta.text}
                <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform duration-300"></i>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
            
            <Link 
              href={ctaData.secondaryCta.link}
              className="group px-10 py-5 glass-effect border-2 border-white/40 text-white font-bold text-lg rounded-2xl hover:bg-white/10 hover:border-white/60 transition-all duration-300 hover:scale-110 shadow-2xl backdrop-blur-xl"
            >
              <span className="flex items-center gap-3">
                {ctaData.secondaryCta.text}
                <i className="fas fa-chevron-right group-hover:translate-x-1 transition-transform duration-300"></i>
              </span>
            </Link>
          </motion.div>

          {/* Trust Indicators with Enhanced Design */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-12 border-t border-white/30"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white mb-8 text-xl font-bold"
            >
              Trusted by leading enterprises worldwide
            </motion.p>
            <div className="flex justify-center items-center gap-2 md:gap-3 lg:gap-4 flex-wrap">
              {[
                { text: 'AI-Powered Solutions', icon: 'fa-brain' },
                { text: '24/7 AI Support', icon: 'fa-headset' },
                { text: 'Intelligent Automation', icon: 'fa-robot' },
                { text: 'Global AI Services', icon: 'fa-globe' }
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group cursor-pointer"
                >
                  <div className="glass-effect px-3 py-2 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 backdrop-blur-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500/30 to-indigo-500/30 flex items-center justify-center group-hover:from-blue-500/50 group-hover:to-indigo-500/50 transition-all duration-300 flex-shrink-0">
                        <i className={`fas ${badge.icon} text-white text-xs`}></i>
                      </div>
                      <span className="text-white text-xs font-semibold group-hover:text-blue-200 transition-colors duration-300 whitespace-nowrap">
                        {badge.text}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
