'use client';

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function QuoteSuccessPage() {
  return (
    <>
      <Head>
        <title>Quote Request Submitted | Smartwebrowse India Private Limited</title>
        <meta name="description" content="Thank you for your quote request. Our team will get back to you within 24 hours." />
        <link rel="canonical" href="https://www.smartwebrowse.com/quote-success" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
        <div className="container-custom py-16">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-check text-4xl text-green-600"></i>
              </div>
            </div>

            {/* Success Message */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Quote Request Submitted Successfully!
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                Thank you for reaching out to Smartwebrowse India Private Limited. We have received your quote request and our team will get back to you within <strong>24 hours</strong>.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">What happens next?</h3>
                <ul className="text-left text-blue-800 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-blue-600 mr-2 mt-1"></i>
                    Our sales team will review your requirements
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-blue-600 mr-2 mt-1"></i>
                    We'll prepare a detailed proposal for your project
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-blue-600 mr-2 mt-1"></i>
                    A team member will contact you to discuss next steps
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/"
                  className="bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors duration-200"
                >
                  <i className="fas fa-home mr-2"></i>
                  Back to Home
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-colors duration-200"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                Need immediate assistance? Call us at{' '}
                <a href="tel:+12404418984" className="text-primary-600 hover:text-primary-700 font-medium">
                  +1 (240) 441-8984
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
