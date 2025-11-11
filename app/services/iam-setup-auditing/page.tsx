import type { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IAM Setup & Auditing | Smartwebrowse India Private Limited',
  description: 'Professional IAM setup, auditing, and optimization services for AWS, Azure, and Google Cloud platforms.',
  openGraph: {
    title: 'IAM Setup & Auditing | Smartwebrowse India Private Limited',
    description: 'Professional IAM setup, auditing, and optimization services for AWS, Azure, and Google Cloud platforms.',
    url: 'https://www.smartwebrowse.com/services/iam-setup-auditing',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/iam-setup-auditing',
  },
};

export default function IAMSetupPage() {
  const features = [
    'Role-based access control (RBAC) implementation',
    'Least privilege principle enforcement',
    'Multi-cloud IAM policy management',
    'Identity provider integration (SAML, OAuth)',
    'Access review and certification processes',
    'Compliance reporting and audit trails',
    'Automated user provisioning and deprovisioning',
    'Privileged access management (PAM)',
    'IAM policy optimization and cost reduction',
    'Security best practices implementation'
  ];

  const benefits = [
              {
            title: 'Enhanced Security',
            description: 'Reduce security risks with proper access controls and least privilege access',
            icon: 'fa-solid fa-shield-alt'
          },
          {
            title: 'Compliance Ready',
            description: 'Meet regulatory requirements for HIPAA, SOX, FedRAMP, and other standards',
            icon: 'fa-solid fa-certificate'
          },
          {
            title: 'Cost Optimization',
            description: 'Eliminate unused permissions and optimize resource access',
            icon: 'fa-solid fa-dollar-sign'
          },
          {
            title: 'Operational Efficiency',
            description: 'Streamline access management with automated processes',
            icon: 'fa-solid fa-cogs'
          }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">IAM Setup & Auditing</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            Secure and manage your cloud infrastructure with professionally designed IAM policies 
            across AWS, Azure, and Google Cloud platforms.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6 text-gray-900">
                Professional IAM Solutions
              </h2>
              <p className="text-body text-gray-600 mb-6">
                Our IAM setup and auditing services help organizations establish robust identity 
                and access management frameworks that enhance security, ensure compliance, and 
                optimize operational efficiency.
              </p>
              <p className="text-body text-gray-600 mb-6">
                We work with businesses of all sizes to implement industry best practices for 
                user access management, role-based permissions, and security controls across 
                multiple cloud platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation" className="btn-primary">
                  Get Free Consultation
                </Link>
                <Link href="/services/cybersecurity-services" className="btn-outline">
                  View All Security Services
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="heading-3 mb-6 text-gray-900">What We Deliver</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-primary-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Comprehensive IAM Audit</h4>
                    <p className="text-neutral-600">Detailed assessment of current access controls and policies</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-primary-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Policy Design & Implementation</h4>
                    <p className="text-neutral-600">Custom IAM policies aligned with business requirements</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-primary-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Ongoing Support</h4>
                    <p className="text-neutral-600">Continuous monitoring and policy optimization</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Comprehensive IAM Features
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Our IAM solutions cover all aspects of identity and access management, 
              ensuring your organization has the security controls it needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <i className="fa-solid fa-check text-primary-500 mt-1 mr-3 text-lg"></i>
                <span className="text-neutral-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Why Choose Our IAM Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results that enhance your security posture and 
              support your business objectives.
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Access Management?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get a free IAM assessment and discover how we can strengthen your security posture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free IAM Assessment
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
