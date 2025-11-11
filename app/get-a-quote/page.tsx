'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import MathCaptcha from '@/components/MathCaptcha';
import Head from 'next/head';



export default function GetAQuotePage() {
  const router = useRouter();
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [selectedMainService, setSelectedMainService] = useState('');
  const [selectedSubService, setSelectedSubService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Service structure with main services and their sub-services
  const services = {
    'cybersecurity-services': {
      name: 'Cybersecurity Services',
      subServices: [
        'Security Assessment',
        'Penetration Testing',
        'Vulnerability Scanning',
        'Security Testing',
        'IAM Setup & Auditing',
        'SSO, MFA & RBAC',
        'Regulatory Compliance'
      ]
    },
    'cloud-services': {
      name: 'Cloud Services',
      subServices: [
        'AWS Cloud Services',
        'Microsoft Azure Services',
        'Google Cloud Services',
        'Cloud Migration',
        'Infrastructure as Code',
        'Monitoring & Logging'
      ]
    },
    'devops-automation': {
      name: 'DevOps & Automation',
      subServices: [
        'CI/CD Pipeline',
        'DevOps Consulting',
        'DevOps Automation Services',
        'Monitoring & Logging'
      ]
    },
    'it-services-support': {
      name: 'IT Services & Support',
      subServices: [
        'IT Infrastructure Support',
        'Network Management',
        'Help Desk Services',
        '24/7 IT Support'
      ]
    },
    'application-testing': {
      name: 'Application Testing',
      subServices: [
        'Automated Testing',
        'Performance Testing',
        'QA Process Optimization',
        'Application Testing'
      ]
    },
    'ai-web-development': {
      name: 'AI & Web Development',
      subServices: [
        'AI Integration',
        'Custom Web Development',
        'AI Web Development'
      ]
    },
    'mobile-app-development': {
      name: 'Mobile App Development',
      subServices: [
        'Custom Mobile Solutions',
        'Cross-Platform Development',
        'Android Development',
        'iOS Development'
      ]
    },
    'digital-marketing': {
      name: 'Digital Marketing',
      subServices: [
        'Content Marketing',
        'SEO Optimization',
        'Social Media Management',
        'Analytics & Reporting'
      ]
    },
    'ecommerce-solutions': {
      name: 'E-commerce Solutions',
      subServices: [
        'E-commerce Development',
        'WordPress CMS Development'
      ]
    }
  };

  // Handle main service change
  const handleMainServiceChange = (value: string) => {
    setSelectedMainService(value);
    setSelectedSubService(''); // Reset sub-service when main service changes
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        phone: phoneNumber ? `+91${phoneNumber}` : '',
        mainService: selectedMainService,
        specificService: selectedSubService,
        projectDetails: formData.get('projectDetails'),
        budgetRange: formData.get('budgetRange'),
        timeline: formData.get('timeline'),
        verification: formData.get('verification')
      };

      // Debug: Log the data being sent
      console.log('Sending quote request data:', data);

      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Redirect to thank you page
        router.push('/thank-you');
      } else {
        const errorData = await response.json();
        console.error('Form submission error:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Get a Quote | Custom IT Solutions Pricing</title>
        <meta name="description" content="Get a free quote for custom IT solutions. Cloud services, cybersecurity, web development, mobile apps & DevOps. Transparent pricing for your business needs." />
        <meta name="keywords" content="IT quote, custom software pricing, cloud services quote, cybersecurity pricing, web development cost" />
        <link rel="canonical" href="https://www.smartwebrowse.com/get-a-quote" />
        <meta property="og:title" content="Get a Quote | Custom IT Solutions Pricing" />
        <meta property="og:description" content="Get a free quote for custom IT solutions. Cloud services, cybersecurity, web development, mobile apps & DevOps. Transparent pricing for your business needs." />
        <meta property="og:url" content="https://www.smartwebrowse.com/get-a-quote" />
        <meta property="og:site_name" content="Smartwebrowse India Private Limited" />
        <meta property="og:type" content="website" />
      </Head>
      {/* Hero Section */}
      <section className="py-20 pt-28 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/90 via-primary-600/90 to-primary-700/90"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-accent-300/25 rounded-full mix-blend-multiply filter blur-3xl opacity-35 animation-delay-4000"></div>
        
        <div className="container-custom text-center relative z-10">
          <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-8 border border-white/30 shadow-lg">
            <i className="fas fa-quote-left mr-3 text-accent-300"></i>
            Get Your Project Quote
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white drop-shadow-lg">
            Have a Project in Mind?
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            Let us know your requirements, and we'll send you a competitive quote for your project.
          </p>
          
          {/* Decorative elements */}
          <div className="mt-12 flex justify-center space-x-4">
            <div className="w-3 h-3 bg-accent-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-3 h-3 bg-accent-300 rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-200/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-200/20 rounded-full filter blur-3xl opacity-25"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Form Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tell Us About Your Project
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you with a detailed quote within 24 hours
              </p>
            </div>
            
            {/* Quote Form */}
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Form background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent-100 to-accent-200 rounded-full translate-y-12 -translate-x-12 opacity-40"></div>
              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                {/* Name and Email in one row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-gray-800 flex items-center">
                      <i className="fas fa-user text-primary-500 mr-2"></i>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300 text-sm bg-gray-50/50 hover:bg-white hover:border-primary-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-800 flex items-center">
                      <i className="fas fa-envelope text-primary-500 mr-2"></i>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300 text-sm bg-gray-50/50 hover:bg-white hover:border-primary-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Company and Phone in one row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-bold text-gray-800 flex items-center">
                      <i className="fas fa-building text-accent-500 mr-2"></i>
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-accent-500/20 focus:border-accent-500 transition-all duration-300 text-sm bg-gray-50/50 hover:bg-white hover:border-accent-300"
                      placeholder="Enter company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-800 flex items-center">
                      <i className="fas fa-phone text-accent-500 mr-2"></i>
                      Phone
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="text-gray-500 text-sm font-medium">+91</span>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-accent-500/20 focus:border-accent-500 transition-all duration-300 text-sm bg-gray-50/50 hover:bg-white hover:border-accent-300"
                        placeholder="Enter phone number"
                        autoComplete="tel"
                      />
                    </div>
                  </div>
                </div>

                {/* Services Selection - Two Part System */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="mainServices" className="block text-sm font-bold text-gray-800 flex items-center">
                      <i className="fas fa-cogs text-primary-500 mr-2"></i>
                      Main Service Category *
                    </label>
                    <select
                      id="mainServices"
                      name="mainServices"
                      required
                      value={selectedMainService}
                      onChange={(e) => handleMainServiceChange(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300 text-sm bg-gray-50/50 hover:bg-white hover:border-primary-300"
                    >
                      <option value="">Select main service category</option>
                      {Object.entries(services).map(([key, service]) => (
                        <option key={key} value={key}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subServices" className="block text-sm font-bold text-gray-800 flex items-center">
                      <i className="fas fa-list text-primary-500 mr-2"></i>
                      Specific Service
                    </label>
                    <select
                      id="subServices"
                      name="subServices"
                      value={selectedSubService}
                      onChange={(e) => setSelectedSubService(e.target.value)}
                      disabled={!selectedMainService}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300 text-sm bg-gray-50/50 hover:bg-white hover:border-primary-300 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <option value="">
                        {selectedMainService ? 'Select specific service' : 'Select main service first'}
                      </option>
                      {selectedMainService && services[selectedMainService as keyof typeof services]?.subServices.map((subService, index) => (
                        <option key={index} value={subService}>
                          {subService}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget and Timeline in one row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="budget" className="block text-sm font-bold text-gray-800 flex items-center">
                      <i className="fas fa-dollar-sign text-accent-500 mr-2"></i>
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-accent-500/20 focus:border-accent-500 transition-all duration-300 text-sm bg-gray-50/50 hover:bg-white hover:border-accent-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="timeline" className="block text-sm font-bold text-gray-800 flex items-center">
                      <i className="fas fa-clock text-primary-500 mr-2"></i>
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300 text-sm bg-gray-50/50 hover:bg-white hover:border-primary-300"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2-months">1-2 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Project Details and Verification in one row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="projectDetails" className="block text-sm font-bold text-gray-800 flex items-center">
                      <i className="fas fa-file-alt text-accent-500 mr-2"></i>
                      Project Details *
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      required
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-accent-500/20 focus:border-accent-500 transition-all duration-300 text-sm resize-none bg-gray-50/50 hover:bg-white hover:border-accent-300"
                      placeholder="Brief description of your project..."
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-800 flex items-center">
                      <i className="fas fa-shield-alt text-primary-500 mr-2"></i>
                      Verification *
                    </label>
                    <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-4 rounded-xl border-2 border-primary-200">
                      <MathCaptcha onValidationChange={setIsCaptchaValid} />
                    </div>
                  </div>
                </div>

                {/* Submit Button - Smaller and positioned below verification */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={!isCaptchaValid || isSubmitting}
                    className="bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white font-bold py-3 px-8 rounded-xl hover:from-primary-600 hover:via-primary-700 hover:to-accent-600 transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>
                        Submit Quote Request
                        <i className="fas fa-arrow-right ml-2"></i>
                      </>
                    )}
                  </button>
                </div>
                  
                {/* Status Messages */}
                {submitStatus === 'error' && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-xl shadow-lg">
                    <div className="flex items-center">
                      <i className="fas fa-exclamation-triangle text-red-600 mr-3 text-xl"></i>
                      <p className="text-red-800 font-semibold text-lg">
                        Failed to submit quote request. Please try again.
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-200/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200/20 rounded-full filter blur-3xl opacity-25"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
              <i className="fas fa-globe mr-3"></i>
              Global Reach
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Global Reach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Serving clients across 7 countries with localized expertise and 24/7 support
            </p>
          </div>

          {/* Simple Country Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-5xl mx-auto mb-12">
            {/* United States */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 via-blue-600 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                <i className="fas fa-star text-2xl md:text-3xl text-white"></i>
              </div>
              <p className="text-sm md:text-base font-semibold text-gray-700 group-hover:text-primary-600 transition-colors duration-200">
                United States
              </p>
            </div>

            {/* United Kingdom */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-500 via-purple-600 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                <i className="fas fa-crown text-2xl md:text-3xl text-white"></i>
              </div>
              <p className="text-sm md:text-base font-semibold text-gray-700 group-hover:text-primary-600 transition-colors duration-200">
                United Kingdom
              </p>
            </div>

            {/* European Union */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-green-500 via-green-600 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                <i className="fas fa-euro-sign text-2xl md:text-3xl text-white"></i>
              </div>
              <p className="text-sm md:text-base font-semibold text-gray-700 group-hover:text-primary-600 transition-colors duration-200">
                European Union
              </p>
            </div>

            {/* Ireland */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-emerald-500 via-emerald-600 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                <i className="fas fa-leaf text-2xl md:text-3xl text-white"></i>
              </div>
              <p className="text-sm md:text-base font-semibold text-gray-700 group-hover:text-primary-600 transition-colors duration-200">
                Ireland
              </p>
            </div>

            {/* Gulf Region */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-500 via-amber-600 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                <i className="fas fa-mosque text-2xl md:text-3xl text-white"></i>
              </div>
              <p className="text-sm md:text-base font-semibold text-gray-700 group-hover:text-primary-600 transition-colors duration-200">
                Gulf Region
              </p>
            </div>

            {/* Japan */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-red-500 via-red-600 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                <i className="fas fa-torii-gate text-2xl md:text-3xl text-white"></i>
              </div>
              <p className="text-sm md:text-base font-semibold text-gray-700 group-hover:text-primary-600 transition-colors duration-200">
                Japan
              </p>
            </div>

            {/* Australia */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-indigo-500 via-indigo-600 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                <i className="fas fa-map-marker-alt text-2xl md:text-3xl text-white"></i>
              </div>
              <p className="text-sm md:text-base font-semibold text-gray-700 group-hover:text-primary-600 transition-colors duration-200">
                Australia
              </p>
            </div>
          </div>

          {/* Enhanced Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent mb-2">7</div>
              <div className="text-sm font-semibold text-gray-700">Countries</div>
            </div>
            
            <div className="text-center bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-sm font-semibold text-gray-700">Support</div>
            </div>
            
            <div className="text-center bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-sm font-semibold text-gray-700">Projects</div>
            </div>
            
            <div className="text-center bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-sm font-semibold text-gray-700">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
