import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import MobileCTA from '@/components/MobileCTA';

export const metadata: Metadata = {
  title: 'Cybersecurity Services | Smartwebrowse India Private Limited',
  description: 'Comprehensive cybersecurity solutions including IAM setup, SSO integration, MFA implementation, and regulatory compliance support for HIPAA, SOX, and FedRAMP.',
  openGraph: {
    title: 'Cybersecurity Services | Smartwebrowse India Private Limited',
    description: 'Comprehensive cybersecurity solutions including IAM setup, SSO integration, MFA implementation, and regulatory compliance support for HIPAA, SOX, and FedRAMP.',
    url: 'https://www.smartwebrowse.com/services/cybersecurity-services',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/cybersecurity-services',
  },
};

export default function CybersecurityServicesPage() {
  const services = [
    {
      title: 'IAM Setup & Auditing',
      description: 'Secure and manage your cloud infrastructure with professionally designed IAM policies across AWS, Azure, and Google Cloud platforms.',
      features: [
        'Role-based access setup',
        'Audit existing IAM policies',
        'Least-privilege enforcement',
        'Multi-cloud support',
        'Governance & compliance reporting'
      ],
      icon: 'fas fa-user-shield',
      link: '/services/iam-setup-auditing'
    },
    {
      title: 'SSO, MFA & RBAC Integration',
      description: 'Simplify user access while boosting security with Single Sign-On, Multi-Factor Authentication, and Role-Based Access Control.',
      features: [
        'Implement SSO across cloud and SaaS platforms',
        'Set up MFA for secure user authentication',
        'Design and enforce RBAC policies',
        'Integrate with identity providers',
        'Enhance compliance and access visibility'
      ],
      icon: 'fas fa-key',
      link: '/services/sso-mfa-rbac'
    },
    {
      title: 'Regulatory Compliance Support',
      description: 'Ensure your cloud infrastructure meets the highest regulatory standards for HIPAA, SOX, and FedRAMP compliance.',
      features: [
        'Map cloud configurations to compliance controls',
        'Identify and remediate policy gaps',
        'Support evidence collection and documentation',
        'Align with NIST, ISO, and other frameworks',
        'Ongoing monitoring and compliance readiness'
      ],
      icon: 'fas fa-certificate',
      link: '/services/regulatory-compliance'
    },
    {
      title: 'Security Assessment & Penetration Testing',
      description: 'Comprehensive security evaluations to identify vulnerabilities and strengthen your security posture.',
      features: [
        'Vulnerability assessments',
        'Penetration testing',
        'Security architecture reviews',
        'Incident response planning',
        'Security awareness training'
      ],
      icon: 'fas fa-search',
      link: '/services/security-assessment'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">Cybersecurity Services</h1>
          <p className="text-xl md:text-2xl text-primary-700 max-w-3xl mx-auto">
            Protect your business with enterprise-grade cybersecurity solutions. 
            From IAM setup to compliance support, we secure your digital assets.
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

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Why Choose Our Cybersecurity Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We combine deep technical expertise with industry best practices to deliver 
              security solutions that protect your business today and scale for tomorrow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-sm">
                <i className="fas fa-certificate"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">Certified Experts</h3>
              <p className="text-gray-600">AWS, Azure, and security certified professionals with proven track records.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-sm">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock security monitoring and incident response support.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-sm">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">Proven Results</h3>
              <p className="text-gray-600">Successfully secured hundreds of businesses across multiple industries.</p>
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
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get a free security assessment and discover how we can protect your digital assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free Security Assessment
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
      <MobileCTA href="/get-a-quote" bgColor="bg-[#0ea5e9]" hoverColor="hover:bg-[#0284c7]" ringColor="focus:ring-[#0ea5e9]" />
    </div>
  );
}
