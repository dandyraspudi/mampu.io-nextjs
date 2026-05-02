import Link from "next/link";

interface UserRow {
  id: number;
  name: string;
  email: string;
  website: string;
  totalPosts: number;
  completed: number;
  pending: number;
}

interface UserTableProps {
  users: UserRow[];
}

export default function UserTable({ users }: UserTableProps) {
  return (
    <div className="hidden overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm md:block dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
      <table className="w-full">
        <thead className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Posts</th>
            <th>Completed</th>
            <th>Pending</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-t border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <td className="p-4">
                <Link
                  href={`/users/${user.id}`}
                  className="text-slate-900 dark:text-slate-100"
                >
                  {user.name}
                </Link>
              </td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>{user.totalPosts}</td>
              <td>{user.completed}</td>
              <td>{user.pending}</td>
              <td>
                <Link
                  href={`/users/${user.id}`}
                  className="text-blue-500 hover:underline dark:text-blue-300"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
