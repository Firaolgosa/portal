'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import StudentHeader from '@/features/student/components/layout/StudentHeader';

interface Assignment {
  id: string;
  name: string;
  dueDate: string;
  status: 'Submitted' | 'Pending' | 'Overdue';
  grade: string;
  maxPoints: number;
}

interface Exam {
  id: string;
  name: string;
  date: string;
  status: 'Completed' | 'Upcoming';
  grade: string;
  maxPoints: number;
}

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  
  const [activeTab, setActiveTab] = useState<'assignments' | 'exams' | 'overall'>('assignments');

  // Mock course data - in real app, this would be fetched based on courseId
  const courseData = {
    id: courseId,
    name: 'Introduction to Computer Science',
    instructor: 'Dr. Eleanor Vance',
    overallGrade: 91
  };

  const assignments: Assignment[] = [
    {
      id: '1',
      name: 'Assignment 1: Programming Basics',
      dueDate: '2024-09-15',
      status: 'Submitted',
      grade: '92/100',
      maxPoints: 100
    },
    {
      id: '2',
      name: 'Assignment 2: Data Structures',
      dueDate: '2024-10-05',
      status: 'Submitted',
      grade: '88/100',
      maxPoints: 100
    },
    {
      id: '3',
      name: 'Assignment 3: Algorithms',
      dueDate: '2024-10-20',
      status: 'Submitted',
      grade: '95/100',
      maxPoints: 100
    },
    {
      id: '4',
      name: 'Assignment 4: Software Design',
      dueDate: '2024-11-10',
      status: 'Submitted',
      grade: '90/100',
      maxPoints: 100
    },
    {
      id: '5',
      name: 'Assignment 5: Final Project',
      dueDate: '2024-12-01',
      status: 'Submitted',
      grade: '94/100',
      maxPoints: 100
    }
  ];

  const exams: Exam[] = [
    {
      id: '1',
      name: 'Midterm Exam',
      date: '2024-10-15',
      status: 'Completed',
      grade: '89/100',
      maxPoints: 100
    },
    {
      id: '2',
      name: 'Final Exam',
      date: '2024-12-15',
      status: 'Completed',
      grade: '93/100',
      maxPoints: 100
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Submitted':
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Overdue':
        return 'bg-red-100 text-red-800';
      case 'Upcoming':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const calculateOverallGrade = () => {
    const assignmentGrades = assignments.map(a => parseInt(a.grade.split('/')[0]));
    const examGrades = exams.map(e => parseInt(e.grade.split('/')[0]));
    const allGrades = [...assignmentGrades, ...examGrades];
    return Math.round(allGrades.reduce((sum, grade) => sum + grade, 0) / allGrades.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentHeader />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Course Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Course: {courseData.name}</h1>
          <p className="text-gray-600 mt-2">Instructor: {courseData.instructor}</p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('assignments')}
              className={`pb-2 text-sm font-medium border-b-2 ${
                activeTab === 'assignments'
                  ? 'text-gray-900 border-gray-900'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Assignments
            </button>
            <button
              onClick={() => setActiveTab('exams')}
              className={`pb-2 text-sm font-medium border-b-2 ${
                activeTab === 'exams'
                  ? 'text-gray-900 border-gray-900'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Exams
            </button>
            <button
              onClick={() => setActiveTab('overall')}
              className={`pb-2 text-sm font-medium border-b-2 ${
                activeTab === 'overall'
                  ? 'text-gray-900 border-gray-900'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overall Grade
            </button>
          </nav>
        </div>

        {/* Assignments Tab */}
        {activeTab === 'assignments' && (
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Assignment
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Due Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Grade
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {assignments.map((assignment, index) => (
                    <tr key={assignment.id} className={`${index !== assignments.length - 1 ? 'border-b border-gray-100' : ''}`}>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {assignment.name}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {new Date(assignment.dueDate).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(assignment.status)}`}>
                          {assignment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {assignment.grade}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Exams Tab */}
        {activeTab === 'exams' && (
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Exam
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Grade
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {exams.map((exam, index) => (
                    <tr key={exam.id} className={`${index !== exams.length - 1 ? 'border-b border-gray-100' : ''}`}>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {exam.name}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {new Date(exam.date).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(exam.status)}`}>
                          {exam.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {exam.grade}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Overall Grade Tab */}
        {activeTab === 'overall' && (
          <div className="space-y-8">
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Overall Grade</h2>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Grade</span>
                  <span className="text-sm font-medium text-gray-900">{courseData.overallGrade}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gray-900 h-2 rounded-full" 
                    style={{ width: `${courseData.overallGrade}%` }}
                  ></div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-6">
                Based on completed assignments and exams
              </p>

              <div className="flex space-x-4">
                <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                  Download Grade Report
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                  View Feedback
                </button>
              </div>
            </div>

            {/* Grade Breakdown */}
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Grade Breakdown</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Assignments (70%)</span>
                  <span className="text-sm font-medium text-gray-900">
                    {Math.round(assignments.reduce((sum, a) => sum + parseInt(a.grade.split('/')[0]), 0) / assignments.length)}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Exams (30%)</span>
                  <span className="text-sm font-medium text-gray-900">
                    {Math.round(exams.reduce((sum, e) => sum + parseInt(e.grade.split('/')[0]), 0) / exams.length)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
