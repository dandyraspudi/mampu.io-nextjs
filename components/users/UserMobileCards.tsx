import { getAvatarColor } from "@/utils/avatarColor";
import Link from "next/link";
import NotFound from "../ui/NotFound";
import { ChevronRight } from "lucide-react";
import { UserMobileCardProps } from "@/types/user";

export default function UserMobileCards({ users }: UserMobileCardProps) {
  return (
    <div className="grid gap-4 md:hidden">
      {users.length === 0 ? (
        <NotFound
          TextNotFound="No users found."
          subtitle="We couldn`t find any users matching your criteria."
        />
      ) : (
        users.map((user) => (
          <Link
            href={`/users/${user.id}`}
            key={user.id}
            className="rounded-xl border bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="flex items-start gap-2">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full p-4 font-bold text-white ${getAvatarColor(user.name)}`}
              >
                {user.name[0]}
              </div>
              <div>
                <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                  {user.name}
                </h2>
                <p className="text-xs text-gray-500 dark:text-slate-400">
                  {user.username}
                </p>
                <p className="text-xs text-gray-500 dark:text-slate-400">
                  {user.email}
                </p>
              </div>
              <ChevronRight className="ml-auto text-gray-400" />
            </div>

            <div className="mt-3 grid grid-cols-3 text-sm">
              <div className="text-center font-semibold">
                <span className="text-gray-500">Posts</span>
                <br />
                {user.totalPosts}
              </div>
              <div className="text-center font-semibold">
                <span className="text-gray-500">Done</span>
                <br /> <span className="text-green-500">{user.completed}</span>
              </div>
              <div className="text-center font-semibold">
                <span className="text-gray-500">Pending</span>
                <br /> <span className="text-orange-500">{user.pending}</span>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
