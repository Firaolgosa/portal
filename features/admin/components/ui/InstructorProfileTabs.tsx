'use client';

import { useState } from 'react';

interface Course {
  id: string;
  name: string;
  code: string;
  semester: string;
  studentsEnrolled: number;
}

interface InstructorProfileTabsProps {
  courses: Course[];
}

export default function InstructorProfileTabs({ courses }: InstructorProfileTabsProps) {
  const [activeTab, setActiveTab] = useState('courses');

  const tabs = [
    { id: 'courses', label: 'Courses' },
    { id: 'feedback', label: 'Student Feedback' },
    { id: 'grading', label: 'Grading History' }
  ];

  return (
    <div className="mt-8">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'courses' && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Assigned Courses</h3>
            <div className="bg-white rounded-lg border border-gray-200">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 rounded-t-lg">
                <div className="text-sm font-medium text-gray-700">Course Name</div>
                <div className="text-sm font-medium text-gray-700">Course Code</div>
                <div className="text-sm font-medium text-gray-700">Semester</div>
                <div className="text-sm font-medium text-gray-700">Students Enrolled</div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {courses.map((course) => (
                  <div key={course.id} className="grid grid-cols-4 gap-4 px-6 py-4">
                    <div className="text-sm text-gray-900">{course.name}</div>
                    <div className="text-sm text-gray-600">{course.code}</div>
                    <div className="text-sm text-gray-600">{course.semester}</div>
                    <div className="text-sm text-gray-600">{course.studentsEnrolled}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'feedback' && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Student Feedback</h3>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <p className="text-gray-500">Student feedback data will be displayed here.</p>
            </div>
          </div>
        )}

        {activeTab === 'grading' && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Grading History</h3>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <p className="text-gray-500">Grading history data will be displayed here.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
