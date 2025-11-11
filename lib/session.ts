import { NextRequest, NextResponse } from 'next/server';
import { AuthUser } from './auth';

const SESSION_COOKIE = 'emp_dashboard_session';
const SESSION_SECRET = process.env.SESSION_SECRET || 'your-session-secret-key-change-in-production';

export interface SessionData {
  user: AuthUser;
  expires: number;
}

export function createSession(user: AuthUser): string {
  const sessionData: SessionData = {
    user,
    expires: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
  };

  const sessionString = JSON.stringify(sessionData);
  return Buffer.from(sessionString).toString('base64');
}

export function getSession(request: NextRequest): SessionData | null {
  try {
    const sessionCookie = request.cookies.get(SESSION_COOKIE)?.value;
    if (!sessionCookie) {
      return null;
    }

    const sessionString = Buffer.from(sessionCookie, 'base64').toString('ascii');
    const sessionData: SessionData = JSON.parse(sessionString);

    // Check if session is expired
    if (Date.now() > sessionData.expires) {
      return null;
    }

    return sessionData;
  } catch (error) {
    console.error('Session parsing error:', error);
    return null;
  }
}

export function setSessionCookie(response: NextResponse, session: string): void {
  response.cookies.set(SESSION_COOKIE, session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 // 24 hours
  });
}

export function clearSessionCookie(response: NextResponse): void {
  response.cookies.set(SESSION_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0
  });
}
