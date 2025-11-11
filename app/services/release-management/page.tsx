import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Release Management Services | Blue-Green, Canary, Feature Flags, Rollback',
  description: 'Expert release management services including blue-green deployment, canary releases, feature flags, and automated rollback strategies. Streamline your software delivery.',
  keywords: 'release management, blue-green deployment, canary releases, feature flags, rollback automation, deployment strategies, CI/CD, software delivery',
  openGraph: {
    title: 'Release Management Services | Smartwebrowse India Private Limited',
    description: 'Expert release management services including blue-green deployment, canary releases, feature flags, and automated rollback strategies.',
    url: 'https://www.smartwebrowse.com/services/release-management',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Release Management Services | Smartwebrowse India Private Limited',
    description: 'Expert release management services including blue-green deployment, canary releases, feature flags, and automated rollback strategies.',
  },
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/release-management',
  },
};

export default function ReleaseManagementPage() {
  const services = [
    {
      title: 'Blue-Green Deployment',
      description: 'Zero-downtime deployment strategy with instant rollback capabilities',
      features: ['Parallel environment management', 'Instant traffic switching', 'Zero-downtime deployments', 'Quick rollback capabilities'],
      icon: 'fa-solid fa-exchange-alt'
    },
    {
      title: 'Canary Releases',
      description: 'Gradual rollout strategy to minimize risk and validate changes with real users',
      features: ['Gradual traffic shifting', 'Real-time monitoring', 'Automated rollback triggers', 'A/B testing integration'],
      icon: 'fa-solid fa-chart-line'
    },
    {
      title: 'Feature Flags',
      description: 'Dynamic feature toggling to control feature rollouts and enable instant rollbacks',
      features: ['Dynamic feature toggling', 'User segmentation', 'Gradual feature rollouts', 'Instant feature rollbacks'],
      icon: 'fa-solid fa-toggle-on'
    },
    {
      title: 'Rollback Automation',
      description: 'Automated rollback strategies triggered by performance metrics and error rates',
      features: ['Automated rollback triggers', 'Performance-based rollbacks', 'Database migration rollbacks', 'Configuration rollbacks'],
      icon: 'fa-solid fa-undo'
    },
    {
      title: 'Release Orchestration',
      description: 'Coordinated release management across multiple services and environments',
      features: ['Multi-service coordination', 'Dependency management', 'Release scheduling', 'Environment promotion'],
      icon: 'fa-solid fa-sitemap'
    },
    {
      title: 'Release Monitoring',
      description: 'Comprehensive monitoring and alerting for release health and performance',
      features: ['Release health monitoring', 'Performance metrics tracking', 'Error rate monitoring', 'User experience tracking'],
      icon: 'fa-solid fa-eye'
    }
  ];

  const benefits = [
    {
      title: 'Reduced Risk',
      description: 'Minimize deployment risks with proven release strategies and instant rollbacks'
    },
    {
      title: 'Faster Delivery',
      description: 'Accelerate software delivery with automated and streamlined release processes'
    },
    {
      title: 'Better Quality',
      description: 'Improve software quality through gradual rollouts and real-time validation'
    },
    {
      title: 'Zero Downtime',
      description: 'Ensure continuous service availability with zero-downtime deployment strategies'
    }
  ];

  const strategies = [
    { name: 'Blue-Green', icon: 'fa-solid fa-exchange-alt' },
    { name: 'Canary', icon: 'fa-solid fa-chart-line' },
    { name: 'Feature Flags', icon: 'fa-solid fa-toggle-on' },
    { name: 'Rolling Updates', icon: 'fa-solid fa-sync' },
    { name: 'A/B Testing', icon: 'fa-solid fa-flask' },
    { name: 'Dark Launches', icon: 'fa-solid fa-moon' },
    { name: 'Ring Deployments', icon: 'fa-solid fa-circle' },
    { name: 'Shadow Deployments', icon: 'fa-solid fa-eye' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">Release Management Services</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-4xl mx-auto mb-8">
            Expert release management solutions to streamline your software delivery process. 
            From blue-green deployments to feature flags, we help you deploy with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation" className="btn-primary text-lg px-8 py-4">
              Get Free Consultation
            </Link>
            <Link href="/services/devops-automation-services" className="btn-outline text-lg px-8 py-4 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
              View All DevOps Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Comprehensive Release Management Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end release management services that ensure safe, reliable, and efficient 
              software delivery across all environments and platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white text-xl mb-4">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Icon name="fas fa-check" className="text-green-500 mr-2 text-xs" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Choose Our Release Management Services?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results that enhance your software delivery capabilities and reduce deployment risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  <i className="fa-solid fa-rocket"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Release Strategies We Implement</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our expertise covers all major release management strategies and deployment patterns.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {strategies.map((strategy, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-gray-600 text-xl mx-auto mb-2">
                  <i className={strategy.icon}></i>
                </div>
                <p className="text-sm font-medium text-gray-700">{strategy.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-4 text-white">Ready to Optimize Your Release Process?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how our release management services can help you deploy software 
              faster, safer, and with greater confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule Free Consultation
              </Link>
              <Link href="/services/devops-automation-services" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                View All DevOps Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
