'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

const CALENDLY_BASE_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  'https://calendly.com/praelix/30min';

const CALENDLY_INLINE_URL = `${CALENDLY_BASE_URL}${
  CALENDLY_BASE_URL.includes('?') ? '&' : '?'
}month=2026-05&hide_gdpr_banner=1&hide_event_type_details=1`;

const CALENDLY_HEIGHT = 680;

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, string>;
        utm?: Record<string, string>;
      }) => void;
    };
  }
}

export default function ConsultationPage() {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const [widgetReady, setWidgetReady] = useState(false);

  useEffect(() => {
    if (window.Calendly) {
      setScriptReady(true);
    }
  }, []);

  useEffect(() => {
    if (!scriptReady || !calendlyRef.current || !window.Calendly) {
      return;
    }

    calendlyRef.current.innerHTML = '';

    window.Calendly.initInlineWidget({
      url: CALENDLY_INLINE_URL,
      parentElement: calendlyRef.current,
      prefill: {},
      utm: {},
    });

    setWidgetReady(true);
  }, [scriptReady]);

  const handleCalendlyLoad = () => {
    if (window.Calendly) {
      setScriptReady(true);
      return;
    }

    const interval = window.setInterval(() => {
      if (window.Calendly) {
        window.clearInterval(interval);
        setScriptReady(true);
      }
    }, 100);

    window.setTimeout(() => window.clearInterval(interval), 10000);
  };

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={handleCalendlyLoad}
      />

      <section className="relative min-h-screen pt-24 pb-10 md:pt-28 md:pb-12 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 neural-pattern opacity-30" />
        <div className="absolute inset-0 circuit-pattern opacity-20 animate-circuit-flow" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/60" />

        <div className="absolute top-20 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
        <div
          className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: '2s' }}
        />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center lg:items-start">
            {/* Left — hero copy */}
            <div className="text-center lg:text-left lg:sticky lg:top-28 lg:py-4">
              <div className="inline-block mb-5">
                <span className="text-xs font-bold text-blue-200 uppercase tracking-widest bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                  Free Consultation Available
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold mb-5 text-white leading-tight">
                Schedule Your Free AI Consultation
              </h1>

              <p className="text-base md:text-lg text-slate-200 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Pick a time on the right — booking stays on this page. No redirect to
                Calendly.
              </p>

              <ul className="space-y-4 max-w-md mx-auto lg:mx-0 text-left">
                <li className="flex items-center gap-3 text-slate-100">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 border border-blue-400/30">
                    <i className="fas fa-clock text-blue-400" aria-hidden />
                  </span>
                  <span className="font-medium">30-minute session</span>
                </li>
                <li className="flex items-center gap-3 text-slate-100">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 border border-blue-400/30">
                    <i className="fas fa-video text-blue-400" aria-hidden />
                  </span>
                  <span className="font-medium">Video call or phone</span>
                </li>
                <li className="flex items-center gap-3 text-slate-100">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 border border-blue-400/30">
                    <i className="fas fa-gift text-blue-400" aria-hidden />
                  </span>
                  <span className="font-medium">100% free</span>
                </li>
              </ul>
            </div>

            {/* Right — Calendly (calendar only, details on left) */}
            <div className="w-full max-w-[520px] mx-auto lg:max-w-none lg:ml-auto">
              <div
                className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white"
                style={{ minHeight: CALENDLY_HEIGHT }}
              >
                {!widgetReady && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-50 text-slate-500">
                    <div className="text-center">
                      <i
                        className="fas fa-spinner fa-spin text-3xl text-blue-600 mb-3"
                        aria-hidden
                      />
                      <p className="font-medium">Loading scheduler…</p>
                    </div>
                  </div>
                )}

                <div
                  ref={calendlyRef}
                  className="calendly-inline-widget"
                  data-url={CALENDLY_INLINE_URL}
                  style={{
                    height: `${CALENDLY_HEIGHT}px`,
                    width: '100%',
                    minWidth: '280px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
