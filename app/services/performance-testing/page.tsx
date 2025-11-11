import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Performance Testing | Smartwebrowse India Private Limited',
  description: 'Comprehensive performance testing services to ensure your applications perform optimally under various load conditions.',
  keywords: 'Performance Testing, Load Testing, Stress Testing, JMeter, Performance Optimization, Scalability Testing',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/performance-testing',
  },
};

export default function PerformanceTestingPage() {
  const features = [
    'Load testing and stress testing',
    'Performance monitoring and analysis',
    'Scalability and capacity planning',
    'Performance optimization recommendations',
    'Database performance testing',
    'API performance testing',
    'Mobile app performance testing',
    'Performance testing automation'
  ];

  const benefits = [
    {
      title: 'Better Performance',
      description: 'Identify and fix performance bottlenecks',
      icon: 'fa-solid fa-tachometer-alt'
    },
    {
      title: 'Scalability',
      description: 'Ensure your app can handle growth',
      icon: 'fa-solid fa-expand-arrows-alt'
    },
    {
      title: 'User Experience',
      description: 'Improve application responsiveness',
      icon: 'fa-solid fa-user-check'
    },
    {
      title: 'Cost Optimization',
      description: 'Optimize resource usage and costs',
      icon: 'fa-solid fa-dollar-sign'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 pt-24 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-primary-900">
              Performance Testing
            </h1>
            <p className="text-lg md:text-xl text-primary-700 mb-8 leading-relaxed">
              Comprehensive performance testing services to ensure your applications 
              perform optimally under various load conditions.
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
                Optimize Your Application Performance
              </h2>
              <p className="text-body text-gray-600 mb-6">
                Our performance testing services help organizations identify performance 
                bottlenecks, optimize application speed, and ensure scalability.
              </p>
              <p className="text-body text-gray-600 mb-6">
                We use industry-standard tools and methodologies to provide comprehensive 
                performance analysis and optimization recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation" className="btn-primary">
                  Get Free Testing Assessment
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
                    <h4 className="font-semibold text-gray-900">Performance Analysis</h4>
                    <p className="text-gray-600">Comprehensive performance evaluation and reporting</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Load Testing</h4>
                    <p className="text-gray-600">Test application behavior under various load conditions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Optimization</h4>
                    <p className="text-gray-600">Performance improvement recommendations and implementation</p>
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
              Comprehensive Performance Testing Features
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Our performance testing solutions cover all aspects of application 
              performance, ensuring optimal user experience and scalability.
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
              Why Choose Our Performance Testing Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results that enhance your application performance and 
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Performance?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our performance testing services can help you improve 
                application speed and user experience.
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
