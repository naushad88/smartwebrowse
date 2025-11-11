import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Smartwebrowse India Private Limited',
  description: 'Terms of Service for Smartwebrowse India Private Limited - Read our terms and conditions for using our services in compliance with Indian laws.',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/terms-of-service',
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <div className="inline-flex items-center px-6 py-3 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6 border border-primary-200">
            <i className="fas fa-file-contract mr-2"></i>
            Legal Terms
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-primary-900">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            Read our terms and conditions for using Smartwebrowse India Private Limited services. 
            These terms govern your relationship with us and outline your rights and responsibilities.
          </p>
          <div className="mt-8 inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200">
            <i className="fas fa-gavel mr-2"></i>
            Indian Law Compliant
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Last Updated Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
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
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                By accessing and using the Smartwebrowse India Private Limited website and services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <div className="bg-primary-50 p-6 rounded-xl border border-primary-200">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Important Notice:</h3>
                <p className="text-primary-800">
                  These terms constitute a legally binding agreement between you and Smartwebrowse India Private Limited Private Limited. 
                  Please read them carefully before using our services.
                </p>
              </div>
            </div>

            {/* Description of Service */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Description of Service</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Smartwebrowse India Private Limited provides comprehensive IT services including but not limited to:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="fas fa-cloud text-primary-600 mr-3"></i>
                    <span className="text-gray-700">Cloud services and migration</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-shield-alt text-primary-600 mr-3"></i>
                    <span className="text-gray-700">Cybersecurity and IAM solutions</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-cogs text-primary-600 mr-3"></i>
                    <span className="text-gray-700">DevOps and automation services</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="fas fa-code text-primary-600 mr-3"></i>
                    <span className="text-gray-700">Web and mobile application development</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-brain text-primary-600 mr-3"></i>
                    <span className="text-gray-700">AI and machine learning solutions</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-chart-line text-primary-600 mr-3"></i>
                    <span className="text-gray-700">Digital marketing and SEO services</span>
                  </div>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. User Responsibilities</h2>
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
                    <span className="text-gray-700">Use our services for lawful purposes only</span>
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

            {/* Payment Terms */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Payment Terms</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Payment terms for our services are as follows:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <i className="fas fa-credit-card text-primary-600 mr-3"></i>
                      <span className="text-gray-700">Payment is due upon receipt of invoice</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-clock text-primary-600 mr-3"></i>
                      <span className="text-gray-700">Late payments may incur additional charges</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <i className="fas fa-ban text-primary-600 mr-3"></i>
                      <span className="text-gray-700">All fees are non-refundable unless otherwise specified</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-exclamation-triangle text-primary-600 mr-3"></i>
                      <span className="text-gray-700">Prices are subject to change with prior notice</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Intellectual Property</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                All content, trademarks, and intellectual property on this website are owned by Smartwebrowse India Private Limited. 
                You may not use, reproduce, or distribute our intellectual property without written permission.
              </p>
              <div className="bg-accent-50 p-6 rounded-xl border border-accent-200">
                <h3 className="text-xl font-semibold text-accent-900 mb-3">Protected Assets Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-accent-800">
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
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Smartwebrowse India Private Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                resulting from your use of our services.
              </p>
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-semibold text-red-900 mb-3">Exclusions:</h3>
                <ul className="space-y-2 text-red-800">
                  <li>• Indirect or consequential damages</li>
                  <li>• Loss of profits or business opportunities</li>
                  <li>• Data loss or corruption</li>
                  <li>• Third-party actions or inactions</li>
                </ul>
              </div>
            </div>

            {/* Governing Law */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Governing Law</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of India, 
                where Smartwebrowse India Private Limited Private Limited is incorporated.
              </p>
              <div className="bg-primary-50 p-6 rounded-xl border border-primary-200">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Legal Jurisdiction:</h3>
                <div className="space-y-2 text-primary-800">
                  <p><strong>Country:</strong> India</p>
                  <p><strong>State:</strong> Punjab</p>
                  <p><strong>City:</strong> Mohali</p>
                  <p><strong>Company:</strong> Smartwebrowse India Private Limited Private Limited</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Contact Information</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-primary-50 rounded-xl border border-primary-200">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-envelope text-white text-lg"></i>
                  </div>
                  <h3 className="font-semibold text-primary-900 mb-2">Legal Inquiries</h3>
                  <p className="text-primary-700 text-sm">legal@smartwebrowse.com</p>
                </div>

                <div className="text-center p-6 bg-accent-50 rounded-xl border border-accent-200">
                  <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-building text-white text-lg"></i>
                  </div>
                  <h3 className="font-semibold text-accent-900 mb-2">Company Address</h3>
                  <p className="text-accent-700 text-sm">F-195, Second Floor, Industrial Area Phase 8-B, Sector 74, Mohali, India 160055</p>
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




