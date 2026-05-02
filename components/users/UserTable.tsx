import Link from "next/link";
import { getAvatarColor } from "@/utils/avatarColor";
import NotFound from "../ui/NotFound";

interface UserRow {
  id: number;
  name: string;
  username: string;
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
    <div className="hidden overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 md:block">
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
          {users.length > 0 ? (
            users.map((user) => (
              <tr
                key={user.id}
                className="border-t border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                <td className="flex items-center gap-3 p-4">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full p-4 font-bold text-white ${getAvatarColor(user.name)}`}
                  >
                    {user.name[0]}
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-slate-100">
                      {user.name}
                    </p>
                    <p className="text-sm text-gray-500">{user.username}</p>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  <a
                    href={`http://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline dark:text-blue-300"
                  >
                    {user.website}
                  </a>
                </td>
                <td className="text-center">{user.totalPosts}</td>
                <td className="text-center text-green-500">{user.completed}</td>
                <td className="text-center text-orange-500">{user.pending}</td>
                <td>
                  <Link
                    href={`/users/${user.id}`}
                    className="font-semibold text-blue-500 dark:text-blue-300"
                  >
                    <div className="m-2 rounded-lg border border-blue-500 py-2 text-center">
                      View
                    </div>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>
                <NotFound
                  TextNotFound="No users found."
                  subtitle="We couldn`t find any users matching your criteria."
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
