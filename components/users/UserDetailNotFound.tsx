import Link from "next/link";

export default function UserDetailNotFound() {
  return (
    <div className="p-10 text-slate-900 dark:text-slate-50">
      <h1 className="text-2xl font-bold">User not found</h1>

      <Link
        href="/users"
        className="text-blue-600 underline dark:text-blue-300"
      >
        Back to Users
      </Link>
    </div>
  );
}
