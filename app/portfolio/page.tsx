import React from 'react';
import { Metadata } from 'next';
import PortfolioContent from '@/components/PortfolioContent';

export const metadata: Metadata = {
  title: 'Portfolio | Cloud, Cybersecurity & Web Projects',
  description: 'Explore our successful IT projects: healthcare systems, e-commerce platforms, financial security & IoT solutions. See real results from our work.',
  keywords: 'IT portfolio, cloud projects, cybersecurity solutions, web development projects, digital transformation',
  openGraph: {
    title: 'Portfolio | Cloud, Cybersecurity & Web Projects',
    description: 'Explore our successful IT projects: healthcare systems, e-commerce platforms, financial security & IoT solutions. See real results from our work.',
    url: 'https://www.smartwebrowse.com/portfolio',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.smartwebrowse.com/portfolio',
  },
};

// Static portfolio data - server-side rendered
const portfolioData = {
  projects: [
    {
      title: "RobustLMS - Complete Learning Platform",
      category: "Education",
      technology: ["React", "Node.js", "MongoDB", "AWS", "AI/ML", "Mobile Apps"],
      description: "Developed a comprehensive learning management system with AI-powered course creation, advanced analytics, multi-device learning, and enterprise-grade security for creators and learners worldwide.",
      image: "/images/RobustLMS.png",
      results: [
        "50K+ active users on the platform",
        "AI-powered course creation tools",
        "Multi-language support and global reach"
      ]
    },
    {
      title: "Happy Hemp – E-Commerce Platform Development",
      category: "Retail",
      technology: ["WordPress", "WooCommerce", "PHP", "MySQL", "Payment Gateway", "Multi-language"],
      description: "Developed and maintained a comprehensive e-commerce platform for CBD and hemp products with multi-category support, subscription services, lab reports integration, and multi-language capabilities.",
      image: "/images/HappyHemp.png",
      results: [
        "20,000+ 5-star customer reviews achieved",
        "Multi-language support for 30+ countries",
        "GMP certified and triple laboratory tested products",
        "Integrated subscription and wholesale systems"
      ]
    },
    {
      title: "Boxchange - Search & Interim Management",
      category: "Professional Services",
      technology: ["Next-Gen Collaborative Hiring", "AI/ML", "Talent Analytics", "Global Network"],
      description: "Developed comprehensive executive search and interim management solutions through the boxchange360° platform, integrating multiple layers of scientific and objective candidate assessments for informed hiring decisions.",
      image: "/images/Boxchange.png",
      results: [
        "96% retention rates for new hires achieved",
        "Access to 1.2 billion people from 140+ data sources",
        "25+ years of experience in business change and technology leadership"
      ]
    },
    {
      title: "Doctor Shannon - Modern Psychology & Wellness Platform",
      category: "Healthcare",
      technology: ["Modern Psychology", "Mindfulness", "Neuroscience", "Ketamine Therapy"],
      description: "Developed a comprehensive psychology and wellness platform offering personalized therapy for anxiety, depression and stress with mindfulness-based and neuroscience-informed approaches, including optional ketamine-assisted therapy.",
      image: "/images/Doctor-shannon Featured.png",
      results: [
        "Personalized therapy for anxiety, depression and stress",
        "Mindfulness-based and neuroscience-informed approach",
        "Optional ketamine-assisted therapy for deeper breakthroughs"
      ]
    },
    {
      title: "GradeNext AI Learning Platform",
      category: "Education",
      technology: ["React", "Next.js", "AI/ML", "Node.js", "MongoDB", "AWS"],
      description: "Developed an AI-driven after-school learning platform for grades 1-8 with adaptive learning, performance tracking, coding classes, and personalized 1:1 tutor support system.",
      image: "/images/Gradenext.png",
      results: [
        "AI-powered adaptive learning for Math, Science & English",
        "Real-time performance analytics and insights",
        "Interactive coding curriculum for young minds",
        "Personalized 1:1 tutor matching system"
      ]
    },
    {
      title: "IDTR Mobile App - XAMARIN-MAUI Platform",
      category: "Mobile App",
      technology: ["Xamarin", "MAUI", "Mobile Development", "Cross-Platform"],
      description: "Developed the Irish Driving Test Routes (IDTR) mobile app using Xamarin-MAUI platform, providing Ireland's most accurate and up-to-date driving test routes directly to users' phones with real-time navigation and progress tracking.",
      image: "/images/IDTR App.png",
      results: [
        "5000+ active users on the platform",
        "500+ passive users with 20% increase",
        "Real test routes access for all Irish test centres"
      ]
    }
  ],
  categories: ["All", "Education", "Retail", "Professional Services", "Healthcare", "Mobile App"]
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PortfolioContent data={portfolioData} />
    </div>
  );
}