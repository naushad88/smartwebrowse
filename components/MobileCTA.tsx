'use client';

import { scrollToContactForm } from '@/utils/scrollToContactForm';
import Link from 'next/link';

interface MobileCTAProps {
  href?: string;
  bgColor?: string;
  hoverColor?: string;
  ringColor?: string;
}

export default function MobileCTA({ 
  href, 
  bgColor = 'bg-orange-500', 
  hoverColor = 'hover:bg-orange-600',
  ringColor = 'focus:ring-orange-300'
}: MobileCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Mobile: Full width */}
      <div className={`block md:hidden ${bgColor} ${hoverColor} transition-colors duration-300`}>
        {href ? (
          <Link
            href={href}
            className="w-full text-white font-bold py-4 px-8 text-lg transition-all duration-300 focus:outline-none focus:ring-4 block text-center"
          >
            Get Free Consultation
          </Link>
        ) : (
          <button
            onClick={scrollToContactForm}
            className={`w-full text-white font-bold py-4 px-8 text-lg transition-all duration-300 focus:outline-none focus:ring-4 ${ringColor}`}
          >
            Get Free Consultation
          </button>
        )}
      </div>
    </div>
  );
}
