"use client";

import MobileDrawer from "./MobileDrawer";
import ThemeToggle from "./ThemeToggles";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-white px-6 dark:border-slate-700 dark:bg-slate-900">
      <div>
        <MobileDrawer />
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
            D
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
              Dandy
            </p>
            <p className="text-xs text-gray-500 dark:text-slate-400">
              Frontend Dev
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
