'use client';

import AdminSidebar from './AdminSidebar';

interface AdminLayoutWithSidebarProps {
  children: React.ReactNode;
}

export default function AdminLayoutWithSidebar({ children }: AdminLayoutWithSidebarProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
