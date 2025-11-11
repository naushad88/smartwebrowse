import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Automation Services | Smartwebrowse India Private Limited',
  description: 'Intelligent process automation, workflow automation, and AI-powered business process automation services to streamline operations and boost efficiency.',
  keywords: 'Automation Services, Process Automation, Workflow Automation, AI-Powered Automation, Business Process Automation, Intelligent Automation',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/automation-services',
  },
};

export default function AutomationServicesPage() {
  const features = [
    'Intelligent process automation and optimization',
    'Workflow automation and streamlining',
    'AI-powered business process automation',
    'Robotic process automation (RPA) implementation',
    'Document processing and data extraction automation',
    'Customer service automation',
    'Sales and marketing automation',
    'IT operations automation'
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Streamline operations and reduce manual work with intelligent automation',
      icon: 'fa-solid fa-tachometer-alt'
    },
    {
      title: 'Cost Reduction',
      description: 'Lower operational costs through automated processes',
      icon: 'fa-solid fa-dollar-sign'
    },
    {
      title: 'Improved Accuracy',
      description: 'Eliminate human errors with automated workflows',
      icon: 'fa-solid fa-check-circle'
    },
    {
      title: 'Scalability',
      description: 'Scale your operations without proportional cost increases',
      icon: 'fa-solid fa-chart-line'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-primary-900">
              Automation Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-700 mb-8 leading-relaxed">
              Intelligent process automation, workflow automation, and AI-powered business process automation 
              to streamline operations, reduce costs, and boost efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="btn-primary text-lg px-8 py-4">
                Get Free Automation Consultation
              </Link>
              <Link href="/services" className="btn-outline text-lg px-8 py-4 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
                View All Services
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
                Transform Operations with Intelligent Automation
              </h2>
              <p className="text-body text-gray-600 mb-6">
                Our automation services help organizations streamline processes, reduce manual work, 
                and improve operational efficiency through intelligent automation solutions.
              </p>
              <p className="text-body text-gray-600 mb-6">
                We deliver automation solutions that are tailored to your business needs, covering 
                process automation, workflow automation, and AI-powered business process automation 
                to drive measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation" className="btn-primary">
                  Schedule Free Automation Assessment
                </Link>
                <Link href="/services/ai-services-provider" className="btn-outline">
                  Learn About AI Services
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-8">
              <h3 className="heading-3 mb-6 text-neutral-800">Automation Solutions</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Process Automation</h4>
                    <p className="text-neutral-600">Automate repetitive business processes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Workflow Automation</h4>
                    <p className="text-neutral-600">Streamline workflows and improve efficiency</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">AI-Powered Automation</h4>
                    <p className="text-neutral-600">Intelligent automation with AI capabilities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-accent-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Business Process Automation</h4>
                    <p className="text-neutral-600">End-to-end business process automation</p>
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
              Comprehensive Automation Features
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Our automation services cover all aspects of process and workflow automation, 
              ensuring comprehensive functionality and operational efficiency.
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
              Why Choose Our Automation Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results that improve operational efficiency and 
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Automate Your Operations?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our automation services can help you streamline processes, 
                reduce costs, and improve efficiency.
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

