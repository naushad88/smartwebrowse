'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

interface HeaderTransparentProps {
  isScrolled?: boolean;
}

const HeaderTransparent = ({ isScrolled = false }: HeaderTransparentProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

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
            { name: 'Process Automation', href: '/services/automation-services' },
            { name: 'Workflow Automation', href: '/services/automation-services' },
            { name: 'AI-Powered Automation', href: '/services/automation-services' },
            { name: 'Business Process Automation', href: '/services/automation-services' },
          ]
        },
        { 
          name: 'AI Support', 
          href: '/services/ai-support',
          children: [
            { name: '24/7 AI Support', href: '/services/ai-support' },
            { name: 'AI System Maintenance', href: '/services/ai-support' },
            { name: 'AI Infrastructure Support', href: '/services/ai-infrastructure' },
            { name: 'AI Monitoring', href: '/services/ai-support' },
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownMouseEnter = () => {
    setIsServicesDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsServicesDropdownOpen(false);
  };

  const handleLinkClick = () => {
    setIsServicesDropdownOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20 relative">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/Logo.png"
                alt="Smartwebrowse India Private Limited"
                width={210}
                height={61}
                className={`h-12 w-auto transition-all duration-300 ${
                  isScrolled ? 'brightness-100' : 'brightness-0 invert'
                }`}
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
                      <button className={`flex items-center space-x-1 transition-colors duration-200 font-semibold ${
                        isScrolled 
                          ? 'text-neutral-800 hover:text-primary-600' 
                          : 'text-white hover:text-blue-300'
                      }`}>
                        <span>{item.name}</span>
                        <i className="fa-solid fa-chevron-down text-xs"></i>
                      </button>
                      
                      {/* Mega Menu */}
                      <div className={`absolute top-full left-0 w-[1000px] bg-white shadow-lg rounded-xl transition-all duration-300 border border-neutral-100 z-50 ${
                        isServicesDropdownOpen 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible translate-y-4'
                      }`} style={{ left: 'max(0px, calc(50% - 400px))' }}>
                        <div className="p-6">
                          <div className="grid grid-cols-4 gap-6">
                            {item.children.slice(0, 4).map((child) => (
                              <div key={child.name} className="space-y-3">
                                <Link
                                  href={child.href}
                                  onClick={handleLinkClick}
                                  className="block font-semibold text-lg text-primary-600 hover:text-primary-700 transition-colors duration-200 mb-3 pb-2 border-b border-neutral-200"
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
                                        className="block p-2 rounded-lg hover:bg-neutral-50 transition-colors duration-200 group/sub"
                                      >
                                        <div className="font-medium text-neutral-700 group-hover/sub:text-primary-600 transition-colors duration-200 text-sm">
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
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`transition-colors duration-200 font-semibold ${
                        isScrolled 
                          ? 'text-gray-800 hover:text-primary-600' 
                          : 'text-white hover:text-blue-300'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link 
                href="/consultation" 
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  isScrolled
                    ? 'bg-white text-primary-600 hover:bg-primary-50 border border-primary-600'
                    : 'bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20'
                }`}
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/get-a-quote" 
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  isScrolled
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg'
                }`}
              >
                Request a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-3 rounded-lg transition-all duration-200 ${
                isScrolled
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20'
              }`}
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default HeaderTransparent;

