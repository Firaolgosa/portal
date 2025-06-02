'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function InstructorHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path);
  };

  const handleLogout = () => {
    // Clear authentication cookies
    document.cookie = 'isAuthenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    document.cookie = 'userType=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';

    // Redirect to login
    router.push('/login');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h1 className="text-lg font-semibold text-gray-900">GradeCentral</h1>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/instructor/dashboard"
              className={`px-3 py-2 text-sm font-medium border-b-2 ${
                isActive('/instructor/dashboard')
                  ? 'text-gray-900 border-gray-900'
                  : 'text-gray-700 hover:text-gray-900 border-transparent hover:border-gray-300'
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/instructor/courses"
              className={`px-3 py-2 text-sm font-medium border-b-2 ${
                isActive('/instructor/courses')
                  ? 'text-gray-900 border-gray-900'
                  : 'text-gray-700 hover:text-gray-900 border-transparent hover:border-gray-300'
              }`}
            >
              Courses
            </Link>
            <Link
              href="/instructor/students"
              className={`px-3 py-2 text-sm font-medium border-b-2 ${
                isActive('/instructor/students')
                  ? 'text-gray-900 border-gray-900'
                  : 'text-gray-700 hover:text-gray-900 border-transparent hover:border-gray-300'
              }`}
            >
              Students
            </Link>
            {/* <Link
              href="/instructor/assignments"
              className={`px-3 py-2 text-sm font-medium border-b-2 ${
                isActive('/instructor/assignments')
                  ? 'text-gray-900 border-gray-900'
                  : 'text-gray-700 hover:text-gray-900 border-transparent hover:border-gray-300'
              }`}
            >
              Assignments
            </Link> */}
            {/* <Link
              href="/instructor/grades"
              className={`px-3 py-2 text-sm font-medium border-b-2 ${
                isActive('/instructor/grades')
                  ? 'text-gray-900 border-gray-900'
                  : 'text-gray-700 hover:text-gray-900 border-transparent hover:border-gray-300'
              }`}
            >
              Grades
            </Link> */}
            <Link
              href="/instructor/reports"
              className={`px-3 py-2 text-sm font-medium border-b-2 ${
                isActive('/instructor/reports')
                  ? 'text-gray-900 border-gray-900'
                  : 'text-gray-700 hover:text-gray-900 border-transparent hover:border-gray-300'
              }`}
            >
              Reports
            </Link>
          </nav>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="block w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>

            {/* Notification Icon */}
            <button className="p-2 text-gray-400 hover:text-gray-500 relative">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM16 3h5v5h-5V3zM4 3h6v6H4V3z" />
              </svg>
            </button>

            {/* User Profile */}
            <div className="flex items-center relative group">
            <button className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-1">
                <Link
                  href="/instructor/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  href="/instructor/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <hr className="my-1" />
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
