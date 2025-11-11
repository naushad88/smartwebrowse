'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { Metadata } from 'next';

// Declare Calendly types
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: any) => void;
      initPopupWidget: (options: any) => void;
    };
  }
}

export default function ConsultationPage() {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for Calendly to be available
    const initCalendly = () => {
      if (window.Calendly && calendlyRef.current) {
        try {
          // Clear any existing content to prevent duplicates
          if (calendlyRef.current) {
            calendlyRef.current.innerHTML = '';
          }
          
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/robustsoftech/60min',
            parentElement: calendlyRef.current,
            prefill: {},
            utm: {}
          });
        } catch (error) {
          console.log('Calendly initialization error:', error);
        }
      }
    };

    // Fix for mobile cookie consent issues
    const fixMobileCookieConsent = () => {
      // Ensure cookie consent doesn't interfere with Calendly
      const cookieConsentElements = document.querySelectorAll('[id*="cookie"], [class*="cookie"], [id*="consent"], [class*="consent"]');
      cookieConsentElements.forEach(element => {
        const htmlElement = element as HTMLElement;
        if (htmlElement.style) {
          // Ensure proper z-index for mobile
          htmlElement.style.zIndex = '9998';
          // Ensure touch events work
          htmlElement.style.touchAction = 'manipulation';
          // Fix pointer events
          htmlElement.style.pointerEvents = 'auto';
        }
      });

      // Fix any buttons in cookie consent
      const cookieButtons = document.querySelectorAll('[id*="cookie"] button, [class*="cookie"] button, [id*="consent"] button, [class*="consent"] button');
      cookieButtons.forEach(button => {
        const htmlButton = button as HTMLElement;
        if (htmlButton.style) {
          htmlButton.style.touchAction = 'manipulation';
          htmlButton.style.pointerEvents = 'auto';
          htmlButton.style.cursor = 'pointer';
        }
        
        // Ensure click events work on mobile
        htmlButton.addEventListener('touchstart', (e) => {
          e.preventDefault();
          htmlButton.click();
        }, { passive: false });
      });
    };

    // Initialize when Calendly is ready
    if (window.Calendly) {
      initCalendly();
    } else {
      const timer = setTimeout(initCalendly, 1000);
      return () => clearTimeout(timer);
    }

    // Fix mobile cookie consent issues
    setTimeout(fixMobileCookieConsent, 500);
    setTimeout(fixMobileCookieConsent, 1500);
    setTimeout(fixMobileCookieConsent, 3000);

    // Cleanup
    return () => {
      // No need to clear innerHTML on cleanup
    };
  }, []);

  return (
    <>
      <Head>
        <title>Free AI Consultation | Schedule Expert Session</title>
        <meta name="description" content="Book your free 60-minute AI consultation with Smartwebrowse India Private Limited experts. Get expert advice on AI services, automation, and AI support solutions." />
        <meta name="keywords" content="free AI consultation, AI consulting, automation advice, AI services, AI experts" />
        <link rel="canonical" href="https://www.smartwebrowse.com/consultation" />
        <meta property="og:title" content="Free AI Consultation | Schedule Expert Session" />
        <meta property="og:description" content="Book your free 60-minute AI consultation with Smartwebrowse India Private Limited experts. Get expert advice on AI services, automation, and AI support solutions." />
        <meta property="og:url" content="https://www.smartwebrowse.com/consultation" />
        <meta property="og:site_name" content="Smartwebrowse India Private Limited" />
        <meta property="og:type" content="website" />
        <style jsx global>{`
          /* Fix for mobile cookie consent issues */
          [id*="cookie"], [class*="cookie"], [id*="consent"], [class*="consent"] {
            touch-action: manipulation !important;
            pointer-events: auto !important;
            z-index: 9998 !important;
          }
          
          [id*="cookie"] button, [class*="cookie"] button, [id*="consent"] button, [class*="consent"] button {
            touch-action: manipulation !important;
            pointer-events: auto !important;
            cursor: pointer !important;
            -webkit-tap-highlight-color: rgba(0,0,0,0.1) !important;
          }
          
          /* Ensure Calendly widget is accessible */
          .calendly-inline-widget {
            position: relative !important;
            z-index: 1 !important;
            max-width: 100% !important;
            overflow: hidden !important;
          }
          
          /* Prevent Calendly from affecting footer */
          .calendly-inline-widget iframe {
            position: relative !important;
            z-index: 1 !important;
            max-width: 100% !important;
          }
          
          /* Fix for mobile touch events */
          @media (max-width: 768px) {
            [id*="cookie"], [class*="cookie"], [id*="consent"], [class*="consent"] {
              position: fixed !important;
              bottom: 0 !important;
              left: 0 !important;
              right: 0 !important;
              z-index: 9999 !important;
            }
          }
        `}</style>
      </Head>
      {/* Hero Section */}
      <section className="relative py-20 pt-28 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
        ></motion.div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <i className="fas fa-calendar-check mr-2 text-primary-600"></i>
              Free Consultation Available
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary-900 mb-6 leading-tight">
              Schedule Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700"> Free Consultation</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-primary-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Talk to our experts, share your challenges, and discover how we can help you grow your business with the right digital solutions.
            </p>
            
                         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12">
               <div className="flex items-center text-primary-700">
                 <i className="fas fa-clock text-primary-600 mr-2"></i>
                 <span>60-minute session</span>
               </div>
               <div className="flex items-center text-primary-700">
                 <i className="fas fa-video text-primary-600 mr-2"></i>
                 <span>Video call or phone</span>
               </div>
               <div className="flex items-center text-primary-700">
                 <i className="fas fa-gift text-primary-600 mr-2"></i>
                 <span>100% free</span>
               </div>
             </div>

           </div>
         </div>
         
         {/* Calendly Form - Full Width */}
         <div className="w-full px-4 my-0 relative">
           <div 
             ref={calendlyRef}
             className="calendly-inline-widget" 
             data-url="https://calendly.com/robustsoftech/60min"
             style={{ 
               minWidth: '100%', 
               width: '100%', 
               height: '700px',
               position: 'relative',
               zIndex: 1,
               overflow: 'hidden'
             }}
           ></div>
         </div>
       </section>

      
    </>
  );
}