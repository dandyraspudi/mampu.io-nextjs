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
    { title: "Total Users", value: totalUsers },
    { title: "Total Posts", value: totalPosts },
    { title: "Completed Todos", value: completed },
    { title: "Pending Todos", value: pending },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {cards.map((item) => (
        <div
          key={item.title}
          className="rounded-xl border bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
        >
          <p className="text-sm text-gray-500 dark:text-slate-400">
            {item.title}
          </p>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}
