import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Consulting Services | Strategic AI Advisory | Smartwebrowse',
  description: 'Strategic AI advisory services to help you identify opportunities, plan AI implementation, and maximize ROI from AI investments.',
  keywords: 'AI Consulting, AI Advisory, AI Strategy, AI Implementation, AI Planning, AI Consulting Services',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/ai-consulting',
  },
};

export default function AIConsultingPage() {
  const features = [
    'AI strategy development and roadmap planning',
    'AI opportunity assessment and identification',
    'AI implementation planning and execution',
    'AI ROI analysis and business case development',
    'AI technology selection and vendor evaluation',
    'AI training and change management',
    'AI governance and best practices',
    'AI performance measurement and optimization'
  ];

  const benefits = [
    {
      title: 'Strategic Guidance',
      description: 'Expert AI consulting to guide your AI strategy and implementation',
      icon: 'fa-solid fa-lightbulb'
    },
    {
      title: 'Maximize ROI',
      description: 'Identify high-value AI opportunities and maximize return on investment',
      icon: 'fa-solid fa-chart-line'
    },
    {
      title: 'Risk Mitigation',
      description: 'Minimize risks with expert planning and proven methodologies',
      icon: 'fa-solid fa-shield-alt'
    },
    {
      title: 'Accelerated Implementation',
      description: 'Faster AI adoption with expert guidance and best practices',
      icon: 'fa-solid fa-rocket'
    }
  ];

  return (
    <div>
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-primary-900">
              AI Consulting Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-700 mb-8 leading-relaxed">
              Strategic AI advisory services to help you identify opportunities, plan AI implementation, 
              and maximize ROI from your AI investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="btn-primary text-lg px-8 py-4">
                Get Free AI Consultation
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
                Expert AI Consulting for Your Business
              </h2>
              <p className="text-body text-gray-600 mb-6">
                Our AI consulting services provide strategic guidance to help you navigate the 
                complexities of AI adoption and maximize the value of your AI investments.
              </p>
              <p className="text-body text-gray-600 mb-6">
                From AI strategy development to implementation planning and ROI optimization, 
                we help you identify opportunities, mitigate risks, and accelerate your AI journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation" className="btn-primary">
                  Schedule Free Consultation
                </Link>
                <Link href="/services/ai-services-provider" className="btn-outline">
                  Learn About AI Services
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-8">
              <h3 className="heading-3 mb-6 text-neutral-800">Consulting Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">AI Strategy</h4>
                    <p className="text-neutral-600">Develop comprehensive AI strategy and roadmap</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">AI Planning</h4>
                    <p className="text-neutral-600">Plan AI implementation and execution</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">AI Training</h4>
                    <p className="text-neutral-600">AI training and change management</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">AI Optimization</h4>
                    <p className="text-neutral-600">AI performance measurement and optimization</p>
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
              Comprehensive AI Consulting Services
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Our AI consulting covers all aspects of AI strategy, planning, and implementation, 
              ensuring successful AI adoption.
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
              Why Choose Our AI Consulting Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We deliver strategic guidance that helps you maximize ROI and accelerate 
              your AI transformation journey.
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready for AI Consulting?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI consulting services can help you develop a winning 
                AI strategy and maximize your AI investments.
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

