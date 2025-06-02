'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import InstructorHeader from '@/features/instructor/components/layout/InstructorHeader';

interface Student {
  id: string;
  name: string;
  studentId: string;
  assignment1: number;
  assignment2: number;
  midtermExam: number;
  finalExam: number;
  finalGrade: string;
}

export default function CourseGradesPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.courseId as string;

  // Mock course data
  const courseData = {
    id: courseId,
    name: 'Introduction to Psychology',
    code: 'PSY101',
    semester: 'Spring 2024',
    totalStudents: 45,
    averageGrade: 'B+',
    gradeDistribution: {
      A: 10,
      B: 15,
      C: 12,
      D: 5,
      F: 3
    }
  };

  const students: Student[] = [
    {
      id: '1',
      name: 'Sophia Clark',
      studentId: '123456',
      assignment1: 85,
      assignment2: 92,
      midtermExam: 78,
      finalExam: 88,
      finalGrade: 'A-'
    },
    {
      id: '2',
      name: 'Ethan Miller',
      studentId: '654321',
      assignment1: 76,
      assignment2: 88,
      midtermExam: 82,
      finalExam: 90,
      finalGrade: 'B+'
    },
    {
      id: '3',
      name: 'Olivia Davis',
      studentId: '987654',
      assignment1: 90,
      assignment2: 95,
      midtermExam: 92,
      finalExam: 94,
      finalGrade: 'A'
    },
    {
      id: '4',
      name: 'Liam Wilson',
      studentId: '456789',
      assignment1: 68,
      assignment2: 75,
      midtermExam: 70,
      finalExam: 78,
      finalGrade: 'C+'
    },
    {
      id: '5',
      name: 'Ava Taylor',
      studentId: '321654',
      assignment1: 88,
      assignment2: 90,
      midtermExam: 85,
      finalExam: 89,
      finalGrade: 'B+'
    },
    {
      id: '6',
      name: 'Noah Anderson',
      studentId: '789123',
      assignment1: 72,
      assignment2: 80,
      midtermExam: 75,
      finalExam: 82,
      finalGrade: 'B-'
    },
    {
      id: '7',
      name: 'Isabella Thomas',
      studentId: '654987',
      assignment1: 95,
      assignment2: 98,
      midtermExam: 96,
      finalExam: 97,
      finalGrade: 'A+'
    },
    {
      id: '8',
      name: 'Jackson Moore',
      studentId: '147258',
      assignment1: 60,
      assignment2: 65,
      midtermExam: 62,
      finalExam: 68,
      finalGrade: 'D'
    },
    {
      id: '9',
      name: 'Mia Jackson',
      studentId: '369852',
      assignment1: 80,
      assignment2: 85,
      midtermExam: 80,
      finalExam: 85,
      finalGrade: 'B'
    },
    {
      id: '10',
      name: 'Aiden White',
      studentId: '951753',
      assignment1: 78,
      assignment2: 82,
      midtermExam: 78,
      finalExam: 80,
      finalGrade: 'B-'
    }
  ];

  const handleAssignmentClick = (assignmentNumber: number) => {
    router.push(`/instructor/courses/${courseId}/grades/assignment-${assignmentNumber}`);
  };

  const handleExamClick = (examType: string) => {
    router.push(`/instructor/courses/${courseId}/grades/${examType}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <InstructorHeader />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{courseData.name}</h1>
          <p className="text-gray-600 mt-2">{courseData.code} - {courseData.semester}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Total Students</h3>
            <div className="text-3xl font-bold text-gray-900">{courseData.totalStudents}</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Average Grade</h3>
            <div className="text-3xl font-bold text-gray-900">{courseData.averageGrade}</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Grade Distribution</h3>
            <div className="text-sm text-gray-900">
              A: {courseData.gradeDistribution.A}, B: {courseData.gradeDistribution.B}, C: {courseData.gradeDistribution.C}, D: {courseData.gradeDistribution.D}, F: {courseData.gradeDistribution.F}
            </div>
          </div>
        </div>

        {/* Grade Management Section */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Grade Management</h2>
          </div>

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
                  <th 
                    className="px-6 py-4 text-left text-sm font-medium text-gray-500 cursor-pointer hover:text-blue-600"
                    onClick={() => handleAssignmentClick(1)}
                  >
                    Assignment 1
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-sm font-medium text-gray-500 cursor-pointer hover:text-blue-600"
                    onClick={() => handleAssignmentClick(2)}
                  >
                    Assignment 2
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-sm font-medium text-gray-500 cursor-pointer hover:text-blue-600"
                    onClick={() => handleExamClick('midterm')}
                  >
                    Midterm Exam
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-sm font-medium text-gray-500 cursor-pointer hover:text-blue-600"
                    onClick={() => handleExamClick('final')}
                  >
                    Final Exam
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    Final Grade
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {students.map((student, index) => (
                  <tr key={student.id} className={`${index !== students.length - 1 ? 'border-b border-gray-100' : ''}`}>
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
                      <div className="text-sm text-gray-900">
                        {student.assignment1}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {student.assignment2}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {student.midtermExam}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {student.finalExam}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {student.finalGrade}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View Student Details
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium">
              Export Grades
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
