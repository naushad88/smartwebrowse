import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Support & Maintenance | 24/7 AI System Support | Smartwebrowse',
  description: '24/7 AI system support, AI infrastructure maintenance, and continuous monitoring services to ensure optimal AI performance and reliability.',
  keywords: 'AI Support, AI Maintenance, 24/7 AI Support, AI System Support, AI Infrastructure Support, AI Monitoring',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/ai-support',
  },
};

export default function AISupportPage() {
  const features = [
    '24/7 AI system monitoring and support',
    'AI infrastructure maintenance and optimization',
    'AI model performance monitoring',
    'Proactive AI system health checks',
    'AI system troubleshooting and issue resolution',
    'AI performance optimization and tuning',
    'AI security monitoring and updates',
    'Regular AI system updates and maintenance'
  ];

  const benefits = [
    {
      title: '24/7 Availability',
      description: 'Round-the-clock AI support ensuring your systems are always running optimally',
      icon: 'fa-solid fa-clock'
    },
    {
      title: 'Proactive Monitoring',
      description: 'Continuous monitoring to identify and resolve issues before they impact operations',
      icon: 'fa-solid fa-eye'
    },
    {
      title: 'Expert Team',
      description: 'Experienced AI professionals ready to support your AI systems',
      icon: 'fa-solid fa-users'
    },
    {
      title: 'Rapid Response',
      description: 'Quick response times to minimize downtime and ensure business continuity',
      icon: 'fa-solid fa-bolt'
    }
  ];

  return (
    <div>
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-primary-900">
              AI Support & Maintenance
            </h1>
            <p className="text-xl md:text-2xl text-primary-700 mb-8 leading-relaxed">
              24/7 AI system support, AI infrastructure maintenance, and continuous monitoring 
              to ensure optimal AI performance and reliability for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="btn-primary text-lg px-8 py-4">
                Get Free Support Consultation
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
                Reliable AI Support for Your Business
              </h2>
              <p className="text-body text-gray-600 mb-6">
                Our AI support services provide comprehensive maintenance, monitoring, and support 
                for your AI systems, ensuring optimal performance and reliability.
              </p>
              <p className="text-body text-gray-600 mb-6">
                With 24/7 AI support, proactive monitoring, and expert maintenance, we help you 
                maximize the value of your AI investments while minimizing downtime and operational issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation" className="btn-primary">
                  Schedule Support Assessment
                </Link>
                <Link href="/services/ai-infrastructure" className="btn-outline">
                  Learn About AI Infrastructure
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-8">
              <h3 className="heading-3 mb-6 text-neutral-800">Support Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">24/7 AI Support</h4>
                    <p className="text-neutral-600">Round-the-clock support for your AI systems</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">AI Monitoring</h4>
                    <p className="text-neutral-600">Continuous monitoring and health checks</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">AI Maintenance</h4>
                    <p className="text-neutral-600">Regular updates and system optimization</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Infrastructure Support</h4>
                    <p className="text-neutral-600">AI infrastructure management and support</p>
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
              Comprehensive AI Support Features
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Our AI support services cover all aspects of AI system maintenance and monitoring, 
              ensuring reliable and optimal performance.
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
              Why Choose Our AI Support Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We deliver reliable support that ensures your AI systems perform optimally 
              and support your business objectives.
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
              <h2 className="text-3xl font-bold text-white mb-4">Need Reliable AI Support?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our 24/7 AI support services can help ensure optimal 
                performance and reliability for your AI systems.
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

