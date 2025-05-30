'use client';

import { useState, useEffect } from 'react';
import StudentsTable from '@/features/admin/components/ui/StudentsTable';

interface Student {
  id: string;
  name: string;
  studentId: string;
  course: string;
  overallGrade: string;
  email: string;
}

// Mock data - replace with actual API calls
const mockStudents: Student[] = [
  {
    id: 'stu12345',
    name: 'Ethan Harper',
    studentId: 'STU12345',
    course: 'Introduction to Programming',
    overallGrade: 'A',
    email: 'ethan.harper@university.edu'
  },
  {
    id: 'stu67890',
    name: 'Olivia Bennett',
    studentId: 'STU67890',
    course: 'Introduction to Programming',
    overallGrade: 'B+',
    email: 'olivia.bennett@university.edu'
  },
  {
    id: 'stu11223',
    name: 'Noah Carter',
    studentId: 'STU11223',
    course: 'Introduction to Programming',
    overallGrade: 'C',
    email: 'noah.carter@university.edu'
  },
  {
    id: 'stu44556',
    name: 'Ava Morgan',
    studentId: 'STU44556',
    course: 'Introduction to Programming',
    overallGrade: 'A-',
    email: 'ava.morgan@university.edu'
  },
  {
    id: 'stu77889',
    name: 'Liam Foster',
    studentId: 'STU77889',
    course: 'Introduction to Programming',
    overallGrade: 'B',
    email: 'liam.foster@university.edu'
  },
  {
    id: 'stu20231001',
    name: 'Sophia Clark',
    studentId: '20231001',
    course: 'Introduction to Computer Science',
    overallGrade: 'A',
    email: 'sophia.clark@university.edu'
  },
  {
    id: 'stu20231002',
    name: 'James Wilson',
    studentId: '20231002',
    course: 'Introduction to Computer Science',
    overallGrade: 'B+',
    email: 'james.wilson@university.edu'
  },
  {
    id: 'stu20231003',
    name: 'Emma Davis',
    studentId: '20231003',
    course: 'Introduction to Computer Science',
    overallGrade: 'A-',
    email: 'emma.davis@university.edu'
  },
  {
    id: 'stu20231004',
    name: 'Michael Johnson',
    studentId: '20231004',
    course: 'Data Structures',
    overallGrade: 'B',
    email: 'michael.johnson@university.edu'
  },
  {
    id: 'stu20231005',
    name: 'Sarah Williams',
    studentId: '20231005',
    course: 'Data Structures',
    overallGrade: 'A',
    email: 'sarah.williams@university.edu'
  }
];

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('all');

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStudents(mockStudents);
      setLoading(false);
    }, 500);
  }, []);

  // Filter students based on search term and selected course
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = selectedCourse === 'all' || student.course === selectedCourse;
    return matchesSearch && matchesCourse;
  });

  // Get unique courses for filter dropdown
  const uniqueCourses = Array.from(new Set(students.map(student => student.course)));

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading students...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-gray-900">EduPortal</h1>
              </div>
            </div>
            <nav className="flex space-x-8">
              <a href="/admin/dashboard" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Dashboard
              </a>
              <a href="/admin/courses" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Courses
              </a>
              <a href="/admin/students" className="text-gray-900 px-3 py-2 text-sm font-medium">
                Students
              </a>
              <a href="/admin/grades" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Grades
              </a>
              <a href="/admin/attendance" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Attendance
              </a>
            </nav>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
            <span>🏠</span>
            <span>EduPortal</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Students</h1>
          <p className="text-gray-600 mt-2">Manage and view all student information</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search Students
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by name or student ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="sm:w-64">
              <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Course
              </label>
              <select
                id="course"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Courses</option>
                {uniqueCourses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Students Table */}
        <StudentsTable students={filteredStudents} />
      </div>
    </div>
  );
}
