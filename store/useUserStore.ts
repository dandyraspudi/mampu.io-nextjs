import { create } from "zustand";
import { persist } from "zustand/middleware";

type FilterType = "all" | "pending" | "no-completed" | "active-posters";

type SortType =
  | "name-asc"
  | "name-desc"
  | "most-posts"
  | "most-pending"
  | "most-completed";

interface UsersPageState {
  search: string;
  filter: FilterType;
  sort: SortType;
  page: number;
  pageSize: number;
  selectedUserId: number | null;

  setSearch: (value: string) => void;
  setFilter: (value: FilterType) => void;
  setSort: (value: SortType) => void;
  setPage: (value: number) => void;
  setSelectedUserId: (id: number | null) => void;
  resetUsersState: () => void;
}

export const useUsersPageStore = create<UsersPageState>()(
  persist(
    (set) => ({
      search: "",
      filter: "all",
      sort: "most-pending",
      page: 1,
      pageSize: 10,
      selectedUserId: null,

      setSearch: (value) => set({ search: value, page: 1 }),
      setFilter: (value) => set({ filter: value, page: 1 }),
      setSort: (value) => set({ sort: value }),
      setPage: (value) => set({ page: value }),
      setSelectedUserId: (id) => set({ selectedUserId: id }),

      resetUsersState: () =>
        set({
          search: "",
          filter: "all",
          sort: "most-pending",
          page: 1,
          selectedUserId: null,
        }),
    }),
    {
      name: "users-page-storage",
    },
  ),
);
