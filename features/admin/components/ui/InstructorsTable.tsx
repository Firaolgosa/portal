'use client';

import { useRouter } from 'next/navigation';

interface Instructor {
  id: string;
  name: string;
  courses: string[];
  email: string;
}

interface InstructorsTableProps {
  instructors: Instructor[];
  onViewDetails?: (instructorId: string) => void;
}

export default function InstructorsTable({ instructors, onViewDetails }: InstructorsTableProps) {
  const router = useRouter();

  const handleViewDetails = (instructorId: string) => {
    if (onViewDetails) {
      onViewDetails(instructorId);
    } else {
      router.push(`/admin/instructors/${instructorId}`);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Table Header */}
      <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 rounded-t-lg">
        <div className="text-sm font-medium text-gray-700">Instructor</div>
        <div className="text-sm font-medium text-gray-700">Courses</div>
        <div className="text-sm font-medium text-gray-700">Contact</div>
        <div className="text-sm font-medium text-gray-500">Actions</div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-200">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="grid grid-cols-4 gap-4 px-6 py-4 hover:bg-gray-50">
            <div className="text-sm font-medium text-gray-900">{instructor.name}</div>
            <div className="text-sm text-gray-600">
              {instructor.courses.join(', ')}
            </div>
            <div className="text-sm text-gray-600">{instructor.email}</div>
            <div className="flex items-center">
              <button
                onClick={() => handleViewDetails(instructor.id)}
                className="text-sm text-gray-500 hover:text-gray-700 font-medium"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
