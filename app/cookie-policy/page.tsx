import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Smartwebrowse India Private Limited',
  description: 'Cookie Policy for Smartwebrowse India Private Limited - Learn how we use cookies and similar technologies on our website in compliance with Indian laws.',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/cookie-policy',
  },
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <div className="inline-flex items-center px-6 py-3 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6 border border-primary-200">
            <i className="fas fa-cookie-bite mr-2"></i>
            Cookie Management
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-primary-900">
            Cookie Policy
          </h1>
          <p className="text-xl md:text-2xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            Learn how we use cookies and similar technologies to enhance your browsing experience 
            and provide personalized services on our website.
          </p>
          <div className="mt-8 inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-200">
            <i className="fas fa-shield-alt mr-2"></i>
            Privacy Compliant
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

            {/* What Are Cookies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience and understand how you use our site.
              </p>
              <div className="bg-primary-50 p-6 rounded-xl border border-primary-200">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Cookie Benefits:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-primary-800">
                  <div className="flex items-center">
                    <i className="fas fa-user-shield mr-2"></i>
                    <span>Enhanced Security</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-bolt mr-2"></i>
                    <span>Faster Loading</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-cog mr-2"></i>
                    <span>Personalized Experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use Cookies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We use cookies for the following purposes to improve your experience:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span className="text-gray-700"><strong>Essential Cookies:</strong> Required for basic website functionality</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span className="text-gray-700"><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span className="text-gray-700"><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span className="text-gray-700"><strong>Preference Cookies:</strong> Remember your settings and preferences</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-shield-alt text-white"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900">1. Essential Cookies</h3>
                  </div>
                  <p className="text-blue-800 mb-3">These cookies are necessary for the website to function properly.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-blue-700 text-sm">
                    <div className="flex items-center">
                      <i className="fas fa-circle text-xs mr-2"></i>
                      <span>Session management</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-circle text-xs mr-2"></i>
                      <span>Security features</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-circle text-xs mr-2"></i>
                      <span>Load balancing</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-chart-line text-white"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-green-900">2. Analytics Cookies</h3>
                  </div>
                  <p className="text-green-800 mb-3">Help us understand how visitors interact with our website.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-green-700 text-sm">
                    <div className="flex items-center">
                      <i className="fas fa-circle text-xs mr-2"></i>
                      <span>Google Analytics</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-circle text-xs mr-2"></i>
                      <span>Page views and user behavior</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-circle text-xs mr-2"></i>
                      <span>Performance metrics</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-bullhorn text-white"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-purple-900">3. Marketing Cookies</h3>
                  </div>
                  <p className="text-purple-800 mb-3">Used to deliver relevant advertisements and track campaign performance.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-purple-700 text-sm">
                    <div className="flex items-center">
                      <i className="fas fa-circle text-xs mr-2"></i>
                      <span>Google Ads</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-circle text-xs mr-2"></i>
                      <span>Social media pixels</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-circle text-xs mr-2"></i>
                      <span>Retargeting campaigns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Some cookies are placed by third-party services that appear on our pages:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="fas fa-chart-bar text-primary-600 mr-3"></i>
                    <span className="text-gray-700">Google Analytics for website analytics</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-ad text-primary-600 mr-3"></i>
                    <span className="text-gray-700">Google Ads for advertising</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="fas fa-share-alt text-primary-600 mr-3"></i>
                    <span className="text-gray-700">Social media platforms for sharing and engagement</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-credit-card text-primary-600 mr-3"></i>
                    <span className="text-gray-700">Payment processors for secure transactions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Managing Cookie Preferences */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                You can control and manage cookies in several ways:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary-50 rounded-xl border border-primary-200">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-browser text-white text-lg"></i>
                  </div>
                  <h3 className="font-semibold text-primary-900 mb-2">Browser Settings</h3>
                  <p className="text-primary-700 text-sm">Most browsers allow you to refuse cookies or delete them</p>
                </div>

                <div className="text-center p-6 bg-accent-50 rounded-xl border border-accent-200">
                  <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-toggle-on text-white text-lg"></i>
                  </div>
                  <h3 className="font-semibold text-accent-900 mb-2">Cookie Consent</h3>
                  <p className="text-accent-700 text-sm">Use our cookie consent banner to manage preferences</p>
                </div>

                <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-external-link-alt text-white text-lg"></i>
                  </div>
                  <h3 className="font-semibold text-green-900 mb-2">Third-Party Opt-outs</h3>
                  <p className="text-green-700 text-sm">Visit third-party websites to opt out of their cookies</p>
                </div>
              </div>
              
              <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-yellow-800 text-sm">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website.
                </p>
              </div>
            </div>

            {/* Cookie Duration */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie Duration</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Cookies on our website have different lifespans:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-clock text-white text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-blue-900 mb-2">Session Cookies</h3>
                  <p className="text-blue-700 text-sm">Deleted when you close your browser</p>
                </div>

                <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-calendar text-white text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-green-900 mb-2">Persistent Cookies</h3>
                  <p className="text-green-700 text-sm">Remain on your device for a set period</p>
                </div>

                <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-external-link-alt text-white text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-purple-900 mb-2">Third-Party Cookies</h3>
                  <p className="text-purple-700 text-sm">Subject to third-party privacy policies</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If you have any questions about our use of cookies, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-primary-50 rounded-xl border border-primary-200">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-envelope text-white text-lg"></i>
                  </div>
                  <h3 className="font-semibold text-primary-900 mb-2">Cookie Inquiries</h3>
                  <p className="text-primary-700 text-sm">privacy@smartwebrowse.com</p>
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
                This Cookie Policy was last updated on January 2025 and is reviewed regularly to ensure compliance 
                with Indian data protection laws and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




