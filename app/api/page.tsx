import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Reference | Smartwebrowse India Private Limited',
  description: 'Technical API documentation and code examples for integrating with Smartwebrowse India Private Limited services.',
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
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">API Reference</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technical documentation and code examples for integrating with our services 
            and building custom solutions.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">API Endpoints</h2>
          <div className="space-y-4">
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-4 mb-2">
                  <span className={`px-3 py-1 rounded text-sm font-medium ${
                    endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                    endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
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

        <div className="text-center">
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 shadow-2xl">
            {/* Background pattern with dots */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 rounded-3xl bg-white/20 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Need Technical Support?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our development team is here to help with integration and technical questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/docs" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  View Documentation
                </a>
                <a href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




