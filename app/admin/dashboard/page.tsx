'use client';

import AdminHeader from '../../../features/admin/components/layout/AdminHeader';
import StatsCard from '../../../features/admin/components/ui/StatsCard';
import ActivityItem from '../../../features/admin/components/ui/ActivityItem';

export default function AdminDashboard() {
  const activities = [
    {
      icon: (
        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>
      ),
      title: "New course 'Advanced Mathematics' added",
      time: "2 hours ago"
    },
    {
      icon: (
        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      ),
      title: "Instructor 'Dr. Eleanor Reed' assigned to 'Physics 101'",
      time: "4 hours ago"
    },
    {
      icon: (
        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      ),
      title: "Student 'Ethan Carter' enrolled in 'History 202'",
      time: "6 hours ago"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <AdminHeader />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Total Courses"
            value="120"
          />
          <StatsCard
            title="Total Instructors"
            value="45"
          />
          <StatsCard
            title="Total Students"
            value="1500"
          />
        </div>

        {/* Recent Activities */}
        <div className="bg-white">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Activities</h2>
          </div>
          
          <div className="space-y-1">
            {activities.map((activity, index) => (
              <ActivityItem
                key={index}
                icon={activity.icon}
                title={activity.title}
                time={activity.time}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
