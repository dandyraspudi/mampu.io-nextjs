import { Users, FileText, Check, Clock4 } from "lucide-react";

interface UserStatsProps {
  totalUsers: number;
  totalPosts: number;
  completed: number;
  pending: number;
}

export default function CardStats({
  totalUsers,
  totalPosts,
  completed,
  pending,
}: UserStatsProps) {
  const cards = [
    {
      title: "Total Users",
      subtitle: "All registered users",
      value: totalUsers,
      icon: Users,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Total Posts",
      subtitle: "Across all users",
      value: totalPosts,
      icon: FileText,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Completed Todos",
      subtitle: "Completed tasks",
      value: completed,
      icon: Check,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Pending Todos",
      subtitle: "Task remaining",
      value: pending,
      icon: Clock4,
      color: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {cards.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="rounded-xl border bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:flex md:items-start md:gap-5"
          >
            <div className={`inline-flex w-fit shrink-0 items-center justify-center p-2 rounded-xl ${item.color}`}>
              <Icon size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-slate-400">
                {item.title}
              </p>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                {item.value}
              </h2>
              <p className="text-xs text-gray-500 dark:text-slate-400">
                {item.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
