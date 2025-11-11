'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function ConditionalHeader() {
  const pathname = usePathname();
  
  // Hide header for dashboard pages
  if (pathname.startsWith('/EmployerDashboard')) {
    return null;
  }
  
  // Hide header on homepage - it's integrated in HeroFullPage
  if (pathname === '/') {
    return null;
  }
  
  return <Header />;
}
