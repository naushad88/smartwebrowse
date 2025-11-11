import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IT Careers | Join Smartwebrowse India Private Limited Team',
  description: 'Join our global IT team! Remote positions in cloud architecture, cybersecurity, DevOps, AI/ML & web development. Competitive benefits & growth opportunities.',
  keywords: 'IT careers, cloud architect jobs, cybersecurity jobs, DevOps engineer, AI engineer, remote IT jobs',
  openGraph: {
    title: 'IT Careers | Join Smartwebrowse India Private Limited Team',
    description: 'Join our global IT team! Remote positions in cloud architecture, cybersecurity, DevOps, AI/ML & web development. Competitive benefits & growth opportunities.',
    url: 'https://www.smartwebrowse.com/careers',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.smartwebrowse.com/careers',
  },
};

export default function Careers() {
  // Function to generate safe URLs for job positions
  const generateJobUrl = (title: string) => {
    return title.toLowerCase()
      .replace(/[\/\s&]/g, '-')  // Replace slashes, spaces, and ampersands with hyphens
      .replace(/-+/g, '-')       // Replace multiple consecutive hyphens with single hyphen
      .replace(/^-|-$/g, '');    // Remove leading and trailing hyphens
  };

  const openPositions = [
    {
      title: "Senior Cloud Architect",
      department: "Cloud Services",
      location: "Remote / Global",
      type: "Full-time",
      experience: "5+ years",
      description: "Design and implement scalable cloud solutions for enterprise clients across AWS, Azure, and Google Cloud platforms.",
      requirements: [
        "Expert knowledge of cloud architecture patterns",
        "Experience with infrastructure as code (Terraform, CloudFormation)",
        "Strong understanding of security and compliance",
        "Excellent communication and client management skills"
      ]
    },
    {
      title: "IAM Security Specialist",
      department: "Cybersecurity",
      location: "Remote / Global",
      type: "Full-time",
      experience: "3+ years",
      description: "Implement and manage identity and access management solutions for enterprise clients.",
      requirements: [
        "Experience with Active Directory, Azure AD, or similar",
        "Knowledge of SSO, MFA, and RBAC implementation",
        "Understanding of compliance frameworks (ISO 27001, SOC 2)",
        "Strong problem-solving and analytical skills"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "DevOps & Automation",
      location: "Remote / Global",
      type: "Full-time",
      experience: "3+ years",
      description: "Build and maintain CI/CD pipelines, automate infrastructure, and improve development workflows.",
      requirements: [
        "Experience with Jenkins, GitLab CI/CD, or similar",
        "Knowledge of Docker, Kubernetes, and containerization",
        "Familiarity with monitoring and logging tools",
        "Scripting skills in Python, Bash, or PowerShell"
      ]
    },
    {
      title: "Full Stack Developer",
      department: "Web Development",
      location: "Remote / Global",
      type: "Full-time",
      experience: "2+ years",
      description: "Develop modern web applications using React, Next.js, and other cutting-edge technologies.",
      requirements: [
        "Proficiency in React, JavaScript/TypeScript",
        "Experience with Next.js or similar frameworks",
        "Knowledge of backend technologies (Node.js, Python)",
        "Understanding of responsive design and UX principles"
      ]
    },
    {
      title: "AI/ML Engineer",
      department: "AI & Machine Learning",
      location: "Remote / Global",
      type: "Full-time",
      experience: "3+ years",
      description: "Develop AI and machine learning solutions to automate business processes and drive innovation.",
      requirements: [
        "Experience with Python, TensorFlow, or PyTorch",
        "Knowledge of machine learning algorithms and models",
        "Understanding of data preprocessing and feature engineering",
        "Experience with cloud AI services (AWS SageMaker, Azure ML)"
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
      title: "Learning & Growth",
      description: "Continuous learning opportunities, certifications, and career development programs."
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
      title: "Innovation",
      description: "Work on cutting-edge technologies and innovative projects for global clients."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">Join Our Team</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            Be part of a global team that's transforming businesses through innovative technology solutions. 
            Work with cutting-edge technologies and make a real impact.
          </p>
        </div>
      </section>

      <div className="container-custom py-16">

        {/* Why Work With Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Work With Smartwebrowse India Private Limited?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply</h3>
              <p className="text-gray-600 text-sm">Submit your resume and cover letter through our application portal.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Review</h3>
              <p className="text-gray-600 text-sm">Our team reviews your application and gets back to you within 48 hours.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600 text-sm">Technical and cultural fit interviews with our team members.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Offer</h3>
              <p className="text-gray-600 text-sm">Receive your offer and join our amazing team!</p>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Open Positions</h2>
          <div className="space-y-5">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span className="flex items-center">
                        <i className="fas fa-building mr-2"></i>
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <i className="fas fa-clock mr-2"></i>
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <i className="fas fa-briefcase mr-2"></i>
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <Link 
                    href={`/careers/${generateJobUrl(position.title)}`}
                    className="btn-primary mt-4 lg:mt-0"
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
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 shadow-2xl">
            {/* Background pattern with dots */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 rounded-3xl bg-white/20 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Don't See the Right Role?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex justify-center">
                <a href="/send-resume" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <i className="fas fa-file-alt mr-2"></i>
                  Send Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}




