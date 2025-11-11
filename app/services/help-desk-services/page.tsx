import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Help Desk Services | Smartwebrowse India Private Limited',
  description: 'Professional help desk support services with multi-channel support, ticket management, and user training. Resolve technical issues efficiently.',
  keywords: 'help desk services, IT support, ticket management, technical support, user assistance',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/help-desk-services',
  },
};

export default function HelpDeskServicesPage() {
  const features = [
    'Multi-channel support (phone, email, chat)',
    'Ticket management system',
    'Knowledge base creation',
    'User training and guidance',
    'Performance metrics and reporting',
    'Escalation procedures'
  ];

  const benefits = [
    {
      title: 'Multi-Channel Support',
      description: 'Get support through phone, email, chat, or ticketing system',
      icon: 'fas fa-headset'
    },
    {
      title: 'Fast Resolution',
      description: 'Efficient ticket management ensures quick issue resolution',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Knowledge Base',
      description: 'Self-service resources reduce support tickets and improve efficiency',
      icon: 'fas fa-book'
    },
    {
      title: 'User Training',
      description: 'Proactive training reduces common issues and improves productivity',
      icon: 'fas fa-graduation-cap'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">Help Desk Services</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            Professional help desk support to resolve technical issues and provide user assistance. 
            Multi-channel support with efficient ticket management and knowledge base solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/consultation" className="btn-primary">
              Get Free Help Desk Consultation
            </Link>
            <Link href="/services/it-services-support" className="btn-outline border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
              View All IT Services
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6 text-gray-900">
                Professional Help Desk Support
              </h2>
              <p className="text-body text-gray-600 mb-6">
                Our help desk services provide comprehensive technical support through multiple 
                channels, ensuring your users get the assistance they need quickly and efficiently.
              </p>
              <p className="text-body text-gray-600 mb-8">
                With advanced ticket management, knowledge base creation, and user training, 
                we help reduce support tickets and improve overall IT efficiency in your organization.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <i className="fas fa-check text-accent-500"></i>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-3xl mx-auto mb-4">
                  <i className="fas fa-headset"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Help Desk</h3>
                <p className="text-gray-600">Professional Support</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Channels</span>
                  <span className="font-semibold text-gray-900">Multi-platform</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-semibold text-gray-900">Fast & Efficient</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Management</span>
                  <span className="font-semibold text-gray-900">Ticket System</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Training</span>
                  <span className="font-semibold text-gray-900">User Education</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Why Choose Our Help Desk Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Our professional help desk support ensures efficient issue resolution 
              and improved user productivity.
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready for Professional Help Desk Support?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our help desk services can improve your IT support 
                efficiency and user satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free Help Desk Consultation
                </Link>
                <Link href="/services/it-services-support" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  View All IT Services
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
