'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AssignInstructorModal from '@/features/admin/components/ui/AssignInstructorModal';

const mockCourses = [
  {
    id: 'intro-programming',
    title: 'Introduction to Programming',
    code: 'CS101',
    semester: 'Spring 2024',
    department: 'Computer Science',
    studentCount: 5,
    description: 'Learn the fundamentals of programming with hands-on exercises.',
    currentInstructor: 'Dr. Robert Anderson'
  },
  {
    id: 'computer-science',
    title: 'Introduction to Computer Science',
    code: 'CS102',
    semester: 'Spring 2024',
    department: 'Computer Science',
    studentCount: 3,
    description: 'Explore the core concepts of computer science and computational thinking.',
    currentInstructor: null
  },
  {
    id: 'web-development',
    title: 'Web Development Fundamentals',
    code: 'CS201',
    semester: 'Spring 2024',
    department: 'Computer Science',
    studentCount: 8,
    description: 'Build modern web applications using HTML, CSS, and JavaScript.',
    currentInstructor: 'Prof. Samuel Harper'
  },
  {
    id: 'data-structures',
    title: 'Data Structures and Algorithms',
    code: 'CS301',
    semester: 'Spring 2024',
    department: 'Computer Science',
    studentCount: 12,
    description: 'Advanced programming concepts including data structures and algorithms.',
    currentInstructor: null
  }
];

export default function CoursesPage() {
  const router = useRouter();
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const handleCourseClick = (courseId: string) => {
    router.push(`/admin/courses/${courseId}`);
  };

  const handleAssignInstructor = (course: any, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent course click
    setSelectedCourse(course);
    setIsAssignModalOpen(true);
  };

  const handleAssignmentComplete = (courseId: string, instructorId: string, classSchedule: any) => {
    // In a real app, this would make an API call to assign the instructor
    console.log('Assigning instructor:', { courseId, instructorId, classSchedule });
    alert('Instructor assigned successfully!');
    // You could update the local state here to reflect the change
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
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.code} • {course.semester}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  course.currentInstructor
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {course.currentInstructor ? 'Assigned' : 'Unassigned'}
                </span>
              </div>

              <p className="text-sm text-gray-700 mb-4">{course.description}</p>

              {/* Instructor Info */}
              <div className="mb-4">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Instructor:</span>
                  <span className="ml-2">
                    {course.currentInstructor || 'Not assigned'}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  <span className="font-medium">Department:</span>
                  <span className="ml-2">{course.department}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {course.studentCount} students enrolled
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={(e) => handleAssignInstructor(course, e)}
                    className={`text-sm font-medium px-3 py-1 rounded ${
                      course.currentInstructor
                        ? 'text-orange-600 hover:text-orange-800 bg-orange-50 hover:bg-orange-100'
                        : 'text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100'
                    }`}
                  >
                    {course.currentInstructor ? 'Reassign' : 'Assign'} Instructor
                  </button>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Assign Instructor Modal */}
      <AssignInstructorModal
        isOpen={isAssignModalOpen}
        onClose={() => setIsAssignModalOpen(false)}
        onAssign={handleAssignmentComplete}
        selectedCourse={selectedCourse}
      />
    </div>
  );
}
