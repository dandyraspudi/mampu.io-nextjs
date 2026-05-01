import { create } from "zustand";

type TodoFilterType = "all" | "completed" | "pending";

interface UserDetailState {
  todoFilter: TodoFilterType;
  showAllPosts: boolean;
  showAllTodos: boolean;

  setTodoFilter: (value: TodoFilterType) => void;
  setShowAllPosts: (value: boolean) => void;
  setShowAllTodos: (value: boolean) => void;
  resetDetailState: () => void;
}

export const useUserDetailStore = create<UserDetailState>((set) => ({
  todoFilter: "all",
  showAllPosts: false,
  showAllTodos: false,

  setTodoFilter: (value) => set({ todoFilter: value }),
  setShowAllPosts: (value) => set({ showAllPosts: value }),
  setShowAllTodos: (value) => set({ showAllTodos: value }),

  resetDetailState: () =>
    set({
      todoFilter: "all",
      showAllPosts: false,
      showAllTodos: false,
    }),
}));
