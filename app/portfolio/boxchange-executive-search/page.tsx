import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Boxchange - Search & Interim Management | Portfolio | Smartwebrowse India Private Limited',
  description: 'Comprehensive search and interim management solutions through the boxchange360° platform, integrating multiple layers of scientific and objective candidate assessments for informed hiring decisions.',
  keywords: 'executive search, interim management, talent acquisition, hiring technology, recruitment platform, professional services',
  openGraph: {
    title: 'Boxchange - Search & Interim Management | Portfolio | Smartwebrowse India Private Limited',
    description: 'Comprehensive search and interim management solutions through the boxchange360° platform, integrating multiple layers of scientific and objective candidate assessments for informed hiring decisions.',
    url: 'https://www.smartwebrowse.com/portfolio/boxchange-executive-search',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
  },
};

export default function BoxchangePortfolio() {
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
                Professional Services
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Boxchange - Search & Interim Management
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Developed comprehensive search and interim management solutions through the 
              boxchange360° platform, integrating multiple layers of scientific and objective candidate 
              assessments for informed hiring decisions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.boxchange.co.uk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                View Live Website
              </a>
              <a href="/get-a-quote" className="btn-outline">
                <i className="fas fa-envelope mr-2"></i>
                Discuss Similar Project
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/Boxch.png"
              alt="Boxchange Search & Interim Management Platform"
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
                Create a comprehensive executive search and interim management platform that helps business 
                change and technology leaders build and scale project delivery teams with top permanent and 
                interim talent through scientific and objective candidate assessments.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Solution</h3>
              <p className="text-gray-600">
                Built the boxchange360° platform with next-generation collaborative hiring technology, 
                providing access to a proprietary talent graph with 1.2 billion people from over 140 data 
                sources, ensuring clients make informed hiring decisions.
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
                <i className="fas fa-globe text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Global Talent Network</h3>
              <p className="text-gray-600">
                Access to a proprietary talent graph with 1.2 billion people from over 140 data sources, 
                including candidates not found on LinkedIn.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-search text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">boxchange360° Platform</h3>
              <p className="text-gray-600">
                End-to-end search solution incorporating next-generation collaborative hiring technology 
                with multiple layers of scientific and objective candidate assessment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">High Retention Rates</h3>
              <p className="text-gray-600">
                Achieves 96% retention rates for new hires, reducing management downtime and significant 
                savings on total cost to hire.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-users text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Specialist Search Solutions</h3>
              <p className="text-gray-600">
                Over 25 years of experience in helping business change and technology leaders build and 
                scale project delivery teams with top permanent and interim talent.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-map-marker-alt text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Headquartered in Manchester, UK, with a network of delivery partners sourcing top talent 
                on demand, primarily serving the UK and GCC regions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-brain text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI-Powered Assessments</h3>
              <p className="text-gray-600">
                Multiple layers of scientific and objective candidate assessments ensuring clients make 
                informed hiring decisions with data-driven insights.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Executive Search</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">C-Level and senior executive placements</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Technology leadership roles</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Business change specialists</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Project delivery experts</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interim Management</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Interim CTO and technology leaders</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Change management specialists</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Project delivery managers</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Transformation experts</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Next-Gen Collaborative Hiring', 'AI/ML', 'Talent Analytics', 'Global Network'].map((tech, index) => (
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
                  <span className="text-gray-700">96% retention rates for new hires achieved</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Access to 1.2 billion people from 140+ data sources</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">25+ years of experience in business change and technology leadership</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Global reach serving UK and GCC regions</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-cog text-primary-500 mr-3"></i>
                  <span className="text-gray-700">Reduced management downtime significantly</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-cog text-primary-500 mr-3"></i>
                  <span className="text-gray-700">Significant savings on total cost to hire</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-cog text-primary-500 mr-3"></i>
                  <span className="text-gray-700">Scientific and objective candidate assessments</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-cog text-primary-500 mr-3"></i>
                  <span className="text-gray-700">Next-generation collaborative hiring technology</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Talent Platform?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help you create a similar executive search and talent management platform for your business needs.
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
