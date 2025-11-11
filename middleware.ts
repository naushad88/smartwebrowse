import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/session';

export function middleware(request: NextRequest) {
  // Only protect EmployerDashboard routes
  if (request.nextUrl.pathname.startsWith('/EmployerDashboard')) {
    const session = getSession(request);
    
    if (!session) {
      // Redirect to login page if not authenticated
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/EmployerDashboard/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
