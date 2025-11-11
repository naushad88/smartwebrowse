'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Documentation() {
  const categories = [
    {
      title: "Getting Started",
      icon: "🚀",
      guides: [
        "AI Services Quick Start",
        "AI Integration Guide",
        "API Configuration",
        "First AI Project"
      ]
    },
    {
      title: "AI Services",
      icon: "🤖",
      guides: [
        "AI Development Setup",
        "AI Model Integration",
        "AI Automation Configuration",
        "AI Best Practices"
      ]
    },
    {
      title: "Automation Services",
      icon: "⚙️",
      guides: [
        "Process Automation Setup",
        "Workflow Automation Guide",
        "AI-Powered Automation",
        "Automation Scripts"
      ]
    },
    {
      title: "AI Support & Maintenance",
      icon: "🔧",
      guides: [
        "AI System Monitoring",
        "AI Maintenance Guide",
        "AI Troubleshooting",
        "AI Performance Optimization"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Documentation & Guides | Smartwebrowse India Private Limited</title>
        <meta name="description" content="Comprehensive documentation and guides for AI services, automation, and AI solutions. Get started with our expert implementation guides." />
        <meta name="keywords" content="AI documentation, AI setup guides, automation guides, AI integration documentation, implementation guides" />
        <link rel="canonical" href="https://www.smartwebrowse.com/docs" />
        <meta property="og:title" content="Documentation & Guides | Smartwebrowse India Private Limited" />
        <meta property="og:description" content="Comprehensive documentation and guides for AI services, automation, and AI solutions. Get started with our expert implementation guides." />
        <meta property="og:url" content="https://www.smartwebrowse.com/docs" />
        <meta property="og:site_name" content="Smartwebrowse India Private Limited" />
        <meta property="og:type" content="website" />
      </Head>
      
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
                  Documentation
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Documentation & Guides
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Comprehensive guides and documentation to help you get the most out of our AI services 
                and implement AI solutions effectively.
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 max-w-2xl mx-auto">
                <p className="text-blue-800 text-sm">
                  <i className="fas fa-info-circle mr-2"></i>
                  <strong>Note:</strong> Our documentation library is currently being developed. 
                  Click on any guide below to see when it will be available, or contact our support team for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 neural-pattern opacity-10"></div>
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {categories.map((category, index) => (
                <div key={index} className="card-ai p-6 hover:-translate-y-2 transition-all duration-300">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.guides.map((guide, guideIndex) => (
                      <li key={guideIndex} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                        <i className="fas fa-file-alt text-blue-400 mr-2"></i>
                        <span className="cursor-pointer hover:underline" onClick={() => alert('Documentation coming soon! This guide will be available shortly.')}>
                          {guide}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 shadow-2xl">
                {/* Background Patterns */}
                <div className="absolute inset-0 neural-pattern opacity-20"></div>
                <div className="absolute inset-0 circuit-pattern opacity-15 animate-circuit-flow"></div>
                
                {/* Animated Gradient Orbs */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                    Need Help?
                  </h3>
                  <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Can't find what you're looking for? Our AI support team is here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/consultation" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                      Get Consultation
                    </Link>
                    <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
