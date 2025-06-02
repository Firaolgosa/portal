'use client';

import { useState } from 'react';
import InstructorHeader from '@/features/instructor/components/layout/InstructorHeader';

interface Course {
  id: string;
  name: string;
  code: string;
  students: number;
  schedule: string;
  room: string;
  semester: string;
  status: 'Active' | 'Completed' | 'Upcoming';
}

export default function InstructorCoursesPage() {
  const [selectedSemester, setSelectedSemester] = useState('Spring 2024');

  const courses: Course[] = [
    {
      id: '1',
      name: 'Introduction to Psychology',
      code: 'PSY 101',
      students: 45,
      schedule: 'MWF 9:00-10:00 AM',
      room: 'Room 101',
      semester: 'Spring 2024',
      status: 'Active'
    },
    {
      id: '2',
      name: 'Cognitive Psychology',
      code: 'PSY 301',
      students: 28,
      schedule: 'TTh 2:00-3:30 PM',
      room: 'Room 205',
      semester: 'Spring 2024',
      status: 'Active'
    },
    {
      id: '3',
      name: 'Research Methods',
      code: 'PSY 250',
      students: 35,
      schedule: 'MWF 11:00-12:00 PM',
      room: 'Lab 150',
      semester: 'Spring 2024',
      status: 'Active'
    },
    {
      id: '4',
      name: 'Developmental Psychology',
      code: 'PSY 201',
      students: 42,
      schedule: 'TTh 10:00-11:30 AM',
      room: 'Room 103',
      semester: 'Fall 2023',
      status: 'Completed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      case 'Upcoming':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredCourses = courses.filter(course => course.semester === selectedSemester);

  return (
    <div className="min-h-screen bg-gray-50">
      <InstructorHeader />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
              <p className="text-gray-600 mt-2">Manage your courses and class schedules.</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium">
              Add New Course
            </button>
          </div>
        </div>

        {/* Semester Filter */}
        <div className="mb-6">
          <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-2">
            Select Semester
          </label>
          <select
            id="semester"
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="w-48 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Spring 2024">Spring 2024</option>
            <option value="Fall 2023">Fall 2023</option>
            <option value="Summer 2023">Summer 2023</option>
          </select>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{course.name}</h3>
                    <p className="text-sm text-gray-600">{course.code}</p>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(course.status)}`}>
                    {course.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {course.students} Students
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.schedule}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {course.room}
                  </div>
                </div>

                <div className="mt-6 flex space-x-3">
                  <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
                    Manage
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 mb-4">No courses found for the selected semester.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium">
              Add Your First Course
            </button>
          </div>
        )}

        {/* Course Statistics */}
        {filteredCourses.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{filteredCourses.length}</div>
                <div className="text-sm text-gray-600">Total Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {filteredCourses.reduce((sum, course) => sum + course.students, 0)}
                </div>
                <div className="text-sm text-gray-600">Total Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {filteredCourses.filter(course => course.status === 'Active').length}
                </div>
                <div className="text-sm text-gray-600">Active Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {Math.round(filteredCourses.reduce((sum, course) => sum + course.students, 0) / filteredCourses.length) || 0}
                </div>
                <div className="text-sm text-gray-600">Avg Students/Course</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
