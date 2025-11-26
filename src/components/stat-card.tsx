interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

export function StatCard({ icon, number, label }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <div className="flex justify-center mb-4 text-green-600">
        {icon}
      </div>
      <div className="text-gray-900 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}
