import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'RobustLMS - Complete Learning Platform | Portfolio | Smartwebrowse India Private Limited',
  description: 'Comprehensive learning management system with AI-powered course creation, advanced analytics, multi-device learning, and enterprise-grade security for creators and learners worldwide.',
  keywords: 'LMS, learning management system, online education, AI-powered learning, course creation, educational technology',
  openGraph: {
    title: 'RobustLMS - Complete Learning Platform | Portfolio | Smartwebrowse India Private Limited',
    description: 'Comprehensive learning management system with AI-powered course creation, advanced analytics, multi-device learning, and enterprise-grade security for creators and learners worldwide.',
    url: 'https://www.smartwebrowse.com/portfolio/robustlms-learning-platform',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
  },
};

export default function RobustLMSPortfolio() {
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
                Education
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              RobustLMS - Complete Learning Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Developed a comprehensive learning management system with AI-powered course creation, 
              advanced analytics, multi-device learning, and enterprise-grade security for creators 
              and learners worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.robustlms.com/" 
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
              src="/images/Detail LMS.png"
              alt="RobustLMS Learning Platform"
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
                Create a comprehensive learning management system that empowers course creators to build 
                professional online schools while providing an exceptional learning experience for students 
                worldwide with AI-powered features and enterprise-grade security.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Solution</h3>
              <p className="text-gray-600">
                Built RobustLMS v2.0 with AI features, offering powerful tools for creators and an 
                exceptional experience for students with multi-device support, advanced analytics, 
                and flexible monetization options.
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
                <i className="fas fa-robot text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI-Powered Course Creation</h3>
              <p className="text-gray-600">
                Intelligent suggestions for course titles, outlines, and quiz questions to help creators build better courses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Analytics</h3>
              <p className="text-gray-600">
                Track student progress, engagement metrics, and revenue performance with advanced analytics dashboard.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-mobile-alt text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Multi-Device Learning</h3>
              <p className="text-gray-600">
                Learn anywhere with responsive web and native mobile apps for iOS and Android.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-users text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community Learning</h3>
              <p className="text-gray-600">
                Foster engagement with discussion boards, peer-to-peer Q&A, and collaborative projects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-shield-alt text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">
                End-to-end encryption, role-based access control, and GDPR compliance for enterprise users.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-dollar-sign text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Monetization</h3>
              <p className="text-gray-600">
                Support for one-time payments, subscriptions, memberships, and affiliate programs.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Starter</h3>
              <div className="text-2xl font-bold text-primary-600 mb-4">$29/month</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 2 published products</li>
                <li>• 100 students</li>
                <li>• Basic analytics</li>
                <li>• Email support</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Growth</h3>
              <div className="text-2xl font-bold text-primary-600 mb-4">$69/month</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 10 published products</li>
                <li>• 500 students</li>
                <li>• Enhanced analytics</li>
                <li>• Priority support</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-primary-500">
              <div className="text-xs font-bold text-primary-600 mb-2">MOST POPULAR</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Professional</h3>
              <div className="text-2xl font-bold text-primary-600 mb-4">$149/month</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 25 published products</li>
                <li>• 2,000 students</li>
                <li>• Advanced analytics</li>
                <li>• API access</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-2xl font-bold text-primary-600 mb-4">$349/month</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 100 published products</li>
                <li>• Unlimited students</li>
                <li>• Enterprise analytics</li>
                <li>• 24/7 phone support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['React', 'Node.js', 'MongoDB', 'AWS', 'AI/ML', 'Mobile Apps'].map((tech, index) => (
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
                  <span className="text-gray-700">50K+ active users on the platform</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">AI-powered course creation tools</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Multi-language support and global reach</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">14-day free trial with no credit card required</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-cog text-primary-500 mr-3"></i>
                  <span className="text-gray-700">Advanced course editor with drag-and-drop interface</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-cog text-primary-500 mr-3"></i>
                  <span className="text-gray-700">HD video streaming and auto-captioning</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-cog text-primary-500 mr-3"></i>
                  <span className="text-gray-700">SSL security and regular updates</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-cog text-primary-500 mr-3"></i>
                  <span className="text-gray-700">White-label options and custom branding</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Learning Platform?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help you create a similar comprehensive learning management system for your educational needs.
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
