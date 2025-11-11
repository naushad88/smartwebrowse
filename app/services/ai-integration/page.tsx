import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Integration Services | Smartwebrowse India Private Limited',
  description: 'Integrate artificial intelligence into your applications to automate processes, improve user experience, and gain competitive advantages. Expert AI integration services from leading AI startup.',
  keywords: 'AI Integration, Artificial Intelligence, Machine Learning, AI Development, Automation, Smart Applications, AI Services',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/ai-integration',
  },
};

export default function AIIntegrationPage() {
  const features = [
    'AI-powered chatbot and virtual assistant integration',
    'Machine learning model development and deployment',
    'Natural language processing (NLP) implementation',
    'Computer vision and image recognition',
    'Predictive analytics and data insights',
    'AI-powered recommendation systems',
    'Process automation with AI',
    'AI model training and optimization'
  ];

  const benefits = [
    {
      title: 'Automation',
      description: 'Streamline processes and reduce manual work',
      icon: 'fa-solid fa-robot'
    },
    {
      title: 'Better Insights',
      description: 'Data-driven decision making and analytics',
      icon: 'fa-solid fa-chart-line'
    },
    {
      title: 'User Experience',
      description: 'Personalized and intelligent interactions',
      icon: 'fa-solid fa-user-check'
    },
    {
      title: 'Competitive Edge',
      description: 'Stay ahead with cutting-edge AI technology',
      icon: 'fa-solid fa-trophy'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-primary-900">
              AI Integration Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-700 mb-8 leading-relaxed">
              Integrate artificial intelligence into your applications to automate processes, 
              improve user experience, and gain competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="btn-primary text-lg px-8 py-4">
                Get Free Consultation
              </Link>
              <Link href="/services/all-development-services" className="btn-outline text-lg px-8 py-4 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
                View All Development Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-6 text-gray-900">
                Transform Your Business with AI
              </h2>
              <p className="text-body text-gray-600 mb-6">
                Our AI integration services help organizations leverage artificial intelligence 
                to automate processes, gain insights, and create intelligent applications.
              </p>
              <p className="text-body text-gray-600 mb-6">
                We develop and integrate AI solutions that are tailored to your business needs, 
                ensuring seamless integration and measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation" className="btn-primary">
                  Schedule Free AI Assessment
                </Link>
                <Link href="/services/all-development-services" className="btn-outline">
                  Learn About Custom Development
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-8">
              <h3 className="heading-3 mb-6 text-neutral-800">What We Deliver</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">AI Strategy</h4>
                    <p className="text-neutral-600">Comprehensive AI roadmap and implementation plan</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">AI Development</h4>
                    <p className="text-neutral-600">Custom AI models and intelligent applications</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Integration Support</h4>
                    <p className="text-neutral-600">Seamless AI integration with existing systems</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Comprehensive AI Integration Features
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Our AI integration solutions cover all aspects of artificial intelligence, 
              ensuring comprehensive functionality and intelligent automation.
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

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Why Choose Our AI Integration Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results that enhance your business intelligence and 
              support your growth objectives.
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom text-center">
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 shadow-2xl">
            {/* Background pattern with dots */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 rounded-3xl" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Integrate AI?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI integration services can help you transform 
                your business with intelligent automation and insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free Consultation
                </Link>
                <Link href="/services/ai-web-development" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  View All Development Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mobile CTA Button */}
      <MobileCTA href="/get-a-quote" bgColor="bg-[#0ea5e9]" hoverColor="hover:bg-[#0284c7]" ringColor="focus:ring-[#0ea5e9]" />    </div>
  );
}





