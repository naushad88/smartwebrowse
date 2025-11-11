'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Job data - in a real app, this would come from an API or database
const jobData = {
  'senior-cloud-architect': {
    id: 'senior-cloud-architect',
    title: "Senior Cloud Architect",
    department: "Cloud Services",
    location: "Remote / Global",
    type: "Full-time",
    experience: "5+ years",
    salary: "$120,000 - $180,000",
    description: "Design and implement scalable cloud solutions for enterprise clients across AWS, Azure, and Google Cloud platforms. Lead cloud migration projects and establish best practices for cloud architecture.",
    requirements: [
      "Expert knowledge of cloud architecture patterns and best practices",
      "Experience with infrastructure as code (Terraform, CloudFormation, ARM templates)",
      "Strong understanding of security, compliance, and governance frameworks",
      "Experience with containerization and orchestration (Docker, Kubernetes)",
      "Knowledge of networking, storage, and database services across cloud platforms",
      "Excellent communication and client management skills",
      "Experience leading technical teams and mentoring junior architects"
    ],
    responsibilities: [
      "Design and implement scalable, secure, and cost-effective cloud solutions",
      "Lead cloud migration and modernization projects",
      "Establish cloud architecture standards and best practices",
      "Collaborate with development teams to optimize application deployment",
      "Provide technical leadership and mentorship to team members",
      "Work with clients to understand requirements and provide solutions"
    ],
    skills: [
      "AWS (EC2, S3, RDS, Lambda, CloudFormation)",
      "Azure (Virtual Machines, Blob Storage, SQL Database, ARM)",
      "Google Cloud Platform",
      "Terraform, Ansible, Chef, or Puppet",
      "Docker and Kubernetes",
      "CI/CD pipelines (Jenkins, GitLab CI, GitHub Actions)",
      "Monitoring and logging (CloudWatch, Azure Monitor, ELK Stack)"
    ]
  },
  'iam-security-specialist': {
    id: 'iam-security-specialist',
    title: "IAM Security Specialist",
    department: "Cybersecurity",
    location: "Remote / Global",
    type: "Full-time",
    experience: "3+ years",
    salary: "$90,000 - $140,000",
    description: "Implement and manage identity and access management solutions for enterprise clients. Ensure secure access control and compliance with security standards.",
    requirements: [
      "Experience with Active Directory, Azure AD, or similar identity providers",
      "Knowledge of SSO, MFA, and RBAC implementation",
      "Understanding of compliance frameworks (ISO 27001, SOC 2, NIST)",
      "Experience with identity governance and administration tools",
      "Strong problem-solving and analytical skills",
      "Knowledge of security best practices and threat modeling"
    ],
    responsibilities: [
      "Design and implement IAM solutions for enterprise clients",
      "Configure and manage SSO, MFA, and conditional access policies",
      "Implement role-based access control and least privilege principles",
      "Conduct security assessments and compliance audits",
      "Develop and maintain IAM policies and procedures",
      "Provide security training and awareness programs"
    ],
    skills: [
      "Active Directory and Azure AD",
      "SAML, OAuth 2.0, OpenID Connect",
      "Okta, Auth0, or similar IAM platforms",
      "Privileged Access Management (PAM)",
      "Identity Governance and Administration (IGA)",
      "Security Information and Event Management (SIEM)",
      "Compliance frameworks and audit procedures"
    ]
  },
  'devops-engineer': {
    id: 'devops-engineer',
    title: "DevOps Engineer",
    department: "DevOps & Automation",
    location: "Remote / Global",
    type: "Full-time",
    experience: "3+ years",
    salary: "$85,000 - $130,000",
    description: "Build and maintain CI/CD pipelines, automate infrastructure, and improve development workflows. Focus on reliability, scalability, and security.",
    requirements: [
      "Experience with CI/CD tools (Jenkins, GitLab CI/CD, GitHub Actions)",
      "Knowledge of containerization (Docker) and orchestration (Kubernetes)",
      "Experience with infrastructure as code and automation tools",
      "Familiarity with monitoring, logging, and alerting systems",
      "Scripting skills in Python, Bash, or PowerShell",
      "Understanding of cloud platforms and services"
    ],
    responsibilities: [
      "Design and implement CI/CD pipelines for multiple applications",
      "Automate infrastructure provisioning and configuration",
      "Implement monitoring, logging, and alerting solutions",
      "Optimize application performance and scalability",
      "Ensure security best practices in DevOps processes",
      "Collaborate with development and operations teams"
    ],
    skills: [
      "Jenkins, GitLab CI/CD, GitHub Actions",
      "Docker and Kubernetes",
      "Terraform, Ansible, or similar IaC tools",
      "AWS, Azure, or Google Cloud Platform",
      "Prometheus, Grafana, ELK Stack",
      "Python, Bash, PowerShell scripting",
      "Git and version control systems"
    ]
  },
  'full-stack-developer': {
    id: 'full-stack-developer',
    title: "Full Stack Developer",
    department: "Web Development",
    location: "Remote / Global",
    type: "Full-time",
    experience: "2+ years",
    salary: "$70,000 - $110,000",
    description: "Develop modern web applications using React, Next.js, and other cutting-edge technologies. Build scalable and user-friendly solutions.",
    requirements: [
      "Proficiency in React, JavaScript/TypeScript",
      "Experience with Next.js or similar modern frameworks",
      "Knowledge of backend technologies (Node.js, Python, Java)",
      "Understanding of responsive design and UX principles",
      "Experience with databases and API development",
      "Knowledge of version control and deployment practices"
    ],
    responsibilities: [
      "Develop responsive and interactive web applications",
      "Build and maintain RESTful APIs and microservices",
      "Implement modern UI/UX designs and components",
      "Optimize application performance and user experience",
      "Collaborate with designers and product managers",
      "Write clean, maintainable, and well-documented code"
    ],
    skills: [
      "React, Next.js, Vue.js",
      "JavaScript/TypeScript",
      "Node.js, Python, or Java",
      "HTML5, CSS3, Tailwind CSS",
      "RESTful APIs and GraphQL",
      "PostgreSQL, MongoDB, or similar databases",
      "Git, Docker, and deployment tools"
    ]
  },
  'ai-ml-engineer': {
    id: 'ai-ml-engineer',
    title: "AI/ML Engineer",
    department: "AI & Machine Learning",
    location: "Remote / Global",
    type: "Full-time",
    experience: "3+ years",
    salary: "$100,000 - $150,000",
    description: "Develop AI and machine learning solutions to automate business processes and drive innovation. Build intelligent systems that solve real-world problems.",
    requirements: [
      "Experience with Python, TensorFlow, PyTorch, or similar ML frameworks",
      "Knowledge of machine learning algorithms and statistical modeling",
      "Understanding of data preprocessing, feature engineering, and model evaluation",
      "Experience with cloud AI services (AWS SageMaker, Azure ML, Google AI)",
      "Knowledge of deep learning and neural networks",
      "Strong mathematical and statistical background"
    ],
    responsibilities: [
      "Develop and deploy machine learning models",
      "Preprocess and analyze large datasets",
      "Implement AI solutions for business automation",
      "Optimize model performance and accuracy",
      "Collaborate with data scientists and business stakeholders",
      "Stay updated with latest AI/ML technologies and trends"
    ],
    skills: [
      "Python, R, or similar programming languages",
      "TensorFlow, PyTorch, Scikit-learn",
      "Data analysis and visualization tools",
      "SQL and NoSQL databases",
      "Cloud platforms (AWS, Azure, GCP)",
      "Docker and containerization",
      "Statistical analysis and hypothesis testing"
    ]
  }
};

