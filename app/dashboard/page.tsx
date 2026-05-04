"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { useUsersData } from "@/hooks/useUsers";
import StatsPieChart from "@/components/ui/PieChart";
import { Todo, User, Post } from "@/types/user";

export default function DashboardPage() {
  const { users, posts, todos } = useUsersData();

  const todosChart = () => {
    const data = todos.data || [];

    const completed = data.filter((t: Todo) => t.completed).length;
    const pending = data.filter((t: Todo) => !t.completed).length;

    return [
      { name: "Completed", value: completed },
      { name: "Pending", value: pending },
    ];
  };

  const tasksChart = () => {
    const data = todos.data || [];

    const completed = data.filter((t: Todo) => t.completed).length;
    const pending = data.filter((t: Todo) => !t.completed).length;

    return [
      { name: "Completed", value: completed },
      { name: "Pending", value: pending },
    ];
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6 md:p-0">
        <section>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">
            Dashboard
          </h1>
          <p className="mt-1 text-slate-600 dark:text-slate-300">
            Overview sederhana untuk aktivitas users, posts, dan todos.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Total Users
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-50">
              {users.data?.length || 0}
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Registered users
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Total Posts
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-50">
              {posts.data?.length || 0}
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Published posts
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Total Todos
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-50">
              {todos.data?.length || 0}
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Tracked tasks
            </p>
          </div>
        </section>

        <section>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold">Todo Status</h3>
            <StatsPieChart data={todosChart()} />
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
