'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Services Provider', href: '/services/ai-services-provider' },
        { name: 'Automation Services', href: '/services/automation-services' },
        { name: 'AI Support & Maintenance', href: '/services/ai-support' },
        { name: 'AI Consulting', href: '/services/ai-consulting' },
        { name: 'AI Integration', href: '/services/ai-integration' },
        { name: 'AI Development', href: '/services/ai-development' },
        { name: 'AI Analytics', href: '/services/ai-analytics' },
        { name: 'AI Infrastructure', href: '/services/ai-infrastructure' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Client Reviews', href: '/client-reviews' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'FAQs', href: '/faqs' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Whitepapers', href: '/whitepapers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/smartwebrowse', icon: 'fa-brands fa-facebook' },
    { name: 'X', href: 'https://x.com/smartwebrowse', icon: 'fa-solid fa-xmark' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/smartwebrowse', icon: 'fa-brands fa-linkedin' },
    { name: 'Instagram', href: 'https://www.instagram.com/smartwebrowse/', icon: 'fa-brands fa-instagram' },
    { name: 'YouTube', href: 'https://www.youtube.com/@smartwebrowse', icon: 'fa-brands fa-youtube' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 neural-pattern opacity-20"></div>
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="inline-block mb-6 group">
                <Image
                  src="/images/Smartwebrowse-Logo.png"
                  alt="Smartwebrowse India Private Limited"
                  width={180}
                  height={52}
                  className="h-10 w-auto brightness-0 invert group-hover:opacity-80 transition-opacity duration-300"
                />
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-base">
                Smartwebrowse India Private Limited (SWB) is a leading AI startup providing intelligent automation, 
                AI services, and 24/7 AI support. We deliver cutting-edge AI solutions, automation services, and AI 
                consulting to transform businesses with intelligent technology.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm flex items-center justify-center mr-3 group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-all duration-300">
                    <i className="fa-solid fa-map-marker-alt text-blue-400"></i>
                  </div>
                  <span className="text-gray-300 text-sm">India | Global AI Services</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm flex items-center justify-center mr-3 group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-all duration-300">
                    <i className="fa-solid fa-clock text-blue-400"></i>
                  </div>
                  <span className="text-gray-300 text-sm">24/7 AI Support Available</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm flex items-center justify-center mr-3 group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-all duration-300">
                    <i className="fa-solid fa-envelope text-blue-400"></i>
                  </div>
                  <span className="text-gray-300 text-sm">contact@smartwebrowse.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <h3 className="text-lg font-bold mb-4 text-white bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm group flex items-center"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>



      {/* Bottom Footer */}
      <div className="relative z-10 border-t border-white/10 py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} Smartwebrowse India Private Limited. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-12 h-12 rounded-xl glass-effect border border-white/20 hover:border-blue-400/50 flex items-center justify-center text-white hover:text-blue-400 transition-all duration-300 group backdrop-blur-sm"
                  aria-label={social.name}
                >
                  <i className={`${social.icon} text-lg group-hover:scale-110 transition-transform duration-300`}></i>
                </motion.a>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-6 text-sm text-gray-400"
            >
              <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-blue-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
