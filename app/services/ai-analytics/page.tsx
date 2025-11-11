import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Analytics Services | Predictive Analytics & Business Intelligence | Smartwebrowse',
  description: 'Advanced AI-powered analytics, predictive insights, and data-driven decision making to unlock business intelligence and drive informed decisions.',
  keywords: 'AI Analytics, Predictive Analytics, Business Intelligence, AI-Powered Analytics, Data Analytics, AI Insights',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/ai-analytics',
  },
};

export default function AIAnalyticsPage() {
  const features = [
    'AI-powered predictive analytics and forecasting',
    'Advanced data analytics and business intelligence',
    'Real-time analytics and insights dashboards',
    'Machine learning-based data analysis',
    'Customer behavior analytics and segmentation',
    'Sales and revenue analytics',
    'Operational analytics and performance metrics',
    'Custom analytics solutions and reporting'
  ];

  const benefits = [
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions with AI-powered analytics and insights',
      icon: 'fa-solid fa-chart-bar'
    },
    {
      title: 'Predictive Insights',
      description: 'Forecast trends and outcomes with predictive analytics',
      icon: 'fa-solid fa-crystal-ball'
    },
    {
      title: 'Real-Time Analytics',
      description: 'Get real-time insights and analytics dashboards',
      icon: 'fa-solid fa-clock'
    },
    {
      title: 'Business Intelligence',
      description: 'Unlock business intelligence with advanced AI analytics',
      icon: 'fa-solid fa-brain'
    }
  ];

  return (
    <div>
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-primary-900">
              AI Analytics Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-700 mb-8 leading-relaxed">
              Advanced AI-powered analytics, predictive insights, and data-driven decision making 
              to unlock business intelligence and drive informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="btn-primary text-lg px-8 py-4">
                Get Free Analytics Consultation
              </Link>
              <Link href="/services" className="btn-outline text-lg px-8 py-4 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-6 text-gray-900">
                Transform Data into Business Intelligence
              </h2>
              <p className="text-body text-gray-600 mb-6">
                Our AI analytics services help organizations unlock the power of their data 
                with advanced analytics, predictive insights, and business intelligence solutions.
              </p>
              <p className="text-body text-gray-600 mb-6">
                From predictive analytics to real-time insights and custom analytics solutions, 
                we deliver AI-powered analytics that drive data-driven decision making and business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation" className="btn-primary">
                  Schedule Analytics Assessment
                </Link>
                <Link href="/services/ai-services-provider" className="btn-outline">
                  Learn About AI Services
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-8">
              <h3 className="heading-3 mb-6 text-neutral-800">Analytics Solutions</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Predictive Analytics</h4>
                    <p className="text-neutral-600">Forecast trends and outcomes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Business Intelligence</h4>
                    <p className="text-neutral-600">Advanced BI and analytics dashboards</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Real-Time Analytics</h4>
                    <p className="text-neutral-600">Live insights and analytics</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Custom Analytics</h4>
                    <p className="text-neutral-600">Tailored analytics solutions</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Comprehensive AI Analytics Features
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Our AI analytics services cover all aspects of data analytics and business intelligence, 
              ensuring comprehensive insights and decision support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <i className="fa-solid fa-check text-accent-500 mt-1 mr-3 text-lg"></i>
                <span className="text-neutral-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Why Choose Our AI Analytics Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We deliver actionable insights that drive data-driven decision making and 
              support your business growth objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <i className={benefit.icon}></i>
                </div>
                <h3 className="text-lg font-bold text-neutral-800 mb-3 group-hover:text-primary-700 transition-colors duration-300">{benefit.title}</h3>
                <p className="text-neutral-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom text-center">
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 rounded-3xl" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready for AI Analytics?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI analytics services can help you unlock business intelligence 
                and drive data-driven decision making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free Consultation
                </Link>
                <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <MobileCTA href="/get-a-quote" bgColor="bg-[#0ea5e9]" hoverColor="hover:bg-[#0284c7]" ringColor="focus:ring-[#0ea5e9]" />
    </div>
  );
}

