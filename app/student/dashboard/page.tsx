'use client';

import { useState } from 'react';
import StudentHeader from '@/features/student/components/layout/StudentHeader';

interface Course {
  id: string;
  name: string;
  instructor: string;
  credits: number;
  grade: string;
  status: 'Completed' | 'In Progress';
}

export default function StudentDashboard() {
  const [currentGPA, setCurrentGPA] = useState('3.45');
  const [creditsCompleted, setCreditsCompleted] = useState('10');
  const [creditsInProgress, setCreditsInProgress] = useState('14');

  const courses: Course[] = [
    {
      id: '1',
      name: 'Introduction to Psychology',
      instructor: 'Dr. Emily Carter',
      credits: 3,
      grade: 'A',
      status: 'Completed'
    },
    {
      id: '2',
      name: 'Calculus I',
      instructor: 'Prof. Robert Davis',
      credits: 4,
      grade: 'B+',
      status: 'In Progress'
    },
    {
      id: '3',
      name: 'Organic Chemistry',
      instructor: 'Dr. Sarah Johnson',
      credits: 4,
      grade: 'C',
      status: 'In Progress'
    },
    {
      id: '4',
      name: 'World History',
      instructor: 'Prof. Michael Brown',
      credits: 3,
      grade: 'A-',
      status: 'Completed'
    },
    {
      id: '5',
      name: 'Computer Science Fundamentals',
      instructor: 'Dr. David Lee',
      credits: 3,
      grade: 'B',
      status: 'In Progress'
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

  const calculateGPA = () => {
    // Simulate GPA calculation
    alert('GPA calculated successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentHeader />

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
          <p className="text-gray-600 mt-2">View your current courses and academic progress.</p>
        </div>

        {/* Current Courses Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Current Courses</h2>

          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Course
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Instructor
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Credits
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Grade
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {courses.map((course, index) => (
                    <tr key={course.id} className={`${index !== courses.length - 1 ? 'border-b border-gray-100' : ''}`}>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {course.name}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600">
                          {course.instructor}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {course.credits}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${getGradeColor(course.grade)}`}>
                          {course.grade}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(course.status)}`}>
                          {course.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* GPA Calculator Section */}
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">GPA Calculator</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Current GPA */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current GPA
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={currentGPA}
                  onChange={(e) => setCurrentGPA(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-medium"
                  placeholder="0.00"
                />
              </div>
            </div>

            {/* Credits Completed */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Credits Completed
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={creditsCompleted}
                  onChange={(e) => setCreditsCompleted(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-medium"
                  placeholder="0"
                />
              </div>
            </div>

            {/* Credits in Progress */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Credits in Progress
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={creditsInProgress}
                  onChange={(e) => setCreditsInProgress(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-medium"
                  placeholder="0"
                />
              </div>
            </div>
          </div>

          {/* Calculate GPA Button */}
          <div className="flex justify-end">
            <button
              onClick={calculateGPA}
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium text-sm"
            >
              Calculate GPA
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
