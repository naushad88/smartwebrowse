import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Development Services | Custom AI Application Development | Smartwebrowse',
  description: 'Custom AI application development, machine learning models, and intelligent solutions tailored to your business needs.',
  keywords: 'AI Development, Custom AI Applications, Machine Learning Development, AI Model Development, AI Solutions Development',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/ai-development',
  },
};

export default function AIDevelopmentPage() {
  const features = [
    'Custom AI application development',
    'Machine learning model development and training',
    'Deep learning and neural network development',
    'Natural language processing (NLP) development',
    'Computer vision and image recognition development',
    'AI chatbot and virtual assistant development',
    'AI recommendation system development',
    'AI model optimization and fine-tuning'
  ];

  const benefits = [
    {
      title: 'Custom Solutions',
      description: 'Tailored AI applications designed for your specific business needs',
      icon: 'fa-solid fa-code'
    },
    {
      title: 'Expert Development',
      description: 'Experienced AI developers with deep technical expertise',
      icon: 'fa-solid fa-users'
    },
    {
      title: 'End-to-End Service',
      description: 'Complete development from concept to deployment and support',
      icon: 'fa-solid fa-layer-group'
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful AI application deployments',
      icon: 'fa-solid fa-trophy'
    }
  ];

  return (
    <div>
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-primary-900">
              AI Development Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-700 mb-8 leading-relaxed">
              Custom AI application development, machine learning models, and intelligent solutions 
              tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="btn-primary text-lg px-8 py-4">
                Get Free Development Consultation
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
                Build Custom AI Applications
              </h2>
              <p className="text-body text-gray-600 mb-6">
                Our AI development services help organizations build custom AI applications, 
                machine learning models, and intelligent solutions that address specific business challenges.
              </p>
              <p className="text-body text-gray-600 mb-6">
                From AI application development to machine learning model training and deployment, 
                we deliver custom AI solutions that are tailored to your business needs and deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation" className="btn-primary">
                  Schedule Development Assessment
                </Link>
                <Link href="/services/ai-integration" className="btn-outline">
                  Learn About AI Integration
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-8">
              <h3 className="heading-3 mb-6 text-neutral-800">Development Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">AI Applications</h4>
                    <p className="text-neutral-600">Custom AI application development</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">ML Models</h4>
                    <p className="text-neutral-600">Machine learning model development</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">AI Solutions</h4>
                    <p className="text-neutral-600">Intelligent solutions development</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">AI Optimization</h4>
                    <p className="text-neutral-600">AI model optimization and fine-tuning</p>
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
              Comprehensive AI Development Features
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Our AI development services cover all aspects of AI application and model development, 
              ensuring comprehensive functionality and intelligent solutions.
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
              Why Choose Our AI Development Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We deliver custom AI solutions that address your specific business needs and 
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Develop AI Solutions?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI development services can help you build custom AI applications 
                and intelligent solutions for your business.
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

