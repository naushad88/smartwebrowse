import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Smartwebrowse India Private Limited',
  description: 'Find answers to common questions about Smartwebrowse India Private Limited services, cloud solutions, cybersecurity, and IT consulting.',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/faqs',
  },
};

export default function FAQs() {
  const faqs = [
    {
      category: "Cloud Services",
      questions: [
        {
          question: "What cloud platforms do you support?",
          answer: "We support all major cloud platforms including AWS, Microsoft Azure, and Google Cloud Platform. Our team has extensive experience with cloud migration, optimization, and management across these platforms."
        },
        {
          question: "How long does cloud migration typically take?",
          answer: "Cloud migration timelines vary depending on the complexity of your infrastructure. Simple migrations can take 2-4 weeks, while complex enterprise migrations may take 3-6 months. We provide detailed timelines during our initial assessment."
        },
        {
          question: "Do you provide 24/7 cloud support?",
          answer: "Yes, we offer 24/7 cloud support and monitoring services. Our global team ensures round-the-clock coverage across different time zones."
        }
      ]
    },
    {
      category: "Cybersecurity & IAM",
      questions: [
        {
          question: "What IAM services do you provide?",
          answer: "We provide comprehensive IAM services including user provisioning, SSO implementation, MFA setup, role-based access control (RBAC), and regular security audits and compliance assessments."
        },
        {
          question: "Are your security solutions compliant with industry standards?",
          answer: "Yes, our security solutions comply with major industry standards including ISO 27001, SOC 2, GDPR, HIPAA, and FedRAMP. We ensure your systems meet all regulatory requirements."
        },
        {
          question: "How often should security assessments be conducted?",
          answer: "We recommend quarterly security assessments for most organizations, with annual comprehensive audits. High-risk industries may require more frequent assessments."
        }
      ]
    },
    {
      category: "DevOps & Automation",
      questions: [
        {
          question: "What DevOps tools do you specialize in?",
          answer: "We specialize in popular DevOps tools including Jenkins, GitLab CI/CD, Docker, Kubernetes, Terraform, Ansible, and various monitoring solutions like Prometheus and Grafana."
        },
        {
          question: "Can you help modernize our existing DevOps practices?",
          answer: "Absolutely! We specialize in DevOps transformation and can help modernize your existing practices, implement CI/CD pipelines, and improve your development workflow."
        }
      ]
    },
    {
      category: "Web Development",
      questions: [
        {
          question: "What technologies do you use for web development?",
          answer: "We use modern technologies including React, Next.js, Node.js, Python, PHP, and various databases. We choose the best technology stack based on your specific requirements."
        },
        {
          question: "Do you provide ongoing maintenance and support?",
          answer: "Yes, we offer ongoing maintenance, updates, and support packages to ensure your website remains secure, up-to-date, and performs optimally."
        }
      ]
    },
    {
      category: "General Services",
      questions: [
        {
          question: "What industries do you serve?",
          answer: "We serve multiple industries including healthcare, finance, education, manufacturing, retail, hospitality, and technology. Our solutions are tailored to meet industry-specific requirements."
        },
        {
          question: "Do you work with small businesses?",
          answer: "Yes, we work with businesses of all sizes, from startups to enterprise organizations. We tailor our solutions to meet your specific needs and budget."
        },
        {
          question: "What is your typical project timeline?",
          answer: "Project timelines vary based on scope and complexity. Small projects may take 2-4 weeks, while large enterprise projects can take 6-12 months. We provide detailed timelines during project planning."
        },
        {
          question: "How do you ensure project quality?",
          answer: "We follow industry best practices, conduct regular testing, provide progress updates, and have quality assurance processes in place. We also offer post-launch support and maintenance."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, processes, and solutions. 
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-primary-600 mb-8 text-center">
                  {category.category}
                </h2>
                
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 shadow-2xl">
              {/* Background pattern with dots */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 rounded-3xl bg-white/20 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Our team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Contact Us
                  </a>
                  <a href="/get-a-quote" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
