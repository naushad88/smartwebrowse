import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Regulatory Compliance Support | Smartwebrowse India Private Limited',
  description: 'Ensure your cloud infrastructure meets the highest regulatory standards with our HIPAA, SOX, and FedRAMP compliance support.',
  keywords: 'HIPAA, SOX, FedRAMP, Compliance, Regulatory, Cloud Security, Audit, Governance',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/regulatory-compliance',
  },
};

export default function RegulatoryCompliancePage() {
  const features = [
    'Map cloud configurations to compliance controls',
    'Identify and remediate policy gaps',
    'Support evidence collection and documentation',
    'Align with NIST, ISO, and other frameworks',
    'Ongoing monitoring and compliance readiness reviews',
    'Risk assessment and gap analysis',
    'Policy development and implementation',
    'Audit preparation and support'
  ];

  const benefits = [
    {
      title: 'HIPAA Ready',
      description: 'Meet healthcare industry compliance requirements',
      icon: 'fa-solid fa-heart-pulse'
    },
    {
      title: 'SOX Compliant',
      description: 'Financial reporting and internal control compliance',
      icon: 'fa-solid fa-chart-line'
    },
    {
      title: 'FedRAMP Certified',
      description: 'Federal cloud security and compliance standards',
      icon: 'fa-solid fa-shield-check'
    },
    {
      title: 'Audit Ready',
      description: 'Comprehensive documentation and evidence collection',
      icon: 'fa-solid fa-clipboard-check'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 pt-24 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-primary-900">
              Regulatory Compliance Support
            </h1>
            <p className="text-lg md:text-xl text-primary-700 mb-8 leading-relaxed">
              Ensure your cloud infrastructure meets the highest regulatory standards. 
              Our team supports organizations in achieving and maintaining compliance 
              with frameworks like HIPAA, SOX, and FedRAMP.
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
                HIPAA, SOX, FedRAMP & More
              </h2>
              <p className="text-body text-gray-600 mb-6">
                We work with your internal teams and auditors to close gaps, harden systems, 
                and provide the evidence needed for successful assessments.
              </p>
              <p className="text-body text-gray-600 mb-6">
                Our compliance experts understand the unique requirements of each framework 
                and help you implement the necessary controls and documentation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation" className="btn-primary">
                  Schedule Free Compliance Review Call
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
                  <i className="fa-solid fa-check-circle text-primary-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Compliance Assessment</h4>
                    <p className="text-neutral-600">Comprehensive evaluation of your current compliance status</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-primary-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Gap Analysis</h4>
                    <p className="text-neutral-600">Identify and prioritize compliance gaps and risks</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-primary-500 mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Remediation Support</h4>
                    <p className="text-neutral-600">Implement controls and fix compliance issues</p>
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
              Comprehensive Compliance Features
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Our compliance solutions cover all aspects of regulatory requirements, 
              ensuring your organization meets industry standards and passes audits.
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
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Why Choose Our Compliance Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results that enhance your compliance posture and 
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Achieve Compliance?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our compliance services can help you meet regulatory 
                requirements and pass your next audit.
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
