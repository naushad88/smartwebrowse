import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'API Reference | Smartwebrowse India Private Limited',
  description: 'Technical API documentation and code examples for integrating with Smartwebrowse India Private Limited AI services.',
};

export default function APIReference() {
  const apiEndpoints = [
    {
      method: "GET",
      endpoint: "/api/health",
      description: "Check service health status",
      response: "200 OK"
    },
    {
      method: "POST",
      endpoint: "/api/contact",
      description: "Submit contact form",
      response: "201 Created"
    },
    {
      method: "GET",
      endpoint: "/api/blogs",
      description: "Retrieve blog posts",
      response: "200 OK"
    },
    {
      method: "POST",
      endpoint: "/api/quote",
      description: "Submit quote request",
      response: "201 Created"
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
                API Reference
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              API Reference
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Technical documentation and code examples for integrating with our AI services 
              and building custom AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 neural-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="card-ai p-8 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                API Endpoints
              </h2>
              <div className="space-y-4">
                {apiEndpoints.map((endpoint, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-all duration-300 bg-white">
                    <div className="flex items-center gap-4 mb-2 flex-wrap">
                      <span className={`px-3 py-1 rounded-lg text-sm font-medium ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="bg-gray-100 px-3 py-1 rounded-lg text-sm font-mono text-gray-800">
                        {endpoint.endpoint}
                      </code>
                      <span className="text-sm text-gray-500">
                        {endpoint.response}
                      </span>
                    </div>
                    <p className="text-gray-600">{endpoint.description}</p>
                  </div>
                ))}
              </div>
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
                    Need Technical Support?
                  </h3>
                  <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Our AI development team is here to help with integration and technical questions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/docs" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                      View Documentation
                    </Link>
                    <Link href="/consultation" className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
