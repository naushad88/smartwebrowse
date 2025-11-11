import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WordPress & CMS Development | Smartwebrowse India Private Limited',
  description: 'Professional WordPress and CMS development services to create powerful, scalable, and easy-to-manage websites and applications.',
  keywords: 'WordPress Development, CMS Development, Website Development, Content Management, Custom Themes, WordPress Plugins',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/wordpress-cms-development',
  },
};

export default function WordPressCMSDevelopmentPage() {
  const features = [
    'Custom WordPress theme development',
    'WordPress plugin development and customization',
    'CMS migration and optimization',
    'E-commerce integration with WooCommerce',
    'Performance optimization and caching',
    'Security hardening and maintenance',
    'SEO optimization and mobile responsiveness',
    'Content management system training'
  ];

  const benefits = [
    {
      title: 'Easy Management',
      description: 'User-friendly content management system',
      icon: 'fa-solid fa-cogs'
    },
    {
      title: 'SEO Friendly',
      description: 'Built-in SEO features and optimization',
      icon: 'fa-solid fa-search'
    },
    {
      title: 'Scalability',
      description: 'Grows with your business needs',
      icon: 'fa-solid fa-expand-arrows-alt'
    },
    {
      title: 'Cost Effective',
      description: 'Affordable development and maintenance',
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
              WordPress & CMS Development
            </h1>
            <p className="text-lg md:text-xl text-primary-700 mb-8 leading-relaxed">
              Professional WordPress and CMS development services to create powerful, 
              scalable, and easy-to-manage websites and applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="btn-primary text-lg px-8 py-4">
                Get Free Consultation
              </Link>
              <Link href="/services/ai-web-development" className="btn-outline text-lg px-8 py-4 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
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
                Build Powerful Websites with WordPress
              </h2>
              <p className="text-body text-gray-600 mb-6">
                Our WordPress and CMS development services help businesses create 
                professional websites that are easy to manage and scale.
              </p>
              <p className="text-body text-gray-600 mb-6">
                We develop custom WordPress solutions with modern technologies, 
                ensuring performance, security, and user experience optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation" className="btn-primary">
                  Get Free Development Assessment
                </Link>
                <Link href="/services/custom-web-development" className="btn-outline">
                  Learn About Custom Development
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="heading-3 mb-6 text-gray-900">What We Deliver</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Website</h4>
                    <p className="text-gray-600">Tailored WordPress solution for your business needs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Content Management</h4>
                    <p className="text-gray-600">Easy-to-use CMS for content updates and management</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Training & Support</h4>
                    <p className="text-gray-600">Comprehensive training and ongoing support</p>
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
              Comprehensive WordPress & CMS Features
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Our WordPress and CMS solutions cover all aspects of website development, 
              ensuring comprehensive functionality and user experience.
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
              Why Choose Our WordPress & CMS Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results that enhance your online presence and 
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your WordPress Website?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our WordPress and CMS development services can help you 
                create a powerful and manageable website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Schedule Free Consultation
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
