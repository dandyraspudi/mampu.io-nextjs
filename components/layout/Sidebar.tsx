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
    <aside className="hidden h-screen w-64 flex-col border-r bg-white md:flex">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold text-blue-600">Mampu.io</h1>

        <p className="text-sm text-gray-500">User Operations</p>
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
                  ? "bg-blue-50 font-semibold text-blue-600"
                  : "hover:bg-gray-100"
              }`}
            >
              <Icon size={18} />
              {menu.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-4 text-sm text-gray-500">Frontend Test</div>
    </aside>
  );
}
