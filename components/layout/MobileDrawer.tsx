"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg border p-2 md:hidden dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        <Menu size={18} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="h-full w-72 bg-white shadow-xl dark:bg-slate-900">
            <div className="flex justify-end border-b border-slate-200 p-4 dark:border-slate-700">
              <button onClick={() => setOpen(false)} className="text-slate-900 dark:text-slate-100">
                <X />
              </button>
            </div>

            <Sidebar />
          </div>

          <div className="flex-1 bg-black/40" onClick={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}
