import Link from "next/link";
import { Post, Todo } from "@/types/user";
import {
  getUserById,
  getUserPosts,
  getUserTodos,
} from "@/services/user.service";

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

  const [user, posts, todos] = await Promise.all([
    getUserById(id),
    getUserPosts(id),
    getUserTodos(id),
  ]);

  if (!user?.id) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold">User not found</h1>

        <Link href="/users" className="text-blue-600 underline">
          Back to Users
        </Link>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-6xl space-y-6 p-6">
      <Link href="/users" className="text-blue-600 hover:underline">
        ← Back to Users
      </Link>

      {/* Profile */}
      <section className="rounded-2xl border bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold">{user.name}</h1>

        <p className="text-gray-500">@{user.username}</p>

        <div className="mt-6 grid gap-4 text-sm md:grid-cols-2">
          <div>
            <p>
              <b>Email:</b> {user.email}
            </p>
            <p>
              <b>Phone:</b> {user.phone}
            </p>
            <p>
              <b>Website:</b> {user.website}
            </p>
          </div>

          <div>
            <p>
              <b>Company:</b> {user.company.name}
            </p>
            <p>{user.company.catchPhrase}</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="font-semibold">Address</p>

          <p className="text-sm text-gray-600">
            {user.address.street}, {user.address.suite}, {user.address.city},{" "}
            {user.address.zipcode}
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">Posts ({posts.length})</h2>

        <div className="grid gap-4">
          {posts.slice(0, 5).map((post: Post) => (
            <div key={post.id} className="rounded-xl border p-4">
              <h3 className="font-semibold">{post.title}</h3>

              <p className="mt-1 text-sm text-gray-600">{post.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Todos */}
      <section className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">Todos ({todos.length})</h2>

        <div className="grid gap-3">
          {todos.slice(0, 8).map((todo: Todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-3 rounded-xl border p-3"
            >
              <div>{todo.completed ? "✅" : "⬜"}</div>

              <p>{todo.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
