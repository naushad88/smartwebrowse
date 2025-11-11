import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Whitepapers | Smartwebrowse India Private Limited',
  description: 'Download our comprehensive whitepapers on AI services, automation, AI consulting, and AI transformation strategies.',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/whitepapers',
  },
};

export default function Whitepapers() {
  const whitepapers = [
    {
      title: "The Future of AI: Trends and Strategies for 2025",
      category: "AI Services",
      description: "Explore emerging AI technologies and strategies that will shape the future of enterprise AI infrastructure.",
      downloadCount: "2,500+",
      fileSize: "2.3 MB",
      publishDate: "January 2025"
    },
    {
      title: "Intelligent Automation: Implementing AI-Powered Automation Frameworks",
      category: "Automation",
      description: "Learn how to implement intelligent automation solutions to transform your business processes and workflows.",
      downloadCount: "1,800+",
      fileSize: "1.8 MB",
      publishDate: "December 2024"
    },
    {
      title: "AI Transformation: From Strategy to Implementation",
      category: "AI Consulting",
      description: "A comprehensive guide to implementing AI practices and achieving successful AI transformation in your organization.",
      downloadCount: "3,200+",
      fileSize: "3.1 MB",
      publishDate: "November 2024"
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
                Whitepapers & Resources
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              AI Whitepapers & Resources
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Access our comprehensive AI whitepapers and technical resources to stay ahead of industry trends 
              and make informed AI technology decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 neural-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {whitepapers.map((paper, index) => (
              <div key={index} className="card-ai p-6 hover:-translate-y-2 transition-all duration-300">
                <div className="mb-4">
                  <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    {paper.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{paper.title}</h3>
                <p className="text-gray-600 mb-4">{paper.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <i className="fas fa-download text-blue-600 mr-2"></i>
                    {paper.downloadCount} downloads
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-file text-indigo-600 mr-2"></i>
                    {paper.fileSize}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Published: {paper.publishDate}</span>
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm px-4 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Download
                  </button>
                </div>
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
                  Stay Updated
                </h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Get notified when we publish new AI whitepapers and technical resources.
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
