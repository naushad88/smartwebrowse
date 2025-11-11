import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Happy Hemp – E-Commerce Platform Development | Portfolio | Smartwebrowse India Private Limited',
  description: 'Comprehensive e-commerce platform for CBD and hemp products with multi-category support, subscription services, lab reports integration, and multi-language capabilities.',
  keywords: 'e-commerce development, CBD platform, hemp products, WooCommerce, WordPress, multi-language, subscription services',
  openGraph: {
    title: 'Happy Hemp – E-Commerce Platform Development | Portfolio | Smartwebrowse India Private Limited',
    description: 'Comprehensive e-commerce platform for CBD and hemp products with multi-category support, subscription services, lab reports integration, and multi-language capabilities.',
    url: 'https://www.smartwebrowse.com/portfolio/happy-hemp-ecommerce',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
  },
};

export default function HappyHempPortfolio() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Portfolio
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="mb-6">
              <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                Retail
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Happy Hemp – E-Commerce Platform Development
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Developed and maintained a comprehensive e-commerce platform for CBD and hemp products 
              with multi-category support, subscription services, lab reports integration, and multi-language capabilities.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://gethappyhemp.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                View Live Website
              </a>
              <a href="/contact" className="btn-outline">
                <i className="fas fa-envelope mr-2"></i>
                Discuss Similar Project
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/Hemp.png"
              alt="Happy Hemp E-commerce Platform"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Challenge</h3>
              <p className="text-gray-600">
                Create a comprehensive e-commerce platform for CBD and hemp products that handles complex 
                regulatory requirements, multiple product categories, subscription services, and serves 
                customers across 30+ countries with multi-language support.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Solution</h3>
              <p className="text-gray-600">
                Built a robust WordPress/WooCommerce platform with custom integrations for lab reports, 
                subscription management, multi-language support, and compliance features for the CBD industry.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-shopping-cart text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Multi-Category E-commerce</h3>
              <p className="text-gray-600">
                Comprehensive product catalog with CBD, Delta 8, Delta 9, THCA, and Mushroom products with advanced filtering.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-language text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Multi-Language Support</h3>
              <p className="text-gray-600">
                Full website translation for 30+ countries with localized content and currency support.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-file-medical text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Lab Reports Integration</h3>
              <p className="text-gray-600">
                Third-party lab testing integration with COA (Certificate of Analysis) reports for transparency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-sync-alt text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Subscription Services</h3>
              <p className="text-gray-600">
                Automated subscription management with flexible billing cycles and customer preferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-star text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Customer Reviews</h3>
              <p className="text-gray-600">
                Integrated review system with 20,000+ 5-star reviews and customer testimonials.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-shield-alt text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Compliance & Security</h3>
              <p className="text-gray-600">
                GMP certified platform with age verification, regulatory compliance, and secure payment processing.
              </p>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Product Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['CBD Products', 'Delta 8 THC', 'Delta 9 THC', 'THCA', 'Mushroom Products', 'Pet Products'].map((category, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <span className="text-sm font-medium text-gray-700">{category}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Used */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'Payment Gateway', 'Multi-language'].map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <span className="text-sm font-medium text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">20,000+ 5-star customer reviews achieved</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Multi-language support for 30+ countries</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">GMP certified and triple laboratory tested products</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Integrated subscription and wholesale systems</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-cog text-primary-500 mr-3"></i>
                  <span className="text-gray-700">WordPress/WooCommerce custom development</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-cog text-primary-500 mr-3"></i>
                  <span className="text-gray-700">Multi-language and currency support</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-cog text-primary-500 mr-3"></i>
                  <span className="text-gray-700">Advanced payment gateway integration</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-cog text-primary-500 mr-3"></i>
                  <span className="text-gray-700">Compliance and regulatory features</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your E-commerce Platform?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help you create a similar comprehensive e-commerce solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-a-quote" className="btn-primary">
                <i className="fas fa-envelope mr-2"></i>
                Start Your Project
              </a>
              <a href="/portfolio" className="btn-outline">
                <i className="fas fa-arrow-left mr-2"></i>
                View More Projects
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
