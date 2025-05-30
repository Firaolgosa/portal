'use client';

interface StudentPerformanceChartProps {
  overallGrade: number;
  trend: string;
}

export default function StudentPerformanceChart({ overallGrade, trend }: StudentPerformanceChartProps) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance Trend</h3>
      
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-2">Overall Grade Trend</div>
          <div className="text-4xl font-bold text-gray-900 mb-1">{overallGrade}%</div>
          <div className="text-sm text-green-600 font-medium">Last 6 Months {trend}</div>
        </div>

        {/* Simple Chart Representation */}
        <div className="mt-6">
          <div className="flex items-end justify-between h-32 border-b border-gray-200">
            {/* Chart bars representing months */}
            <div className="flex items-end space-x-4 w-full">
              <div className="flex flex-col items-center">
                <div className="w-8 bg-blue-200 rounded-t" style={{ height: '60px' }}></div>
                <span className="text-xs text-gray-500 mt-2">Sep</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 bg-blue-300 rounded-t" style={{ height: '45px' }}></div>
                <span className="text-xs text-gray-500 mt-2">Oct</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 bg-blue-300 rounded-t" style={{ height: '70px' }}></div>
                <span className="text-xs text-gray-500 mt-2">Nov</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 bg-blue-400 rounded-t" style={{ height: '55px' }}></div>
                <span className="text-xs text-gray-500 mt-2">Dec</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 bg-blue-500 rounded-t" style={{ height: '90px' }}></div>
                <span className="text-xs text-gray-500 mt-2">Jan</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 bg-blue-400 rounded-t" style={{ height: '75px' }}></div>
                <span className="text-xs text-gray-500 mt-2">Feb</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 mt-6">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
            Export Report
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
            Contact Student
          </button>
        </div>
      </div>
    </div>
  );
}
