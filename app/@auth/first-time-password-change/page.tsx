'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FirstTimePasswordChangePage() {
  const [temporaryPassword, setTemporaryPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const validatePassword = (password: string): string[] => {
    const errors: string[] = [];
    
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long');
    }
    
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must include uppercase letters');
    }
    
    if (!/[a-z]/.test(password)) {
      errors.push('Password must include lowercase letters');
    }
    
    if (!/[0-9]/.test(password)) {
      errors.push('Password must include numbers');
    }
    
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push('Password must include symbols');
    }
    
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const passwordErrors = validatePassword(newPassword);
    
    if (newPassword !== confirmPassword) {
      passwordErrors.push('Passwords do not match');
    }
    
    if (passwordErrors.length > 0) {
      setErrors(passwordErrors);
      return;
    }
    
    setErrors([]);
    // Handle password change logic here
    console.log('Password change request:', {
      temporaryPassword,
      newPassword,
      confirmPassword
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
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
              <Link href="/dashboard" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Dashboard
              </Link>
              <Link href="/courses" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Courses
              </Link>
              <Link href="/grades" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Grades
              </Link>
              <Link href="/attendance" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Attendance
              </Link>
              <Link href="/messages" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Messages
              </Link>
            </nav>

            {/* User Profile */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">U</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Change Your Password</h2>
            <p className="text-gray-600 text-sm">
              For security reasons, please change your temporary password.
            </p>
          </div>

          {/* Password Change Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Temporary Password Field */}
            <div>
              <label htmlFor="temporaryPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Temporary Password
              </label>
              <input
                id="temporaryPassword"
                name="temporaryPassword"
                type="password"
                required
                value={temporaryPassword}
                onChange={(e) => setTemporaryPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Temporary Password"
              />
            </div>

            {/* New Password Field */}
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="New Password"
              />
            </div>

            {/* Confirm New Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Confirm New Password"
              />
            </div>

            {/* Password Requirements */}
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm text-gray-600">
                Password must be at least 8 characters long and include a mix of uppercase and lowercase letters, numbers, and symbols.
              </p>
            </div>

            {/* Error Messages */}
            {errors.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <ul className="text-sm text-red-600 space-y-1">
                  {errors.map((error, index) => (
                    <li key={index}>• {error}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
