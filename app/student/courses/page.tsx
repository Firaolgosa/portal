'use client';

import { useState } from 'react';
import Link from 'next/link';
import StudentHeader from '@/features/student/components/layout/StudentHeader';

interface Assignment {
  id: string;
  name: string;
  type: 'Homework' | 'Exam' | 'Project' | 'Quiz';
  dueDate: string;
  grade?: string;
  status: 'Completed' | 'Pending' | 'Overdue';
}

interface Course {
  id: string;
  name: string;
  code: string;
  instructor: string;
  credits: number;
  grade: string;
  status: 'Completed' | 'In Progress';
  description: string;
  schedule: string;
  location: string;
  assignments: Assignment[];
}

export default function StudentCoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const courses: Course[] = [
    {
      id: '1',
      name: 'Introduction to Psychology',
      code: 'PSY 101',
      instructor: 'Dr. Emily Carter',
      credits: 3,
      grade: 'A',
      status: 'Completed',
      description: 'An introduction to the scientific study of behavior and mental processes.',
      schedule: 'MWF 10:00-11:00 AM',
      location: 'Psychology Building, Room 201',
      assignments: [
        { id: '1', name: 'Research Paper', type: 'Project', dueDate: '2024-03-15', grade: 'A', status: 'Completed' },
        { id: '2', name: 'Midterm Exam', type: 'Exam', dueDate: '2024-02-28', grade: 'A-', status: 'Completed' }
      ]
    },
    {
      id: '2',
      name: 'Calculus I',
      code: 'MATH 151',
      instructor: 'Prof. Robert Davis',
      credits: 4,
      grade: 'B+',
      status: 'In Progress',
      description: 'Differential and integral calculus of functions of one variable.',
      schedule: 'TTh 2:00-3:30 PM',
      location: 'Mathematics Building, Room 105',
      assignments: [
        { id: '3', name: 'Problem Set 5', type: 'Homework', dueDate: '2024-04-10', status: 'Pending' },
        { id: '4', name: 'Quiz 3', type: 'Quiz', dueDate: '2024-04-05', grade: 'B', status: 'Completed' }
      ]
    },
    {
      id: '3',
      name: 'Organic Chemistry',
      code: 'CHEM 201',
      instructor: 'Dr. Sarah Johnson',
      credits: 4,
      grade: 'C',
      status: 'In Progress',
      description: 'Study of carbon-containing compounds and their reactions.',
      schedule: 'MWF 1:00-2:00 PM, Lab: T 2:00-5:00 PM',
      location: 'Chemistry Building, Room 301',
      assignments: [
        { id: '5', name: 'Lab Report 3', type: 'Project', dueDate: '2024-04-08', status: 'Pending' },
        { id: '6', name: 'Chapter 8 Quiz', type: 'Quiz', dueDate: '2024-04-12', status: 'Pending' }
      ]
    }
  ];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'bg-green-100 text-green-800';
    if (grade.startsWith('B')) return 'bg-blue-100 text-blue-800';
    if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-800';
    if (grade.startsWith('D')) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  const getStatusColor = (status: string) => {
    return status === 'Completed' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-blue-100 text-blue-800';
  };

  const getAssignmentStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentHeader />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
          <p className="text-gray-600 mt-2">View detailed information about your enrolled courses.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course List */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Enrolled Courses</h2>
            <div className="space-y-4">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className={`bg-white rounded-lg shadow-sm border-2 cursor-pointer transition-colors ${
                    selectedCourse === course.id 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedCourse(course.id)}
                >
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">{course.name}</h3>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getGradeColor(course.grade)}`}>
                        {course.grade}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{course.code}</p>
                    <p className="text-sm text-gray-600 mb-3">{course.instructor}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{course.credits} credits</span>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(course.status)}`}>
                        {course.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Course Details */}
          <div className="lg:col-span-2">
            {selectedCourse ? (
              (() => {
                const course = courses.find(c => c.id === selectedCourse);
                if (!course) return null;

                return (
                  <div className="bg-white rounded-lg shadow-sm">
                    <div className="p-6 border-b border-gray-200">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">{course.name}</h2>
                          <p className="text-gray-600">{course.code}</p>
                        </div>
                        <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getGradeColor(course.grade)}`}>
                          Current Grade: {course.grade}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Instructor:</span>
                          <span className="ml-2 text-gray-600">{course.instructor}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Credits:</span>
                          <span className="ml-2 text-gray-600">{course.credits}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Schedule:</span>
                          <span className="ml-2 text-gray-600">{course.schedule}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Location:</span>
                          <span className="ml-2 text-gray-600">{course.location}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <span className="font-medium text-gray-700">Description:</span>
                        <p className="mt-1 text-gray-600">{course.description}</p>
                      </div>
                    </div>

                    {/* Assignments */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Assignments</h3>
                      {course.assignments.length > 0 ? (
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Assignment
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Type
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Due Date
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Grade
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Status
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {course.assignments.map((assignment) => (
                                <tr key={assignment.id}>
                                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {assignment.name}
                                  </td>
                                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {assignment.type}
                                  </td>
                                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {new Date(assignment.dueDate).toLocaleDateString()}
                                  </td>
                                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {assignment.grade || '-'}
                                  </td>
                                  <td className="px-4 py-4 whitespace-nowrap">
                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getAssignmentStatusColor(assignment.status)}`}>
                                      {assignment.status}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <p className="text-gray-500 text-center py-8">No assignments available for this course.</p>
                      )}
                    </div>
                  </div>
                );
              })()
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">Select a course</h3>
                <p className="mt-1 text-sm text-gray-500">Choose a course from the list to view detailed information and assignments.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
