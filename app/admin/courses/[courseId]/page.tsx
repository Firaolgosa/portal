'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import CourseStudentsTable from '@/features/admin/components/ui/CourseStudentsTable';

// Mock data - replace with actual API calls
const mockCourseData = {
  'intro-programming': {
    title: 'Introduction to Programming',
    semester: 'Spring 2024',
    students: [
      { id: 'stu12345', name: 'Ethan Harper', studentId: 'STU12345', overallGrade: 'A' },
      { id: 'stu67890', name: 'Olivia Bennett', studentId: 'STU67890', overallGrade: 'B+' },
      { id: 'stu11223', name: 'Noah Carter', studentId: 'STU11223', overallGrade: 'C' },
      { id: 'stu44556', name: 'Ava Morgan', studentId: 'STU44556', overallGrade: 'A-' },
      { id: 'stu77889', name: 'Liam Foster', studentId: 'STU77889', overallGrade: 'B' },
    ]
  },
  'computer-science': {
    title: 'Introduction to Computer Science',
    semester: 'Spring 2024',
    students: [
      { id: 'stu20231001', name: 'Sophia Clark', studentId: '20231001', overallGrade: 'A' },
      { id: 'stu20231002', name: 'James Wilson', studentId: '20231002', overallGrade: 'B+' },
      { id: 'stu20231003', name: 'Emma Davis', studentId: '20231003', overallGrade: 'A-' },
    ]
  }
};

export default function CoursePage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const [courseData, setCourseData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const data = mockCourseData[courseId as keyof typeof mockCourseData];
      setCourseData(data);
      setLoading(false);
    }, 500);
  }, [courseId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading course data...</p>
        </div>
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Course Not Found</h1>
          <p className="mt-2 text-gray-600">The requested course could not be found.</p>
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
              <a href="/admin/courses" className="text-gray-900 px-3 py-2 text-sm font-medium">
                Courses
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Course: {courseData.title}</h1>
          <p className="mt-2 text-gray-600">{courseData.semester}</p>
        </div>

        <CourseStudentsTable 
          students={courseData.students} 
          courseId={courseId}
        />
      </div>
    </div>
  );
}
