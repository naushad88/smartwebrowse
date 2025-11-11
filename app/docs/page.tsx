'use client';

import React from 'react';
import Head from 'next/head';

export default function Documentation() {
  const categories = [
    {
      title: "Getting Started",
      icon: "🚀",
      guides: [
        "Quick Start Guide",
        "Installation Instructions",
        "Configuration Setup",
        "First Steps"
      ]
    },
    {
      title: "Cloud Services",
      icon: "☁️",
      guides: [
        "AWS Setup Guide",
        "Azure Configuration",
        "Google Cloud Setup",
        "Migration Best Practices"
      ]
    },
    {
      title: "Security & IAM",
      icon: "🔒",
      guides: [
        "IAM Implementation",
        "SSO Configuration",
        "MFA Setup",
        "Security Best Practices"
      ]
    },
    {
      title: "DevOps & Automation",
      icon: "⚙️",
      guides: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Automation Scripts"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Documentation & Guides | Smartwebrowse India Private Limited</title>
        <meta name="description" content="Comprehensive documentation and guides for cloud services, cybersecurity, DevOps, and IT solutions. Get started with our expert implementation guides." />
        <meta name="keywords" content="IT documentation, cloud setup guides, cybersecurity guides, DevOps documentation, implementation guides" />
        <link rel="canonical" href="https://www.smartwebrowse.com/docs" />
        <meta property="og:title" content="Documentation & Guides | Smartwebrowse India Private Limited" />
        <meta property="og:description" content="Comprehensive documentation and guides for cloud services, cybersecurity, DevOps, and IT solutions. Get started with our expert implementation guides." />
        <meta property="og:url" content="https://www.smartwebrowse.com/docs" />
        <meta property="og:site_name" content="Smartwebrowse India Private Limited" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Documentation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Comprehensive guides and documentation to help you get the most out of our services 
            and implement solutions effectively.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-blue-800 text-sm">
              <i className="fas fa-info-circle mr-2"></i>
              <strong>Note:</strong> Our documentation library is currently being developed. 
              Click on any guide below to see when it will be available, or contact our support team for immediate assistance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.guides.map((guide, guideIndex) => (
                  <li key={guideIndex} className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
                    <i className="fas fa-file-alt text-primary-400 mr-2"></i>
                    <span className="cursor-pointer hover:underline" onClick={() => alert('Documentation coming soon! This guide will be available shortly.')}>
                      {guide}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 shadow-2xl">
            {/* Background pattern with dots */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 rounded-3xl bg-white/20 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Need Help?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/consultation" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  Get Consultation
                </a>
                <a href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
