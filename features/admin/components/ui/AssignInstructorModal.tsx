'use client';

import { useState, useEffect } from 'react';

interface Course {
  id: string;
  title: string;
  code: string;
  semester: string;
  department: string;
  currentInstructor?: string;
}

interface Instructor {
  id: string;
  name: string;
  title: string;
  email: string;
  department: string;
  specializations: string[];
}

interface AssignInstructorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAssign: (courseId: string, instructorId: string, classSchedule: ClassSchedule) => void;
  selectedCourse?: Course | null;
}

interface ClassSchedule {
  days: string[];
  startTime: string;
  endTime: string;
  room: string;
  capacity: number;
}

// Mock data for instructors
const mockInstructors: Instructor[] = [
  {
    id: '1',
    name: 'Dr. Robert Anderson',
    title: 'Professor of Computer Science',
    email: 'robert.anderson@university.edu',
    department: 'Computer Science',
    specializations: ['Programming', 'Data Structures', 'Algorithms']
  },
  {
    id: '2',
    name: 'Prof. Samuel Harper',
    title: 'Associate Professor of Computer Science',
    email: 'samuel.harper@university.edu',
    department: 'Computer Science',
    specializations: ['Software Engineering', 'Web Development', 'Database Systems']
  },
  {
    id: '3',
    name: 'Dr. Olivia Bennett',
    title: 'Professor of Chemistry',
    email: 'olivia.bennett@university.edu',
    department: 'Chemistry',
    specializations: ['Organic Chemistry', 'Biochemistry', 'Analytical Chemistry']
  },
  {
    id: '4',
    name: 'Prof. Ethan Carter',
    title: 'Professor of History',
    email: 'ethan.carter@university.edu',
    department: 'History',
    specializations: ['World History', 'European History', 'Modern History']
  },
  {
    id: '5',
    name: 'Dr. Emily Davis',
    title: 'Assistant Professor of Mathematics',
    email: 'emily.davis@university.edu',
    department: 'Mathematics',
    specializations: ['Calculus', 'Linear Algebra', 'Statistics']
  }
];

export default function AssignInstructorModal({ isOpen, onClose, onAssign, selectedCourse }: AssignInstructorModalProps) {
  const [selectedInstructor, setSelectedInstructor] = useState('');
  const [classSchedule, setClassSchedule] = useState<ClassSchedule>({
    days: [],
    startTime: '',
    endTime: '',
    room: '',
    capacity: 30
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setSelectedInstructor('');
      setClassSchedule({
        days: [],
        startTime: '',
        endTime: '',
        room: '',
        capacity: 30
      });
    }
  }, [isOpen]);

  const handleDayToggle = (day: string) => {
    setClassSchedule(prev => ({
      ...prev,
      days: prev.days.includes(day)
        ? prev.days.filter(d => d !== day)
        : [...prev.days, day]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedInstructor || !selectedCourse) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onAssign(selectedCourse.id, selectedInstructor, classSchedule);
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  if (!isOpen) return null;

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Assign Instructor</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Course Information */}
          {selectedCourse && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Course Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Course:</span>
                  <span className="ml-2 font-medium">{selectedCourse.title}</span>
                </div>
                <div>
                  <span className="text-gray-600">Code:</span>
                  <span className="ml-2 font-medium">{selectedCourse.code}</span>
                </div>
                <div>
                  <span className="text-gray-600">Semester:</span>
                  <span className="ml-2 font-medium">{selectedCourse.semester}</span>
                </div>
                <div>
                  <span className="text-gray-600">Department:</span>
                  <span className="ml-2 font-medium">{selectedCourse.department}</span>
                </div>
              </div>
            </div>
          )}

          {/* Instructor Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Instructor
            </label>
            <div className="space-y-3 max-h-48 overflow-y-auto">
              {mockInstructors.map((instructor) => (
                <label key={instructor.id} className="flex items-start p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="instructor"
                    value={instructor.id}
                    checked={selectedInstructor === instructor.id}
                    onChange={(e) => setSelectedInstructor(e.target.value)}
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <div className="ml-3 flex-1">
                    <div className="font-medium text-gray-900">{instructor.name}</div>
                    <div className="text-sm text-gray-600">{instructor.title}</div>
                    <div className="text-sm text-gray-500">{instructor.email}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Specializations: {instructor.specializations.join(', ')}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Class Schedule */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Class Schedule</h3>
            
            {/* Days of Week */}
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">Days</label>
              <div className="flex flex-wrap gap-2">
                {daysOfWeek.map((day) => (
                  <label key={day} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={classSchedule.days.includes(day)}
                      onChange={() => handleDayToggle(day)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{day}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Time */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Start Time</label>
                <input
                  type="time"
                  value={classSchedule.startTime}
                  onChange={(e) => setClassSchedule(prev => ({ ...prev, startTime: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">End Time</label>
                <input
                  type="time"
                  value={classSchedule.endTime}
                  onChange={(e) => setClassSchedule(prev => ({ ...prev, endTime: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Room and Capacity */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Room</label>
                <input
                  type="text"
                  placeholder="e.g., Room 101"
                  value={classSchedule.room}
                  onChange={(e) => setClassSchedule(prev => ({ ...prev, room: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Capacity</label>
                <input
                  type="number"
                  min="1"
                  max="200"
                  value={classSchedule.capacity}
                  onChange={(e) => setClassSchedule(prev => ({ ...prev, capacity: parseInt(e.target.value) || 30 }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!selectedInstructor || isSubmitting}
              className={`px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                !selectedInstructor || isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? 'Assigning...' : 'Assign Instructor'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
