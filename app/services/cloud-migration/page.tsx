import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cloud Migration & Architecture | Smartwebrowse India Private Limited',
  description: 'Expert cloud migration services and architecture design to help you move to the cloud efficiently and securely.',
  keywords: 'Cloud Migration, Cloud Architecture, AWS Migration, Azure Migration, Google Cloud Migration, Cloud Strategy',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/cloud-migration',
  },
};

export default function CloudMigrationPage() {
  const features = [
    'Cloud readiness assessment and planning',
    'Application migration strategy development',
    'Data migration and synchronization',
    'Cloud architecture design and optimization',
    'Performance testing and optimization',
    'Security and compliance implementation',
    'Cost optimization and monitoring setup',
    'Post-migration support and optimization'
  ];

  const benefits = [
    {
      title: 'Reduced Costs',
      description: 'Lower infrastructure and operational costs',
      icon: 'fa-solid fa-dollar-sign'
    },
    {
      title: 'Improved Performance',
      description: 'Enhanced scalability and performance',
      icon: 'fa-solid fa-rocket'
    },
    {
      title: 'Enhanced Security',
      description: 'Advanced security features and compliance',
      icon: 'fa-solid fa-shield-alt'
    },
    {
      title: 'Business Agility',
      description: 'Faster deployment and innovation',
      icon: 'fa-solid fa-lightning-bolt'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-primary-900">
              Cloud Migration & Architecture
            </h1>
            <p className="text-lg md:text-xl text-primary-700 mb-8 leading-relaxed">
              Expert cloud migration services and architecture design to help you 
              move to the cloud efficiently and securely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="btn-primary text-lg px-8 py-4">
                Get Free Consultation
              </Link>
              <Link href="/services/cloud-services" className="btn-outline text-lg px-8 py-4 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
                View All Cloud Services
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
                Seamless Cloud Transformation
              </h2>
              <p className="text-body text-gray-600 mb-6">
                Our cloud migration services help organizations move their applications, 
                data, and infrastructure to the cloud with minimal disruption and maximum benefits.
              </p>
              <p className="text-body text-gray-600 mb-6">
                We design scalable cloud architectures that optimize performance, 
                reduce costs, and ensure security and compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation" className="btn-primary">
                  Get Free Cloud Assessment
                </Link>
                <Link href="/services/aws-cloud-services" className="btn-outline">
                  Learn About AWS Services
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="heading-3 mb-6 text-gray-900">What We Deliver</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Migration Strategy</h4>
                    <p className="text-gray-600">Comprehensive planning and roadmap for cloud migration</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cloud Architecture</h4>
                    <p className="text-gray-600">Scalable and secure cloud infrastructure design</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Implementation Support</h4>
                    <p className="text-gray-600">Expert guidance throughout the migration process</p>
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
              Comprehensive Cloud Migration Features
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Our cloud migration solutions cover all aspects of the migration process, 
              ensuring a smooth transition to the cloud.
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
              Why Choose Our Cloud Migration Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results that enhance your cloud capabilities and 
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Move to the Cloud?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our cloud migration services can help you transform 
                your infrastructure and achieve your cloud goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Schedule Free Consultation
                </Link>
                <Link href="/services/cloud-services" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  View All Cloud Services
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





