"use client";

import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="flex w-full max-w-md items-center gap-3 rounded-xl border px-4 py-2">
        <Search size={18} className="text-gray-400" />

        <input
          placeholder="Search..."
          className="w-full text-sm outline-none"
        />
      </div>

      <div className="ml-4 flex items-center gap-4">
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Bell size={18} />
        </button>

        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
            D
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-medium">Dandy</p>
            <p className="text-xs text-gray-500">Frontend Dev</p>
          </div>
        </div>
      </div>
    </header>
  );
}
