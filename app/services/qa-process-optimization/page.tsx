import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'QA Process Optimization | Smartwebrowse India Private Limited',
  description: 'Optimize your QA processes to improve software quality, reduce testing time, and increase development efficiency.',
  keywords: 'QA Process Optimization, Quality Assurance, Testing Process, QA Automation, Process Improvement, Software Quality',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/qa-process-optimization',
  },
};

export default function QAProcessOptimizationPage() {
  const features = [
    'QA process assessment and analysis',
    'Testing strategy development and optimization',
    'Test case design and management optimization',
    'Defect management process improvement',
    'QA metrics and reporting implementation',
    'Continuous improvement methodologies',
    'Team training and skill development',
    'QA tool evaluation and implementation'
  ];

  const benefits = [
    {
      title: 'Improved Quality',
      description: 'Better software quality and fewer defects',
      icon: 'fa-solid fa-star'
    },
    {
      title: 'Faster Delivery',
      description: 'Reduced testing time and faster releases',
      icon: 'fa-solid fa-rocket'
    },
    {
      title: 'Cost Efficiency',
      description: 'Optimized resource usage and reduced costs',
      icon: 'fa-solid fa-dollar-sign'
    },
    {
      title: 'Team Productivity',
      description: 'Enhanced team efficiency and collaboration',
      icon: 'fa-solid fa-users'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-primary-900">
              QA Process Optimization
            </h1>
            <p className="text-lg md:text-xl text-primary-700 mb-8 leading-relaxed">
              Optimize your QA processes to improve software quality, reduce testing time, 
              and increase development efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="btn-primary text-lg px-8 py-4">
                Get Free Consultation
              </Link>
              <Link href="/services/application-testing" className="btn-outline text-lg px-8 py-4 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
                View All Testing Services
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
                Streamline Your QA Processes
              </h2>
              <p className="text-body text-gray-600 mb-6">
                Our QA process optimization services help organizations improve their 
                testing methodologies, reduce inefficiencies, and enhance overall software quality.
              </p>
              <p className="text-body text-gray-600 mb-6">
                We analyze your current QA processes, identify areas for improvement, 
                and implement optimized workflows that increase efficiency and effectiveness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation" className="btn-primary">
                  Get Free QA Assessment
                </Link>
                <Link href="/services/automated-testing" className="btn-outline">
                  Learn About Automated Testing
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="heading-3 mb-6 text-gray-900">What We Deliver</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Process Analysis</h4>
                    <p className="text-gray-600">Comprehensive evaluation of current QA processes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Optimization Strategy</h4>
                    <p className="text-gray-600">Tailored improvement recommendations and implementation plan</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Implementation Support</h4>
                    <p className="text-gray-600">Expert guidance throughout the optimization process</p>
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
              Comprehensive QA Process Optimization Features
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Our QA process optimization solutions cover all aspects of process improvement, 
              ensuring comprehensive optimization and efficiency gains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <i className="fa-solid fa-check text-green-500 mt-1 mr-3 text-lg"></i>
                <span className="text-gray-700">{feature}</span>
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
              Why Choose Our QA Process Optimization Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results that enhance your QA capabilities and 
              support your business objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  <i className={benefit.icon}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your QA Processes?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our QA process optimization services can help you improve 
                software quality and testing efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Schedule Free Consultation
                </Link>
                <Link href="/services/application-testing" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  View All Testing Services
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





