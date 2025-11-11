'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Service } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServicesOverviewProps {
  services?: Service[];
}

const ServicesOverview = ({ services }: ServicesOverviewProps) => {
  const { t } = useLanguage();

  // Define our AI-focused core services
  const coreServices = [
    {
      id: 1,
      title: 'AI Services Provider',
      description: 'Comprehensive AI solutions including AI consulting, custom AI development, and AI-powered applications to transform your business.',
      icon: "fas fa-brain",
      link: "/services/ai-services-provider"
    },
    {
      id: 2,
      title: 'Automation Services',
      description: 'Intelligent process automation, workflow automation, and AI-powered business process automation to streamline operations.',
      icon: "fas fa-robot",
      link: "/services/automation-services"
    },
    {
      id: 3,
      title: 'AI Support & Maintenance',
      description: '24/7 AI system support, AI infrastructure maintenance, and continuous monitoring to ensure optimal AI performance.',
      icon: "fas fa-headset",
      link: "/services/ai-support"
    },
    {
      id: 4,
      title: 'AI Consulting',
      description: 'Strategic AI advisory services to help you identify opportunities, plan AI implementation, and maximize ROI from AI investments.',
      icon: "fas fa-lightbulb",
      link: "/services/ai-consulting"
    },
    {
      id: 5,
      title: 'AI Integration',
      description: 'Seamless integration of AI capabilities into your existing systems, applications, and business processes.',
      icon: "fas fa-plug",
      link: "/services/ai-integration"
    },
    {
      id: 6,
      title: 'AI Development',
      description: 'Custom AI application development, machine learning models, and intelligent solutions tailored to your business needs.',
      icon: "fas fa-code",
      link: "/services/ai-development"
    },
    {
      id: 7,
      title: 'AI Analytics',
      description: 'Advanced AI-powered analytics, predictive insights, and data-driven decision making to unlock business intelligence.',
      icon: "fas fa-chart-line",
      link: "/services/ai-analytics"
    },
    {
      id: 8,
      title: 'AI Infrastructure',
      description: 'Scalable AI infrastructure setup, cloud AI platforms, and AI-ready infrastructure to support your AI initiatives.',
      icon: "fas fa-server",
      link: "/services/ai-infrastructure"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-20"></div>
      
      <div className="container-custom relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="heading-2 mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            Our AI Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive AI solutions that drive intelligent automation and business transformation. 
            From AI services to automation and support, our expert team delivers cutting-edge AI technology that exceeds expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreServices.map((service, index) => (
            <div key={service.id} className="group">
              <Link href={service.link} className="block h-full">
                <div className="card-ai h-full p-6 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500 rounded-2xl"></div>
                  
                  {/* Service Icon */}
                  <div className="mb-6 flex justify-center relative z-10">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-lg group-hover:shadow-xl group-hover:animate-glow-pulse">
                      <i className={`${service.icon} text-white`}></i>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="text-center relative z-10">
                    <h3 className="heading-4 mb-4 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      {service.description}
                    </p>
                    
                    {/* Learn More Button */}
                    <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-indigo-700 transition-colors duration-300">
                      {t('common.learnMore')}
                      <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/0 to-transparent rounded-bl-full group-hover:from-blue-500/10 transition-all duration-300"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-16">
          <Link href="/services" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            {t('common.viewAll')} {t('nav.services')}
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
