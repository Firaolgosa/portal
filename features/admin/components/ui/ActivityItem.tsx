interface ActivityItemProps {
  icon: React.ReactNode;
  title: string;
  time: string;
}

export default function ActivityItem({ icon, title, time }: ActivityItemProps) {
  return (
    <div className="flex items-start space-x-3 py-3">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">
          {title}
        </p>
        <p className="text-sm text-gray-500">
          {time}
        </p>
      </div>
    </div>
  );
}
