import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Services | Automation, AI Support & AI Solutions',
  description: 'Comprehensive AI services: AI services provider, automation services, AI support, AI consulting, AI integration, AI development, AI analytics & AI infrastructure. Expert AI solutions for business transformation.',
  keywords: 'AI services, automation services, AI support, AI consulting, AI integration, AI development, AI analytics, AI infrastructure, artificial intelligence',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services',
  },
  openGraph: {
    title: 'AI Services | Automation, AI Support & AI Solutions',
    description: 'Comprehensive AI services: AI services provider, automation services, AI support, AI consulting, AI integration, AI development, AI analytics & AI infrastructure. Expert AI solutions for business transformation.',
    url: 'https://www.smartwebrowse.com/services',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
};

// Function to get correct category links
function getCategoryLink(title: string): string {
  const linkMap: { [key: string]: string } = {
    'AI Services': '/services/ai-services-provider',
    'Automation Services': '/services/automation-services',
    'AI Support & Maintenance': '/services/ai-support',
    'AI Solutions': '/services/ai-analytics',
  };
  return linkMap[title] || '/services';
}

export default async function ServicesPage() {

  const serviceCategories = [
    {
      title: 'AI Services',
      description: 'Comprehensive AI solutions and AI consulting services',
      icon: 'fas fa-brain',
      color: 'from-blue-500 to-blue-600',
      services: [
        { name: 'AI Services Provider', link: '/services/ai-services-provider' },
        { name: 'AI Consulting', link: '/services/ai-consulting' },
        { name: 'AI Integration', link: '/services/ai-integration' },
        { name: 'AI Development', link: '/services/ai-development' },
      ]
    },
    {
      title: 'Automation Services',
      description: 'Intelligent process and workflow automation solutions',
      icon: 'fas fa-robot',
      color: 'from-green-500 to-green-600',
      services: [
        { name: 'Process Automation', link: '/services/automation-services' },
        { name: 'Workflow Automation', link: '/services/automation-services' },
        { name: 'AI-Powered Automation', link: '/services/automation-services' },
        { name: 'Business Process Automation', link: '/services/automation-services' },
      ]
    },
    {
      title: 'AI Support & Maintenance',
      description: '24/7 AI system support and continuous monitoring',
      icon: 'fas fa-headset',
      color: 'from-purple-500 to-purple-600',
      services: [
        { name: '24/7 AI Support', link: '/services/ai-support' },
        { name: 'AI System Maintenance', link: '/services/ai-support' },
        { name: 'AI Infrastructure Support', link: '/services/ai-infrastructure' },
        { name: 'AI Monitoring', link: '/services/ai-support' },
      ]
    },
    {
      title: 'AI Solutions',
      description: 'Advanced AI analytics and intelligent infrastructure',
      icon: 'fas fa-chart-line',
      color: 'from-orange-500 to-orange-600',
      services: [
        { name: 'AI Analytics', link: '/services/ai-analytics' },
        { name: 'AI Infrastructure', link: '/services/ai-infrastructure' },
        { name: 'Custom AI Solutions', link: '/services/ai-development' },
        { name: 'AI Training & Implementation', link: '/services/ai-consulting' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">Our AI Services</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            Comprehensive AI solutions that drive intelligent automation and business transformation.
            From AI services to automation and support, we deliver cutting-edge AI technology that exceeds expectations.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`p-6 rounded-t-xl bg-gradient-to-r ${category.color} text-white`}>
                  <div className="flex items-center mb-4">
                    <i className={`${category.icon} text-3xl mr-3`}></i>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <p className="text-gray-100">{category.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link 
                          href={service.link}
                          className="flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-200"
                        >
                          <i className="fas fa-arrow-right text-sm mr-2 text-primary-500"></i>
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <Link 
                      href={getCategoryLink(category.title)}
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
                    >
                      View All {category.title}
                      <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                  </div>
                </div>
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
              <div className="absolute inset-0 rounded-3xl bg-white/20 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform with AI?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI services and automation solutions can help transform your business and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free Consultation
                </Link>
                <Link href="/about" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
