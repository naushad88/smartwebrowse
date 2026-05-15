import React from 'react';
import Link from 'next/link';

const LEGAL_NAV = [
  { href: '/terms-of-service', label: 'Terms of Service', icon: 'fa-gavel' },
  { href: '/privacy-policy', label: 'Privacy Policy', icon: 'fa-shield-alt' },
  { href: '/cookie-policy', label: 'Cookie Policy', icon: 'fa-cookie-bite' },
] as const;

type LegalPageId = 'terms' | 'privacy' | 'cookie';

type BadgeTone = 'blue' | 'green' | 'purple';

const badgeToneClasses: Record<BadgeTone, { pill: string; chip: string }> = {
  blue: {
    pill: 'text-blue-600 bg-blue-50 border-blue-100',
    chip: 'bg-blue-100 text-blue-800 border-blue-200',
  },
  green: {
    pill: 'text-green-600 bg-green-50 border-green-100',
    chip: 'bg-green-100 text-green-800 border-green-200',
  },
  purple: {
    pill: 'text-purple-600 bg-purple-50 border-purple-100',
    chip: 'bg-purple-100 text-purple-800 border-purple-200',
  },
};

export interface LegalPageLayoutProps {
  badge: string;
  title: string;
  description: string;
  currentPage: LegalPageId;
  badgeTone?: BadgeTone;
  complianceLabel?: string;
  complianceIcon?: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  badge,
  title,
  description,
  currentPage,
  badgeTone = 'blue',
  complianceLabel,
  complianceIcon = 'fa-check-circle',
  children,
}: LegalPageLayoutProps) {
  const tone = badgeToneClasses[badgeTone];
  const pageToHref: Record<LegalPageId, string> = {
    terms: '/terms-of-service',
    privacy: '/privacy-policy',
    cookie: '/cookie-policy',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50">
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 neural-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-16 left-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <span
              className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border mb-4 ${tone.pill}`}
            >
              {badge}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">{description}</p>
            {complianceLabel && (
              <div
                className={`mt-5 inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border ${tone.chip}`}
              >
                <i className={`fas ${complianceIcon} mr-2`} />
                {complianceLabel}
              </div>
            )}
          </div>

          <nav
            className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10"
            aria-label="Legal documents"
          >
            {LEGAL_NAV.map((item) => {
              const isActive = pageToHref[currentPage] === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                      : 'bg-white/90 text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-800'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <i className={`fas ${item.icon} text-xs`} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="space-y-6 legal-page-content">{children}</div>
        </div>
      </section>
    </div>
  );
}
