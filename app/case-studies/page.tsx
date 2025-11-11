import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Smartwebrowse India Private Limited',
  description: 'Explore real-world case studies showcasing our successful implementations in education technology, e-commerce, professional services, healthcare, and mobile app development.',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/case-studies',
  },
};

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "RobustLMS - Complete Learning Platform Development",
      client: "RobustLMS",
      industry: "Education",
      featuredImage: "/images/RobustLMS.png",
      challenge: "Need for a comprehensive learning management system with AI-powered course creation, advanced analytics, and multi-device learning capabilities for creators and learners worldwide.",
      solution: "Developed a comprehensive learning management system with AI-powered course creation, advanced analytics, multi-device learning, and enterprise-grade security.",
      results: [
        "50K+ active users on the platform",
        "AI-powered course creation tools implemented",
        "Multi-language support and global reach achieved"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "AI/ML", "Mobile Apps"]
    },
    {
      title: "Happy Hemp – E-Commerce Platform Development",
      client: "Happy Hemp",
      industry: "Retail",
      featuredImage: "/images/HappyHemp.png",
      challenge: "Need for a comprehensive e-commerce platform for CBD and hemp products with multi-category support, subscription services, lab reports integration, and multi-language capabilities.",
      solution: "Developed and maintained a comprehensive e-commerce platform with multi-category support, subscription services, lab reports integration, and multi-language capabilities.",
      results: [
        "20,000+ 5-star customer reviews achieved",
        "Multi-language support for 30+ countries",
        "GMP certified and triple laboratory tested products",
        "Integrated subscription and wholesale systems"
      ],
      technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "Payment Gateway", "Multi-language"]
    },
    {
      title: "Boxchange - Executive Search & Interim Management Platform",
      client: "Boxchange",
      industry: "Professional Services",
      featuredImage: "/images/Boxchange.png",
      challenge: "Need for comprehensive executive search and interim management solutions with scientific and objective candidate assessments for informed hiring decisions.",
      solution: "Developed comprehensive executive search and interim management solutions through the boxchange360° platform, integrating multiple layers of scientific and objective candidate assessments.",
      results: [
        "96% retention rates for new hires achieved",
        "Access to 1.2 billion people from 140+ data sources",
        "25+ years of experience in business change and technology leadership"
      ],
      technologies: ["Next-Gen Collaborative Hiring", "AI/ML", "Talent Analytics", "Global Network"]
    },
    {
      title: "Doctor Shannon - Modern Psychology & Wellness Platform",
      client: "Doctor Shannon",
      industry: "Healthcare",
      featuredImage: "/images/Doctor-shannon Featured.png",
      challenge: "Need for a comprehensive psychology and wellness platform offering personalized therapy for anxiety, depression and stress with modern approaches.",
      solution: "Developed a comprehensive psychology and wellness platform offering personalized therapy with mindfulness-based and neuroscience-informed approaches, including optional ketamine-assisted therapy.",
      results: [
        "Personalized therapy for anxiety, depression and stress",
        "Mindfulness-based and neuroscience-informed approach",
        "Optional ketamine-assisted therapy for deeper breakthroughs"
      ],
      technologies: ["Modern Psychology", "Mindfulness", "Neuroscience", "Ketamine Therapy"]
    },
    {
      title: "GradeNext AI Learning Platform Development",
      client: "GradeNext",
      industry: "Education",
      featuredImage: "/images/Gradenext.png",
      challenge: "Need for an AI-driven after-school learning platform for grades 1-8 with adaptive learning, performance tracking, coding classes, and personalized 1:1 tutor support.",
      solution: "Developed an AI-driven after-school learning platform with adaptive learning, performance tracking, coding classes, and personalized 1:1 tutor support system.",
      results: [
        "AI-powered adaptive learning for Math, Science & English",
        "Real-time performance analytics and insights",
        "Interactive coding curriculum for young minds",
        "Personalized 1:1 tutor matching system"
      ],
      technologies: ["React", "Next.js", "AI/ML", "Node.js", "MongoDB", "AWS"]
    },
    {
      title: "IDTR Mobile App - XAMARIN-MAUI Platform",
      client: "IDTR",
      industry: "Mobile App",
      featuredImage: "/images/IDTR App.png",
      challenge: "Need for Ireland's most accurate and up-to-date driving test routes mobile app with real-time navigation and progress tracking.",
      solution: "Developed the Irish Driving Test Routes (IDTR) mobile app using Xamarin-MAUI platform, providing Ireland's most accurate and up-to-date driving test routes directly to users' phones.",
      results: [
        "5000+ active users on the platform",
        "500+ passive users with 20% increase",
        "Real test routes access for all Irish test centres"
      ],
      technologies: ["Xamarin", "MAUI", "Mobile Development", "Cross-Platform"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 pt-20">
      <div className="container-custom py-16">
        {/* Hero Section with Gradient */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary-600 bg-primary-100 px-4 py-2 rounded-full">
              Success Stories
            </span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-accent-600 bg-clip-text text-transparent mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped organizations across education, retail, professional services, healthcare, and mobile app development 
            achieve their digital transformation goals and overcome complex technical challenges.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => {
            // Different gradient colors for each case study - using blue color scheme only
            const gradientColors = [
              'from-blue-500 to-indigo-600',
              'from-blue-600 to-blue-700', 
              'from-indigo-500 to-blue-600',
              'from-blue-400 to-blue-600',
              'from-indigo-600 to-blue-700',
              'from-blue-500 to-blue-700'
            ];
            
            const cardGradient = gradientColors[index % gradientColors.length];
            
            return (
              <div key={index} className="group relative">
                {/* Background gradient card with pattern */}
                <div className={`absolute inset-0 bg-gradient-to-r ${cardGradient} rounded-2xl opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 rounded-2xl opacity-5 group-hover:opacity-10 transition-opacity duration-300" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
                  backgroundSize: '15px 15px'
                }}></div>
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-sm font-medium text-white px-4 py-2 rounded-full bg-gradient-to-r ${cardGradient} shadow-lg`}>
                          {study.industry}
                        </span>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                        {study.title}
                      </h2>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cardGradient}`}></div>
                          The Challenge
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cardGradient}`}></div>
                          Our Solution
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cardGradient}`}></div>
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-sm bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-2 rounded-full border border-gray-200 hover:shadow-md transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      {/* Featured Image Section */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cardGradient}`}></div>
                          Project Overview
                        </h3>
                        <div className="relative overflow-hidden rounded-xl shadow-lg">
                          <img
                            src={study.featuredImage}
                            alt={study.title}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cardGradient}`}></div>
                        Results & Impact
                      </h3>
                      <div className="space-y-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gradient-to-r ${cardGradient}`}>
                              <i className="fas fa-check text-white text-xs"></i>
                            </div>
                            <p className="text-gray-700 font-medium">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-20">
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 shadow-2xl">
            {/* Background pattern with dots */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 rounded-3xl bg-white/20 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Success Story?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our proven solutions and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Schedule Free Consultation
                </a>
                <a href="/get-a-quote" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




