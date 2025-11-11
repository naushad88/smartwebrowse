import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Infrastructure Services | Scalable AI Infrastructure Setup | Smartwebrowse',
  description: 'Scalable AI infrastructure setup, cloud AI platforms, and AI-ready infrastructure to support your AI initiatives and ensure optimal performance.',
  keywords: 'AI Infrastructure, AI Infrastructure Setup, Cloud AI Platforms, AI-Ready Infrastructure, AI Infrastructure Services',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/ai-infrastructure',
  },
};

export default function AIInfrastructurePage() {
  const features = [
    'Scalable AI infrastructure design and setup',
    'Cloud AI platform deployment and configuration',
    'AI infrastructure optimization and tuning',
    'AI infrastructure monitoring and management',
    'AI infrastructure security and compliance',
    'AI infrastructure scaling and capacity planning',
    'AI infrastructure backup and disaster recovery',
    'AI infrastructure support and maintenance'
  ];

  const benefits = [
    {
      title: 'Scalable Architecture',
      description: 'Build scalable AI infrastructure that grows with your needs',
      icon: 'fa-solid fa-server'
    },
    {
      title: 'Cloud Integration',
      description: 'Leverage cloud AI platforms for flexibility and cost efficiency',
      icon: 'fa-solid fa-cloud'
    },
    {
      title: 'Optimal Performance',
      description: 'Optimized infrastructure for maximum AI performance',
      icon: 'fa-solid fa-tachometer-alt'
    },
    {
      title: 'Reliable Support',
      description: 'Comprehensive infrastructure support and maintenance',
      icon: 'fa-solid fa-headset'
    }
  ];

  return (
    <div>
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-primary-900">
              AI Infrastructure Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-700 mb-8 leading-relaxed">
              Scalable AI infrastructure setup, cloud AI platforms, and AI-ready infrastructure 
              to support your AI initiatives and ensure optimal performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="btn-primary text-lg px-8 py-4">
                Get Free Infrastructure Consultation
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
                Build Scalable AI Infrastructure
              </h2>
              <p className="text-body text-gray-600 mb-6">
                Our AI infrastructure services help organizations build and maintain scalable, 
                high-performance infrastructure to support their AI initiatives.
              </p>
              <p className="text-body text-gray-600 mb-6">
                From infrastructure design and setup to cloud AI platform deployment and ongoing 
                support, we deliver AI-ready infrastructure that ensures optimal performance and scalability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation" className="btn-primary">
                  Schedule Infrastructure Assessment
                </Link>
                <Link href="/services/ai-support" className="btn-outline">
                  Learn About AI Support
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-8">
              <h3 className="heading-3 mb-6 text-neutral-800">Infrastructure Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Infrastructure Setup</h4>
                    <p className="text-neutral-600">Design and deploy AI infrastructure</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Cloud AI Platforms</h4>
                    <p className="text-neutral-600">Deploy and configure cloud AI platforms</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Infrastructure Optimization</h4>
                    <p className="text-neutral-600">Optimize infrastructure for performance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Infrastructure Support</h4>
                    <p className="text-neutral-600">Ongoing infrastructure support and maintenance</p>
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
              Comprehensive AI Infrastructure Features
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Our AI infrastructure services cover all aspects of infrastructure design, deployment, 
              and management, ensuring reliable and scalable AI infrastructure.
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
              Why Choose Our AI Infrastructure Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We deliver scalable infrastructure that ensures optimal performance and 
              supports your AI initiatives.
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Build AI Infrastructure?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI infrastructure services can help you build scalable, 
                high-performance infrastructure for your AI initiatives.
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

