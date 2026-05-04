import { Globe, Mail, Phone } from "lucide-react";
import CardStats from "@/components/users/CardStats";
import { getAvatarColor } from "@/utils/avatarColor";
import { UserProfileOverviewProps } from "@/types/user";

export default function UserProfileOverview({
  user,
  posts,
  todos,
}: UserProfileOverviewProps) {
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = todos.length - completedTodos;

  return (
    <section className="grid grid-cols-1 gap-6 rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 lg:grid-cols-2">
      <div className="flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-blue-50 p-1 dark:bg-blue-950">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full p-4 font-bold text-white md:h-12 md:w-12 ${getAvatarColor(user.name)}`}
            >
              {user.name[0]}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">
              {user.name}
            </h1>

            <p className="text-gray-500 dark:text-slate-400">{user.username}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 text-sm md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <p>
              <Mail className="mr-2 inline" size={17} /> {user.email}
            </p>
            <p>
              <Phone className="mr-2 inline" size={17} /> {user.phone}
            </p>
            <p>
              <Globe className="mr-2 inline" size={17} /> {user.website}
            </p>
          </div>
        </div>
      </div>

      <div>
        <CardStats
          totalUsers={1}
          totalPosts={posts.length}
          completed={completedTodos}
          pending={pendingTodos}
          doubleRow={true}
        />
      </div>
    </section>
  );
}
