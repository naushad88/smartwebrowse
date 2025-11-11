import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Smartwebrowse India Private Limited',
  description: 'Privacy Policy for Smartwebrowse India Private Limited - Learn how we collect, use, and protect your personal information in compliance with Indian data protection laws.',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/privacy-policy',
  },
};

export default function PrivacyPolicy() {
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
                Data Protection
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Smartwebrowse India Private Limited is committed to protecting your privacy in accordance with Indian data protection laws. 
              This policy explains how we collect, use, and safeguard your personal information.
            </p>
            <div className="mt-8 inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium border border-green-200">
              <i className="fas fa-check-circle mr-2"></i>
              Indian Data Protection Compliant
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 neural-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Last Updated Info */}
            <div className="card-ai p-8 mb-8">
              <div className="text-center">
                <p className="text-lg text-gray-600 mb-2">
                  <strong>Last updated:</strong> January 2025
                </p>
                <p className="text-gray-600">
                  Applies to all users in India and globally
                </p>
              </div>
            </div>

            {/* Your Privacy Rights */}
            <div className="card-ai p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">Your Privacy Rights</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                As an Indian company, Smartwebrowse India Private Limited respects your fundamental right to privacy under Indian law. 
                We only collect data necessary to provide our AI services, and we give you full control over your personal information.
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Controller:</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Smartwebrowse India Private Limited</strong></p>
                  <p>F-195, Second Floor, Industrial Area Phase 8-B, Sector 74, Mohali, India 160055</p>
                  <p><strong>Registration:</strong> Indian company (CIN: U72200PB2013PTC037123)</p>
                  <p><strong>Email:</strong> privacy@smartwebrowse.com</p>
                </div>
              </div>
            </div>

            {/* Personal Data We Collect */}
            <div className="card-ai p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">Personal Data We Collect</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                  <p className="text-gray-600 mb-3">
                    Information you provide directly when creating an account or making inquiries about our AI services.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Examples:</h4>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>Phone number (optional)</li>
                      <li>Company name and address</li>
                      <li>AI project requirements</li>
                    </ul>
                  </div>
                  <div className="mt-3 text-sm text-gray-600">
                    <strong>Lawful Basis:</strong> Contract performance & legitimate interests<br/>
                    <strong>Retention:</strong> Account lifetime + 7 years
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage & Analytics</h3>
                  <p className="text-gray-600 mb-3">
                    Data collected to improve our AI services and understand user behavior.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Examples:</h4>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Website interactions</li>
                      <li>AI service preferences</li>
                      <li>Download history</li>
                      <li>Performance metrics</li>
                    </ul>
                  </div>
                  <div className="mt-3 text-sm text-gray-600">
                    <strong>Lawful Basis:</strong> Legitimate interests (with consent)<br/>
                    <strong>Retention:</strong> 2 years maximum
                  </div>
                </div>
              </div>
            </div>

            {/* Your Data Protection Rights */}
            <div className="card-ai p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">Your Data Protection Rights</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Under Indian IT Act 2000 & Rules</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                      <span><strong>Right of Access:</strong> Get copies of your personal data</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                      <span><strong>Right to Rectification:</strong> Correct inaccurate information</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                      <span><strong>Right to Erasure:</strong> Request deletion of your data</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                      <span><strong>Right to Restrict Processing:</strong> Limit how we use your data</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Additional Rights</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                      <span><strong>Right to Data Portability:</strong> Transfer your data elsewhere</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                      <span><strong>Right to Object:</strong> Stop certain processing activities</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                      <span><strong>Right to Withdraw Consent:</strong> Revoke permissions given</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                      <span><strong>Right to Complain:</strong> Contact the Data Protection Authority</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Questions About Your Privacy */}
            <div className="card-ai p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">Questions About Your Privacy?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We're committed to transparency about how we handle your personal data. If you have any questions 
                or want to exercise your rights, please don't hesitate to contact us.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-envelope text-white text-lg"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Privacy Inquiries</h3>
                  <p className="text-gray-700 text-sm">privacy@smartwebrowse.com</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-building text-white text-lg"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Data Protection Authority</h3>
                  <p className="text-gray-700 text-sm">meity.gov.in</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-clock text-white text-lg"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-700 text-sm">Within 30 days (as required by law)</p>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
              <p className="text-gray-600">
                This policy was last updated on January 2025 and is reviewed regularly to ensure compliance 
                with Indian data protection laws and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
