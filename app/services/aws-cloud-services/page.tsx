import type { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AWS Cloud Services | Smartwebrowse India Private Limited',
  description: 'Professional AWS cloud services including EC2, S3, RDS, Lambda, and infrastructure optimization for businesses.',
  openGraph: {
    title: 'AWS Cloud Services | Smartwebrowse India Private Limited',
    description: 'Professional AWS cloud services including EC2, S3, RDS, Lambda, and infrastructure optimization for businesses.',
    url: 'https://www.smartwebrowse.com/services/aws-cloud-services',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/aws-cloud-services',
  },
};

export default function AWSCloudServicesPage() {
  const services = [
    {
      title: 'EC2 Instance Management',
      description: 'Optimize your virtual server infrastructure with cost-effective EC2 solutions',
      features: ['Auto-scaling groups', 'Load balancer configuration', 'Instance type optimization', 'Reserved instance planning'],
      icon: 'fas fa-server'
    },
    {
      title: 'S3 Storage Solutions',
      description: 'Secure, scalable object storage with lifecycle management and access controls',
      features: ['Data lifecycle policies', 'Access control and encryption', 'Cross-region replication', 'Cost optimization'],
      icon: 'fas fa-database'
    },
    {
      title: 'RDS Database Services',
      description: 'Managed relational databases with high availability and performance tuning',
      features: ['Multi-AZ deployments', 'Read replicas', 'Performance insights', 'Automated backups'],
      icon: 'fas fa-database'
    },
    {
      title: 'Lambda Serverless Computing',
      description: 'Event-driven serverless functions for scalable application development',
      features: ['Function optimization', 'API Gateway integration', 'Event source mapping', 'Monitoring and logging'],
      icon: 'fas fa-code'
    },
    {
      title: 'CloudFormation & CDK',
      description: 'Infrastructure as Code for consistent and repeatable deployments',
      features: ['Template development', 'Stack management', 'CI/CD integration', 'Best practices implementation'],
      icon: 'fas fa-layer-group'
    },
    {
      title: 'CloudWatch & Monitoring',
      description: 'Comprehensive monitoring, logging, and alerting for your AWS resources',
      features: ['Custom dashboards', 'Alarm configuration', 'Log aggregation', 'Performance metrics'],
      icon: 'fas fa-chart-line'
    }
  ];

  const benefits = [
    {
      title: 'Cost Optimization',
      description: 'Reduce AWS costs by up to 40% through resource optimization and reserved instances',
      icon: 'fas fa-dollar-sign'
    },
    {
      title: 'Security & Compliance',
      description: 'Implement AWS security best practices and compliance frameworks',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Performance Tuning',
      description: 'Optimize application performance with AWS-native tools and services',
      icon: 'fas fa-tachometer-alt'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support for your AWS infrastructure',
      icon: 'fas fa-clock'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">AWS Cloud Services</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            Leverage the power of Amazon Web Services with our expert cloud solutions. 
            From infrastructure setup to optimization, we help you maximize AWS value.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Comprehensive AWS Solutions
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end AWS services covering compute, storage, databases, 
              serverless computing, and infrastructure management.
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
                        <i className="fas fa-check text-primary-500 mr-2"></i>
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
              Why Choose Our AWS Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We combine deep AWS expertise with business acumen to deliver 
              solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-sm">
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your AWS Infrastructure?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get a free AWS assessment and discover how we can optimize your cloud costs and performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free AWS Assessment
                </Link>
                <Link href="/consultation" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  Schedule Consultation
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
