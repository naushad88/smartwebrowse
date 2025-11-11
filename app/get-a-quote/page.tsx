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

  // Service structure with AI-focused services
  const services = {
    'ai-services': {
      name: 'AI Services',
      subServices: [
        'AI Services Provider',
        'AI Consulting',
        'AI Integration',
        'AI Development',
        'AI Analytics',
        'AI Infrastructure'
      ]
    },
    'automation-services': {
      name: 'Automation Services',
      subServices: [
        'Process Automation',
        'Workflow Automation',
        'AI-Powered Automation',
        'Business Process Automation'
      ]
    },
    'ai-support': {
      name: 'AI Support & Maintenance',
      subServices: [
        '24/7 AI Support',
        'AI System Maintenance',
        'AI Monitoring',
        'AI Infrastructure Support'
      ]
    },
    'ai-development': {
      name: 'AI Development',
      subServices: [
        'Custom AI Solutions',
        'Machine Learning Models',
        'AI Application Development',
        'AI Training & Implementation'
      ]
    }
  };

  // Handle main service change
  const handleMainServiceChange = (value: string) => {
    setSelectedMainService(value);
    setSelectedSubService('');
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

      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
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
        <title>Get a Quote | AI Services Pricing - Smartwebrowse India Private Limited</title>
        <meta name="description" content="Get a free quote for AI services, automation solutions, and AI consulting. Transparent pricing for your AI project needs." />
        <meta name="keywords" content="AI quote, AI services pricing, automation quote, AI consulting cost, AI development pricing" />
        <link rel="canonical" href="https://www.smartwebrowse.com/get-a-quote" />
        <meta property="og:title" content="Get a Quote | AI Services Pricing - Smartwebrowse India Private Limited" />
        <meta property="og:description" content="Get a free quote for AI services, automation solutions, and AI consulting. Transparent pricing for your AI project needs." />
        <meta property="og:url" content="https://www.smartwebrowse.com/get-a-quote" />
        <meta property="og:site_name" content="Smartwebrowse India Private Limited" />
        <meta property="og:type" content="website" />
      </Head>
      
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
                Get Your Project Quote
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Have an AI Project in Mind?
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Let us know your AI requirements, and we'll send you a competitive quote for your project.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 neural-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Form Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Tell Us About Your AI Project
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you with a detailed quote within 24 hours
              </p>
            </div>
            
            {/* Quote Form */}
            <div className="card-ai p-8 md:p-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-gray-800 flex items-center">
                      <i className="fas fa-user text-blue-600 mr-2"></i>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-sm bg-white hover:border-blue-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-800 flex items-center">
                      <i className="fas fa-envelope text-blue-600 mr-2"></i>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-sm bg-white hover:border-blue-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Company and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-bold text-gray-800 flex items-center">
                      <i className="fas fa-building text-indigo-600 mr-2"></i>
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 text-sm bg-white hover:border-indigo-300"
                      placeholder="Enter company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-800 flex items-center">
                      <i className="fas fa-phone text-indigo-600 mr-2"></i>
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
                        className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 text-sm bg-white hover:border-indigo-300"
                        placeholder="Enter phone number"
                        autoComplete="tel"
                      />
                    </div>
                  </div>
                </div>

                {/* Services Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="mainServices" className="block text-sm font-bold text-gray-800 flex items-center">
                      <i className="fas fa-cogs text-blue-600 mr-2"></i>
                      Main Service Category *
                    </label>
                    <select
                      id="mainServices"
                      name="mainServices"
                      required
                      value={selectedMainService}
                      onChange={(e) => handleMainServiceChange(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-sm bg-white hover:border-blue-300"
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
                      <i className="fas fa-list text-blue-600 mr-2"></i>
                      Specific Service
                    </label>
                    <select
                      id="subServices"
                      name="subServices"
                      value={selectedSubService}
                      onChange={(e) => setSelectedSubService(e.target.value)}
                      disabled={!selectedMainService}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-sm bg-white hover:border-blue-300 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
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

                {/* Budget and Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="budget" className="block text-sm font-bold text-gray-800 flex items-center">
                      <i className="fas fa-dollar-sign text-indigo-600 mr-2"></i>
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budgetRange"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 text-sm bg-white hover:border-indigo-300"
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
                      <i className="fas fa-clock text-blue-600 mr-2"></i>
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-sm bg-white hover:border-blue-300"
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

                {/* Project Details and Verification */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="projectDetails" className="block text-sm font-bold text-gray-800 flex items-center">
                      <i className="fas fa-file-alt text-indigo-600 mr-2"></i>
                      Project Details *
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      required
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 text-sm resize-none bg-white hover:border-indigo-300"
                      placeholder="Brief description of your AI project..."
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-800 flex items-center">
                      <i className="fas fa-shield-alt text-blue-600 mr-2"></i>
                      Verification *
                    </label>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border-2 border-blue-200">
                      <MathCaptcha onValidationChange={setIsCaptchaValid} />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={!isCaptchaValid || isSubmitting}
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
                  <div className="mt-6 p-6 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-xl">
                    <div className="flex items-center">
                      <i className="fas fa-exclamation-triangle text-red-600 mr-3 text-xl"></i>
                      <p className="text-red-800 font-semibold">
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
    </>
  );
}
