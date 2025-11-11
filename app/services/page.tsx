
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
      color: 'from-blue-600 via-indigo-600 to-purple-600',
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
      color: 'from-cyan-600 via-blue-600 to-indigo-600',
      services: [
        { name: 'Process Automation', link: '/services/automation-services/process-automation' },
        { name: 'Workflow Automation', link: '/services/automation-services/workflow-automation' },
        { name: 'AI-Powered Automation', link: '/services/automation-services/ai-powered-automation' },
        { name: 'Business Process Automation', link: '/services/automation-services/business-process-automation' },
      ]
    },
    {
      title: 'AI Support & Maintenance',
      description: '24/7 AI system support and continuous monitoring',
      icon: 'fas fa-headset',
      color: 'from-purple-600 via-pink-600 to-rose-600',
      services: [
        { name: '24/7 AI Support', link: '/services/ai-support' },
        { name: 'AI System Maintenance', link: '/services/ai-support/ai-system-maintenance' },
        { name: 'AI Infrastructure Support', link: '/services/ai-infrastructure' },
        { name: 'AI Monitoring', link: '/services/ai-support/ai-monitoring' },
      ]
    },
    {
      title: 'AI Solutions',
      description: 'Advanced AI analytics and intelligent infrastructure',
      icon: 'fas fa-chart-line',
      color: 'from-orange-600 via-red-600 to-pink-600',
      services: [
        { name: 'AI Analytics', link: '/services/ai-analytics' },
        { name: 'AI Infrastructure', link: '/services/ai-infrastructure' },
        { name: 'Custom AI Solutions', link: '/services/ai-development' },
        { name: 'AI Training & Implementation', link: '/services/ai-consulting' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 pt-28 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 neural-pattern opacity-20"></div>
        <div className="absolute inset-0 circuit-pattern opacity-15 animate-circuit-flow"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>

        <div className="container-custom relative z-10 text-center">
          <div className="inline-block mb-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full">
              Our Services
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            Our AI Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI solutions that drive digital transformation and business growth.
            From AI services to automation and AI support, we deliver results that exceed expectations.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="card-ai h-full hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden">
                  {/* Gradient Header */}
                  <div className={`p-6 bg-gradient-to-r ${category.color} text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 neural-pattern opacity-20"></div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <i className={`${category.icon} text-2xl text-white`}></i>
                        </div>
                        <h3 className="text-2xl font-bold">{category.title}</h3>
                      </div>
                      <p className="text-blue-100 text-sm leading-relaxed">{category.description}</p>
                    </div>
                  </div>
                  
                  {/* Services List */}
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <Link 
                            href={service.link}
                            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 group/item"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mr-3 group-hover/item:from-blue-100 group-hover/item:to-indigo-100 transition-all duration-300">
                              <i className="fas fa-arrow-right text-xs text-blue-600"></i>
                            </div>
                            <span className="font-medium">{service.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-gray-200">
                      <Link 
                        href={getCategoryLink(category.title)}
                        className="inline-flex items-center text-blue-600 font-bold hover:text-indigo-700 transition-colors duration-200 group/link"
                      >
                        View All {category.title}
                        <i className="fas fa-arrow-right ml-2 group-hover/link:translate-x-2 transition-transform duration-300"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 neural-pattern opacity-20"></div>
        <div className="absolute inset-0 circuit-pattern opacity-15 animate-circuit-flow"></div>
        
        <div className="container-custom relative z-10 text-center">
          <div
            className="relative overflow-hidden bg-gradient-to-r from-blue-600/90 via-indigo-600/90 to-purple-600/90 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our AI services and automation solutions can help transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/consultation" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Free Consultation
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center px-8 py-4 glass-effect border-2 border-white/40 text-white rounded-xl font-bold hover:bg-white/10 hover:border-white/60 transition-all duration-300"
              >
                Learn More About Us
                <i className="fas fa-chevron-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
