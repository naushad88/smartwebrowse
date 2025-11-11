import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Network Management Services | Smartwebrowse India Private Limited',
  description: 'Comprehensive network infrastructure management and optimization services. Monitor, maintain, and secure your network for optimal performance.',
  keywords: 'network management, network monitoring, network security, infrastructure optimization, bandwidth management',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/network-management',
  },
};

export default function NetworkManagementPage() {
  const features = [
    'Network monitoring and maintenance',
    'Performance optimization',
    'Security implementation',
    'Bandwidth management',
    'Network documentation',
    'Capacity planning'
  ];

  const benefits = [
    {
      title: 'Optimal Performance',
      description: 'Continuous monitoring and optimization ensure peak network performance',
      icon: 'fas fa-tachometer-alt'
    },
    {
      title: 'Enhanced Security',
      description: 'Implement robust security measures to protect your network infrastructure',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Proactive Maintenance',
      description: 'Identify and resolve issues before they impact your business operations',
      icon: 'fas fa-tools'
    },
    {
      title: 'Cost Efficiency',
      description: 'Optimize network resources and reduce unnecessary infrastructure costs',
      icon: 'fas fa-coins'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">Network Management Services</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            Comprehensive network infrastructure management and optimization services. 
            Monitor, maintain, and secure your network for optimal performance and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/consultation" className="btn-primary">
              Get Free Network Consultation
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
                Professional Network Infrastructure Management
              </h2>
              <p className="text-body text-gray-600 mb-6">
                Our network management services provide comprehensive oversight of your 
                network infrastructure, ensuring optimal performance, security, and reliability.
              </p>
              <p className="text-body text-gray-600 mb-8">
                From continuous monitoring and maintenance to performance optimization and 
                security implementation, we help you maintain a robust and efficient network 
                that supports your business growth.
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
                  <i className="fas fa-network-wired"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Network Management</h3>
                <p className="text-gray-600">Infrastructure Optimization</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Monitoring</span>
                  <span className="font-semibold text-gray-900">24/7 Real-time</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Performance</span>
                  <span className="font-semibold text-gray-900">Optimized</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Security</span>
                  <span className="font-semibold text-gray-900">Enhanced</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Maintenance</span>
                  <span className="font-semibold text-gray-900">Proactive</span>
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
              Why Choose Our Network Management?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Our comprehensive network management ensures your infrastructure is always 
              optimized, secure, and performing at its best.
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your Network?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our network management services can improve your 
                infrastructure performance and security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free Network Consultation
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
