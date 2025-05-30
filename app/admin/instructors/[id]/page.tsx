'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import AdminHeader from '../../../../features/admin/components/layout/AdminHeader';
import InstructorProfileTabs from '../../../../features/admin/components/ui/InstructorProfileTabs';

interface Instructor {
  id: string;
  name: string;
  title: string;
  email: string;
  joinedDate: string;
  avatar: string;
  courses: Array<{
    id: string;
    name: string;
    code: string;
    semester: string;
    studentsEnrolled: number;
  }>;
}

export default function InstructorProfilePage() {
  const params = useParams();
  const router = useRouter();
  const [instructor, setInstructor] = useState<Instructor | null>(null);

  // Sample instructor data - in a real app, this would come from an API
  const instructorsData: Record<string, Instructor> = {
    '1': {
      id: '1',
      name: 'Dr. Robert Anderson',
      title: 'Professor of Computer Science',
      email: 'robert.anderson@email.com',
      joinedDate: 'August 2021',
      avatar: '/api/placeholder/120/120',
      courses: [
        {
          id: '1',
          name: 'Introduction to Programming',
          code: 'CS101',
          semester: 'Fall 2023',
          studentsEnrolled: 50
        },
        {
          id: '2',
          name: 'Data Structures and Algorithms',
          code: 'CS201',
          semester: 'Spring 2024',
          studentsEnrolled: 45
        },
        {
          id: '3',
          name: 'Software Engineering',
          code: 'CS301',
          semester: 'Fall 2024',
          studentsEnrolled: 40
        }
      ]
    },
    '2': {
      id: '2',
      name: 'Prof. Samuel Harper',
      title: 'Professor of Computer Science',
      email: 'samuel.harper@email.com',
      joinedDate: 'September 2020',
      avatar: '/api/placeholder/120/120',
      courses: [
        {
          id: '4',
          name: 'Introduction to Programming',
          code: 'CS101',
          semester: 'Fall 2023',
          studentsEnrolled: 48
        },
        {
          id: '5',
          name: 'Data Structures',
          code: 'CS201',
          semester: 'Spring 2024',
          studentsEnrolled: 42
        }
      ]
    },
    '3': {
      id: '3',
      name: 'Dr. Olivia Bennett',
      title: 'Professor of Chemistry',
      email: 'olivia.bennett@email.com',
      joinedDate: 'January 2022',
      avatar: '/api/placeholder/120/120',
      courses: [
        {
          id: '6',
          name: 'Organic Chemistry',
          code: 'CHEM201',
          semester: 'Fall 2023',
          studentsEnrolled: 35
        },
        {
          id: '7',
          name: 'Biochemistry',
          code: 'CHEM301',
          semester: 'Spring 2024',
          studentsEnrolled: 30
        }
      ]
    },
    '4': {
      id: '4',
      name: 'Prof. Ethan Carter',
      title: 'Professor of History',
      email: 'ethan.carter@email.com',
      joinedDate: 'March 2019',
      avatar: '/api/placeholder/120/120',
      courses: [
        {
          id: '8',
          name: 'World History',
          code: 'HIST101',
          semester: 'Fall 2023',
          studentsEnrolled: 60
        },
        {
          id: '9',
          name: 'European History',
          code: 'HIST201',
          semester: 'Spring 2024',
          studentsEnrolled: 55
        }
      ]
    },
    '5': {
      id: '5',
      name: 'Dr. Sophia Hayes',
      title: 'Professor of Literature',
      email: 'sophia.hayes@email.com',
      joinedDate: 'June 2021',
      avatar: '/api/placeholder/120/120',
      courses: [
        {
          id: '10',
          name: 'Creative Writing',
          code: 'ENG201',
          semester: 'Fall 2023',
          studentsEnrolled: 25
        },
        {
          id: '11',
          name: 'American Literature',
          code: 'ENG301',
          semester: 'Spring 2024',
          studentsEnrolled: 30
        }
      ]
    }
  };

  useEffect(() => {
    const instructorId = params.id as string;
    const foundInstructor = instructorsData[instructorId];
    
    if (foundInstructor) {
      setInstructor(foundInstructor);
    } else {
      // Redirect to instructors list if instructor not found
      router.push('/admin/instructors');
    }
  }, [params.id, router]);

  if (!instructor) {
    return (
      <div className="min-h-screen bg-white">
        <AdminHeader />
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500">Loading instructor profile...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <AdminHeader />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Instructor Profile</h1>
          <p className="mt-2 text-gray-600">Manage instructor details and course assignments.</p>
        </div>

        {/* Instructor Profile Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              {/* Avatar */}
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-6">
                <span className="text-2xl font-bold text-white">
                  {instructor.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              {/* Instructor Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{instructor.name}</h2>
                <p className="text-gray-600 mt-1">{instructor.title}</p>
                <p className="text-gray-500 text-sm mt-1">Joined {instructor.joinedDate}</p>
              </div>
            </div>

            {/* Edit Profile Button */}
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Tabs Section */}
        <InstructorProfileTabs courses={instructor.courses} />

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">©2024 EduPortal. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}
