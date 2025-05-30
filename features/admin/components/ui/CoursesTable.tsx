'use client';

interface Course {
  id: string;
  name: string;
  code: string;
  instructor: string;
}

interface CoursesTableProps {
  courses: Course[];
  onEdit: (courseId: string) => void;
  onDelete: (courseId: string) => void;
}

export default function CoursesTable({ courses, onEdit, onDelete }: CoursesTableProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Table Header */}
      <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 rounded-t-lg">
        <div className="text-sm font-medium text-gray-700">Course Name</div>
        <div className="text-sm font-medium text-gray-700">Course Code</div>
        <div className="text-sm font-medium text-gray-700">Instructor</div>
        <div className="text-sm font-medium text-gray-700">Actions</div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-200">
        {courses.map((course) => (
          <div key={course.id} className="grid grid-cols-4 gap-4 px-6 py-4 hover:bg-gray-50">
            <div className="text-sm text-gray-900">{course.name}</div>
            <div className="text-sm text-gray-600">{course.code}</div>
            <div className="text-sm text-gray-600">{course.instructor}</div>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(course.id)}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Edit
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => onDelete(course.id)}
                className="text-sm text-red-600 hover:text-red-800 font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
