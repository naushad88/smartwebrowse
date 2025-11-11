'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NMIPluginPage() {
  const [activeSection, setActiveSection] = useState('description');
  const allFeatures = [
    { 
      title: 'Credit Card Processing', 
      icon: 'fas fa-credit-card', 
      color: 'from-green-500 to-green-600',
      description: 'Secure credit card payments with Collect.js tokenization.',
      requirement: 'Built-in - No additional setup required'
    },
    { 
      title: 'Collect.js Tokenization', 
      icon: 'fas fa-shield-alt', 
      color: 'from-blue-500 to-blue-600',
      description: 'PCI DSS compliant payment processing without storing sensitive data.',
      requirement: 'Built-in - No additional setup required'
    },
    { 
      title: 'WooCommerce Blocks Support', 
      icon: 'fas fa-cubes', 
      color: 'from-purple-500 to-purple-600',
      description: 'Modern checkout experience with React-based payment forms.',
      requirement: 'Built-in - No additional setup required'
    },
    { 
      title: 'HPOS Compatible', 
      icon: 'fas fa-database', 
      color: 'from-red-500 to-red-600',
      description: 'Works with WooCommerce High-Performance Order Storage.',
      requirement: 'Built-in - No additional setup required'
    },
    { 
      title: 'Refund Support', 
      icon: 'fas fa-undo', 
      color: 'from-orange-500 to-orange-600',
      description: 'Process full or partial refunds directly from WooCommerce.',
      requirement: 'Built-in - No additional setup required'
    },
    { 
      title: 'Debug Logging', 
      icon: 'fas fa-file-alt', 
      color: 'from-teal-500 to-teal-600',
      description: 'Comprehensive transaction logs for debugging and monitoring.',
      requirement: 'Built-in - No additional setup required'
    },
  ];

  const screenshots = [
    {
      title: 'Admin Interface',
      description: 'Professional settings with license management.',
      image: '/images/nmi-admin-settings.jpg',
    },
    {
      title: 'Checkout Experience',
      description: 'Secure payment forms with digital wallet support.',
      image: '/images/nmi-checkout.jpg',
    },
  ];

  const installationSteps = [
    {
      step: 1,
      title: 'Purchase & Download',
      description: 'Buy from our website and download the plugin.',
    },
    {
      step: 2,
      title: 'Install & Configure',
      description: 'Upload to WordPress and enter your NMI API credentials.',
    },
    {
      step: 3,
      title: 'Go Live',
      description: 'Test payments and start accepting transactions.',
    },
  ];

  const faqs = [
    {
      question: 'What is included with the plugin?',
      answer: 'Complete NMI integration with PCI DSS compliance, WooCommerce Blocks support, HPOS compatibility, Collect.js tokenization, refund support, and debug logging.',
    },
    {
      question: 'How many websites can I use this on?',
      answer: 'One license works on one live website and one staging environment.',
    },
    {
      question: 'What support is included?',
      answer: '24-hour email support via nmi-support@smartwebrowse.com including installation, configuration, and troubleshooting assistance.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <section className="bg-neutral-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-neutral-600 hover:text-primary-600">
              Home
            </Link>
            <i className="fas fa-chevron-right text-neutral-400 text-xs"></i>
            <Link href="/plugins" className="text-neutral-600 hover:text-primary-600">
              Plugins
            </Link>
            <i className="fas fa-chevron-right text-neutral-400 text-xs"></i>
            <span className="text-neutral-900 font-medium">
              Network Merchants Inc Gateway (NMI) for WooCommerce
            </span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Image
                src="/images/Smartwebrowse-Logo.png"
                alt="Smartwebrowse India Private Limited Logo"
                width={200}
                height={60}
                className="mx-auto mb-6"
              />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
              <span className="text-red-600">
                Network Merchants Inc Gateway (NMI)
              </span>
              <span className="block text-primary-600 text-2xl lg:text-4xl mt-2">for WooCommerce</span>
            </h1>
            <p className="text-xl lg:text-2xl text-neutral-600 mb-8 leading-relaxed">
              Complete NMI payment gateway integration with PCI DSS compliance, 
              WooCommerce Blocks support, HPOS compatibility, and secure Collect.js tokenization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/checkout/nmi-gateway"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
              >
                <i className="fas fa-shopping-cart"></i>
                Buy Now - $59
              </Link>
              <a
                href="#features"
                className="btn-secondary text-lg px-8 py-4 inline-flex items-center gap-2"
              >
                <i className="fas fa-info-circle"></i>
                View Features
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <i className="fas fa-shield-alt text-green-500"></i>
                PCI DSS Compliant
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-mobile-alt text-blue-500"></i>
                Mobile Responsive
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-headset text-purple-500"></i>
                24/7 Support
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-sync-alt text-orange-500"></i>
                Regular Updates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 relative overflow-hidden" style={{backgroundColor: '#fff'}}>
        {/* Background Bubble Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-30"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-green-100 rounded-full opacity-25"></div>
          <div className="absolute top-64 left-1/4 w-12 h-12 bg-purple-100 rounded-full opacity-35"></div>
          <div className="absolute top-96 right-1/3 w-24 h-24 bg-orange-100 rounded-full opacity-20"></div>
          <div className="absolute top-48 left-1/2 w-14 h-14 bg-teal-100 rounded-full opacity-30"></div>
          <div className="absolute top-80 left-10 w-18 h-18 bg-pink-100 rounded-full opacity-25"></div>
          <div className="absolute top-20 right-1/4 w-22 h-22 bg-indigo-100 rounded-full opacity-20"></div>
          <div className="absolute top-72 right-10 w-16 h-16 bg-cyan-100 rounded-full opacity-30"></div>
          <div className="absolute top-40 left-3/4 w-20 h-20 bg-emerald-100 rounded-full opacity-25"></div>
          <div className="absolute top-88 left-1/3 w-14 h-14 bg-rose-100 rounded-full opacity-35"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 font-heading">
              Complete Feature Set
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Everything you need to process payments securely and efficiently with NMI's robust payment infrastructure. 
              More features than any competitor at a better price.
            </p>
          </div>
          
          {/* Features List - 2 Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto relative z-10">
            {allFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-2 py-1">
                <div className={`w-6 h-6 bg-gradient-to-r ${feature.color} rounded flex items-center justify-center flex-shrink-0`}>
                  <i className={`${feature.icon} text-white text-xs`}></i>
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-neutral-900">{feature.title}</span>
                  <span className="text-sm text-neutral-600 ml-1">{feature.description}</span>
                  {feature.requirement.includes('Requires') && (
                    <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-700 ml-2">
                      {feature.requirement.includes('WooCommerce Subscriptions') && (
                        <>Requires <a href="https://woocommerce.com/products/woocommerce-subscriptions/" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-800">WooCommerce Subscriptions</a> plugin</>
                      )}
                      {feature.requirement.includes('WooCommerce Pre-Orders') && (
                        <>Requires <a href="https://woocommerce.com/products/woocommerce-pre-orders/" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-800">WooCommerce Pre-Orders</a> plugin</>
                      )}
                      {feature.requirement.includes('FunnelKit') && (
                        <>Requires <a href="https://funnelkit.com/woofunnels/" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-800">FunnelKit (WooFunnels)</a> plugin</>
                      )}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Tabbed Information Section */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="bg-gradient-to-r from-white to-gray-50 border-2 border-gray-200 rounded-t-xl shadow-xl">
              <nav className="flex">
                <button
                  onClick={() => setActiveSection('description')}
                  className={`flex-1 py-4 px-6 border-b-3 font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
                    activeSection === 'description'
                      ? 'border-green-500 text-green-700 bg-gradient-to-b from-green-100 to-green-200 shadow-lg'
                      : 'border-transparent text-gray-600 hover:text-green-600 hover:bg-gradient-to-b hover:from-green-50 hover:to-green-100'
                  }`}
                >
                  <i className="fas fa-info-circle mr-2"></i>
                  Description
                </button>
                <button
                  onClick={() => setActiveSection('installation')}
                  className={`flex-1 py-4 px-6 border-b-3 font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
                    activeSection === 'installation'
                      ? 'border-blue-500 text-blue-700 bg-gradient-to-b from-blue-100 to-blue-200 shadow-lg'
                      : 'border-transparent text-gray-600 hover:text-blue-600 hover:bg-gradient-to-b hover:from-blue-50 hover:to-blue-100'
                  }`}
                >
                  <i className="fas fa-download mr-2"></i>
                  Installation Guide
                </button>
                <button
                  onClick={() => setActiveSection('support')}
                  className={`flex-1 py-4 px-6 border-b-3 font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
                    activeSection === 'support'
                      ? 'border-purple-500 text-purple-700 bg-gradient-to-b from-purple-100 to-purple-200 shadow-lg'
                      : 'border-transparent text-gray-600 hover:text-purple-600 hover:bg-gradient-to-b hover:from-purple-50 hover:to-purple-100'
                  }`}
                >
                  <i className="fas fa-headset mr-2"></i>
                  Support
                </button>
                <button
                  onClick={() => setActiveSection('faq')}
                  className={`flex-1 py-4 px-6 border-b-3 font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
                    activeSection === 'faq'
                      ? 'border-orange-500 text-orange-700 bg-gradient-to-b from-orange-100 to-orange-200 shadow-lg'
                      : 'border-transparent text-gray-600 hover:text-orange-600 hover:bg-gradient-to-b hover:from-orange-50 hover:to-orange-100'
                  }`}
                >
                  <i className="fas fa-question-circle mr-2"></i>
                  FAQ
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 border-2 border-gray-200 border-t-0 rounded-b-xl shadow-xl min-h-[500px]">
              <div className="p-8">
                {/* Description Tab */}
                {activeSection === 'description' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200 shadow-md">
                      <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                        <i className="fas fa-info-circle text-green-600 mr-3"></i>
                        Plugin Overview
                      </h3>
                      <div className="prose prose-lg max-w-none">
                        <p className="text-green-700 leading-relaxed mb-6">
                          <strong>Network Merchants Inc Gateway (NMI) for WooCommerce</strong> is a comprehensive payment processing solution that enables your WooCommerce store to accept credit card payments securely through Network Merchants Inc. (NMI). This professional-grade plugin provides everything you need to process payments with confidence and compliance.
                        </p>
                        
                        <p className="text-green-700 leading-relaxed mb-6">
                          Built by <strong>Smartwebrowse India Private Limited Private Limited</strong>, this plugin offers enterprise-level features including PCI DSS compliance via Collect.js tokenization, WooCommerce Blocks support, HPOS compatibility, refund support, and comprehensive debug logging. Whether you're running a small online store or a large e-commerce platform, our NMI gateway provides the reliability and security your business needs.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center">
                        <i className="fas fa-star text-yellow-500 mr-3"></i>
                        Key Benefits
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <i className="fas fa-shield-alt text-white text-sm"></i>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-800">PCI DSS Compliant</h5>
                              <p className="text-blue-700 text-sm">Secure tokenization without storing sensitive card data on your server</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <i className="fas fa-bolt text-white text-sm"></i>
                            </div>
                            <div>
                              <h5 className="font-semibold text-purple-800">Easy Integration</h5>
                              <p className="text-purple-700 text-sm">One-click installation with minimal configuration required</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
                            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <i className="fas fa-mobile-alt text-white text-sm"></i>
                            </div>
                            <div>
                              <h5 className="font-semibold text-orange-800">Modern Checkout</h5>
                              <p className="text-orange-700 text-sm">WooCommerce Blocks support with React-based payment forms</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-200">
                            <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <i className="fas fa-database text-white text-sm"></i>
                            </div>
                            <div>
                              <h5 className="font-semibold text-teal-800">HPOS Compatible</h5>
                              <p className="text-teal-700 text-sm">Works with WooCommerce High-Performance Order Storage</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <i className="fas fa-headset text-white text-sm"></i>
                            </div>
                            <div>
                              <h5 className="font-semibold text-green-800">24/7 Support</h5>
                              <p className="text-green-700 text-sm">Expert support team with 24-hour response time</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border border-indigo-200">
                            <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <i className="fas fa-sync-alt text-white text-sm"></i>
                            </div>
                            <div>
                              <h5 className="font-semibold text-indigo-800">Regular Updates</h5>
                              <p className="text-indigo-700 text-sm">Lifetime free updates and security patches</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-neutral-900 mb-4">Perfect For</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-neutral-50 rounded-lg p-4 text-center">
                          <i className="fas fa-store text-primary-600 text-2xl mb-2"></i>
                          <h5 className="font-semibold text-neutral-900">E-commerce Stores</h5>
                          <p className="text-neutral-600 text-sm">Online retailers and digital product sellers</p>
                        </div>
                        <div className="bg-neutral-50 rounded-lg p-4 text-center">
                          <i className="fas fa-sync-alt text-primary-600 text-2xl mb-2"></i>
                          <h5 className="font-semibold text-neutral-900">Subscription Services</h5>
                          <p className="text-neutral-600 text-sm">Recurring billing and membership sites</p>
                        </div>
                        <div className="bg-neutral-50 rounded-lg p-4 text-center">
                          <i className="fas fa-building text-primary-600 text-2xl mb-2"></i>
                          <h5 className="font-semibold text-neutral-900">Enterprise</h5>
                          <p className="text-neutral-600 text-sm">Large businesses requiring advanced features</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Installation Guide Tab */}
                {activeSection === 'installation' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200 shadow-md">
                      <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                        <i className="fas fa-download text-blue-600 mr-3"></i>
                        Installation Steps
                      </h3>
                      <div className="space-y-6">
                        {installationSteps.map((step, index) => (
                          <div key={index} className={`flex items-start gap-6 p-6 rounded-xl border-2 shadow-sm transition-all duration-300 hover:shadow-md ${
                            index % 3 === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' :
                            index % 3 === 1 ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200' :
                            'bg-gradient-to-r from-orange-50 to-red-50 border-orange-200'
                          }`}>
                            <div className="flex-shrink-0">
                              <div className={`w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg ${
                                index % 3 === 0 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                                index % 3 === 1 ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                                'bg-gradient-to-r from-orange-500 to-red-500'
                              }`}>
                                {step.step}
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className={`text-lg font-semibold mb-2 ${
                                index % 3 === 0 ? 'text-green-800' :
                                index % 3 === 1 ? 'text-purple-800' :
                                'text-orange-800'
                              }`}>
                                {step.title}
                              </h4>
                              <p className={`${
                                index % 3 === 0 ? 'text-green-700' :
                                index % 3 === 1 ? 'text-purple-700' :
                                'text-orange-700'
                              }`}>
                                {step.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-6">Screenshot Gallery</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {screenshots.map((screenshot, index) => (
                          <div
                            key={index}
                            className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                          >
                            <div className="aspect-video bg-neutral-100 flex items-center justify-center">
                              <div className="text-center p-8">
                                <i className="fas fa-image text-4xl text-neutral-400 mb-4"></i>
                                <p className="text-neutral-500">{screenshot.title}</p>
                              </div>
                            </div>
                            <div className="p-4">
                              <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                                {screenshot.title}
                              </h4>
                              <p className="text-neutral-600 text-sm">
                                {screenshot.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
              )}

                {/* FAQ Tab */}
                {activeSection === 'faq' && (
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-6">Frequently Asked Questions</h3>
                    <div className="space-y-6">
                      {faqs.map((faq, index) => (
                        <div key={index} className={`rounded-xl p-6 border-2 shadow-sm transition-all duration-200 hover:shadow-md ${
                          index % 3 === 0 ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200' :
                          index % 3 === 1 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' :
                          'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200'
                        }`}>
                          <h4 className={`text-lg font-semibold mb-3 ${
                            index % 3 === 0 ? 'text-blue-800' :
                            index % 3 === 1 ? 'text-green-800' :
                            'text-purple-800'
                          }`}>
                            <span className={`inline-block w-6 h-6 rounded-full mr-3 ${
                              index % 3 === 0 ? 'bg-blue-500' :
                              index % 3 === 1 ? 'bg-green-500' :
                              'bg-purple-500'
                            }`}></span>
                            {faq.question}
                          </h4>
                          <p className={`leading-relaxed ${
                            index % 3 === 0 ? 'text-blue-700' :
                            index % 3 === 1 ? 'text-green-700' :
                            'text-purple-700'
                          }`}>
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Support Tab */}
                {activeSection === 'support' && (
                  <div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200 shadow-md mb-8">
                      <h3 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
                        <i className="fas fa-headset text-purple-600 mr-3"></i>
                        Get Support
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <i className="fas fa-envelope text-white text-2xl"></i>
                        </div>
                        <h4 className="text-xl font-semibold text-blue-800 mb-3">Email Support</h4>
                        <p className="text-blue-700 mb-4">24-hour response time for all your questions and technical issues.</p>
                        <a
                          href="mailto:nmi-support@smartwebrowse.com"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          nmi-support@smartwebrowse.com
                          <i className="fas fa-external-link-alt ml-2 text-sm"></i>
                        </a>
                      </div>
                      
                      <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <i className="fas fa-book text-white text-2xl"></i>
                        </div>
                        <h4 className="text-xl font-semibold text-green-800 mb-3">Documentation</h4>
                        <p className="text-green-700 mb-4">Comprehensive guides and tutorials to help you get started.</p>
                        <a
                          href="/docs/Installation & Setup Guide for NMI Payment Gateway Plugin.pdf"
                          download="Installation & Setup Guide for NMI Payment Gateway Plugin.pdf"
                          className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                        >
                          View Installation Guide
                          <i className="fas fa-download ml-2 text-sm"></i>
                        </a>
                      </div>
                      
                      <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border-2 border-orange-200 shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <i className="fas fa-headset text-white text-2xl"></i>
                        </div>
                        <h4 className="text-xl font-semibold text-orange-800 mb-3">Technical Support</h4>
                        <p className="text-orange-700 mb-4">Expert assistance with setup, configuration, and troubleshooting.</p>
                        <a
                          href="mailto:nmi-support@smartwebrowse.com"
                          className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                        >
                          Get Support
                          <i className="fas fa-external-link-alt ml-2 text-sm"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Get Started Section - Above Footer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white shadow-lg">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-heading">
                Ready to Get Started?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Join thousands of satisfied customers who trust Network Merchants Inc Gateway.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold mb-2">$59</div>
                    <div className="text-sm opacity-80">for 1 website</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-2">6 Months</div>
                    <div className="text-sm opacity-80">Free Support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-2">Lifetime</div>
                    <div className="text-sm opacity-80">Free Updates</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/checkout/nmi-gateway"
                  className="bg-white text-primary-600 hover:bg-neutral-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center gap-2 text-lg"
                >
                  <i className="fas fa-shopping-cart"></i>
                  Buy Now
                </Link>
                <a
                  href="/docs/Installation & Setup Guide for NMI Payment Gateway Plugin.pdf"
                  download="Installation & Setup Guide for NMI Payment Gateway Plugin.pdf"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center gap-2 text-lg"
                >
                  <i className="fas fa-download"></i>
                  View Installation Guide
                </a>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <i className="fas fa-lock"></i>
                  Secure Payment
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-download"></i>
                  Instant Download
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-headset"></i>
                  Expert Support
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-undo"></i>
                  Money Back Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
