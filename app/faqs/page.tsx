import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Smartwebrowse India Private Limited',
  description: 'Find answers to common questions about Smartwebrowse India Private Limited AI services, automation solutions, and AI consulting.',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/faqs',
  },
};

export default function FAQs() {
  const faqs = [
    {
      category: "AI Services",
      questions: [
        {
          question: "What AI services do you provide?",
          answer: "We provide comprehensive AI services including AI consulting, custom AI development, AI integration, AI-powered automation, AI analytics, and 24/7 AI support. Our services cover everything from AI strategy to implementation and ongoing maintenance."
        },
        {
          question: "How do you ensure AI model accuracy and performance?",
          answer: "We use industry-leading AI frameworks and best practices, conduct rigorous testing and validation, continuously monitor model performance, and provide regular updates and optimization to ensure optimal accuracy and performance."
        },
        {
          question: "Do you provide AI training and implementation support?",
          answer: "Yes, we offer comprehensive AI training programs for your team and provide end-to-end implementation support to ensure successful AI adoption and integration into your business processes."
        }
      ]
    },
    {
      category: "Automation Services",
      questions: [
        {
          question: "What types of automation do you offer?",
          answer: "We offer intelligent process automation, workflow automation, AI-powered automation, and business process automation. Our solutions can automate repetitive tasks, streamline workflows, and integrate AI capabilities for intelligent decision-making."
        },
        {
          question: "How long does automation implementation typically take?",
          answer: "Automation implementation timelines vary based on complexity. Simple process automation can take 2-4 weeks, while complex AI-powered automation projects may take 2-3 months. We provide detailed timelines during our initial assessment."
        },
        {
          question: "Can you integrate automation with our existing systems?",
          answer: "Absolutely! We specialize in integrating automation solutions with existing systems, databases, and platforms. Our team ensures seamless integration without disrupting your current operations."
        }
      ]
    },
    {
      category: "AI Support & Maintenance",
      questions: [
        {
          question: "What AI support services do you provide?",
          answer: "We provide 24/7 AI system support, AI system maintenance, AI monitoring, AI infrastructure support, performance optimization, security updates, and troubleshooting services to ensure your AI systems run smoothly."
        },
        {
          question: "How do you monitor AI system performance?",
          answer: "We use advanced monitoring tools and dashboards to track AI system performance in real-time, including model accuracy, response times, resource utilization, and user experience metrics. We provide proactive alerts and regular performance reports."
        },
        {
          question: "What is included in AI system maintenance?",
          answer: "Our AI system maintenance includes regular updates and patches, performance optimization, security updates, database optimization, configuration tuning, backup management, and comprehensive health checks to ensure optimal operation."
        }
      ]
    },
    {
      category: "AI Development",
      questions: [
        {
          question: "What technologies do you use for AI development?",
          answer: "We use modern AI technologies including Python, TensorFlow, PyTorch, OpenAI APIs, machine learning frameworks, natural language processing tools, computer vision libraries, and cloud AI services from AWS, Azure, and Google Cloud."
        },
        {
          question: "Do you provide custom AI model development?",
          answer: "Yes, we develop custom AI models tailored to your specific business needs. Our team works with you to understand your requirements and builds AI solutions that deliver measurable results."
        },
        {
          question: "How do you ensure AI solutions are scalable?",
          answer: "We design AI solutions with scalability in mind, using cloud infrastructure, microservices architecture, and scalable AI frameworks. Our solutions can grow with your business needs and handle increased workloads efficiently."
        }
      ]
    },
    {
      category: "General Services",
      questions: [
        {
          question: "What industries do you serve?",
          answer: "We serve multiple industries including healthcare, finance, education, manufacturing, retail, hospitality, and technology. Our AI solutions are tailored to meet industry-specific requirements and compliance standards."
        },
        {
          question: "Do you work with small businesses?",
          answer: "Yes, we work with businesses of all sizes, from startups to enterprise organizations. We tailor our AI solutions to meet your specific needs and budget, ensuring you get the most value from AI technology."
        },
        {
          question: "What is your typical project timeline?",
          answer: "Project timelines vary based on scope and complexity. Small AI projects may take 2-4 weeks, while large enterprise AI implementations can take 3-6 months. We provide detailed timelines during project planning and keep you updated throughout the process."
        },
        {
          question: "How do you ensure project quality?",
          answer: "We follow industry best practices, conduct rigorous testing and validation, provide regular progress updates, and have quality assurance processes in place. We also offer post-launch support and continuous optimization to ensure long-term success."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 pt-28 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 neural-pattern opacity-20"></div>
        <div className="absolute inset-0 circuit-pattern opacity-15 animate-circuit-flow"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full">
                FAQs
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Find answers to common questions about our AI services, automation solutions, and AI consulting. 
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 neural-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="card-ai p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                    {category.category}
                  </h2>
                  
                  <div className="space-y-6">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-b border-gray-200 pb-6 last:border-b-0">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 flex items-start">
                          <i className="fas fa-question-circle text-blue-600 mr-3 mt-1 flex-shrink-0"></i>
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed ml-8">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 shadow-2xl">
                {/* Background Patterns */}
                <div className="absolute inset-0 neural-pattern opacity-20"></div>
                <div className="absolute inset-0 circuit-pattern opacity-15 animate-circuit-flow"></div>
                
                {/* Animated Gradient Orbs */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                    Still Have Questions?
                  </h3>
                  <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Can't find the answer you're looking for? Our AI experts are here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                      <i className="fas fa-envelope mr-2"></i>
                      Contact Us
                    </Link>
                    <Link href="/get-a-quote" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                      <i className="fas fa-file-alt mr-2"></i>
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
