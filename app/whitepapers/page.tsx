import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Whitepapers | Smartwebrowse India Private Limited',
  description: 'Download our comprehensive whitepapers on cloud computing, cybersecurity, DevOps, and digital transformation strategies.',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/whitepapers',
  },
};

export default function Whitepapers() {
  const whitepapers = [
    {
      title: "The Future of Cloud Computing: Trends and Strategies for 2025",
      category: "Cloud Computing",
      description: "Explore emerging cloud technologies and strategies that will shape the future of enterprise IT infrastructure.",
      downloadCount: "2,500+",
      fileSize: "2.3 MB",
      publishDate: "January 2025"
    },
    {
      title: "Zero Trust Security: Implementing Modern Cybersecurity Frameworks",
      category: "Cybersecurity",
      description: "Learn how to implement zero trust security principles to protect your organization from evolving cyber threats.",
      downloadCount: "1,800+",
      fileSize: "1.8 MB",
      publishDate: "December 2024"
    },
    {
      title: "DevOps Transformation: From Theory to Practice",
      category: "DevOps",
      description: "A comprehensive guide to implementing DevOps practices and achieving continuous delivery in your organization.",
      downloadCount: "3,200+",
      fileSize: "3.1 MB",
      publishDate: "November 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Whitepapers & Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive whitepapers and technical resources to stay ahead of industry trends 
            and make informed technology decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {whitepapers.map((paper, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  {paper.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{paper.title}</h3>
              <p className="text-gray-600 mb-4">{paper.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>📥 {paper.downloadCount} downloads</span>
                <span>📄 {paper.fileSize}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Published: {paper.publishDate}</span>
                <button className="btn-primary text-sm px-4 py-2">
                  Download
                </button>
              </div>
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
              <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get notified when we publish new whitepapers and technical resources.
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




