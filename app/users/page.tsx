"use client";

import { useMemo, useState } from "react";
import { useUsersData } from "@/hooks/useUsers";
import { User, Post, Todo, UserWithStats } from "@/types/user";
import CardStats from "@/components/users/CardStats";
import UserFilters from "@/components/users/UserFilters";
import UserTable from "@/components/users/UserTable";
import UserMobileCards from "@/components/users/UserMobileCards";
import DashboardLayout from "@/components/layout/DashboardLayout";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { calculateUserStats, matchesSearch, matchesFilter } from "@/utils/userPage";

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

  if (loading) return <div className="h-screen flex items-center justify-center"><LoadingSpinner textLoading="Loading users, posts, and todos..." /></div>;

  const completedCount =
    todos.data?.filter((t: Todo) => t.completed).length || 0;
  const pendingCount =
    todos.data?.filter((t: Todo) => !t.completed).length || 0;

  return (
    <DashboardLayout>
      <main className="space-y-6 p-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">
            User Operations
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Manage and view user information, posts, and todos.
          </p>
        </div>
        
        <CardStats
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
        <UserMobileCards users={filtered} />
      </main>
    </DashboardLayout>
  );
}
