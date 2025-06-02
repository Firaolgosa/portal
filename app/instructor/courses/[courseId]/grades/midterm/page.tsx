'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import InstructorHeader from '@/features/instructor/components/layout/InstructorHeader';

interface StudentGrade {
  id: string;
  name: string;
  studentId: string;
  grade: number;
  feedback: string;
  status: 'Draft' | 'Submitted';
}

export default function MidtermGradingPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.courseId as string;

  const [searchTerm, setSearchTerm] = useState('');
  const [students, setStudents] = useState<StudentGrade[]>([
    {
      id: '1',
      name: 'Ethan Walker',
      studentId: '20221001',
      grade: 85,
      feedback: 'Add Feedback',
      status: 'Draft'
    },
    {
      id: '2',
      name: 'Chloe Bennett',
      studentId: '20221002',
      grade: 92,
      feedback: 'Add Feedback',
      status: 'Submitted'
    },
    {
      id: '3',
      name: 'Owen Carter',
      studentId: '20221003',
      grade: 78,
      feedback: 'Add Feedback',
      status: 'Draft'
    },
    {
      id: '4',
      name: 'Emily Hughes',
      studentId: '20221004',
      grade: 95,
      feedback: 'Add Feedback',
      status: 'Submitted'
    },
    {
      id: '5',
      name: 'Caleb Foster',
      studentId: '20221005',
      grade: 88,
      feedback: 'Add Feedback',
      status: 'Draft'
    },
    {
      id: '6',
      name: 'Hannah Reed',
      studentId: '20221006',
      grade: 75,
      feedback: 'Add Feedback',
      status: 'Submitted'
    },
    {
      id: '7',
      name: 'Lucas Cole',
      studentId: '20221007',
      grade: 90,
      feedback: 'Add Feedback',
      status: 'Draft'
    },
    {
      id: '8',
      name: 'Lily Grant',
      studentId: '20221008',
      grade: 82,
      feedback: 'Add Feedback',
      status: 'Submitted'
    },
    {
      id: '9',
      name: 'Ryan Fisher',
      studentId: '20221009',
      grade: 79,
      feedback: 'Add Feedback',
      status: 'Draft'
    },
    {
      id: '10',
      name: 'Ava Evans',
      studentId: '20221010',
      grade: 91,
      feedback: 'Add Feedback',
      status: 'Submitted'
    }
  ]);

  const courseData = {
    name: 'Introduction to Psychology',
    code: 'PSY101',
    dueDate: 'October 26, 2024'
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.studentId.includes(searchTerm)
  );

  const handleGradeChange = (studentId: string, newGrade: number) => {
    setStudents(prev => prev.map(student =>
      student.id === studentId ? { ...student, grade: newGrade } : student
    ));
  };

  const handleStatusChange = (studentId: string, newStatus: 'Draft' | 'Submitted') => {
    setStudents(prev => prev.map(student =>
      student.id === studentId ? { ...student, status: newStatus } : student
    ));
  };

  const handleSaveAsDraft = () => {
    console.log('Saving as draft...');
  };

  const handleSubmitGrades = () => {
    console.log('Submitting grades...');
  };

  const handleAddFeedback = (studentId: string) => {
    console.log('Add feedback for student:', studentId);
  };

  const getStatusBadge = (status: 'Draft' | 'Submitted') => {
    if (status === 'Submitted') {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Submitted
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
        Draft
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <InstructorHeader />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Grade Assignment: Midterm Exam</h1>
          <p className="text-gray-600 mt-2">
            Course: {courseData.name} ({courseData.code}) | Due Date: {courseData.dueDate}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by student name or ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Grades Table */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-6">
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
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {filteredStudents.map((student, index) => (
                  <tr key={student.id} className={`${index !== filteredStudents.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-gray-50`}>
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
                      <input
                        type="number"
                        value={student.grade}
                        onChange={(e) => handleGradeChange(student.id, parseInt(e.target.value))}
                        className="w-20 px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        min="0"
                        max="100"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => handleAddFeedback(student.id)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        {student.feedback}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(student.status)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button 
            onClick={handleSaveAsDraft}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors font-medium"
          >
            Save as Draft
          </button>
          <button 
            onClick={handleSubmitGrades}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Submit Grades
          </button>
        </div>
      </main>
    </div>
  );
}
