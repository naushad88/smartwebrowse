'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      children: [
        { 
          name: 'AI Services', 
          href: '/services/ai-services-provider',
          children: [
            { name: 'AI Services Provider', href: '/services/ai-services-provider' },
            { name: 'AI Consulting', href: '/services/ai-consulting' },
            { name: 'AI Integration', href: '/services/ai-integration' },
            { name: 'AI Development', href: '/services/ai-development' },
          ]
        },
        { 
          name: 'Automation Services', 
          href: '/services/automation-services',
          children: [
            { name: 'Process Automation', href: '/services/automation-services/process-automation' },
            { name: 'Workflow Automation', href: '/services/automation-services/workflow-automation' },
            { name: 'AI-Powered Automation', href: '/services/automation-services/ai-powered-automation' },
            { name: 'Business Process Automation', href: '/services/automation-services/business-process-automation' },
          ]
        },
        { 
          name: 'AI Support', 
          href: '/services/ai-support',
          children: [
            { name: '24/7 AI Support', href: '/services/ai-support' },
            { name: 'AI System Maintenance', href: '/services/ai-support/ai-system-maintenance' },
            { name: 'AI Infrastructure Support', href: '/services/ai-infrastructure' },
            { name: 'AI Monitoring', href: '/services/ai-support/ai-monitoring' },
          ]
        },
        { 
          name: 'AI Solutions', 
          href: '/services/ai-analytics',
          children: [
            { name: 'AI Analytics', href: '/services/ai-analytics' },
            { name: 'AI Infrastructure', href: '/services/ai-infrastructure' },
            { name: 'Custom AI Solutions', href: '/services/ai-development' },
            { name: 'AI Training & Implementation', href: '/services/ai-consulting' },
          ]
        },
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
  ];

  // Debug: Log navigation data
  console.log('Navigation data:', navigation);
  console.log('Navigation length:', navigation.length);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    console.log('Mobile menu toggled:', newState);
    console.log('Current isMenuOpen state:', isMenuOpen);
    setIsMenuOpen(newState);
  };

  // Handle dropdown mouse events
  const handleDropdownMouseEnter = () => {
    setIsServicesDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsServicesDropdownOpen(false);
  };

  // Handle link clicks to close dropdown
  const handleLinkClick = () => {
    setIsServicesDropdownOpen(false);
  };

  return (
    <>
      {/* Force header to stay on top for mobile */}
      <style jsx>{`
        header {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          z-index: 99999 !important;
          background-color: white !important;
        }
      `}</style>
      <header className={`fixed top-0 left-0 right-0 z-[99999] transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-md shadow-md'
      }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
                  src="/images/Smartwebrowse-Logo.png"
              alt="Smartwebrowse India Private Limited"
              width={210}
              height={61}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <div 
                    className="relative"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <button className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 transition-colors duration-200 font-semibold">
                      <span>{item.name}</span>
                      <i className="fa-solid fa-chevron-down text-xs"></i>
                    </button>
                    
                    {/* Mega Menu */}
                    <div className={`absolute top-full left-0 w-[1000px] bg-white shadow-2xl rounded-2xl transition-all duration-300 border border-blue-100 z-50 backdrop-blur-sm ${
                      isServicesDropdownOpen 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible translate-y-4'
                    }`} style={{ left: 'max(0px, calc(50% - 400px))' }}>
                      <div className="p-6 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 rounded-2xl">
                        <div className="grid grid-cols-4 gap-6">
                          {item.children.slice(0, 4).map((child) => (
                            <div key={child.name} className="space-y-3">
                              <Link
                                href={child.href}
                                onClick={handleLinkClick}
                                className="block font-bold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 mb-3 pb-2 border-b border-blue-200"
                              >
                                {child.name}
                              </Link>
                              {child.children && (
                                <div className="space-y-2">
                                  {child.children.map((subChild) => (
                                    <Link
                                      key={subChild.name}
                                      href={subChild.href}
                                      onClick={handleLinkClick}
                                      className="block p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 group/sub border border-transparent hover:border-blue-200"
                                    >
                                      <div className="font-medium text-gray-700 group-hover/sub:text-blue-600 transition-colors duration-200 text-sm">
                                        {subChild.name}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        {item.children.length > 4 && (
                          <div className="mt-6 pt-4 border-t border-blue-200">
                            <div className="grid grid-cols-4 gap-6">
                              {item.children.slice(4).map((child) => (
                                <div key={child.name} className="space-y-3">
                                  <Link
                                    href={child.href}
                                    onClick={handleLinkClick}
                                    className="block font-bold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 mb-3 pb-2 border-b border-blue-200"
                                  >
                                    {child.name}
                                  </Link>
                                  {child.children && (
                                    <div className="space-y-2">
                                      {child.children.map((subChild) => (
                                        <Link
                                          key={subChild.name}
                                          href={subChild.href}
                                          onClick={handleLinkClick}
                                          className="block p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 group/sub border border-transparent hover:border-blue-200"
                                        >
                                          <div className="font-medium text-gray-700 group-hover/sub:text-blue-600 transition-colors duration-200 text-sm">
                                            {subChild.name}
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-semibold"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/consultation" className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-2.5 rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300">
              Schedule Consultation
            </Link>
            <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-3 rounded-lg text-white hover:text-white hover:bg-blue-700 transition-all duration-200 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md border border-blue-700"
            aria-label="Toggle menu"
            style={{ zIndex: 9999 }}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            <span className="ml-2 text-sm">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
    </>
  );
};

export default Header;
