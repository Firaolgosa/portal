'use client';

import { useState } from 'react';
import StudentHeader from '@/features/student/components/layout/StudentHeader';

interface GradeItem {
  id: string;
  assignment: string;
  type: 'Homework' | 'Exam' | 'Project' | 'Quiz' | 'Participation';
  points: number;
  maxPoints: number;
  percentage: number;
  letterGrade: string;
  date: string;
  weight: number;
}

interface CourseGrades {
  id: string;
  courseName: string;
  courseCode: string;
  instructor: string;
  currentGrade: string;
  currentPercentage: number;
  credits: number;
  semester: string;
  grades: GradeItem[];
}

export default function StudentGradesPage() {
  const [selectedCourse, setSelectedCourse] = useState<string>('1');
  const [selectedSemester, setSelectedSemester] = useState('current');

  const courseGrades: CourseGrades[] = [
    {
      id: '1',
      courseName: 'Introduction to Psychology',
      courseCode: 'PSY 101',
      instructor: 'Dr. Emily Carter',
      currentGrade: 'A',
      currentPercentage: 92.5,
      credits: 3,
      semester: 'Fall 2024',
      grades: [
        { id: '1', assignment: 'Quiz 1', type: 'Quiz', points: 18, maxPoints: 20, percentage: 90, letterGrade: 'A-', date: '2024-02-05', weight: 5 },
        { id: '2', assignment: 'Midterm Exam', type: 'Exam', points: 85, maxPoints: 100, percentage: 85, letterGrade: 'B+', date: '2024-02-28', weight: 25 },
        { id: '3', assignment: 'Research Paper', type: 'Project', points: 95, maxPoints: 100, percentage: 95, letterGrade: 'A', date: '2024-03-15', weight: 30 },
        { id: '4', assignment: 'Class Participation', type: 'Participation', points: 48, maxPoints: 50, percentage: 96, letterGrade: 'A', date: '2024-04-01', weight: 10 }
      ]
    },
    {
      id: '2',
      courseName: 'Calculus I',
      courseCode: 'MATH 151',
      instructor: 'Prof. Robert Davis',
      currentGrade: 'B+',
      currentPercentage: 87.2,
      credits: 4,
      semester: 'Fall 2024',
      grades: [
        { id: '5', assignment: 'Problem Set 1', type: 'Homework', points: 45, maxPoints: 50, percentage: 90, letterGrade: 'A-', date: '2024-02-10', weight: 15 },
        { id: '6', assignment: 'Quiz 1', type: 'Quiz', points: 16, maxPoints: 20, percentage: 80, letterGrade: 'B-', date: '2024-02-15', weight: 10 },
        { id: '7', assignment: 'Midterm Exam', type: 'Exam', points: 78, maxPoints: 100, percentage: 78, letterGrade: 'C+', date: '2024-03-05', weight: 30 }
      ]
    },
    {
      id: '3',
      courseName: 'Organic Chemistry',
      courseCode: 'CHEM 201',
      instructor: 'Dr. Sarah Johnson',
      currentGrade: 'C',
      currentPercentage: 75.8,
      credits: 4,
      semester: 'Fall 2024',
      grades: [
        { id: '8', assignment: 'Lab Report 1', type: 'Project', points: 38, maxPoints: 50, percentage: 76, letterGrade: 'C', date: '2024-02-20', weight: 20 },
        { id: '9', assignment: 'Chapter 3 Quiz', type: 'Quiz', points: 15, maxPoints: 20, percentage: 75, letterGrade: 'C', date: '2024-02-25', weight: 10 },
        { id: '10', assignment: 'Midterm Exam', type: 'Exam', points: 72, maxPoints: 100, percentage: 72, letterGrade: 'C-', date: '2024-03-10', weight: 25 }
      ]
    }
  ];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'bg-green-100 text-green-800';
    if (grade.startsWith('B')) return 'bg-blue-100 text-blue-800';
    if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-800';
    if (grade.startsWith('D')) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  const getPercentageColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 80) return 'text-blue-600';
    if (percentage >= 70) return 'text-yellow-600';
    if (percentage >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  const selectedCourseData = courseGrades.find(course => course.id === selectedCourse);

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentHeader />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Grades</h1>
          <p className="text-gray-600 mt-2">View your grades and academic performance across all courses.</p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div>
            <label htmlFor="course-select" className="block text-sm font-medium text-gray-700 mb-2">
              Select Course
            </label>
            <select
              id="course-select"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full sm:w-64 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {courseGrades.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.courseCode} - {course.courseName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="semester-select" className="block text-sm font-medium text-gray-700 mb-2">
              Semester
            </label>
            <select
              id="semester-select"
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="w-full sm:w-48 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="current">Current Semester</option>
              <option value="fall2024">Fall 2024</option>
              <option value="spring2024">Spring 2024</option>
              <option value="fall2023">Fall 2023</option>
            </select>
          </div>
        </div>

        {selectedCourseData && (
          <>
            {/* Course Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{selectedCourseData.courseName}</h3>
                  <p className="text-gray-600">{selectedCourseData.courseCode}</p>
                  <p className="text-sm text-gray-500">{selectedCourseData.instructor}</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{selectedCourseData.currentPercentage}%</div>
                  <div className="text-sm text-gray-500">Current Average</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold inline-flex px-3 py-1 rounded-full ${getGradeColor(selectedCourseData.currentGrade)}`}>
                    {selectedCourseData.currentGrade}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Letter Grade</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{selectedCourseData.credits}</div>
                  <div className="text-sm text-gray-500">Credit Hours</div>
                </div>
              </div>
            </div>

            {/* Grades Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Assignment Grades</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Assignment
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Points
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Percentage
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Letter Grade
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Weight
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {selectedCourseData.grades.map((grade) => (
                      <tr key={grade.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{grade.assignment}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                            {grade.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {grade.points}/{grade.maxPoints}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`text-sm font-medium ${getPercentageColor(grade.percentage)}`}>
                            {grade.percentage}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getGradeColor(grade.letterGrade)}`}>
                            {grade.letterGrade}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {grade.weight}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(grade.date).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Grade Distribution Chart Placeholder */}
            <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Grade Distribution</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">Grade distribution chart will be displayed here</p>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
