'use client';

import { useState } from 'react';
import InstructorHeader from '@/features/instructor/components/layout/InstructorHeader';

interface Student {
  id: string;
  name: string;
  email: string;
  studentId: string;
  courses: string[];
  gpa: number;
  status: 'Active' | 'Inactive';
  lastActive: string;
}

export default function InstructorStudentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('All Courses');

  const students: Student[] = [
    {
      id: '1',
      name: 'Alice Johnson',
      email: 'alice.johnson@university.edu',
      studentId: 'STU001',
      courses: ['PSY 101', 'PSY 301'],
      gpa: 3.8,
      status: 'Active',
      lastActive: '2024-01-15'
    },
    {
      id: '2',
      name: 'Bob Smith',
      email: 'bob.smith@university.edu',
      studentId: 'STU002',
      courses: ['PSY 101', 'PSY 250'],
      gpa: 3.2,
      status: 'Active',
      lastActive: '2024-01-14'
    },
    {
      id: '3',
      name: 'Carol Davis',
      email: 'carol.davis@university.edu',
      studentId: 'STU003',
      courses: ['PSY 301'],
      gpa: 3.9,
      status: 'Active',
      lastActive: '2024-01-15'
    },
    {
      id: '4',
      name: 'David Wilson',
      email: 'david.wilson@university.edu',
      studentId: 'STU004',
      courses: ['PSY 101', 'PSY 250', 'PSY 301'],
      gpa: 3.5,
      status: 'Active',
      lastActive: '2024-01-13'
    },
    {
      id: '5',
      name: 'Emma Brown',
      email: 'emma.brown@university.edu',
      studentId: 'STU005',
      courses: ['PSY 250'],
      gpa: 3.7,
      status: 'Inactive',
      lastActive: '2024-01-10'
    }
  ];

  const courses = ['All Courses', 'PSY 101', 'PSY 250', 'PSY 301'];

  const getStatusColor = (status: string) => {
    return status === 'Active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-gray-100 text-gray-800';
  };

  const getGPAColor = (gpa: number) => {
    if (gpa >= 3.7) return 'text-green-600';
    if (gpa >= 3.0) return 'text-blue-600';
    if (gpa >= 2.5) return 'text-yellow-600';
    return 'text-red-600';
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCourse = selectedCourse === 'All Courses' || 
                         student.courses.includes(selectedCourse);
    
    return matchesSearch && matchesCourse;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <InstructorHeader />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Students</h1>
          <p className="text-gray-600 mt-2">Manage and view your students across all courses.</p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="search" className="sr-only">Search students</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                id="search"
                type="text"
                placeholder="Search by name, email, or student ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="sm:w-48">
            <label htmlFor="course" className="sr-only">Filter by course</label>
            <select
              id="course"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {courses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Students Table */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    Student
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    Student ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    Courses
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    GPA
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    Last Active
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {filteredStudents.map((student, index) => (
                  <tr key={student.id} className={`${index !== filteredStudents.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-600">{student.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{student.studentId}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {student.courses.map(course => (
                          <span key={course} className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                            {course}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`text-sm font-medium ${getGPAColor(student.gpa)}`}>
                        {student.gpa.toFixed(1)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(student.status)}`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {new Date(student.lastActive).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          View
                        </button>
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                          Message
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No students found</h3>
            <p className="text-gray-600">No students match your current search criteria.</p>
          </div>
        )}

        {/* Student Statistics */}
        {filteredStudents.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Student Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{filteredStudents.length}</div>
                <div className="text-sm text-gray-600">Total Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {filteredStudents.filter(s => s.status === 'Active').length}
                </div>
                <div className="text-sm text-gray-600">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {(filteredStudents.reduce((sum, s) => sum + s.gpa, 0) / filteredStudents.length).toFixed(2)}
                </div>
                <div className="text-sm text-gray-600">Average GPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {filteredStudents.filter(s => s.gpa >= 3.5).length}
                </div>
                <div className="text-sm text-gray-600">High Performers</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
