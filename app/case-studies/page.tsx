
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies | AI Solutions & Automation Projects - Smartwebrowse India Private Limited',
  description: 'Explore real-world case studies showcasing our successful AI implementations in education technology, e-commerce, professional services, healthcare, and mobile app development.',
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50 pt-20">
      <div className="container-custom py-16 md:py-20 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 neural-pattern opacity-15"></div>
        <div className="absolute inset-0 circuit-pattern opacity-10"></div>

        {/* Hero Section */}
        <div
          className="text-center mb-16 relative z-10"
        >
          <div className="inline-block mb-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full">
              Success Stories
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            Case Studies
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped organizations across education, retail, professional services, healthcare, and mobile app development 
            achieve their AI transformation goals and overcome complex technical challenges.
          </p>
        </div>

        <div className="space-y-8 relative z-10">
          {caseStudies.map((study, index) => {
            const gradientColors = [
              'from-blue-600 via-indigo-600 to-purple-600',
              'from-cyan-600 via-blue-600 to-indigo-600', 
              'from-indigo-600 via-purple-600 to-pink-600',
              'from-blue-500 via-cyan-500 to-blue-600',
              'from-indigo-600 via-blue-600 to-cyan-600',
              'from-purple-600 via-indigo-600 to-blue-600'
            ];
            
            const cardGradient = gradientColors[index % gradientColors.length];
            
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="card-ai p-8 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden">
                  {/* Animated background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${cardGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-xs font-bold text-white px-4 py-2 rounded-full bg-gradient-to-r ${cardGradient} shadow-lg`}>
                          {study.industry}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                        {study.title}
                      </h2>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cardGradient}`}></div>
                          The Challenge
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cardGradient}`}></div>
                          Our Solution
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{study.solution}</p>
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
                              className="text-xs bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-700 px-3 py-1.5 rounded-full border border-blue-100 hover:shadow-md transition-all duration-200 font-medium"
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
                        <div className="relative overflow-hidden rounded-xl shadow-lg group/image">
                          <img
                            src={study.featuredImage}
                            alt={study.title}
                            className="w-full h-48 object-cover group-hover/image:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cardGradient}`}></div>
                        Results & Impact
                      </h3>
                      <div className="space-y-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 group/result hover:shadow-md transition-all duration-300">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gradient-to-r ${cardGradient} group-hover/result:scale-110 transition-transform duration-300`}>
                              <i className="fas fa-check text-white text-xs"></i>
                            </div>
                            <p className="text-gray-700 font-medium text-sm">{result}</p>
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
        <div
          className="text-center mt-20 relative z-10"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 shadow-2xl border border-white/20">
            <div className="absolute inset-0 neural-pattern opacity-20"></div>
            <div className="absolute inset-0 circuit-pattern opacity-15 animate-circuit-flow"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Success Story?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how we can help transform your business with our proven AI solutions and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/consultation" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Schedule Free Consultation
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
                <Link 
                  href="/get-a-quote" 
                  className="inline-flex items-center justify-center px-8 py-4 glass-effect border-2 border-white/40 text-white rounded-xl font-bold hover:bg-white/10 hover:border-white/60 transition-all duration-300"
                >
                  Request Quote
                  <i className="fas fa-chevron-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
