import type { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DevOps & Automation Services | Smartwebrowse India Private Limited',
  description: 'Professional DevOps and automation services including CI/CD pipelines, infrastructure as code, and deployment automation.',
  openGraph: {
    title: 'DevOps & Automation Services | Smartwebrowse India Private Limited',
    description: 'Professional DevOps and automation services including CI/CD pipelines, infrastructure as code, and deployment automation.',
    url: 'https://www.smartwebrowse.com/services/devops-automation-services',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/devops-automation-services',
  },
};

export default function DevOpsAutomationServicesPage() {
  const services = [
    {
      title: 'CI/CD Pipeline Setup',
      description: 'Automated build, test, and deployment pipelines',
      features: ['GitHub Actions', 'Jenkins automation', 'GitLab CI/CD', 'Azure DevOps'],
      icon: 'fas fa-code-branch',
      link: '/services/ci-cd-pipeline'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure using code and automation',
      features: ['Terraform', 'CloudFormation', 'Ansible', 'Puppet'],
      icon: 'fas fa-code',
      link: '/services/infrastructure-as-code'
    },
    {
      title: 'Container Orchestration',
      description: 'Manage containerized applications at scale',
      features: ['Kubernetes', 'Docker Swarm', 'ECS/EKS', 'AKS'],
      icon: 'fas fa-cubes',
      link: '/services/container-orchestration'
    },
    {
      title: 'Monitoring & Logging',
      description: 'Comprehensive observability solutions',
      features: ['Prometheus', 'Grafana', 'ELK Stack', 'CloudWatch'],
      icon: 'fas fa-chart-line',
      link: '/services/monitoring-logging'
    },
    {
      title: 'Security Automation',
      description: 'Automated security scanning and compliance',
      features: ['SAST/DAST', 'Container scanning', 'Policy as code', 'Compliance automation'],
      icon: 'fas fa-shield-alt',
      link: '/services/security-automation'
    },
    {
      title: 'Release Management',
      description: 'Streamlined release processes and rollbacks',
      features: ['Blue-green deployment', 'Canary releases', 'Feature flags', 'Rollback automation'],
      icon: 'fas fa-rocket',
      link: '/services/release-management'
    }
  ];

  const benefits = [
    {
      title: 'Faster Delivery',
      description: 'Reduce deployment time from weeks to minutes',
      icon: 'fas fa-tachometer-alt'
    },
    {
      title: 'Improved Quality',
      description: 'Automated testing and quality gates',
      icon: 'fas fa-check-circle'
    },
    {
      title: 'Cost Reduction',
      description: 'Optimize resource usage and reduce manual work',
      icon: 'fas fa-dollar-sign'
    },
    {
      title: 'Better Collaboration',
      description: 'Break down silos between development and operations',
      icon: 'fas fa-users'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">DevOps & Automation Services</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            Transform your development and operations with modern DevOps practices. 
            Automate, optimize, and accelerate your software delivery pipeline.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Complete DevOps Solutions
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end DevOps services that streamline your development 
              workflow and improve operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-neutral-100 transition-all duration-300 hover:-translate-y-1">
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
              Why Choose Our DevOps Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We help organizations achieve faster, more reliable software delivery 
              through proven DevOps practices and automation.
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
                Ready to Transform Your DevOps?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get a free DevOps assessment and discover how we can accelerate your software delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free DevOps Assessment
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
