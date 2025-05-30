'use client';

import { useState } from 'react';
import AdminHeader from '../../../features/admin/components/layout/AdminHeader';
import InstructorsTable from '../../../features/admin/components/ui/InstructorsTable';

interface Instructor {
  id: string;
  name: string;
  courses: string[];
  email: string;
}

export default function AdminInstructorsHeaderPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [instructors] = useState<Instructor[]>([
    {
      id: '1',
      name: 'Dr. Eleanor Vance',
      courses: ['Calculus I', 'Linear Algebra'],
      email: 'eleanor.vance@email.com'
    },
    {
      id: '2',
      name: 'Prof. Samuel Harper',
      courses: ['Introduction to Programming', 'Data Structures'],
      email: 'samuel.harper@email.com'
    },
    {
      id: '3',
      name: 'Dr. Olivia Bennett',
      courses: ['Organic Chemistry', 'Biochemistry'],
      email: 'olivia.bennett@email.com'
    },
    {
      id: '4',
      name: 'Prof. Ethan Carter',
      courses: ['World History', 'European History'],
      email: 'ethan.carter@email.com'
    },
    {
      id: '5',
      name: 'Dr. Sophia Hayes',
      courses: ['Creative Writing', 'American Literature'],
      email: 'sophia.hayes@email.com'
    }
  ]);

  const filteredInstructors = instructors.filter(instructor =>
    instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    instructor.courses.some(course =>
      course.toLowerCase().includes(searchTerm.toLowerCase())
    ) ||
    instructor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );



  const handleAssignInstructor = () => {
    console.log('Assign instructor');
    // TODO: Implement assign instructor functionality
  };

  return (
    <div className="min-h-screen bg-white">
      <AdminHeader />

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Instructors</h1>
          <button
            onClick={handleAssignInstructor}
            className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Assign Instructor
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search instructors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Instructors Table */}
        <InstructorsTable
          instructors={filteredInstructors}
        />
      </main>
    </div>
  );
}
