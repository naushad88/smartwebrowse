import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Security Automation Services | SAST/DAST, Container Scanning, Policy as Code',
  description: 'Comprehensive security automation services including SAST/DAST scanning, container security, policy as code, and compliance automation. Secure your development pipeline.',
  keywords: 'security automation, SAST, DAST, container scanning, policy as code, compliance automation, DevSecOps, security testing, vulnerability scanning',
  openGraph: {
    title: 'Security Automation Services | Smartwebrowse India Private Limited',
    description: 'Comprehensive security automation services including SAST/DAST scanning, container security, policy as code, and compliance automation.',
    url: 'https://www.smartwebrowse.com/services/security-automation',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security Automation Services | Smartwebrowse India Private Limited',
    description: 'Comprehensive security automation services including SAST/DAST scanning, container security, policy as code, and compliance automation.',
  },
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/security-automation',
  },
};

export default function SecurityAutomationPage() {
  const services = [
    {
      title: 'SAST/DAST Scanning',
      description: 'Automated static and dynamic application security testing integrated into your CI/CD pipeline',
      features: ['Static Application Security Testing (SAST)', 'Dynamic Application Security Testing (DAST)', 'Interactive Application Security Testing (IAST)', 'Real-time vulnerability detection'],
      icon: 'fa-solid fa-search'
    },
    {
      title: 'Container Security Scanning',
      description: 'Comprehensive security scanning for container images and runtime environments',
      features: ['Image vulnerability scanning', 'Runtime security monitoring', 'Base image security analysis', 'Container compliance checking'],
      icon: 'fa-solid fa-shield-alt'
    },
    {
      title: 'Policy as Code',
      description: 'Define and enforce security policies using code for consistent compliance across environments',
      features: ['Infrastructure security policies', 'Kubernetes security policies', 'Cloud security governance', 'Automated policy enforcement'],
      icon: 'fa-solid fa-code'
    },
    {
      title: 'Compliance Automation',
      description: 'Automated compliance checking and reporting for various security standards and regulations',
      features: ['SOC 2 compliance automation', 'PCI DSS compliance checking', 'GDPR compliance monitoring', 'Automated audit reporting'],
      icon: 'fa-solid fa-clipboard-check'
    },
    {
      title: 'Secrets Management',
      description: 'Secure management and rotation of application secrets and credentials',
      features: ['Secret scanning and detection', 'Automated secret rotation', 'Centralized secrets management', 'Access control and auditing'],
      icon: 'fa-solid fa-key'
    },
    {
      title: 'Security Monitoring',
      description: 'Continuous security monitoring and threat detection across your infrastructure',
      features: ['Real-time threat detection', 'Security event correlation', 'Incident response automation', 'Security metrics and reporting'],
      icon: 'fa-solid fa-eye'
    }
  ];

  const benefits = [
    {
      title: 'Early Detection',
      description: 'Identify security vulnerabilities early in the development process'
    },
    {
      title: 'Automated Compliance',
      description: 'Ensure continuous compliance with security standards and regulations'
    },
    {
      title: 'Reduced Risk',
      description: 'Minimize security risks through automated testing and monitoring'
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce manual security testing costs and improve development velocity'
    }
  ];

  const tools = [
    { name: 'SonarQube', icon: 'fa-solid fa-search' },
    { name: 'OWASP ZAP', icon: 'fa-solid fa-shield-alt' },
    { name: 'Snyk', icon: 'fa-solid fa-bug' },
    { name: 'Trivy', icon: 'fa-solid fa-shield-alt' },
    { name: 'Falco', icon: 'fa-solid fa-eye' },
    { name: 'OPA Gatekeeper', icon: 'fa-solid fa-code' },
    { name: 'Vault', icon: 'fa-solid fa-key' },
    { name: 'Splunk', icon: 'fa-solid fa-chart-line' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">Security Automation Services</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-4xl mx-auto mb-8">
            Comprehensive security automation solutions to protect your applications and infrastructure. 
            From SAST/DAST scanning to compliance automation, we secure your entire development pipeline.
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
            <h2 className="heading-2 mb-4">Comprehensive Security Automation Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end security automation services that integrate seamlessly into your development 
              workflow, ensuring continuous security and compliance across all environments.
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
            <h2 className="heading-2 mb-4">Why Choose Our Security Automation Services?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results that enhance your security posture and support your compliance objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  <i className="fa-solid fa-shield-alt"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Security Tools We Work With</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across all major security automation tools and platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-gray-600 text-xl mx-auto mb-2">
                  <i className={tool.icon}></i>
                </div>
                <p className="text-sm font-medium text-gray-700">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-4 text-white">Ready to Automate Your Security?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how our security automation services can help you protect your applications 
              and maintain compliance throughout your development lifecycle.
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
