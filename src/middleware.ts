import { NextRequest, NextResponse } from 'next/server';
import { validateAuthToken } from '@/lib/auth/tokens';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('auth-token');

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  try {
    validateAuthToken(token);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
