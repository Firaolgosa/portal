'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminHeader() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
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
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h1 className="text-lg font-semibold text-gray-900">Academix</h1>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/admin/dashboard"
              className={`px-3 py-2 text-sm font-medium border-b-2 ${
                isActive('/admin/dashboard')
                  ? 'text-gray-900 border-gray-900'
                  : 'text-gray-700 hover:text-gray-900 border-transparent hover:border-gray-300'
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/admin/courses"
              className={`px-3 py-2 text-sm font-medium border-b-2 ${
                isActive('/admin/courses')
                  ? 'text-gray-900 border-gray-900'
                  : 'text-gray-700 hover:text-gray-900 border-transparent hover:border-gray-300'
              }`}
            >
              Courses
            </Link>
            <Link
              href="/admin/students"
              className={`px-3 py-2 text-sm font-medium border-b-2 ${
                isActive('/admin/students')
                  ? 'text-gray-900 border-gray-900'
                  : 'text-gray-700 hover:text-gray-900 border-transparent hover:border-gray-300'
              }`}
            >
              Students
            </Link>
            <Link
              href="/admin/instructors"
              className={`px-3 py-2 text-sm font-medium border-b-2 ${
                isActive('/admin/instructors')
                  ? 'text-gray-900 border-gray-900'
                  : 'text-gray-700 hover:text-gray-900 border-transparent hover:border-gray-300'
              }`}
            >
              Instructors
            </Link>
            <Link
              href="/admin/reports"
              className={`px-3 py-2 text-sm font-medium border-b-2 ${
                isActive('/admin/reports')
                  ? 'text-gray-900 border-gray-900'
                  : 'text-gray-700 hover:text-gray-900 border-transparent hover:border-gray-300'
              }`}
            >
              Reports
            </Link>
          </nav>

          {/* User Profile */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">A</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
