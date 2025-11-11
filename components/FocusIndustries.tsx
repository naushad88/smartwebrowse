'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FocusIndustries = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const industries = [
    {
      title: 'Education',
      description: 'Empowering institutions with AI-powered solutions for e-learning, intelligent administration, and personalized student engagement.',
      icon: 'fa-solid fa-graduation-cap'
    },
    {
      title: 'Financial Services',
      description: 'Delivering AI-driven systems for banking, insurance, and financial data management with intelligent automation and analytics.',
      icon: 'fa-solid fa-chart-line'
    },
    {
      title: 'Government',
      description: 'Modernizing public services with AI infrastructure, intelligent data systems, and citizen-focused AI transformation solutions.',
      icon: 'fa-solid fa-landmark'
    },
    {
      title: 'Healthcare',
      description: 'Building AI-powered systems for efficient patient care, intelligent diagnostics, and operational excellence with AI support.',
      icon: 'fa-solid fa-heart-pulse'
    },
    {
      title: 'Hospitality',
      description: 'Enhancing guest experiences through AI-powered booking, intelligent property management, and automated customer engagement.',
      icon: 'fa-solid fa-hotel'
    },
    {
      title: 'Manufacturing',
      description: 'Optimizing operations with AI, intelligent automation, and AI-driven ERP integration for smarter manufacturing processes.',
      icon: 'fa-solid fa-industry'
    },
    {
      title: 'Retail',
      description: 'Driving growth with AI-powered e-commerce platforms, intelligent inventory systems, and AI analytics for seamless retail experiences.',
      icon: 'fa-solid fa-shopping-cart'
    },
    {
      title: 'Technology',
      description: 'Supporting tech enterprises with AI development, AI infrastructure, and intelligent automation practices.',
      icon: 'fa-solid fa-microchip'
    }
  ];

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
    <section className="py-12 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 neural-pattern opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-10"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Industries We Serve</span>
          </div>
          <h2 className="heading-2 mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">FOCUS INDUSTRIES</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            Your Trusted AI Partner for Intelligent Automation, AI Services & Global AI Support
          </p>
          <p className="text-sm text-gray-600 max-w-4xl mx-auto">
            Smartwebrowse India Private Limited is a leading AI startup delivering comprehensive AI solutions. 
            We specialize in AI Services, Automation Services, AI Support & Maintenance, AI Consulting, 
            AI Integration, AI Development, AI Analytics, and AI Infrastructure for businesses worldwide.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="card-ai p-5 h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500 rounded-2xl"></div>
                
                <div className="text-center mb-3 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:animate-glow-pulse">
                    <i className={`${industry.icon} text-lg text-white`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">{industry.title}</h3>
                </div>
                <p className="text-gray-600 text-center leading-relaxed text-sm relative z-10">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FocusIndustries;





