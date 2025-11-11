'use client';

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';

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
      const cookieConsentElements = document.querySelectorAll('[id*="cookie"], [class*="cookie"], [id*="consent"], [class*="consent"]');
      cookieConsentElements.forEach(element => {
        const htmlElement = element as HTMLElement;
        if (htmlElement.style) {
          htmlElement.style.zIndex = '9998';
          htmlElement.style.touchAction = 'manipulation';
          htmlElement.style.pointerEvents = 'auto';
        }
      });

      const cookieButtons = document.querySelectorAll('[id*="cookie"] button, [class*="cookie"] button, [id*="consent"] button, [class*="consent"] button');
      cookieButtons.forEach(button => {
        const htmlButton = button as HTMLElement;
        if (htmlButton.style) {
          htmlButton.style.touchAction = 'manipulation';
          htmlButton.style.pointerEvents = 'auto';
          htmlButton.style.cursor = 'pointer';
        }
        
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
  }, []);

  return (
    <>
      <Head>
        <title>Free AI Consultation | Schedule Expert Session - Smartwebrowse India Private Limited</title>
        <meta name="description" content="Book your free 60-minute AI consultation with Smartwebrowse India Private Limited experts. Get expert advice on AI services, automation, and AI support solutions." />
        <meta name="keywords" content="free AI consultation, AI consulting, automation advice, AI services, AI experts" />
        <link rel="canonical" href="https://www.smartwebrowse.com/consultation" />
        <meta property="og:title" content="Free AI Consultation | Schedule Expert Session - Smartwebrowse India Private Limited" />
        <meta property="og:description" content="Book your free 60-minute AI consultation with Smartwebrowse India Private Limited experts. Get expert advice on AI services, automation, and AI support solutions." />
        <meta property="og:url" content="https://www.smartwebrowse.com/consultation" />
        <meta property="og:site_name" content="Smartwebrowse India Private Limited" />
        <meta property="og:type" content="website" />
        <style jsx global>{`
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
          
          .calendly-inline-widget {
            position: relative !important;
            z-index: 1 !important;
            max-width: 100% !important;
            overflow: hidden !important;
          }
          
          .calendly-inline-widget iframe {
            position: relative !important;
            z-index: 1 !important;
            max-width: 100% !important;
          }
          
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
      <section className="relative py-20 md:py-24 pt-28 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 neural-pattern opacity-20"></div>
        <div className="absolute inset-0 circuit-pattern opacity-15 animate-circuit-flow"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full">
                Free Consultation Available
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Schedule Your Free AI Consultation
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Talk to our AI experts, share your challenges, and discover how we can help you transform your business with intelligent AI solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12">
              <div className="flex items-center text-gray-700">
                <i className="fas fa-clock text-blue-600 mr-2"></i>
                <span>60-minute session</span>
              </div>
              <div className="flex items-center text-gray-700">
                <i className="fas fa-video text-blue-600 mr-2"></i>
                <span>Video call or phone</span>
              </div>
              <div className="flex items-center text-gray-700">
                <i className="fas fa-gift text-blue-600 mr-2"></i>
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
