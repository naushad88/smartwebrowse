import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Webinars | Smartwebrowse India Private Limited',
  description: 'Join our expert-led webinars on AI services, automation, AI consulting, and AI transformation strategies.',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/webinars',
  },
};

export default function Webinars() {
  const webinars = [
    {
      title: "AI Implementation Best Practices",
      date: "February 15, 2025",
      time: "2:00 PM EST",
      duration: "60 minutes",
      speaker: "Sarah Johnson, AI Architect",
      description: "Learn the essential strategies and best practices for successful AI implementation projects.",
      category: "AI Services"
    },
    {
      title: "Intelligent Automation Strategies",
      date: "February 22, 2025",
      time: "1:00 PM EST",
      duration: "45 minutes",
      speaker: "Michael Chen, Automation Specialist",
      description: "Discover how to implement intelligent automation solutions in your organization.",
      category: "Automation"
    },
    {
      title: "AI Transformation Roadmap",
      date: "March 1, 2025",
      time: "3:00 PM EST",
      duration: "75 minutes",
      speaker: "Emily Rodriguez, AI Consultant",
      description: "A comprehensive guide to transforming your business with AI technologies and practices.",
      category: "AI Consulting"
    }
  ];

  return (
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
                Expert Webinars
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              AI Expert Webinars
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join our AI industry experts for insightful webinars on the latest trends and best practices 
              in AI services, automation, and AI transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 neural-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {webinars.map((webinar, index) => (
              <div key={index} className="card-ai p-6 hover:-translate-y-2 transition-all duration-300">
                <div className="mb-4">
                  <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    {webinar.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{webinar.title}</h3>
                <p className="text-gray-600 mb-4">{webinar.description}</p>
                
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <i className="fas fa-calendar text-blue-600 mr-2"></i>
                    {webinar.date}
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-clock text-blue-600 mr-2"></i>
                    {webinar.time} ({webinar.duration})
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-user text-blue-600 mr-2"></i>
                    {webinar.speaker}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Register Now
                </button>
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
                  Stay Informed
                </h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Get notified about upcoming AI webinars and exclusive content.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
