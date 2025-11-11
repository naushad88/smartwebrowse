import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Smartwebrowse India Private Limited',
  description: 'Terms of Service for Smartwebrowse India Private Limited - Read our terms and conditions for using our AI services in compliance with Indian laws.',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/terms-of-service',
  },
};

export default function TermsOfService() {
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
                Legal Terms
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Read our terms and conditions for using Smartwebrowse India Private Limited AI services. 
              These terms govern your relationship with us and outline your rights and responsibilities.
            </p>
            <div className="mt-8 inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200">
              <i className="fas fa-gavel mr-2"></i>
              Indian Law Compliant
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
                  Applies to all users globally
                </p>
              </div>
            </div>

            {/* Acceptance of Terms */}
            <div className="card-ai p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                By accessing and using the Smartwebrowse India Private Limited website and AI services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Notice:</h3>
                <p className="text-gray-800">
                  These terms constitute a legally binding agreement between you and Smartwebrowse India Private Limited. 
                  Please read them carefully before using our AI services.
                </p>
              </div>
            </div>

            {/* Description of Service */}
            <div className="card-ai p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">2. Description of Service</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Smartwebrowse India Private Limited provides comprehensive AI services including but not limited to:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="fas fa-brain text-blue-600 mr-3"></i>
                    <span className="text-gray-700">AI services and consulting</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-robot text-blue-600 mr-3"></i>
                    <span className="text-gray-700">Intelligent automation solutions</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-cogs text-blue-600 mr-3"></i>
                    <span className="text-gray-700">AI-powered business solutions</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="fas fa-code text-blue-600 mr-3"></i>
                    <span className="text-gray-700">AI development and integration</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-headset text-blue-600 mr-3"></i>
                    <span className="text-gray-700">24/7 AI support and maintenance</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-chart-line text-blue-600 mr-3"></i>
                    <span className="text-gray-700">AI analytics and insights</span>
                  </div>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="card-ai p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">3. User Responsibilities</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">You agree to:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span className="text-gray-700">Provide accurate and complete information</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span className="text-gray-700">Maintain the security of your account</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span className="text-gray-700">Use our AI services for lawful purposes only</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span className="text-gray-700">Not interfere with the proper working of our services</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span className="text-gray-700">Respect intellectual property rights</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span className="text-gray-700">Comply with all applicable laws and regulations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="card-ai p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">4. Intellectual Property</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                All content, trademarks, and intellectual property on this website are owned by Smartwebrowse India Private Limited. 
                You may not use, reproduce, or distribute our intellectual property without written permission.
              </p>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Protected Assets Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-800">
                  <div className="flex items-center">
                    <i className="fas fa-copyright mr-2"></i>
                    <span>Copyrights</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-trademark mr-2"></i>
                    <span>Trademarks</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-lightbulb mr-2"></i>
                    <span>Trade Secrets</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="card-ai p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">5. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Smartwebrowse India Private Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                resulting from your use of our AI services.
              </p>
              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Exclusions:</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>• Indirect or consequential damages</li>
                  <li>• Loss of profits or business opportunities</li>
                  <li>• Data loss or corruption</li>
                  <li>• Third-party actions or inactions</li>
                </ul>
              </div>
            </div>

            {/* Governing Law */}
            <div className="card-ai p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">6. Governing Law</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of India, 
                where Smartwebrowse India Private Limited is incorporated.
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Jurisdiction:</h3>
                <div className="space-y-2 text-gray-800">
                  <p><strong>Country:</strong> India</p>
                  <p><strong>State:</strong> Punjab</p>
                  <p><strong>City:</strong> Mohali</p>
                  <p><strong>Company:</strong> Smartwebrowse India Private Limited</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="card-ai p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">7. Contact Information</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-envelope text-white text-lg"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Legal Inquiries</h3>
                  <p className="text-gray-700 text-sm">legal@smartwebrowse.com</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-building text-white text-lg"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Company Address</h3>
                  <p className="text-gray-700 text-sm">F-195, Second Floor, Industrial Area Phase 8-B, Sector 74, Mohali, India 160055</p>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
              <p className="text-gray-600">
                These terms were last updated on January 2025 and are reviewed regularly to ensure compliance 
                with Indian laws and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
