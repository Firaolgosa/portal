'use client';

import { useRouter } from 'next/navigation';
import InstructorHeader from '@/features/instructor/components/layout/InstructorHeader';

interface Course {
  id: string;
  name: string;
  students: number;
  averageGrade: string;
}

interface Activity {
  id: string;
  type: 'submission' | 'graded' | 'feedback';
  title: string;
  student: string;
  course: string;
  icon: string;
}

export default function InstructorDashboard() {
  const router = useRouter();

  const courses: Course[] = [
    {
      id: '1',
      name: 'Introduction to Psychology',
      students: 45,
      averageGrade: 'B+'
    },
    {
      id: '2',
      name: 'Advanced Calculus',
      students: 30,
      averageGrade: 'A-'
    },
    {
      id: '3',
      name: 'Creative Writing Workshop',
      students: 20,
      averageGrade: 'A'
    }
  ];

  const recentActivities: Activity[] = [
    {
      id: '1',
      type: 'submission',
      title: 'New submission from Sarah Chen',
      student: 'Sarah Chen',
      course: 'Psychology 101',
      icon: 'document'
    },
    {
      id: '2',
      type: 'graded',
      title: 'Graded assignment for David Lee',
      student: 'David Lee',
      course: 'Calculus 202',
      icon: 'check'
    },
    {
      id: '3',
      type: 'feedback',
      title: 'Feedback sent to Emily Carter',
      student: 'Emily Carter',
      course: 'Creative Writing',
      icon: 'mail'
    }
  ];

  const handleManageGrades = (courseId: string) => {
    router.push(`/instructor/courses/${courseId}/grades`);
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'submission':
        return (
          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        );
      case 'graded':
        return (
          <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        );
      case 'feedback':
        return (
          <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <InstructorHeader />

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Instructor Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, Dr. Ramirez. Here's a summary of your courses and student activity.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* My Courses */}
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">My Courses</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Course
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Students
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Average Grade
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Actions
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
                        <div className="text-sm text-gray-900">
                          {course.students}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {course.averageGrade}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleManageGrades(course.id)}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          Manage Grades
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    {getActivityIcon(activity.type)}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900">
                        {activity.title}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {activity.course}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
