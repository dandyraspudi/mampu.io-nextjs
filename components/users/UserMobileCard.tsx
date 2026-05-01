import Link from "next/link";

interface UserMobileCardProps {
  users: {
    id: number;
    name: string;
    email: string;
    totalPosts: number;
    completed: number;
    pending: number;
  }[];
}

export default function UserMobileCards({ users }: UserMobileCardProps) {
  return (
    <div className="grid gap-4 md:hidden">
      {users.map((user) => (
        <Link
          href={`/users/${user.id}`}
          key={user.id}
          className="rounded-xl border bg-white p-4"
        >
          <h2 className="font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>

          <div className="mt-3 grid grid-cols-3 text-sm">
            <div>Posts {user.totalPosts}</div>
            <div>Done {user.completed}</div>
            <div>Pending {user.pending}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
