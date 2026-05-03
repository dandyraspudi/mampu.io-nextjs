import { CircleCheckBig, Clock } from "lucide-react";
import type { Todo } from "@/types/user";

interface UserTodosPreviewProps {
  todos: Todo[];
}

export default function UserTodosPreview({ todos }: UserTodosPreviewProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
      <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-50">
        Todos ({todos.length})
      </h3>

      <div className="grid gap-3 border-t border-slate-200 dark:border-slate-700">
        {todos.slice(0, 8).map((todo) => (
          <div
            key={todo.id}
            className="flex items-center gap-3 border-b border-slate-200 p-3 dark:border-slate-700 dark:bg-slate-800"
          >
            {todo.completed ? (
              <CircleCheckBig size={25} className="text-green-500" />
            ) : (
              <Clock size={25} className="text-orange-500" />
            )}
            <p className="text-sm text-slate-700 dark:text-slate-200">
              {todo.title}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 cursor-pointer rounded-md border border-blue-500 p-2 text-center font-semibold text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950">
        <p>View all todos</p>
      </div>
    </section>
  );
}
