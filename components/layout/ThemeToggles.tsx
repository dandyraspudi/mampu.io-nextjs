"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const displayTheme = currentTheme ?? "light";
  const nextTheme = displayTheme === "dark" ? "light" : "dark";

  return (
    <button
      className="rounded-xl border p-2 text-slate-700 hover:bg-gray-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 cursor-pointer transition"
      onClick={() => setTheme(nextTheme)}
      aria-label="Toggle theme"
    >
      {displayTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
