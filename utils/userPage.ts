import { User, Post, Todo, UserWithStats } from "@/types/user";
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

const iconMap = Icons as unknown as Record<string, LucideIcon>;

export function calculateUserStats(
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

export function matchesSearch(user: User, search: string): boolean {
  const lowerSearch = search.toLowerCase();
  return (
    user.name.toLowerCase().includes(lowerSearch) ||
    user.email.toLowerCase().includes(lowerSearch)
  );
}

export function matchesFilter(user: UserWithStats, filter: string): boolean {
  if (filter === "all") return true;
  if (filter === "pending") return user.pending > 0;
  if (filter === "active0") return user.totalPosts === 0;
  return user.completed === 0;
}

export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] ?? Icons.HelpCircle;
}