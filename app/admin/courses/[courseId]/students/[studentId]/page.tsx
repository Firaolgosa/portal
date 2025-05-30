'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import StudentGradeBreakdown from '@/features/admin/components/ui/StudentGradeBreakdown';
import PerformanceTrend from '@/features/admin/components/ui/PerformanceTrend';

// Mock data - replace with actual API calls
const mockStudentData = {
  'stu20231001': {
    name: 'Sophia Clark',
    studentId: '20231001',
    course: 'Introduction to Computer Science',
    overallGrade: 86,
    trend: '+5%',
    assignments: [
      {
        id: '1',
        name: 'Assignment 1: Introduction',
        type: 'Homework',
        dueDate: '2024-09-15',
        grade: '90/100',
        weight: '10%'
      },
      {
        id: '2',
        name: 'Assignment 2: Data Types',
        type: 'Homework',
        dueDate: '2024-09-22',
        grade: '85/100',
        weight: '10%'
      },
      {
        id: '3',
        name: 'Midterm Exam',
        type: 'Exam',
        dueDate: '2024-10-15',
        grade: '78/100',
        weight: '30%'
      },
      {
        id: '4',
        name: 'Assignment 3: Control Flow',
        type: 'Homework',
        dueDate: '2024-11-01',
        grade: '92/100',
        weight: '10%'
      },
      {
        id: '5',
        name: 'Final Exam',
        type: 'Exam',
        dueDate: '2024-12-15',
        grade: '88/100',
        weight: '40%'
      }
    ]
  },
  'stu12345': {
    name: 'Ethan Harper',
    studentId: 'STU12345',
    course: 'Introduction to Programming',
    overallGrade: 92,
    trend: '+3%',
    assignments: [
      {
        id: '1',
        name: 'Assignment 1: Variables',
        type: 'Homework',
        dueDate: '2024-09-10',
        grade: '95/100',
        weight: '15%'
      },
      {
        id: '2',
        name: 'Midterm Exam',
        type: 'Exam',
        dueDate: '2024-10-10',
        grade: '90/100',
        weight: '35%'
      },
      {
        id: '3',
        name: 'Final Project',
        type: 'Project',
        dueDate: '2024-12-01',
        grade: '93/100',
        weight: '50%'
      }
    ]
  }
};

export default function StudentDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.courseId as string;
  const studentId = params.studentId as string;
  const [studentData, setStudentData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const data = mockStudentData[studentId as keyof typeof mockStudentData];
      setStudentData(data);
      setLoading(false);
    }, 500);
  }, [studentId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading student data...</p>
        </div>
      </div>
    );
  }

  if (!studentData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Student Not Found</h1>
          <p className="mt-2 text-gray-600">The requested student could not be found.</p>
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
                <h1 className="text-xl font-bold text-gray-900">EduGrade</h1>
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
              <a href="/admin/reports" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Reports
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
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center text-gray-600 hover:text-gray-900"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Course
        </button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Student Performance</h1>
          <p className="mt-2 text-gray-600">Course: {studentData.course}</p>
        </div>

        {/* Student Info */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{studentData.name}</h2>
              <p className="text-gray-600">Student ID: {studentData.studentId}</p>
            </div>
          </div>
        </div>

        <StudentGradeBreakdown assignments={studentData.assignments} />
        <PerformanceTrend 
          overallGrade={studentData.overallGrade} 
          trend={studentData.trend} 
        />
      </div>
    </div>
  );
}
