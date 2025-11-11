import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Services Provider | Smartwebrowse India Private Limited',
  description: 'Comprehensive AI services provider offering AI consulting, custom AI development, AI-powered applications, and intelligent solutions to transform your business.',
  keywords: 'AI Services Provider, AI Services, AI Consulting, AI Development, Artificial Intelligence Services, AI Solutions',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/ai-services-provider',
  },
};

export default function AIServicesProviderPage() {
  const features = [
    'Comprehensive AI strategy and consulting',
    'Custom AI application development',
    'AI-powered business solutions',
    'Machine learning model development',
    'AI system integration and deployment',
    'AI training and implementation support',
    'AI performance optimization',
    'AI infrastructure setup and management'
  ];

  const benefits = [
    {
      title: 'Expert AI Team',
      description: 'Experienced AI professionals with deep expertise in machine learning and AI technologies',
      icon: 'fa-solid fa-users'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored AI solutions designed specifically for your business needs',
      icon: 'fa-solid fa-cogs'
    },
    {
      title: 'End-to-End Support',
      description: 'Complete AI services from strategy to implementation and ongoing support',
      icon: 'fa-solid fa-headset'
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful AI implementations across multiple industries',
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
              AI Services Provider
            </h1>
            <p className="text-xl md:text-2xl text-primary-700 mb-8 leading-relaxed">
              Comprehensive AI services provider delivering intelligent solutions, custom AI development, 
              and AI-powered applications to transform your business with cutting-edge artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="btn-primary text-lg px-8 py-4">
                Get Free AI Consultation
              </Link>
              <Link href="/services" className="btn-outline text-lg px-8 py-4 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
                View All AI Services
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
                Your Trusted AI Services Provider
              </h2>
              <p className="text-body text-gray-600 mb-6">
                As a leading AI services provider, we offer comprehensive artificial intelligence solutions 
                that help organizations leverage AI technology to automate processes, gain insights, and create 
                intelligent applications.
              </p>
              <p className="text-body text-gray-600 mb-6">
                Our AI services cover everything from AI strategy and consulting to custom AI development, 
                AI integration, and ongoing AI support. We deliver solutions tailored to your business needs, 
                ensuring seamless implementation and measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation" className="btn-primary">
                  Schedule Free AI Assessment
                </Link>
                <Link href="/services/ai-consulting" className="btn-outline">
                  Learn About AI Consulting
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-8">
              <h3 className="heading-3 mb-6 text-neutral-800">Our AI Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">AI Consulting</h4>
                    <p className="text-neutral-600">Strategic AI advisory and implementation planning</p>
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
                    <h4 className="font-semibold text-neutral-800">AI Integration</h4>
                    <p className="text-neutral-600">Seamless AI integration with existing systems</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">AI Support</h4>
                    <p className="text-neutral-600">24/7 AI system support and maintenance</p>
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
              Comprehensive AI Services
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Our AI services provider solutions cover all aspects of artificial intelligence, 
              ensuring comprehensive functionality and intelligent automation for your business.
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
              Why Choose Our AI Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results that enhance your business intelligence and 
              support your growth objectives with cutting-edge AI technology.
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
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 rounded-3xl" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Leverage AI Services?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI services provider solutions can help you transform 
                your business with intelligent automation and AI-powered insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free Consultation
                </Link>
                <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  View All AI Services
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

