'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import type { WhyChooseUsData } from '@/types';

interface WhyChooseUsProps {
  data?: WhyChooseUsData;
}

// Animated Robot SVG Component
const AnimatedRobot = () => {
  return (
    <motion.div
      className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block"
      initial={{ opacity: 0, x: 50 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        y: [0, -20, 0]
      }}
      transition={{ 
        opacity: { duration: 1 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <svg width="200" height="200" viewBox="0 0 200 200" className="text-blue-500/40">
        {/* Robot Body */}
        <motion.rect
          x="60"
          y="80"
          width="80"
          height="100"
          rx="10"
          fill="currentColor"
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        {/* Robot Head */}
        <motion.circle
          cx="100"
          cy="60"
          r="30"
          fill="currentColor"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        {/* Eyes */}
        <motion.circle
          cx="90"
          cy="55"
          r="5"
          fill="#3b82f6"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
        <motion.circle
          cx="110"
          cy="55"
          r="5"
          fill="#3b82f6"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.2,
          }}
        />
        {/* Antenna */}
        <motion.line
          x1="100"
          y1="30"
          x2="100"
          y2="50"
          stroke="currentColor"
          strokeWidth="3"
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        />
        <motion.circle
          cx="100"
          cy="28"
          r="4"
          fill="#3b82f6"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        />
        {/* Arms */}
        <motion.rect
          x="30"
          y="100"
          width="25"
          height="15"
          rx="5"
          fill="currentColor"
          animate={{
            rotate: [0, 15, 0, -15, 0],
            x: [30, 35, 30],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.rect
          x="145"
          y="100"
          width="25"
          height="15"
          rx="5"
          fill="currentColor"
          animate={{
            rotate: [0, -15, 0, 15, 0],
            x: [145, 140, 145],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        {/* Legs */}
        <motion.rect
          x="70"
          y="180"
          width="20"
          height="15"
          rx="5"
          fill="currentColor"
          animate={{
            y: [180, 175, 180],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.rect
          x="110"
          y="180"
          width="20"
          height="15"
          rx="5"
          fill="currentColor"
          animate={{
            y: [180, 175, 180],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
        {/* Data Flow Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={i}
            cx={100 + Math.sin(i) * 60}
            cy={100 + Math.cos(i) * 60}
            r="3"
            fill="#3b82f6"
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
              cx: [100 + Math.sin(i) * 60, 100 + Math.sin(i + 0.5) * 80, 100 + Math.sin(i + 1) * 60],
              cy: [100 + Math.cos(i) * 60, 100 + Math.cos(i + 0.5) * 80, 100 + Math.cos(i + 1) * 60],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

// Animated Automation Gear Component
const AnimatedGear = () => {
  return (
    <motion.div
      className="absolute left-10 top-20 hidden lg:block"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: 360
      }}
      transition={{ 
        opacity: { duration: 1 },
        rotate: { duration: 20, repeat: Infinity, ease: "linear" }
      }}
    >
      <svg width="120" height="120" viewBox="0 0 120 120" className="text-indigo-500/30">
        <motion.path
          d="M60 20 L70 30 L80 25 L85 35 L95 30 L90 40 L100 45 L90 50 L100 60 L90 70 L100 75 L90 80 L85 90 L80 85 L70 90 L60 80 L50 90 L40 85 L35 90 L25 85 L30 75 L20 70 L30 60 L20 50 L30 45 L20 40 L25 30 L35 35 L40 25 L50 30 Z"
          fill="currentColor"
          stroke="#6366f1"
          strokeWidth="2"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        <motion.circle
          cx="60"
          cy="60"
          r="15"
          fill="#6366f1"
          opacity="0.4"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </svg>
    </motion.div>
  );
};

// Animated AI Brain Component
const AnimatedBrain = () => {
  return (
    <motion.div
      className="absolute left-20 bottom-20 hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        y: [0, -15, 0]
      }}
      transition={{ 
        opacity: { duration: 1 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <svg width="100" height="100" viewBox="0 0 100 100" className="text-purple-500/30">
        <motion.path
          d="M50 20 Q30 25 25 40 Q20 55 30 65 Q25 75 35 80 Q40 85 50 80 Q60 85 65 80 Q75 75 70 65 Q80 55 75 40 Q70 25 50 20 Z"
          fill="currentColor"
          stroke="#a855f7"
          strokeWidth="2"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        {/* Neural connections */}
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={i}
            cx={50 + Math.sin(i * Math.PI / 3) * 20}
            cy={50 + Math.cos(i * Math.PI / 3) * 20}
            r="3"
            fill="#a855f7"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  // Default data if none provided
  const whyChooseUsData = data || {
    title: "Why Choose Smartwebrowse?",
    subtitle: "Your Trusted AI Technology Partner",
    features: [
      {
        icon: "fa-solid fa-brain",
        title: "AI Expertise & Innovation",
        description: "Cutting-edge AI solutions and intelligent automation powered by advanced machine learning and AI technology."
      },
      {
        icon: "fa-solid fa-robot",
        title: "Intelligent Automation",
        description: "AI-powered process automation and workflow optimization to streamline operations and boost efficiency."
      },
      {
        icon: "fa-solid fa-headset",
        title: "24/7 AI Support",
        description: "Round-the-clock AI system support, monitoring, and maintenance from our expert AI team."
      },
      {
        icon: "fa-solid fa-chart-line",
        title: "Data-Driven Solutions",
        description: "AI-powered analytics and predictive insights to unlock business intelligence and drive informed decisions."
      }
    ]
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-10 md:py-14 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 neural-pattern opacity-20"></div>
      <div className="absolute inset-0 circuit-pattern opacity-15 animate-circuit-flow"></div>
      
      {/* Animated AI Creative Elements */}
      <AnimatedRobot />
      <AnimatedGear />
      <AnimatedBrain />

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-10 left-10 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ 
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.3
        }}
        className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl"
      ></motion.div>

      <div className="container-custom relative z-10">
        {/* Section Header - Top Centered */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-block mb-3">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            {whyChooseUsData.title}
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            {whyChooseUsData.subtitle}
          </p>
        </motion.div>

        {/* Content Grid - Below Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {whyChooseUsData.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full card-ai p-5 md:p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Animated Gradient Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500 rounded-xl"
                ></motion.div>
                
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-purple-500/30 blur-md"></div>
                </div>

                {/* Icon with Enhanced Animation */}
                <motion.div
                  className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl mb-4 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-500"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <i className={feature.icon}></i>
                  {/* Pulse Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-400"
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  ></motion.div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button - Centered Below Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-8 md:mt-10"
        >
          <Link 
            href="/get-a-quote" 
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Request a Free Quote
              <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform duration-300"></i>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
