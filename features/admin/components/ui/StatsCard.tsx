interface StatsCardProps {
  title: string;
  value: string | number;
  className?: string;
}

export default function StatsCard({ title, value, className = '' }: StatsCardProps) {
  return (
    <div className={`bg-gray-100 rounded-lg p-6 ${className}`}>
      <div className="text-sm font-medium text-gray-600 mb-2">
        {title}
      </div>
      <div className="text-3xl font-bold text-gray-900">
        {value}
      </div>
    </div>
  );
}
