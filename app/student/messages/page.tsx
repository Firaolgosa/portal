'use client';

import { useState } from 'react';
import StudentHeader from '@/features/student/components/layout/StudentHeader';

interface Message {
  id: string;
  from: string;
  subject: string;
  preview: string;
  date: string;
  read: boolean;
  type: 'instructor' | 'admin' | 'system';
}

export default function StudentMessagesPage() {
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);

  const messages: Message[] = [
    {
      id: '1',
      from: 'Dr. Eleanor Vance',
      subject: 'Assignment 5 Feedback Available',
      preview: 'Your final project has been graded. Great work on the implementation...',
      date: '2024-01-15',
      read: false,
      type: 'instructor'
    },
    {
      id: '2',
      from: 'Academic Office',
      subject: 'Spring 2024 Registration Reminder',
      preview: 'Registration for Spring 2024 courses opens next week. Please review...',
      date: '2024-01-14',
      read: true,
      type: 'admin'
    },
    {
      id: '3',
      from: 'Dr. Emily Carter',
      subject: 'Psychology Lab Schedule Change',
      preview: 'Due to a scheduling conflict, next week\'s lab session will be moved...',
      date: '2024-01-13',
      read: true,
      type: 'instructor'
    },
    {
      id: '4',
      from: 'System Notification',
      subject: 'Grade Posted: Calculus I',
      preview: 'A new grade has been posted for your Calculus I course...',
      date: '2024-01-12',
      read: false,
      type: 'system'
    }
  ];

  const getMessageTypeIcon = (type: string) => {
    switch (type) {
      case 'instructor':
        return (
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        );
      case 'admin':
        return (
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        );
      case 'system':
        return (
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM16 3h5v5h-5V3zM4 3h6v6H4V3z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        );
    }
  };

  const unreadCount = messages.filter(m => !m.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentHeader />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
              <p className="text-gray-600 mt-2">
                Stay connected with your instructors and receive important updates.
                {unreadCount > 0 && (
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    {unreadCount} unread
                  </span>
                )}
              </p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium">
              Compose Message
            </button>
          </div>
        </div>

        {/* Messages List */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {messages.map((message) => (
              <div
                key={message.id}
                onClick={() => setSelectedMessage(selectedMessage === message.id ? null : message.id)}
                className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${
                  !message.read ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex items-start space-x-4">
                  {getMessageTypeIcon(message.type)}
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <h3 className={`text-sm font-medium ${!message.read ? 'text-gray-900' : 'text-gray-700'}`}>
                          {message.from}
                        </h3>
                        {!message.read && (
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(message.date).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <h4 className={`text-sm mt-1 ${!message.read ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
                      {message.subject}
                    </h4>
                    
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {message.preview}
                    </p>

                    {selectedMessage === message.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="text-sm text-gray-700 space-y-3">
                          <p>
                            Dear Student,
                          </p>
                          <p>
                            {message.preview} This is the full content of the message. In a real application, 
                            this would contain the complete message content from the instructor or system.
                          </p>
                          <p>
                            Please let me know if you have any questions or concerns.
                          </p>
                          <p>
                            Best regards,<br />
                            {message.from}
                          </p>
                        </div>
                        
                        <div className="mt-4 flex space-x-3">
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            Reply
                          </button>
                          <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                            Mark as Read
                          </button>
                          <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                            Archive
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-shrink-0">
                    <svg 
                      className={`w-5 h-5 text-gray-400 transform transition-transform ${
                        selectedMessage === message.id ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {messages.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No messages</h3>
            <p className="text-gray-600">You don't have any messages yet.</p>
          </div>
        )}

        {/* Message Statistics */}
        {messages.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Message Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{messages.length}</div>
                <div className="text-sm text-gray-600">Total Messages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">{unreadCount}</div>
                <div className="text-sm text-gray-600">Unread</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {messages.filter(m => m.type === 'instructor').length}
                </div>
                <div className="text-sm text-gray-600">From Instructors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {messages.filter(m => m.type === 'system').length}
                </div>
                <div className="text-sm text-gray-600">System Notifications</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
