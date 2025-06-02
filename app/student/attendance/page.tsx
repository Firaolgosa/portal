'use client';

import StudentHeader from '@/features/student/components/layout/StudentHeader';

interface AttendanceRecord {
  id: string;
  courseName: string;
  date: string;
  status: 'Present' | 'Absent' | 'Late';
  instructor: string;
}

export default function StudentAttendancePage() {
  const attendanceRecords: AttendanceRecord[] = [
    {
      id: '1',
      courseName: 'Introduction to Psychology',
      date: '2024-01-15',
      status: 'Present',
      instructor: 'Dr. Emily Carter'
    },
    {
      id: '2',
      courseName: 'Calculus I',
      date: '2024-01-15',
      status: 'Present',
      instructor: 'Prof. Robert Davis'
    },
    {
      id: '3',
      courseName: 'Organic Chemistry',
      date: '2024-01-14',
      status: 'Late',
      instructor: 'Dr. Sarah Johnson'
    },
    {
      id: '4',
      courseName: 'World History',
      date: '2024-01-14',
      status: 'Present',
      instructor: 'Prof. Michael Brown'
    },
    {
      id: '5',
      courseName: 'Computer Science Fundamentals',
      date: '2024-01-13',
      status: 'Absent',
      instructor: 'Dr. David Lee'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Present':
        return 'bg-green-100 text-green-800';
      case 'Absent':
        return 'bg-red-100 text-red-800';
      case 'Late':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const attendanceStats = {
    totalClasses: 25,
    present: 20,
    absent: 3,
    late: 2,
    attendanceRate: 80
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentHeader />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Attendance</h1>
          <p className="text-gray-600 mt-2">Track your class attendance and participation.</p>
        </div>

        {/* Attendance Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-2xl font-bold text-gray-900">{attendanceStats.totalClasses}</div>
            <div className="text-sm text-gray-600">Total Classes</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-2xl font-bold text-green-600">{attendanceStats.present}</div>
            <div className="text-sm text-gray-600">Present</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-2xl font-bold text-red-600">{attendanceStats.absent}</div>
            <div className="text-sm text-gray-600">Absent</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-2xl font-bold text-yellow-600">{attendanceStats.late}</div>
            <div className="text-sm text-gray-600">Late</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-2xl font-bold text-blue-600">{attendanceStats.attendanceRate}%</div>
            <div className="text-sm text-gray-600">Attendance Rate</div>
          </div>
        </div>

        {/* Attendance Records */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Attendance</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    Course
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    Instructor
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {attendanceRecords.map((record, index) => (
                  <tr key={record.id} className={`${index !== attendanceRecords.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {record.courseName}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600">
                        {record.instructor}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {new Date(record.date).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(record.status)}`}>
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
