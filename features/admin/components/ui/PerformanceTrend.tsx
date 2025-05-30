'use client';

interface PerformanceTrendProps {
  overallGrade: number;
  trend: string;
  chartData?: any; // For future chart implementation
}

export default function PerformanceTrend({ overallGrade, trend }: PerformanceTrendProps) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trend</h3>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Overall Grade Trend</h4>
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-gray-900">{overallGrade}%</span>
            <span className={`ml-2 text-sm font-medium ${
              trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
            }`}>
              Last 6 Months {trend}
            </span>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="h-64 relative">
          {/* Chart Area */}
          <div className="h-full flex items-end justify-between border-b border-gray-200 pb-4">
            {/* Chart Line Visualization */}
            <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
              {/* Grid lines */}
              <defs>
                <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Performance line */}
              <polyline
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="20,120 80,100 140,80 200,110 260,60 320,90 380,70"
              />

              {/* Data points */}
              <circle cx="20" cy="120" r="4" fill="#3b82f6" />
              <circle cx="80" cy="100" r="4" fill="#3b82f6" />
              <circle cx="140" cy="80" r="4" fill="#3b82f6" />
              <circle cx="200" cy="110" r="4" fill="#3b82f6" />
              <circle cx="260" cy="60" r="4" fill="#3b82f6" />
              <circle cx="320" cy="90" r="4" fill="#3b82f6" />
              <circle cx="380" cy="70" r="4" fill="#3b82f6" />
            </svg>
          </div>

          {/* Month labels */}
          <div className="flex justify-between mt-2 px-2">
            <span className="text-xs text-gray-500">Sep</span>
            <span className="text-xs text-gray-500">Oct</span>
            <span className="text-xs text-gray-500">Nov</span>
            <span className="text-xs text-gray-500">Dec</span>
            <span className="text-xs text-gray-500">Jan</span>
            <span className="text-xs text-gray-500">Feb</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex space-x-3">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200">
            Export Report
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
            Contact Student
          </button>
        </div>
      </div>
    </div>
  );
}
