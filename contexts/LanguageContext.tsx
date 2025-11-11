'use client';

import { createContext, useContext, ReactNode } from 'react';

type Language = 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, string> = {
  // Navigation
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.services': 'Services',
  'nav.portfolio': 'Portfolio',
  'nav.careers': 'Careers',
  'nav.contact': 'Contact',
  'nav.blog': 'Blog',
  'nav.caseStudies': 'Case Studies',
  'nav.scheduleConsultation': 'Schedule Consultation',
  'nav.requestQuote': 'Request Quote',

  // Hero
  'hero.title': 'The Future of Business is Intelligent',
  'hero.subtitle': 'Advanced Machine Learning • Intelligent Automation • Neural Network Integration',
  'hero.description': 'We architect AI ecosystems that don\'t just automate—they learn, predict, and evolve. Your competitive advantage starts here.',
  'hero.cta': 'Schedule Free Consultation',
  'hero.ctaSecondary': 'Explore Our Solutions',
  'hero.feature1': 'Enterprise AI Architecture',
  'hero.feature2': 'Neural Network Integration',
  'hero.feature3': 'Advanced ML Models',
  'hero.feature4': 'Intelligent Automation',

  // Stats
  'stats.happyClients': 'Happy Clients',
  'stats.projectsCompleted': 'AI Projects Delivered',
  'stats.yearsExperience': 'Years in AI',
  'stats.countriesServed': 'Global Reach',
  'stats.trustedTitle': 'Trusted by Leading Enterprises',
  'stats.trustedDescription': 'We serve clients across multiple industries with our expertise in AI services, automation, and intelligent support. Our proven track record in AI transformation speaks for itself.',

  // Services
  'services.cybersecurity.title': 'Cybersecurity Services',
  'services.cybersecurity.description': 'Comprehensive security solutions including IAM, SIEM, SOC, and VAPT services to protect your business assets.',
  'services.devops.title': 'DevOps & Automation',
  'services.devops.description': 'Streamline your development and operations with CI/CD pipelines, infrastructure as code, and monitoring solutions.',
  'services.cloud.title': 'Cloud Services',
  'services.cloud.description': 'Expert cloud migration, optimization, and management across AWS, Azure, and Google Cloud platforms.',
  'services.testing.title': 'Application Testing',
  'services.testing.description': 'Comprehensive testing solutions including performance, security, and automated testing for quality assurance.',
  'services.aiweb.title': 'AI & Web Development',
  'services.aiweb.description': 'Custom web applications, AI integration, and modern development solutions for digital transformation.',
  'services.mobile.title': 'Mobile App Development',
  'services.mobile.description': 'Native and cross-platform mobile applications for iOS, Android, and hybrid platforms.',
  'services.marketing.title': 'Digital Marketing',
  'services.marketing.description': 'SEO optimization, content marketing, social media management, and analytics reporting services.',
  'services.itsupport.title': 'IT Services & Support',
  'services.itsupport.description': 'Round-the-clock IT support, help desk services, and infrastructure management for seamless operations.',

  // CTA
  'cta.title': 'Ready to Transform with AI?',
  'cta.description': 'Let\'s discuss how our AI-powered solutions can drive your business transformation, automate operations, and accelerate growth.',
  'cta.primary': 'Get Started Today',
  'cta.secondary': 'Schedule Consultation',

  // Common
  'common.learnMore': 'Learn More',
  'common.viewAll': 'View All',
  'common.getStarted': 'Get Started',
  'common.contactUs': 'Contact Us',
  'common.readMore': 'Read More',
  'common.viewDetails': 'View Details',
  'common.getQuote': 'Get Quote',
  'common.scheduleConsultation': 'Schedule Consultation',
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language: Language = 'en';
  const setLanguage = () => {}; // No-op for English-only

  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Return default values for SSR or when context is not available
    return {
      language: 'en' as Language,
      setLanguage: () => {},
      t: (key: string) => translations[key] || key
    };
  }
  return context;
};

