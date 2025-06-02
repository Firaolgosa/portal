import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define protected routes for different user types
const protectedRoutes = {
  student: ['/student'],
  instructor: ['/instructor'],
  admin: ['/admin']
};

// Define public routes that don't require authentication
const publicRoutes = [
  '/',
  '/login',
  '/register',
  '/about',
  '/contact',
  '/forgot-password',
  '/first-time-password-change'
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the route is public
  const isPublicRoute = publicRoutes.some(route => 
    pathname === route || pathname.startsWith(route)
  );
  
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // For demo purposes, we'll simulate authentication by checking for a simple cookie
  // In a real application, you would validate JWT tokens or session cookies
  const userType = request.cookies.get('userType')?.value;
  const isAuthenticated = request.cookies.get('isAuthenticated')?.value === 'true';

  // Check if user is trying to access a protected route
  const isStudentRoute = pathname.startsWith('/student');
  const isInstructorRoute = pathname.startsWith('/instructor');
  const isAdminRoute = pathname.startsWith('/admin');

  // If not authenticated, redirect to login
  if (!isAuthenticated && (isStudentRoute || isInstructorRoute || isAdminRoute)) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If authenticated but accessing wrong user type routes, redirect to appropriate dashboard
  if (isAuthenticated && userType) {
    if (isStudentRoute && userType !== 'student') {
      return NextResponse.redirect(new URL(`/${userType}/dashboard`, request.url));
    }
    
    if (isInstructorRoute && userType !== 'instructor') {
      return NextResponse.redirect(new URL(`/${userType}/dashboard`, request.url));
    }
    
    if (isAdminRoute && userType !== 'admin') {
      return NextResponse.redirect(new URL(`/${userType}/dashboard`, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
