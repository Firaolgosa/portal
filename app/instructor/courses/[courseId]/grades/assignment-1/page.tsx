'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import InstructorHeader from '@/features/instructor/components/layout/InstructorHeader';

interface StudentGrade {
  id: string;
  name: string;
  studentId: string;
  grade: string;
  feedback: string;
}

export default function Assignment1GradesPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.courseId as string;

  const courseData = {
    name: 'Introduction to Psychology',
    code: 'PSY101'
  };

  const students: StudentGrade[] = [
    {
      id: '1',
      name: 'Liam Harper',
      studentId: '123456',
      grade: 'A',
      feedback: 'View'
    },
    {
      id: '2',
      name: 'Olivia Bennett',
      studentId: '654321',
      grade: 'B+',
      feedback: 'View'
    },
    {
      id: '3',
      name: 'Noah Carter',
      studentId: '987654',
      grade: 'A-',
      feedback: 'View'
    },
    {
      id: '4',
      name: 'Emma Davis',
      studentId: '456789',
      grade: 'B',
      feedback: 'View'
    },
    {
      id: '5',
      name: 'Jackson Evans',
      studentId: '321654',
      grade: 'C+',
      feedback: 'View'
    },
    {
      id: '6',
      name: 'Ava Foster',
      studentId: '789123',
      grade: 'B-',
      feedback: 'View'
    },
    {
      id: '7',
      name: 'Lucas Graham',
      studentId: '654987',
      grade: 'A',
      feedback: 'View'
    },
    {
      id: '8',
      name: 'Sophia Hayes',
      studentId: '123789',
      grade: 'C',
      feedback: 'View'
    },
    {
      id: '9',
      name: 'Aiden Ingram',
      studentId: '987321',
      grade: 'B+',
      feedback: 'View'
    },
    {
      id: '10',
      name: 'Chloe Jenkins',
      studentId: '456123',
      grade: 'A-',
      feedback: 'View'
    }
  ];

  const handleBackToCourse = () => {
    router.push(`/instructor/courses/${courseId}/grades`);
  };

  const handleViewFeedback = (studentId: string) => {
    // Navigate to individual student feedback page
    console.log('View feedback for student:', studentId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <InstructorHeader />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <button 
              onClick={handleBackToCourse}
              className="hover:text-blue-600"
            >
              Courses
            </button>
            <span>/</span>
            <button 
              onClick={handleBackToCourse}
              className="hover:text-blue-600"
            >
              {courseData.name}
            </button>
            <span>/</span>
            <span className="text-gray-900">Assignment 1</span>
          </div>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Assignment 1 Grades</h1>
          <p className="text-gray-600 mt-2">{courseData.name}</p>
        </div>

        {/* Export Actions */}
        <div className="mb-6 flex space-x-4">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            Upload
          </button>
        </div>

        {/* Grades Table */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    Student Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    Student ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    Grade
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    Feedback
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {students.map((student, index) => (
                  <tr key={student.id} className={`${index !== students.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-gray-50`}>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {student.name}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {student.studentId}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {student.grade}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => handleViewFeedback(student.id)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        {student.feedback}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
