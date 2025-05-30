'use client';

import { useState } from 'react';
import AdminLayoutWithSidebar from '@/features/admin/components/layout/AdminLayoutWithSidebar';

export default function ReportsPage() {
  const [reportType, setReportType] = useState('class-averages');
  const [department, setDepartment] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [outputFormat, setOutputFormat] = useState('pdf');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateReport = async () => {
    setIsGenerating(true);
    
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false);
      alert('Report generated successfully! Download will start shortly.');
    }, 2000);
  };

  return (
    <AdminLayoutWithSidebar>
      <div className="flex-1 bg-gray-50">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports</h1>
            <p className="text-gray-600">Generate and download reports on student performance and class statistics.</p>
          </div>

          {/* Report Form */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            {/* Report Type Section */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Report Type</h2>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="reportType"
                    value="class-averages"
                    checked={reportType === 'class-averages'}
                    onChange={(e) => setReportType(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-gray-700">Class Averages</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="reportType"
                    value="overall-performance"
                    checked={reportType === 'overall-performance'}
                    onChange={(e) => setReportType(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-gray-700">Overall Performance</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="reportType"
                    value="student-progress"
                    checked={reportType === 'student-progress'}
                    onChange={(e) => setReportType(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-gray-700">Student Progress</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="reportType"
                    value="attendance"
                    checked={reportType === 'attendance'}
                    onChange={(e) => setReportType(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-gray-700">Attendance</span>
                </label>
              </div>
            </div>

            {/* Filters Section */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
              
              {/* Department Filter */}
              <div className="mb-6">
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                  Department
                </label>
                <select
                  id="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Department</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="biology">Biology</option>
                </select>
              </div>

              {/* Date Range */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Output Format Section */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Output Format</h2>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="outputFormat"
                    value="pdf"
                    checked={outputFormat === 'pdf'}
                    onChange={(e) => setOutputFormat(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-gray-700">PDF</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="outputFormat"
                    value="excel"
                    checked={outputFormat === 'excel'}
                    onChange={(e) => setOutputFormat(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-gray-700">Excel</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="outputFormat"
                    value="csv"
                    checked={outputFormat === 'csv'}
                    onChange={(e) => setOutputFormat(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-gray-700">CSV</span>
                </label>
              </div>
            </div>

            {/* Generate Button */}
            <div className="flex justify-end">
              <button
                onClick={handleGenerateReport}
                disabled={isGenerating}
                className={`px-6 py-3 rounded-md text-white font-medium transition-colors ${
                  isGenerating
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                }`}
              >
                {isGenerating ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </div>
                ) : (
                  'Generate Report'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayoutWithSidebar>
  );
}
