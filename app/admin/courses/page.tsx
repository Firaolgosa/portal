'use client';

import { useRouter } from 'next/navigation';

const mockCourses = [
  {
    id: 'intro-programming',
    title: 'Introduction to Programming',
    semester: 'Spring 2024',
    studentCount: 5,
    description: 'Learn the fundamentals of programming with hands-on exercises.'
  },
  {
    id: 'computer-science',
    title: 'Introduction to Computer Science',
    semester: 'Spring 2024',
    studentCount: 3,
    description: 'Explore the core concepts of computer science and computational thinking.'
  },
  {
    id: 'web-development',
    title: 'Web Development Fundamentals',
    semester: 'Spring 2024',
    studentCount: 8,
    description: 'Build modern web applications using HTML, CSS, and JavaScript.'
  }
];

export default function CoursesPage() {
  const router = useRouter();

  const handleCourseClick = (courseId: string) => {
    router.push(`/admin/courses/${courseId}`);
  };

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
          <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
          <p className="mt-2 text-gray-600">Manage and view all courses</p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => handleCourseClick(course.id)}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{course.semester}</p>
              <p className="text-sm text-gray-700 mb-4">{course.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {course.studentCount} students enrolled
                </span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
