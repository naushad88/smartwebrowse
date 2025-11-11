import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SSO, MFA & RBAC Integration | Smartwebrowse India Private Limited',
  description: 'Simplify user access while boosting security with Single Sign-On (SSO), Multi-Factor Authentication (MFA), and Role-Based Access Control (RBAC).',
  keywords: 'SSO, MFA, RBAC, Single Sign-On, Multi-Factor Authentication, Role-Based Access Control, Identity Management',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/sso-mfa-rbac',
  },
};

export default function SSOMFARBACPage() {
  const features = [
    'Implement SSO across cloud and SaaS platforms',
    'Set up MFA for secure user authentication',
    'Design and enforce RBAC policies',
    'Integrate with identity providers (Azure AD, Okta, Google Workspace)',
    'Enhance compliance and access visibility',
    'Streamline user onboarding and offboarding',
    'Centralized access management',
    'Audit trails and compliance reporting'
  ];

  const benefits = [
    {
      title: 'Enhanced Security',
      description: 'Multi-layered authentication reduces unauthorized access risks',
      icon: 'fa-solid fa-shield-alt'
    },
    {
      title: 'User Experience',
      description: 'Single sign-on eliminates password fatigue and improves productivity',
      icon: 'fa-solid fa-user-check'
    },
    {
      title: 'Compliance Ready',
      description: 'Meet regulatory requirements for access control and audit trails',
      icon: 'fa-solid fa-certificate'
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce IT support costs and improve operational efficiency',
      icon: 'fa-solid fa-dollar-sign'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 pt-24 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-primary-900">
              SSO, MFA & RBAC Integration
            </h1>
            <p className="text-lg md:text-xl text-primary-700 mb-8 leading-relaxed">
              Simplify user access while boosting security with Single Sign-On (SSO), 
              Multi-Factor Authentication (MFA), and Role-Based Access Control (RBAC).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <Link href="/consultation" className="btn-primary text-lg px-8 py-4">
                  Get Free Consultation
                </Link>
                <Link href="/services/cybersecurity-services" className="btn-outline text-lg px-8 py-4 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
                  View All Security Services
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-6 text-gray-900">
                Unified Identity & Access Management
              </h2>
              <p className="text-body text-gray-600 mb-6">
                We help businesses unify authentication systems, enforce secure login policies, 
                and manage access based on roles—ensuring that the right people have the right 
                level of access, every time.
              </p>
              <p className="text-body text-gray-600 mb-6">
                Our team works across cloud platforms and identity providers to implement 
                seamless and secure access solutions that reduce complexity and improve governance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation" className="btn-primary">
                  Schedule Free Security Integration Call
                </Link>
                <Link href="/services/iam-setup-auditing" className="btn-outline">
                  Learn About IAM Setup
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="heading-3 mb-6 text-gray-900">What We Deliver</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">SSO Implementation</h4>
                    <p className="text-gray-600">Unified access across all your applications and platforms</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">MFA Setup</h4>
                    <p className="text-gray-600">Multi-factor authentication for enhanced security</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">RBAC Policies</h4>
                    <p className="text-gray-600">Role-based access control and permission management</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Comprehensive SSO, MFA & RBAC Features
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Our identity management solutions cover all aspects of secure access control, 
              ensuring your organization has the security and compliance it needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <i className="fa-solid fa-check text-green-500 mt-1 mr-3 text-lg"></i>
                <span className="text-gray-700">{feature}</span>
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
              Why Choose Our SSO, MFA & RBAC Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results that enhance your security posture and 
              support your business objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  <i className={benefit.icon}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Strengthen Your Access Security?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our SSO, MFA & RBAC solutions can enhance your security 
                posture and streamline user access management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free Consultation
                </Link>
                <Link href="/services/cybersecurity-services" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  View All Security Services
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