export default function JobDetail() {
  const params = useParams();
  const router = useRouter();
  const jobId = params.jobId as string;
  const job = jobData[jobId as keyof typeof jobData];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    currentCompany: '',
    expectedSalary: '',
    noticePeriod: '',
    coverLetter: '',
    resume: null as File | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container-custom py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-8">The job position you're looking for doesn't exist.</p>
          <Link href="/careers" className="btn-primary">
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          // Add country code to phone number
          if (key === 'phone' && value) {
            submitData.append(key, `+91${value}`);
          } else {
            submitData.append(key, value);
          }
        }
      });
      submitData.append('jobTitle', job.title);
      submitData.append('jobId', job.id);

      // Send to API endpoint
      const response = await fetch('/api/careers/apply', {
        method: 'POST',
        body: submitData,
      });

      if (response.ok) {
        // Redirect to thank you page
        router.push('/thank-you');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/careers" className="text-primary-600 hover:text-primary-700">
            ← Back to Careers
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Details - Left Side */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              {/* Job Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{job.title}</h1>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                  <span className="flex items-center">
                    <i className="fas fa-building mr-2"></i>
                    {job.department}
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    {job.location}
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-clock mr-2"></i>
                    {job.type}
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-briefcase mr-2"></i>
                    {job.experience}
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-dollar-sign mr-2"></i>
                    {job.salary}
                  </span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{job.description}</p>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="leading-relaxed">{req}</li>
                  ))}
                </ul>
              </div>

              {/* Responsibilities */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index} className="leading-relaxed">{resp}</li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Required Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Application Form - Right Side */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg sticky top-24"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply for this Position</h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex">
                    <i className="fas fa-check-circle text-green-400 mr-3 mt-1"></i>
                    <div>
                      <h3 className="text-sm font-medium text-green-800">Application Submitted!</h3>
                      <p className="text-sm text-green-700 mt-1">
                        Thank you for your application. We'll review it and get back to you within 48 hours.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex">
                    <i className="fas fa-exclamation-circle text-red-400 mr-3 mt-1"></i>
                    <div>
                      <h3 className="text-sm font-medium text-red-800">Submission Failed</h3>
                      <p className="text-sm text-red-700 mt-1">
                        There was an error submitting your application. Please try again.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 text-sm">+91</span>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-8">5-8 years</option>
                    <option value="8+">8+ years</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="currentCompany" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Company
                  </label>
                  <input
                    type="text"
                    id="currentCompany"
                    name="currentCompany"
                    value={formData.currentCompany}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-700 mb-1">
                    Expected Salary (USD)
                  </label>
                  <input
                    type="text"
                    id="expectedSalary"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    placeholder="e.g., $80,000 - $100,000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="noticePeriod" className="block text-sm font-medium text-gray-700 mb-1">
                    Notice Period
                  </label>
                  <select
                    id="noticePeriod"
                    name="noticePeriod"
                    value={formData.noticePeriod}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select notice period</option>
                    <option value="Immediate">Immediate</option>
                    <option value="1 week">1 week</option>
                    <option value="2 weeks">2 weeks</option>
                    <option value="1 month">1 month</option>
                    <option value="2 months">2 months</option>
                    <option value="3 months">3 months</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows={4}
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                    Resume/CV *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
