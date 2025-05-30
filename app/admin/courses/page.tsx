'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminHeader from '../../../features/admin/components/layout/AdminHeader';
import CoursesTable from '../../../features/admin/components/ui/CoursesTable';

interface Course {
  id: string;
  name: string;
  code: string;
  instructor: string;
}

export default function AdminCoursesPage() {
  const router = useRouter();
  const [courses] = useState<Course[]>([
    {
      id: '1',
      name: 'Introduction to Psychology',
      code: 'PSY101',
      instructor: 'Dr. Emily Carter'
    },
    {
      id: '2',
      name: 'Calculus I',
      code: 'MATH101',
      instructor: 'Dr. Robert Harris'
    },
    {
      id: '3',
      name: 'World History',
      code: 'HIST101',
      instructor: 'Dr. Olivia Bennett'
    },
    {
      id: '4',
      name: 'Computer Science Fundamentals',
      code: 'CS101',
      instructor: 'Dr. Ethan Clark'
    },
    {
      id: '5',
      name: 'Organic Chemistry',
      code: 'CHEM201',
      instructor: 'Dr. Sophia Turner'
    }
  ]);

  const handleEdit = (courseId: string) => {
    console.log('Edit course:', courseId);
    // TODO: Implement edit functionality
  };

  const handleDelete = (courseId: string) => {
    console.log('Delete course:', courseId);
    // TODO: Implement delete functionality
  };

  const handleAddCourse = () => {
    router.push('/admin/courses/add');
  };

  return (
    <div className="min-h-screen bg-white">
      <AdminHeader />

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
          <button
            onClick={handleAddCourse}
            className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Add Course
          </button>
        </div>

        {/* Courses Table */}
        <CoursesTable
          courses={courses}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
}
