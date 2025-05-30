'use client';

import { useRouter } from 'next/navigation';

interface Student {
  id: string;
  name: string;
  studentId: string;
  overallGrade: string;
}

interface CourseStudentsTableProps {
  students: Student[];
  courseId: string;
  onViewDetails?: (studentId: string) => void;
}

export default function CourseStudentsTable({ students, courseId, onViewDetails }: CourseStudentsTableProps) {
  const router = useRouter();

  const handleViewDetails = (studentId: string) => {
    if (onViewDetails) {
      onViewDetails(studentId);
    } else {
      router.push(`/admin/courses/${courseId}/students/${studentId}`);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Enrolled Students</h2>
      
      <div className="bg-white rounded-lg border border-gray-200">
        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 rounded-t-lg">
          <div className="text-sm font-medium text-gray-700">Student Name</div>
          <div className="text-sm font-medium text-gray-700">Student ID</div>
          <div className="text-sm font-medium text-gray-700">Overall Grade</div>
          <div className="text-sm font-medium text-gray-500">Actions</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {students.map((student) => (
            <div key={student.id} className="grid grid-cols-4 gap-4 px-6 py-4 hover:bg-gray-50">
              <div className="text-sm text-gray-900">{student.name}</div>
              <div className="text-sm text-gray-600">{student.studentId}</div>
              <div className="text-sm text-gray-600">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  student.overallGrade === 'A' ? 'bg-green-100 text-green-800' :
                  student.overallGrade === 'B+' ? 'bg-blue-100 text-blue-800' :
                  student.overallGrade === 'B' ? 'bg-blue-100 text-blue-800' :
                  student.overallGrade === 'C' ? 'bg-yellow-100 text-yellow-800' :
                  student.overallGrade === 'A-' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {student.overallGrade}
                </span>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleViewDetails(student.id)}
                  className="text-sm text-gray-500 hover:text-gray-700 font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
