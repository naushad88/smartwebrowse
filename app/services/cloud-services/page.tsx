import type { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cloud Services | Smartwebrowse India Private Limited',
  description: 'Comprehensive cloud solutions including AWS, Azure, Google Cloud services, cloud migration, and scalable architecture for startups and enterprises.',
  openGraph: {
    title: 'Cloud Services | Smartwebrowse India Private Limited',
    description: 'Comprehensive cloud solutions including AWS, Azure, Google Cloud services, cloud migration, and scalable architecture for startups and enterprises.',
    url: 'https://www.smartwebrowse.com/services/cloud-services',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/cloud-services',
  },
};

export default function CloudServicesPage() {
  const cloudProviders = [
    {
      name: 'AWS Cloud Services',
      description: 'Secure, scalable, and intelligent cloud solutions built for your business needs.',
      features: [
        'EC2 instance management and optimization',
        'S3 storage and data lifecycle management',
        'RDS database services and optimization',
        'Lambda serverless computing',
        'CloudFormation infrastructure as code',
        'CloudWatch monitoring and alerting'
      ],
      icon: 'fab fa-aws',
      color: 'from-orange-500 to-orange-600',
      link: '/services/aws-cloud-services'
    },
    {
      name: 'Microsoft Azure Services',
      description: 'Enterprise-grade Azure solutions to power growth, agility, and compliance.',
      features: [
        'Virtual Machines and App Services',
        'Azure SQL Database and Cosmos DB',
        'Azure Functions and Logic Apps',
        'Azure DevOps and CI/CD pipelines',
        'Azure Security Center and Sentinel',
        'Azure Active Directory integration'
      ],
      icon: 'fab fa-microsoft',
      color: 'from-blue-500 to-blue-600',
      link: '/services/microsoft-azure-services'
    },
    {
      name: 'Google Cloud Services',
      description: 'Smart, secure, and scalable cloud innovation powered by Google.',
      features: [
        'Compute Engine and App Engine',
        'Cloud Storage and BigQuery',
        'Cloud Functions and Cloud Run',
        'Kubernetes Engine (GKE)',
        'Cloud Security Command Center',
        'Identity and Access Management'
      ],
      icon: 'fab fa-google',
      color: 'from-green-500 to-green-600',
      link: '/services/google-cloud-services-support'
    }
  ];

  const additionalServices = [
    {
      title: 'Cloud Migration & Architecture',
      description: 'Move your business to the cloud with confidence. We help startups and small to mid-sized companies migrate applications, data, and services with minimal disruption.',
      features: [
        'Full cloud migration planning and execution',
        'Application and database migration without data loss',
        'Scalable architecture setup using AWS, Azure, or GCP',
        'Cost-effective cloud solutions for startups and lean teams',
        'Performance optimization and technical support'
      ],
      icon: 'fas fa-cloud-upload-alt'
    },
    {
      title: 'Multi-Cloud Strategy',
      description: 'Optimize costs and performance with a strategic multi-cloud approach that leverages the best of each platform.',
      features: [
        'Multi-cloud architecture design',
        'Cost optimization across platforms',
        'Unified monitoring and management',
        'Disaster recovery and backup strategies',
        'Compliance and security across clouds'
      ],
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Cloud Cost Optimization',
      description: 'Reduce your cloud spending while maintaining performance and scalability.',
      features: [
        'Resource utilization analysis',
        'Reserved instance planning',
        'Auto-scaling optimization',
        'Cost monitoring and alerting',
        'Regular cost optimization reviews'
      ],
      icon: 'fas fa-chart-pie'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">Cloud Services</h1>
          <p className="text-xl md:text-2xl text-primary-700 max-w-3xl mx-auto">
            Transform your business with scalable, secure, and cost-effective cloud solutions. 
            From migration to optimization, we help you harness the full power of the cloud.
          </p>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Cloud Platform Expertise
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We're certified experts across all major cloud platforms, helping you choose 
              the right solution for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-neutral-100 transition-all duration-300 hover:-translate-y-1">
                <div className="p-6 rounded-t-xl bg-gradient-to-r from-primary-400 to-primary-500 text-white">
                  <div className="flex items-center mb-4">
                    <i className={`${provider.icon} text-4xl mr-3`}></i>
                    <h3 className="text-xl font-bold">{provider.name}</h3>
                  </div>
                  <p className="text-primary-50">{provider.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    {provider.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-neutral-700">
                        <i className="fas fa-check text-accent-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={provider.link}
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

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Additional Cloud Services
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Beyond platform-specific services, we offer comprehensive cloud solutions 
              that help you maximize the value of your cloud investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-sm">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-left space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-neutral-700 text-sm">
                      <i className="fas fa-check text-accent-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
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
              Why Choose Our Cloud Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We combine deep technical expertise with business acumen to deliver 
              cloud solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <i className="fas fa-certificate"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Certified Experts</h3>
              <p className="text-gray-600 text-sm">AWS, Azure, and GCP certified professionals</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">12+ Years Experience</h3>
              <p className="text-gray-600 text-sm">Proven track record with global clients</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cost Optimization</h3>
              <p className="text-gray-600 text-sm">Reduce cloud costs by up to 40%</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock cloud support</p>
            </div>
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
                Ready to Move to the Cloud?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get a free cloud assessment and discover how we can transform your business with cloud technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free Cloud Assessment
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
