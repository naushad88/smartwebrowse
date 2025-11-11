import type { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Application Testing Services | QA & Performance Testing',
  description: 'Expert application testing: automated testing, performance testing, security testing & QA optimization. Ensure your apps are robust & secure.',
  keywords: 'application testing, automated testing, performance testing, security testing, QA services',
  openGraph: {
    title: 'Application Testing Services | QA & Performance Testing',
    description: 'Expert application testing: automated testing, performance testing, security testing & QA optimization. Ensure your apps are robust & secure.',
    url: 'https://www.smartwebrowse.com/services/application-testing',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/application-testing',
  },
};

export default function ApplicationTestingPage() {
  const testingServices = [
    {
      title: 'Automated Testing',
      description: 'Streamline your testing process with comprehensive automation solutions that improve efficiency and reduce manual errors.',
      features: [
        'Test automation framework design and implementation',
        'Selenium, Cypress, and Playwright automation',
        'API testing automation with Postman and RestAssured',
        'Mobile app testing automation',
        'Continuous testing integration with CI/CD pipelines',
        'Test data management and test environment setup'
      ],
      icon: 'fas fa-robot',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Performance Testing',
      description: 'Ensure your applications perform optimally under various load conditions and identify performance bottlenecks.',
      features: [
        'Load testing and stress testing',
        'Performance monitoring and analysis',
        'Database performance optimization',
        'Cloud performance testing',
        'Mobile app performance testing',
        'Performance reporting and recommendations'
      ],
      icon: 'fas fa-tachometer-alt',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Security Testing',
      description: 'Identify and fix security vulnerabilities before they can be exploited by malicious actors.',
      features: [
        'Penetration testing and vulnerability assessment',
        'OWASP Top 10 security testing',
        'API security testing',
        'Mobile app security testing',
        'Security code review',
        'Compliance testing (OWASP, NIST)'
      ],
      icon: 'fas fa-shield-alt',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'QA Process Optimization',
      description: 'Optimize your quality assurance processes to improve efficiency, reduce costs, and enhance product quality.',
      features: [
        'QA process assessment and improvement',
        'Test strategy development',
        'Quality metrics and KPIs implementation',
        'Test automation roadmap planning',
        'Team training and skill development',
        'Quality culture implementation'
      ],
      icon: 'fas fa-chart-line',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const testingTools = [
    { name: 'Selenium', category: 'Web Automation', icon: 'fas fa-globe' },
    { name: 'Cypress', category: 'E2E Testing', icon: 'fas fa-route' },
    { name: 'Playwright', category: 'Cross-browser Testing', icon: 'fas fa-browser' },
    { name: 'JMeter', category: 'Performance Testing', icon: 'fas fa-chart-bar' },
    { name: 'Postman', category: 'API Testing', icon: 'fas fa-plug' },
    { name: 'Appium', category: 'Mobile Testing', icon: 'fas fa-mobile-alt' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">Application Testing Services</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            Ensure your applications are robust, secure, and performant with our 
            comprehensive testing services and quality assurance solutions.
          </p>
        </div>
      </section>

      {/* Testing Services */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Our Testing Services
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We offer end-to-end testing solutions that cover every aspect of your 
              application's quality, performance, and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-neutral-100 transition-all duration-300 hover:-translate-y-1 group">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-2xl mr-4 shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <i className={service.icon}></i>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 group-hover:text-primary-700 transition-colors duration-300">{service.title}</h3>
                  </div>
                  <p className="text-neutral-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-neutral-700 text-sm">
                        <i className="fas fa-check text-primary-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200 group-hover:translate-x-1"
                  >
                    Learn More
                    <i className="fas fa-arrow-right ml-2 transition-transform duration-300"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Tools */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="heading-2 mb-3 text-gray-900">
              Testing Tools & Technologies
            </h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              We leverage industry-leading testing tools and frameworks to deliver 
              comprehensive and reliable testing solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {testingTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 border border-neutral-100 hover:border-primary-200 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-lg mx-auto mb-3 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <i className={tool.icon}></i>
                </div>
                <h3 className="text-sm font-bold text-neutral-800 mb-1 group-hover:text-primary-700 transition-colors duration-300">{tool.name}</h3>
                <p className="text-xs text-neutral-600 leading-tight">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Why Choose Our Testing Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with industry best practices to deliver 
              testing solutions that improve your application quality and user experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-certificate"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary-700 transition-colors duration-300">Certified Testers</h3>
              <p className="text-neutral-600">ISTQB certified professionals with deep testing expertise.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary-700 transition-colors duration-300">Fast Delivery</h3>
              <p className="text-neutral-600">Quick turnaround times without compromising quality.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary-700 transition-colors duration-300">Proven Results</h3>
              <p className="text-neutral-600">Track record of improving application quality and performance.</p>
            </div>
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Improve Your Application Quality?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get a free testing assessment and discover how we can help improve your 
                application's quality, performance, and security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free Testing Assessment
                </Link>
                <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  View All Services
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
