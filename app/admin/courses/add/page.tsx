'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminHeader from '../../../../features/admin/components/layout/AdminHeader';
import FormField from '../../../../features/admin/components/ui/FormField';

export default function AddCoursePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    courseName: '',
    courseCode: '',
    instructor: '',
    courseDescription: ''
  });

  const instructorOptions = [
    { value: 'dr-emily-carter', label: 'Dr. Emily Carter' },
    { value: 'dr-robert-harris', label: 'Dr. Robert Harris' },
    { value: 'dr-olivia-bennett', label: 'Dr. Olivia Bennett' },
    { value: 'dr-ethan-clark', label: 'Dr. Ethan Clark' },
    { value: 'dr-sophia-turner', label: 'Dr. Sophia Turner' },
    { value: 'dr-michael-johnson', label: 'Dr. Michael Johnson' },
    { value: 'dr-sarah-williams', label: 'Dr. Sarah Williams' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving course:', formData);
    // TODO: Implement save functionality
    // For now, redirect back to courses page
    router.push('/admin/courses');
  };

  const handleCancel = () => {
    router.push('/admin/courses');
  };

  return (
    <div className="min-h-screen bg-white">
      <AdminHeader />
      
      <main className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Add Course</h1>
        </div>

        {/* Add Course Form */}
        <form onSubmit={handleSave} className="space-y-6">
          <FormField
            label="Course Name"
            placeholder="e.g., IntroductiontoProgramming"
            value={formData.courseName}
            onChange={(value) => handleInputChange('courseName', value)}
            required
          />

          <FormField
            label="Course Code"
            placeholder="e.g., CS101"
            value={formData.courseCode}
            onChange={(value) => handleInputChange('courseCode', value)}
            required
          />

          <FormField
            label="Instructor"
            type="select"
            value={formData.instructor}
            onChange={(value) => handleInputChange('instructor', value)}
            options={instructorOptions}
            required
          />

          <FormField
            label="Course Description"
            type="textarea"
            placeholder="Enter course description..."
            value={formData.courseDescription}
            onChange={(value) => handleInputChange('courseDescription', value)}
          />

          {/* Form Actions */}
          <div className="flex justify-end space-x-4 pt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
