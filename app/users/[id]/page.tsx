import {
  getUserById,
  getUserPosts,
  getUserTodos,
} from "@/services/user.service";
import DashboardLayout from "@/components/layout/DashboardLayout";
import UserDetailCards from "@/components/users/UserDetailCards";
import UserDetailHeader from "@/components/users/UserDetailHeader";
import UserDetailNotFound from "@/components/users/UserDetailNotFound";
import UserProfileOverview from "@/components/users/UserProfileOverview";
import UserRecentPosts from "@/components/users/UserRecentPosts";
import UserTodosPreview from "@/components/users/UserTodosPreview";
import type { Post, Todo, User } from "@/types/user";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  return {
    title: `User ${id} | Mampu`,
  };
}

export default async function UserDetailPage({ params }: Props) {
  const { id } = await params;

  const [user, posts, todos] = (await Promise.all([
    getUserById(id),
    getUserPosts(id),
    getUserTodos(id),
  ])) as [User | null, Post[], Todo[]];

  if (!user?.id) {
    return <UserDetailNotFound />;
  }

  return (
    <DashboardLayout>
      <main className="mx-auto max-w-6xl space-y-6 p-6">
        <UserDetailHeader userName={user.name} />
        <UserProfileOverview user={user} posts={posts} todos={todos} />
        <UserDetailCards user={user} />

        <div className="grid gap-3 md:grid-cols-2">
          <UserRecentPosts posts={posts} />
          <UserTodosPreview todos={todos} />
        </div>
      </main>
    </DashboardLayout>
  );
}
