'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function SendResumePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    currentCompany: '',
    expectedSalary: '',
    coverLetter: '',
    resume: null as File | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          // Add country code to phone number
          if (key === 'phone' && value) {
            formDataToSend.append(key, `+91${value}`);
          } else {
            formDataToSend.append(key, value);
          }
        }
      });

      const response = await fetch('/api/careers/apply', {
        method: 'POST',
        body: formDataToSend
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
    <>
      <Head>
        <title>Send Resume | Join Smartwebrowse India Private Limited Team</title>
        <meta name="description" content="Submit your resume to Smartwebrowse India Private Limited for future opportunities. We're always looking for talented IT professionals in cloud, cybersecurity & development." />
        <meta name="keywords" content="submit resume, IT jobs, cloud careers, cybersecurity jobs, development opportunities" />
        <link rel="canonical" href="https://www.smartwebrowse.com/send-resume" />
        <meta property="og:title" content="Send Resume | Join Smartwebrowse India Private Limited Team" />
        <meta property="og:description" content="Submit your resume to Smartwebrowse India Private Limited for future opportunities. We're always looking for talented IT professionals in cloud, cybersecurity & development." />
        <meta property="og:url" content="https://www.smartwebrowse.com/send-resume" />
        <meta property="og:site_name" content="Smartwebrowse India Private Limited" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-800 text-white py-16 pt-24">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Send Your Resume</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Don't see the right role? Send us your resume and we'll keep you in mind for future opportunities.
              We're always looking for talented individuals to join our team.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {/* Left Column - Information */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-file-alt text-3xl text-white"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">Why Send Your Resume?</h2>
                  <p className="text-gray-600">We'll keep you in mind for future opportunities</p>
                </div>

                                        <div className="space-y-5">
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <i className="fas fa-check text-green-600 text-sm"></i>
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 text-lg">Future Opportunities</h3>
                              <p className="text-sm text-gray-600 leading-relaxed">We'll contact you when relevant positions open up</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <i className="fas fa-users text-blue-600 text-sm"></i>
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 text-lg">Talent Network</h3>
                              <p className="text-sm text-gray-600 leading-relaxed">Join our network of skilled professionals</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <i className="fas fa-rocket text-purple-600 text-sm"></i>
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 text-lg">Growth Potential</h3>
                              <p className="text-sm text-gray-600 leading-relaxed">Be first in line for exciting new roles</p>
                            </div>
                          </div>
                        </div>

                                        <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                          <h4 className="font-semibold text-gray-900 mb-3 text-lg">What We're Looking For:</h4>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              Cloud & DevOps Engineers
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              Cybersecurity Specialists
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              Full Stack Developers
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              Mobile App Developers
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              AI/ML Engineers
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              IT Support Professionals
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              Shopify Ecommerce Developers
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              WordPress & PHP Developer
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              SEO & Digital Marketing Executives
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              Business Development Manager
                            </li>
                          </ul>
                        </div>
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Submit Your Resume</h2>
                  <p className="text-gray-600">Tell us about yourself and upload your resume</p>
                </div>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <i className="fas fa-check-circle text-green-600 mr-2"></i>
                      <span className="text-green-800 font-medium">
                        Thank you! Your resume has been submitted successfully. We'll review it and get back to you soon.
                      </span>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center">
                      <i className="fas fa-exclamation-circle text-red-600 mr-2"></i>
                      <span className="text-red-800 font-medium">
                        There was an error submitting your resume. Please try again or contact us directly.
                      </span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your first name"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <span className="text-gray-500 text-sm">+91</span>
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                        Years of Experience *
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select experience level</option>
                        <option value="0-1 years">0-1 years</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5-8 years">5-8 years</option>
                        <option value="8+ years">8+ years</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="currentCompany" className="block text-sm font-medium text-gray-700 mb-2">
                        Current Company
                      </label>
                      <input
                        type="text"
                        id="currentCompany"
                        name="currentCompany"
                        value={formData.currentCompany}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your current company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Salary Range
                    </label>
                    <input
                      type="text"
                      id="expectedSalary"
                      name="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., $80,000 - $120,000"
                    />
                  </div>

                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                      Cover Letter
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      rows={4}
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tell us about yourself, your skills, and why you'd like to work with us..."
                    />
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                      Resume/CV *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-200">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label htmlFor="resume" className="cursor-pointer">
                        <div className="space-y-2">
                          <i className="fas fa-cloud-upload-alt text-4xl text-gray-400"></i>
                          <div className="text-gray-600">
                            <span className="font-medium text-blue-600 hover:text-blue-500">
                              Click to upload
                            </span>{' '}
                            or drag and drop
                          </div>
                          <p className="text-xs text-gray-500">
                            PDF, DOC, or DOCX (max 10MB)
                          </p>
                        </div>
                      </label>
                    </div>
                    {formData.resume && (
                      <div className="mt-2 text-sm text-gray-600">
                        <i className="fas fa-file mr-2"></i>
                        Selected: {formData.resume.name}
                      </div>
                    )}
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <i className="fas fa-paper-plane mr-2"></i>
                          Submit Resume
                        </span>
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    By submitting this form, you agree to our{' '}
                    <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
