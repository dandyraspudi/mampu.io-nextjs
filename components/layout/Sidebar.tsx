"use client";

import Link from "next/link";
import { Users, LayoutDashboard } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menus = [
    {
      name: "Dashboard",
      href: "/users",
      icon: LayoutDashboard,
    },
    {
      name: "Users",
      href: "/users",
      icon: Users,
    },
  ];

  return (
    <aside className="sticky top-0 flex h-screen w-64 flex-col border-r bg-white dark:border-slate-700 dark:bg-slate-900">
      <div className="p-6 dark:border-slate-700">
        <h1 className="text-2xl font-bold text-blue-600">MAMPU</h1>

        <p className="text-sm text-gray-500 dark:text-slate-400">
          User Operations Dashboard
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {menus.map((menu) => {
          const Icon = menu.icon;
          const active = pathname === menu.href;

          return (
            <Link
              key={menu.name}
              href={menu.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-blue-50 font-semibold text-blue-600 dark:bg-blue-950 dark:text-blue-300"
                  : "hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              <Icon size={18} />
              {menu.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-2 mb-5 mx-3 rounded-xl bg-blue-50 dark:border text-start text-sm text-gray-500 dark:border-slate-700 dark:text-slate-400 dark:bg-slate-900 font-semibold">
        <b>About this app</b>

        <p className="my-4">
          User operations workspace to view users and their activity (Posts,
          Todos) in a simple dashboard.
        </p>

        <p>
          Data from JSONPlaceholder API.
        </p>
      </div>
    </aside>
  );
}
