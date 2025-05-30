'use client';

interface Assignment {
  id: string;
  name: string;
  type: string;
  dueDate: string;
  grade: string;
  weight: string;
}

interface StudentGradeBreakdownProps {
  assignments: Assignment[];
}

export default function StudentGradeBreakdown({ assignments }: StudentGradeBreakdownProps) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Grade Breakdown</h3>
      
      <div className="bg-white rounded-lg border border-gray-200">
        {/* Table Header */}
        <div className="grid grid-cols-5 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 rounded-t-lg">
          <div className="text-sm font-medium text-gray-700">Assignment</div>
          <div className="text-sm font-medium text-gray-700">Type</div>
          <div className="text-sm font-medium text-gray-700">Due Date</div>
          <div className="text-sm font-medium text-gray-700">Grade</div>
          <div className="text-sm font-medium text-gray-700">Weight</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="grid grid-cols-5 gap-4 px-6 py-4">
              <div className="text-sm text-gray-900">{assignment.name}</div>
              <div className="text-sm text-gray-600">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  assignment.type === 'Homework' ? 'bg-blue-100 text-blue-800' :
                  assignment.type === 'Exam' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {assignment.type}
                </span>
              </div>
              <div className="text-sm text-gray-600">{assignment.dueDate}</div>
              <div className="text-sm text-gray-600">{assignment.grade}</div>
              <div className="text-sm text-gray-600">{assignment.weight}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
