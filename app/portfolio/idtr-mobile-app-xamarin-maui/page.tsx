import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'IDTR Mobile App - XAMARIN-MAUI Platform | Portfolio | Smartwebrowse India Private Limited',
  description: 'Irish Driving Test Routes (IDTR) mobile app developed using Xamarin-MAUI platform, providing Ireland\'s most accurate and up-to-date driving test routes with real-time navigation and progress tracking.',
  keywords: 'mobile app development, Xamarin, MAUI, driving test routes, Irish driving test, cross-platform development, mobile navigation',
  openGraph: {
    title: 'IDTR Mobile App - XAMARIN-MAUI Platform | Portfolio | Smartwebrowse India Private Limited',
    description: 'Irish Driving Test Routes (IDTR) mobile app developed using Xamarin-MAUI platform, providing Ireland\'s most accurate and up-to-date driving test routes with real-time navigation and progress tracking.',
    url: 'https://www.smartwebrowse.com/portfolio/idtr-mobile-app-xamarin-maui',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
  },
};

export default function IDTRMobileAppPortfolio() {
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
                Mobile Application Development
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              IDTR Mobile App - XAMARIN-MAUI Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Developed the Irish Driving Test Routes (IDTR) mobile app using Xamarin-MAUI platform, 
              providing Ireland's most accurate and up-to-date driving test routes directly to users' 
              phones with real-time navigation and progress tracking.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://staging.drivingtestroutes.ie/mobile-app/" 
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
              src="/images/IDTR Route.jpg"
              alt="IDTR Mobile App - Xamarin MAUI Platform"
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
                Create a comprehensive mobile application that provides Ireland's most accurate and up-to-date 
                driving test routes, helping learners practice on real test routes used by examiners and 
                reducing test anxiety through familiarization with actual test conditions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Solution</h3>
              <p className="text-gray-600">
                Built the IDTR Mobile App using Xamarin-MAUI platform, delivering cross-platform functionality 
                with real-time navigation, progress tracking, and access to all Irish test centre routes. 
                The app integrates trusted mapping technology with local driving knowledge for optimal user experience.
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
                <i className="fas fa-route text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Real Test Routes</h3>
              <p className="text-gray-600">
                Access real driving test routes used by examiners across all Irish test centres, 
                ensuring learners practice on authentic routes they'll encounter during their actual test.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-mobile-alt text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cross-Platform App</h3>
              <p className="text-gray-600">
                Built with Xamarin-MAUI for seamless functionality across smartphones, tablets, and desktop 
                devices, ensuring users can access routes anytime, anywhere.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Track your practice progress and monitor improvement over time with intuitive progress 
                tracking features that help learners stay motivated and focused.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-heart text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Reduce Test Anxiety</h3>
              <p className="text-gray-600">
                By practicing on the same routes encountered during the actual test, learners can 
                significantly reduce stress and anxiety on test day through familiarization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-clock text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Time-Saving</h3>
              <p className="text-gray-600">
                Quickly access the best test routes and practice them at your own pace, eliminating 
                the need to search for reliable route information across multiple sources.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-user-friendly text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">User-Friendly Interface</h3>
              <p className="text-gray-600">
                Simple and intuitive design for easy navigation, ensuring users of all technical 
                levels can easily access and use the app's features effectively.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-download text-primary-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Download & Install</h3>
              <p className="text-gray-600">
                Quickly get the Irish Driving Test Routes app on your device and set up in minutes. 
                Available on all major app stores and platforms.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-map-marker-alt text-primary-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Subscribe Your Routes</h3>
              <p className="text-gray-600">
                Choose your test centre and instantly access accurate driving test routes. 
                Subscribe to specific routes for your area and test centre.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-play text-primary-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Start Practice</h3>
              <p className="text-gray-600">
                Begin practicing real test routes with confidence and improve your chances of passing. 
                Track your progress and build familiarity with test conditions.
              </p>
            </div>
          </div>
        </section>

        {/* User Statistics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Platform Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">5000+</div>
              <p className="text-gray-600 font-medium">Active Users</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <p className="text-gray-600 font-medium">Passive Users</p>
            </div>
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">20%</div>
              <p className="text-gray-600 font-medium">Increase in Users</p>
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Xamarin', 'MAUI', 'Mobile Development', 'Cross-Platform'].map((tech, index) => (
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
                  <span className="text-gray-700">5000+ active users on the platform</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">500+ passive users with 20% increase</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Real test routes access for all Irish test centres</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Cross-platform compatibility across all devices</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-cog text-primary-500 mr-3"></i>
                  <span className="text-gray-700">Xamarin-MAUI cross-platform development</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-cog text-primary-500 mr-3"></i>
                  <span className="text-gray-700">Real-time navigation and mapping integration</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-cog text-primary-500 mr-3"></i>
                  <span className="text-gray-700">Progress tracking and user analytics</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-cog text-primary-500 mr-3"></i>
                  <span className="text-gray-700">Intuitive user interface design</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Mobile App?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help you create a similar cross-platform mobile application using Xamarin-MAUI or other modern mobile development technologies.
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
