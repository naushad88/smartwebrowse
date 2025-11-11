import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Webinars | Smartwebrowse India Private Limited',
  description: 'Join our expert-led webinars on cloud computing, cybersecurity, DevOps, and digital transformation strategies.',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/webinars',
  },
};

export default function Webinars() {
  const webinars = [
    {
      title: "Cloud Migration Best Practices",
      date: "February 15, 2025",
      time: "2:00 PM EST",
      duration: "60 minutes",
      speaker: "Sarah Johnson, Cloud Architect",
      description: "Learn the essential strategies and best practices for successful cloud migration projects.",
      category: "Cloud Computing"
    },
    {
      title: "Implementing Zero Trust Security",
      date: "February 22, 2025",
      time: "1:00 PM EST",
      duration: "45 minutes",
      speaker: "Michael Chen, Security Specialist",
      description: "Discover how to implement zero trust security principles in your organization.",
      category: "Cybersecurity"
    },
    {
      title: "DevOps Transformation Roadmap",
      date: "March 1, 2025",
      time: "3:00 PM EST",
      duration: "75 minutes",
      speaker: "Emily Rodriguez, DevOps Engineer",
      description: "A comprehensive guide to transforming your development and operations practices.",
      category: "DevOps"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Expert Webinars</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our industry experts for insightful webinars on the latest trends and best practices 
            in cloud computing, cybersecurity, and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {webinars.map((webinar, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  {webinar.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{webinar.title}</h3>
              <p className="text-gray-600 mb-4">{webinar.description}</p>
              
              <div className="space-y-2 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <i className="fas fa-calendar mr-2"></i>
                  {webinar.date}
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock mr-2"></i>
                  {webinar.time} ({webinar.duration})
                </div>
                <div className="flex items-center">
                  <i className="fas fa-user mr-2"></i>
                  {webinar.speaker}
                </div>
              </div>
              
              <button className="btn-primary w-full">
                Register Now
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 shadow-2xl">
            {/* Background pattern with dots */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 rounded-3xl bg-white/20 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Stay Informed</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get notified about upcoming webinars and exclusive content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




