import React from 'react';
import { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';
import { COMPANY_LEGAL, SITE_EMAIL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Terms of Service | Praelix Technologies',
  description: 'Terms of Service for Praelix Technologies - Read our terms and conditions for using our AI services in compliance with Indian laws.',
  alternates: {
    canonical: 'https://www.praelixtechnologies.com/terms-of-service',
  },
};

export default function TermsOfService() {
  return (
    <LegalPageLayout
      badge="Legal Terms"
      title="Terms of Service"
      description="Read our terms and conditions for using Praelix Technologies AI services. These terms govern your relationship with us and outline your rights and responsibilities."
      currentPage="terms"
      badgeTone="blue"
      complianceLabel="Delhi, India — Law Compliant"
      complianceIcon="fa-gavel"
    >
            {/* Last Updated Info */}
            <div className="card-ai p-8">
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
            <div className="card-ai p-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                By accessing and using the Praelix Technologies website and AI services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Notice:</h3>
                <p className="text-gray-800">
                  These terms constitute a legally binding agreement between you and Praelix Technologies. 
                  Please read them carefully before using our AI services.
                </p>
              </div>
            </div>

            {/* Description of Service */}
            <div className="card-ai p-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">2. Description of Service</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Praelix Technologies provides comprehensive AI services including but not limited to:
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
            <div className="card-ai p-8">
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
            <div className="card-ai p-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">4. Intellectual Property</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                All content, trademarks, and intellectual property on this website are owned by Praelix Technologies. 
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
            <div className="card-ai p-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">5. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Praelix Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
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
            <div className="card-ai p-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">6. Governing Law</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                These Terms of Service are governed by and construed in accordance with the laws of
                India. Praelix Technologies operates from its corporate office in Delhi, India. Any
                dispute, claim, or matter arising out of or relating to these terms shall be subject
                to the exclusive jurisdiction of the courts at New Delhi, Delhi, India.
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Jurisdiction:</h3>
                <div className="space-y-2 text-gray-800">
                  <p><strong>Country:</strong> {COMPANY_LEGAL.country}</p>
                  <p><strong>State / UT:</strong> {COMPANY_LEGAL.stateFull}</p>
                  <p><strong>City:</strong> {COMPANY_LEGAL.city}</p>
                  <p><strong>Company:</strong> Praelix Technologies</p>
                  <p><strong>Courts:</strong> {COMPANY_LEGAL.jurisdiction}</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="card-ai p-8">
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
                  <p className="text-gray-700 text-sm">{SITE_EMAIL.legal}</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-building text-white text-lg"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Company Address</h3>
                  <p className="text-gray-700 text-sm">{COMPANY_LEGAL.officeAddress}</p>
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
    </LegalPageLayout>
  );
}
