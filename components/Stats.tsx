'use client';

import type { StatsData } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';

interface StatsProps {
  data?: StatsData;
}

const Stats = ({ data }: StatsProps) => {
  const { t } = useLanguage();
  
  // Default data if none provided
  const statsData = data || {
    clients: "500+",
    projects: "1000+",
    experience: "12+",
    support: "24/7",
    countries: "15+"
  };
  const stats = [
    {
      label: t('stats.happyClients'),
      value: statsData.clients,
      icon: 'fa-solid fa-users',
      suffix: '+',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      label: t('stats.projectsCompleted'),
      value: statsData.projects,
      icon: 'fa-solid fa-project-diagram',
      suffix: '+',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      label: t('stats.yearsExperience'),
      value: statsData.experience,
      icon: 'fa-solid fa-calendar-alt',
      suffix: '+',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      label: t('stats.countriesServed'),
      value: statsData.countries,
      icon: 'fa-solid fa-globe',
      suffix: '',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 neural-pattern opacity-30"></div>
      
      <div className="container-custom relative z-10">
        {/* Trusted by Leading Enterprises - More Compact */}
        <div className="mb-8 md:mb-12 text-center">
          <div className="card-ai p-4 md:p-6 max-w-3xl mx-auto">
            <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-2 md:mb-3">
              Trusted by Leading Enterprises
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We serve clients across multiple industries with our expertise in AI services, 
              automation, and AI support. Our proven AI track record speaks for itself.
            </p>
          </div>
        </div>

        {/* Stats Grid - Optimized for Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative card-ai p-3 md:p-5 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500 rounded-2xl"></div>
                
                {/* Icon - Smaller on mobile */}
                <div className="mb-2 md:mb-3 flex justify-center relative z-10">
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${stat.color} shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:animate-glow-pulse`}>
                    <i className={`${stat.icon} text-sm md:text-xl text-white`}></i>
                  </div>
                </div>

                {/* Number - Smaller on mobile */}
                <div className="mb-1 md:mb-2 relative z-10">
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-sm md:text-lg lg:text-xl font-bold text-blue-600 ml-1">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label - Smaller on mobile */}
                <h3 className="text-xs md:text-sm lg:text-base font-semibold text-gray-700 group-hover:text-blue-700 transition-colors duration-300 leading-tight relative z-10">
                  {stat.label}
                </h3>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 md:w-12 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
