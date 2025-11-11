import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import ConditionalHeader from '@/components/ConditionalHeader';
import ConditionalFooter from '@/components/ConditionalFooter';
import { Analytics } from '@/components/Analytics';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'SWB | Smartwebrowse India Private Limited - AI Services, Automation & Support',
    template: '%s | Smartwebrowse India Private Limited'
  },
  description: 'Smartwebrowse India Private Limited (SWB) is a leading AI startup providing intelligent automation, AI services, and 24/7 AI support. We deliver cutting-edge AI solutions, automation services, and AI consulting to transform businesses with intelligent technology.',
  keywords: ['AI Services', 'Automation Services', 'AI Support', 'AI Consulting', 'AI Integration', 'AI Development', 'Artificial Intelligence', 'Business Automation', 'AI Solutions', 'Smartwebrowse'],
  authors: [{ name: 'Smartwebrowse India Private Limited' }],
  creator: 'Smartwebrowse India Private Limited',
  publisher: 'Smartwebrowse India Private Limited',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.smartwebrowse.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.smartwebrowse.com',
    siteName: 'Smartwebrowse India Private Limited - AI Startup Company | AI Services & Automation',
    title: 'SWB | Smartwebrowse India Private Limited - AI Services, Automation & Support',
    description: 'Smartwebrowse India Private Limited (SWB) is a leading AI startup providing intelligent automation, AI services, and 24/7 AI support. We deliver cutting-edge AI solutions, automation services, and AI consulting to transform businesses with intelligent technology.',
    images: [
      {
        url: '/images/Logo.png',
        width: 210,
        height: 61,
        alt: 'Smartwebrowse India Private Limited Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@smartwebrowse',
    creator: '@smartwebrowse',
    title: 'SWB | Smartwebrowse India Private Limited - AI Services, Automation & Support',
    description: 'Smartwebrowse India Private Limited (SWB) is a leading AI startup providing intelligent automation, AI services, and 24/7 AI support. We deliver cutting-edge AI solutions, automation services, and AI consulting to transform businesses with intelligent technology.',
    images: ['/images/Logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'G-E7TW0FPD5M',
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googleoptimize.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://cdn-cookieyes.com" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <ConditionalHeader />
          <main id="main" className="min-h-screen">
            {children}
          </main>
          <ConditionalFooter />
          <Analytics />
        </LanguageProvider>
        
        {/* Calendly Script */}
        <script 
          src="https://assets.calendly.com/assets/external/widget.js" 
          async
        />
      </body>
    </html>
  );
}
