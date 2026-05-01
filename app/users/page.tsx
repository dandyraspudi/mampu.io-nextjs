"use client";

import { useMemo, useState } from "react";
import { useUsersData } from "@/hooks/useUsers";
import { User, Post, Todo, UserWithStats } from "@/types/user";
import UserStats from "@/components/users/CardStats";
import UserFilters from "@/components/users/UserFilters";
import UserTable from "@/components/users/UserTable";
import UserCards from "@/components/users/UserMobileCards";
import DashboardLayout from "@/components/layout/DashboardLayout";

function calculateUserStats(
  user: User,
  posts: Post[],
  todos: Todo[],
): UserWithStats {
  const userPosts = posts.filter((p) => p.userId === user.id);
  const userTodos = todos.filter((t) => t.userId === user.id);

  return {
    ...user,
    totalPosts: userPosts.length,
    completed: userTodos.filter((t) => t.completed).length,
    pending: userTodos.filter((t) => !t.completed).length,
  };
}

function matchesSearch(user: User, search: string): boolean {
  const lowerSearch = search.toLowerCase();
  return (
    user.name.toLowerCase().includes(lowerSearch) ||
    user.email.toLowerCase().includes(lowerSearch)
  );
}

function matchesFilter(user: UserWithStats, filter: string): boolean {
  if (filter === "all") return true;
  if (filter === "pending") return user.pending > 0;
  return user.completed === 0;
}

export default function UsersPage() {
  const { users, posts, todos } = useUsersData();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const loading = users.isLoading || posts.isLoading || todos.isLoading;

  const merged: UserWithStats[] = useMemo(() => {
    const hasData = users.data && posts.data && todos.data;
    if (!hasData) return [];

    return users.data.map((user: User) =>
      calculateUserStats(user, posts.data, todos.data),
    );
  }, [users.data, posts.data, todos.data]);

  const filtered = useMemo(() => {
    return merged.filter((user) => {
      const matchesSearchTerm = matchesSearch(user, search);
      const matchesFilterType = matchesFilter(user, filter);
      return matchesSearchTerm && matchesFilterType;
    });
  }, [merged, search, filter]);

  if (loading) return <div className="p-10">Loading...</div>;

  const completedCount =
    todos.data?.filter((t: Todo) => t.completed).length || 0;
  const pendingCount = todos.data?.filter((t: Todo) => !t.completed).length || 0;

  return (
    <DashboardLayout>
      <main className="space-y-6 p-6">
        <h1 className="text-3xl font-bold">User Operations</h1>

      <UserStats
        totalUsers={merged.length}
        totalPosts={posts.data?.length || 0}
        completed={completedCount}
        pending={pendingCount}
      />

      <UserFilters
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <UserTable users={filtered} />
      <UserCards users={filtered} />
    </main>
    </DashboardLayout>
  );
}

