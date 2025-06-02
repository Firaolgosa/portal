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
}

interface Assignment {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  submissions: number;
  totalStudents: number;
}

export default function InstructorDashboard() {
  const courses: Course[] = [
    {
      id: '1',
      name: 'Introduction to Psychology',
      code: 'PSY 101',
      students: 45,
      schedule: 'MWF 9:00-10:00 AM',
      room: 'Room 101'
    },
    {
      id: '2',
      name: 'Cognitive Psychology',
      code: 'PSY 301',
      students: 28,
      schedule: 'TTh 2:00-3:30 PM',
      room: 'Room 205'
    },
    {
      id: '3',
      name: 'Research Methods',
      code: 'PSY 250',
      students: 35,
      schedule: 'MWF 11:00-12:00 PM',
      room: 'Lab 150'
    }
  ];

  const recentAssignments: Assignment[] = [
    {
      id: '1',
      title: 'Chapter 3 Quiz',
      course: 'PSY 101',
      dueDate: '2024-01-20',
      submissions: 42,
      totalStudents: 45
    },
    {
      id: '2',
      title: 'Research Proposal',
      course: 'PSY 301',
      dueDate: '2024-01-22',
      submissions: 25,
      totalStudents: 28
    },
    {
      id: '3',
      title: 'Data Analysis Project',
      course: 'PSY 250',
      dueDate: '2024-01-25',
      submissions: 30,
      totalStudents: 35
    }
  ];

  const stats = {
    totalCourses: courses.length,
    totalStudents: courses.reduce((sum, course) => sum + course.students, 0),
    pendingGrades: 15,
    upcomingClasses: 8
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <InstructorHeader />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Instructor Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your courses, students, and assignments.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-2xl font-bold text-blue-600">{stats.totalCourses}</div>
            <div className="text-sm text-gray-600">Total Courses</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-2xl font-bold text-green-600">{stats.totalStudents}</div>
            <div className="text-sm text-gray-600">Total Students</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-2xl font-bold text-yellow-600">{stats.pendingGrades}</div>
            <div className="text-sm text-gray-600">Pending Grades</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-2xl font-bold text-purple-600">{stats.upcomingClasses}</div>
            <div className="text-sm text-gray-600">Upcoming Classes</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* My Courses */}
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">My Courses</h2>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{course.name}</h3>
                        <p className="text-sm text-gray-600">{course.code}</p>
                        <div className="mt-2 space-y-1">
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
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900">{course.students}</div>
                        <div className="text-sm text-gray-600">Students</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Assignments */}
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Recent Assignments</h2>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {recentAssignments.map((assignment) => (
                  <div key={assignment.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{assignment.title}</h3>
                        <p className="text-sm text-gray-600">{assignment.course}</p>
                        <div className="mt-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Due: {new Date(assignment.dueDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900">
                          {assignment.submissions}/{assignment.totalStudents}
                        </div>
                        <div className="text-sm text-gray-600">Submissions</div>
                        <div className="mt-1">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${(assignment.submissions / assignment.totalStudents) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Create Assignment
            </button>
            <button className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Grade Submissions
            </button>
            <button className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              View Students
            </button>
            <button className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6 mr-3 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Generate Reports
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
