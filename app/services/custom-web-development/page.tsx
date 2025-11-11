import type { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Web Development | Smartwebrowse India Private Limited',
  description: 'Professional custom web development services including responsive design, eCommerce solutions, and modern web applications.',
  openGraph: {
    title: 'Custom Web Development | Smartwebrowse India Private Limited',
    description: 'Professional custom web development services including responsive design, eCommerce solutions, and modern web applications.',
    url: 'https://www.smartwebrowse.com/services/custom-web-development',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/custom-web-development',
  },
};

export default function CustomWebDevelopmentPage() {
  const services = [
    {
      title: 'Responsive Web Design',
      description: 'Mobile-first, responsive websites that work perfectly on all devices',
      features: ['Mobile-first approach', 'Cross-browser compatibility', 'Performance optimization', 'SEO-friendly structure'],
      icon: 'fas fa-mobile-alt'
    },
    {
      title: 'eCommerce Solutions',
      description: 'Custom online stores with advanced features and payment integration',
      features: ['Shopping cart functionality', 'Payment gateway integration', 'Inventory management', 'Order processing'],
      icon: 'fas fa-shopping-cart'
    },
    {
      title: 'Web Applications',
      description: 'Custom web applications built with modern technologies',
      features: ['React/Next.js development', 'API integration', 'Database design', 'User authentication'],
      icon: 'fas fa-code'
    },
    {
      title: 'CMS Development',
      description: 'Content management systems for easy website updates',
      features: ['WordPress customization', 'Custom CMS development', 'Admin panel design', 'Content workflows'],
      icon: 'fas fa-edit'
    },
    {
      title: 'API Development',
      description: 'RESTful APIs and microservices for modern web applications',
      features: ['REST API design', 'GraphQL implementation', 'Authentication & authorization', 'API documentation'],
      icon: 'fas fa-plug'
    },
    {
      title: 'Performance Optimization',
      description: 'Speed optimization and performance tuning for better user experience',
      features: ['Code optimization', 'Image optimization', 'Caching strategies', 'CDN implementation'],
      icon: 'fas fa-tachometer-alt'
    }
  ];

  const technologies = [
    'React.js', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">Custom Web Development</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            Build modern, scalable web applications that drive business growth. 
            From responsive websites to complex web applications, we deliver excellence.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Comprehensive Web Development Services
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We specialize in modern web technologies and deliver custom solutions 
              that meet your business requirements and exceed user expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center text-white text-2xl mr-4 shadow-sm">
                      <i className={service.icon}></i>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-800">{service.title}</h3>
                  </div>
                  <p className="text-neutral-600 mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-neutral-700 text-sm">
                        <i className="fas fa-check text-accent-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Modern Technologies We Use
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build fast, scalable, and 
              maintainable web applications.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-100 hover:bg-purple-100 transition-colors duration-200 px-4 py-2 rounded-full text-gray-700 font-medium">
                {tech}
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Web Application?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create a custom solution that drives results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free Development Assessment
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
