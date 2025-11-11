import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You - Smartwebrowse India Private Limited',
  description: 'Thank you for contacting Smartwebrowse India Private Limited. We will get back to you within 24 hours.',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/thank-you',
  },
  openGraph: {
    title: 'Thank You - Smartwebrowse India Private Limited',
    description: 'Thank you for contacting Smartwebrowse India Private Limited. We will get back to you within 24 hours.',
    url: 'https://www.smartwebrowse.com/thank-you',
    siteName: 'Smartwebrowse India Private Limited',
    images: [
      {
        url: 'https://www.smartwebrowse.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Smartwebrowse India Private Limited - Thank You',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thank You - Smartwebrowse India Private Limited',
    description: 'Thank you for contacting Smartwebrowse India Private Limited. We will get back to you within 24 hours.',
    images: ['https://www.smartwebrowse.com/og-image.jpg'],
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <i className="fas fa-check text-4xl text-green-600"></i>
          </div>

          {/* Main Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thank You for Contacting Us!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            We have successfully received your message. Our team will review your request and get back to you within 24 hours.
          </p>

          {/* What Happens Next */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What happens next?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Review & Analysis</h4>
                  <p className="text-sm text-gray-600">Our team will carefully review your requirements</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Prepare Proposal</h4>
                  <p className="text-sm text-gray-600">We'll create a detailed proposal for your project</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email Response</h4>
                  <p className="text-sm text-gray-600">You'll receive our response within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Schedule Call</h4>
                  <p className="text-sm text-gray-600">We may schedule a call to discuss details</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-primary-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Need immediate assistance?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <i className="fas fa-phone text-primary-600"></i>
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <i className="fas fa-envelope text-primary-600"></i>
                <span className="text-gray-700">info@smartwebrowse.com</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              <i className="fas fa-home mr-2"></i>
              Back to Home
            </Link>
            
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-colors font-medium"
            >
              <i className="fas fa-cogs mr-2"></i>
              View Our Services
            </Link>
          </div>

          {/* Additional Resources */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              While you wait, explore our resources:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/blogs" className="text-primary-600 hover:text-primary-700 underline">
                <i className="fas fa-blog mr-1"></i>
                Our Blog
              </Link>
              <Link href="/case-studies" className="text-primary-600 hover:text-primary-700 underline">
                <i className="fas fa-chart-line mr-1"></i>
                Case Studies
              </Link>
              <Link href="/about" className="text-primary-600 hover:text-primary-700 underline">
                <i className="fas fa-users mr-1"></i>
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
