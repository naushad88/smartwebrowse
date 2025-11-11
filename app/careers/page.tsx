import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Careers | Join Smartwebrowse India Private Limited Team',
  description: 'Join our global AI team! Remote positions in AI development, automation engineering, AI consulting, machine learning & AI support. Competitive benefits & growth opportunities.',
  keywords: 'AI careers, AI engineer jobs, automation engineer, machine learning jobs, AI consultant, remote AI jobs',
  openGraph: {
    title: 'AI Careers | Join Smartwebrowse India Private Limited Team',
    description: 'Join our global AI team! Remote positions in AI development, automation engineering, AI consulting, machine learning & AI support. Competitive benefits & growth opportunities.',
    url: 'https://www.smartwebrowse.com/careers',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.smartwebrowse.com/careers',
  },
};

export default function Careers() {
  const generateJobUrl = (title: string) => {
    return title.toLowerCase()
      .replace(/[\/\s&]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "AI Development",
      location: "Remote / Global",
      type: "Full-time",
      experience: "5+ years",
      description: "Design and develop advanced AI solutions, machine learning models, and intelligent automation systems for enterprise clients.",
      requirements: [
        "Expert knowledge of AI/ML frameworks (TensorFlow, PyTorch)",
        "Experience with natural language processing and computer vision",
        "Strong understanding of AI model deployment and optimization",
        "Excellent problem-solving and client communication skills"
      ]
    },
    {
      title: "AI Automation Engineer",
      department: "Automation Services",
      location: "Remote / Global",
      type: "Full-time",
      experience: "3+ years",
      description: "Build intelligent automation solutions using AI technologies to streamline business processes and workflows.",
      requirements: [
        "Experience with AI-powered automation tools and frameworks",
        "Knowledge of process automation and workflow optimization",
        "Understanding of AI integration with existing systems",
        "Strong analytical and problem-solving skills"
      ]
    },
    {
      title: "AI Consultant",
      department: "AI Consulting",
      location: "Remote / Global",
      type: "Full-time",
      experience: "4+ years",
      description: "Provide strategic AI consulting to help clients identify AI opportunities, plan implementations, and maximize ROI from AI investments.",
      requirements: [
        "Deep expertise in AI strategy and implementation",
        "Experience with AI ROI analysis and business case development",
        "Strong communication and presentation skills",
        "Understanding of various industries and AI use cases"
      ]
    },
    {
      title: "Machine Learning Engineer",
      department: "AI Development",
      location: "Remote / Global",
      type: "Full-time",
      experience: "3+ years",
      description: "Develop and deploy machine learning models, build AI applications, and optimize AI systems for performance and scalability.",
      requirements: [
        "Proficiency in Python, TensorFlow, or PyTorch",
        "Knowledge of machine learning algorithms and model development",
        "Experience with data preprocessing and feature engineering",
        "Understanding of cloud AI services (AWS SageMaker, Azure ML)"
      ]
    },
    {
      title: "AI Support Specialist",
      department: "AI Support",
      location: "Remote / Global",
      type: "Full-time",
      experience: "2+ years",
      description: "Provide 24/7 AI system support, troubleshooting, and maintenance to ensure optimal performance of AI solutions.",
      requirements: [
        "Experience with AI system monitoring and troubleshooting",
        "Knowledge of AI infrastructure and deployment",
        "Strong customer service and communication skills",
        "Ability to work in a fast-paced, technical environment"
      ]
    }
  ];

  const benefits = [
    {
      icon: "🌍",
      title: "Remote First",
      description: "Work from anywhere in the world with our global remote-first culture."
    },
    {
      icon: "📚",
      title: "AI Learning & Growth",
      description: "Continuous learning opportunities in cutting-edge AI technologies, certifications, and career development programs."
    },
    {
      icon: "🏥",
      title: "Health Benefits",
      description: "Comprehensive health insurance and wellness programs for you and your family."
    },
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Attractive compensation packages with performance-based bonuses and equity options."
    },
    {
      icon: "🎯",
      title: "Flexible Hours",
      description: "Flexible working hours to maintain work-life balance across different time zones."
    },
    {
      icon: "🚀",
      title: "AI Innovation",
      description: "Work on cutting-edge AI technologies and innovative projects for global clients."
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
                Join Our Team
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Join Our AI Team
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Be part of a global team that's transforming businesses through innovative AI solutions. 
              Work with cutting-edge AI technologies and make a real impact.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-16 relative overflow-hidden">
        <div className="absolute inset-0 neural-pattern opacity-10"></div>
        <div className="relative z-10">
          {/* Why Work With Us */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Why Work With Smartwebrowse India Private Limited?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="card-ai p-6 hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Application Process */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Application Process
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Apply", desc: "Submit your resume and cover letter through our application portal." },
                { step: "2", title: "Review", desc: "Our team reviews your application and gets back to you within 48 hours." },
                { step: "3", title: "Interview", desc: "Technical and cultural fit interviews with our team members." },
                { step: "4", title: "Offer", desc: "Receive your offer and join our amazing team!" }
              ].map((item, index) => (
                <div key={index} className="text-center card-ai p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Open Positions */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Open Positions
              </h2>
            </div>
            <div className="space-y-5">
              {openPositions.map((position, index) => (
                <div key={index} className="card-ai p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span className="flex items-center">
                          <i className="fas fa-building mr-2 text-blue-600"></i>
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <i className="fas fa-map-marker-alt mr-2 text-blue-600"></i>
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <i className="fas fa-clock mr-2 text-blue-600"></i>
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <i className="fas fa-briefcase mr-2 text-blue-600"></i>
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <Link 
                      href={`/careers/${generateJobUrl(position.title)}`}
                      className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mt-4 lg:mt-0"
                    >
                      Apply Now
                    </Link>
                  </div>
                  
                  <p className="text-gray-600 mb-3 text-sm">{position.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 shadow-2xl">
              {/* Background Patterns */}
              <div className="absolute inset-0 neural-pattern opacity-20"></div>
              <div className="absolute inset-0 circuit-pattern opacity-15 animate-circuit-flow"></div>
              
              {/* Animated Gradient Orbs */}
              <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
              <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                  Don't See the Right Role?
                </h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  We're always looking for talented AI professionals. Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <div className="flex justify-center">
                  <Link href="/send-resume" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    <i className="fas fa-file-alt mr-2"></i>
                    Send Resume
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
