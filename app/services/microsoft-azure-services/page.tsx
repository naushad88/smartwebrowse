import type { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Microsoft Azure Cloud Services | Smartwebrowse India Private Limited',
  description: 'Professional Microsoft Azure cloud services including VM management, Azure AD, Azure DevOps, and enterprise cloud solutions.',
  openGraph: {
    title: 'Microsoft Azure Cloud Services | Smartwebrowse India Private Limited',
    description: 'Professional Microsoft Azure cloud services including VM management, Azure AD, Azure DevOps, and enterprise cloud solutions.',
    url: 'https://www.smartwebrowse.com/services/microsoft-azure-services',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/microsoft-azure-services',
  },
};

export default function MicrosoftAzureServicesPage() {
  const services = [
    {
      title: 'Azure Virtual Machines',
      description: 'Scalable cloud computing with Windows and Linux virtual machines',
      features: ['VM sizing and optimization', 'High availability setup', 'Backup and disaster recovery', 'Cost optimization'],
      icon: 'fas fa-server'
    },
    {
      title: 'Azure Active Directory',
      description: 'Enterprise identity and access management in the cloud',
      features: ['Single sign-on (SSO)', 'Multi-factor authentication', 'User provisioning', 'Conditional access'],
      icon: 'fas fa-users-cog'
    },
    {
      title: 'Azure DevOps',
      description: 'Complete DevOps platform for application development',
      features: ['CI/CD pipelines', 'Git repositories', 'Work item tracking', 'Test management'],
      icon: 'fas fa-code-branch'
    },
    {
      title: 'Azure Storage Solutions',
      description: 'Scalable cloud storage for any type of data',
      features: ['Blob storage', 'File shares', 'Queue storage', 'Table storage'],
      icon: 'fas fa-database'
    },
    {
      title: 'Azure Networking',
      description: 'Secure and scalable network infrastructure',
      features: ['Virtual networks', 'Load balancers', 'VPN gateways', 'Application gateways'],
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Azure Security Center',
      description: 'Unified security management and threat protection',
      features: ['Security monitoring', 'Threat detection', 'Security recommendations', 'Compliance reporting'],
      icon: 'fas fa-shield-alt'
    }
  ];

  const benefits = [
    {
      title: 'Enterprise Integration',
      description: 'Seamless integration with Microsoft ecosystem and tools',
      icon: 'fas fa-link'
    },
    {
      title: 'Hybrid Cloud',
      description: 'Connect on-premises infrastructure with Azure cloud services',
      icon: 'fas fa-cloud'
    },
    {
      title: 'Compliance Ready',
      description: 'Meet regulatory requirements with Azure compliance offerings',
      icon: 'fas fa-certificate'
    },
    {
      title: 'Cost Management',
      description: 'Optimize costs with Azure cost management tools',
      icon: 'fas fa-dollar-sign'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">Microsoft Azure Cloud Services</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            Leverage the power of Microsoft Azure with our expert cloud solutions. 
            From infrastructure setup to DevOps automation, we help you maximize Azure value.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Comprehensive Azure Solutions
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end Azure services covering compute, storage, networking, 
              security, and DevOps automation for enterprise applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-2xl mr-4 shadow-sm">
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

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Why Choose Our Azure Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We combine deep Azure expertise with business acumen to deliver 
              solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-sm">
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your Azure Infrastructure?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get a free Azure assessment and discover how we can optimize your cloud costs and performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free Azure Assessment
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
