'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Canonical() {
  const pathname = usePathname();
  const [canonicalUrl, setCanonicalUrl] = useState('');

  useEffect(() => {
    // Get the current origin dynamically
    const baseUrl = window.location.origin;
    setCanonicalUrl(`${baseUrl}${pathname}`);
  }, [pathname]);

  return canonicalUrl ? (
    <link rel="canonical" href={canonicalUrl} />
  ) : null;
}
