import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Thank You - Your Free Consultation Request Received | Smartwebrowse India Private Limited',
  description: 'Thank you for your interest in our IT services. We will contact you within 24 hours to schedule your free consultation.',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/ads-landing/thank-you',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function AdsLandingThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container-custom py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/Logo.png" 
              alt="Smartwebrowse India Private Limited" 
              width={180} 
              height={52}
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-custom py-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Your free consultation request has been received successfully
            </p>
          </div>

          {/* What Happens Next */}
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-8 mb-8 border border-blue-100">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Review Your Requirements</h3>
                <p className="text-gray-600">Our team will review your specific needs and requirements within 24 hours.</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule Consultation</h3>
                <p className="text-gray-600">We'll contact you to schedule your free consultation at a convenient time.</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Expert Advice</h3>
                <p className="text-gray-600">Receive tailored recommendations and solutions for your business needs.</p>
              </div>
            </div>
          </div>

          {/* Services Overview */}
          <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-xl p-8 mb-8 border border-indigo-100">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">Our Expert IT Services</h2>
            <p className="text-gray-700 mb-6 text-center">Click on any service to learn more about our solutions</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/services/cybersecurity-services" className="group">
                <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg hover:from-red-100 hover:to-red-200 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent group-hover:border-red-300">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🔒</div>
                  <p className="text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors duration-300">Cybersecurity & IAM</p>
                </div>
              </Link>
              <Link href="/services/cloud-services" className="group">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg hover:from-blue-100 hover:to-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent group-hover:border-blue-300">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">☁️</div>
                  <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Cloud Migration</p>
                </div>
              </Link>
              <Link href="/services/ai-web-development" className="group">
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg hover:from-purple-100 hover:to-purple-200 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent group-hover:border-purple-300">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">💻</div>
                  <p className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-300">AI & Web Development</p>
                </div>
              </Link>
              <Link href="/services/devops-automation-services" className="group">
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg hover:from-green-100 hover:to-green-200 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent group-hover:border-green-300">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">⚙️</div>
                  <p className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors duration-300">DevOps & Automation</p>
                </div>
              </Link>
              <Link href="/services/mobile-app-development" className="group">
                <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg hover:from-orange-100 hover:to-orange-200 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent group-hover:border-orange-300">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">📱</div>
                  <p className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors duration-300">Mobile Apps</p>
                </div>
              </Link>
              <Link href="/services/digital-marketing" className="group">
                <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg hover:from-pink-100 hover:to-pink-200 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent group-hover:border-pink-300">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">📈</div>
                  <p className="text-sm font-medium text-gray-900 group-hover:text-pink-600 transition-colors duration-300">Digital Marketing</p>
                </div>
              </Link>
              <Link href="/services/application-testing" className="group">
                <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg hover:from-teal-100 hover:to-teal-200 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent group-hover:border-teal-300">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🧪</div>
                  <p className="text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors duration-300">Application Testing</p>
                </div>
              </Link>
              <Link href="/services/it-services-support" className="group">
                <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg hover:from-indigo-100 hover:to-indigo-200 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent group-hover:border-indigo-300">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🛠️</div>
                  <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">IT Support</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Smartwebrowse India Private Limited?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-certificate text-primary-600 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">ISO 27001 Certified</h3>
                <p className="text-sm text-gray-600">Enterprise-grade security standards</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-globe text-primary-600 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">15+ Countries</h3>
                <p className="text-sm text-gray-600">Global presence and expertise</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-primary-600 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">500+ Clients</h3>
                <p className="text-sm text-gray-600">Trusted by businesses worldwide</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock text-primary-600 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">12+ Years</h3>
                <p className="text-sm text-gray-600">Proven experience and expertise</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Immediate Assistance?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-phone text-accent-600 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">USA</h3>
                <p className="text-gray-600 mb-2">Speak with our experts directly</p>
                <a href="tel:+12404418984" className="text-primary-600 font-semibold hover:text-primary-700">
                  +1 (240) 441-8984
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-phone text-accent-600 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Japan</h3>
                <p className="text-gray-600 mb-2">Local support in Japan</p>
                <a href="tel:+818042597661" className="text-primary-600 font-semibold hover:text-primary-700">
                  +81 80-4259-7661
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-phone text-accent-600 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">India</h3>
                <p className="text-gray-600 mb-2">24/7 support in India</p>
                <a href="tel:+917238009780" className="text-primary-600 font-semibold hover:text-primary-700">
                  +91 7238009780
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-envelope text-accent-600 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">Send us your questions anytime</p>
                <a href="mailto:contact@smartwebrowse.com" className="text-primary-600 font-semibold hover:text-primary-700">
                  contact@smartwebrowse.com
                </a>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ads-landing" 
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Back to Landing Page
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>

        </div>
      </main>

    </div>
  );
}
