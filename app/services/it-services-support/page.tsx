import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IT Services & Support | Smartwebrowse India Private Limited',
  description: 'Comprehensive IT services and support including 24/7 IT support, help desk services, network management, and infrastructure support.',
  keywords: 'IT services, IT support, help desk, network management, infrastructure support, 24/7 support',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/it-services-support',
  },
};

export default function ITServicesSupportPage() {
  const services = [
    {
      title: '24/7 IT Support',
      description: 'Round-the-clock IT support and monitoring to ensure your systems are always running smoothly.',
      features: [
        '24/7 monitoring and alerting',
        'Immediate incident response',
        'Proactive system maintenance',
        'Emergency support hotline',
        'Real-time status updates'
      ],
      icon: 'fas fa-clock',
      link: '/services/24-7-it-support'
    },
    {
      title: 'Help Desk Services',
      description: 'Professional help desk support to resolve technical issues and provide user assistance.',
      features: [
        'Multi-channel support (phone, email, chat)',
        'Ticket management system',
        'Knowledge base creation',
        'User training and guidance',
        'Performance metrics and reporting'
      ],
      icon: 'fas fa-headset',
      link: '/services/help-desk-services'
    },
    {
      title: 'Network Management',
      description: 'Comprehensive network infrastructure management and optimization services.',
      features: [
        'Network monitoring and maintenance',
        'Performance optimization',
        'Security implementation',
        'Bandwidth management',
        'Network documentation'
      ],
      icon: 'fas fa-network-wired',
      link: '/services/network-management'
    },
    {
      title: 'IT Infrastructure Support',
      description: 'End-to-end IT infrastructure support including hardware, software, and cloud systems.',
      features: [
        'Hardware maintenance and upgrades',
        'Software installation and updates',
        'Cloud infrastructure management',
        'Backup and disaster recovery',
        'Capacity planning and scaling'
      ],
      icon: 'fas fa-server',
      link: '/services/it-infrastructure-support'
    }
  ];

  const benefits = [
    {
      title: '24/7 Availability',
      description: 'Round-the-clock support ensures your business never experiences downtime',
      icon: 'fas fa-clock'
    },
    {
      title: 'Expert Team',
      description: 'Certified IT professionals with extensive experience in enterprise solutions',
      icon: 'fas fa-users'
    },
    {
      title: 'Proactive Monitoring',
      description: 'Prevent issues before they impact your business operations',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Cost Effective',
      description: 'Reduce IT overhead and focus on your core business activities',
      icon: 'fas fa-coins'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">IT Services & Support</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            Comprehensive IT services and support to keep your business running smoothly. 
            From 24/7 monitoring to infrastructure management, we ensure your technology 
            works for you, not against you.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-neutral-100 transition-all duration-300 hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-2xl mr-4 shadow-sm">
                      <i className={service.icon}></i>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-neutral-700">
                        <i className="fas fa-check text-accent-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
                  >
                    Learn More
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
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
              Why Choose Our IT Services & Support?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We provide reliable, professional IT services that keep your business 
              running smoothly and efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-sm">
                  <i className={benefit.icon}></i>
                </div>
                <h3 className="text-lg font-bold text-neutral-800 mb-3">{benefit.title}</h3>
                <p className="text-neutral-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
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
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready for Reliable IT Support?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services and support can help keep your 
                business running smoothly and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free IT Consultation
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
