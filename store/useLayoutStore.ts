import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeType = "light" | "dark";

interface LayoutState {
  sidebarOpen: boolean;
  theme: ThemeType;

  toggleSidebar: () => void;
  closeSidebar: () => void;
  toggleTheme: () => void;
}

export const useLayoutStore = create<LayoutState>()(
  persist(
    (set) => ({
      sidebarOpen: false,
      theme: "light",

      toggleSidebar: () =>
        set((state) => ({
          sidebarOpen: !state.sidebarOpen,
        })),

      closeSidebar: () =>
        set({
          sidebarOpen: false,
        }),

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "layout-storage",
    },
  ),
);
