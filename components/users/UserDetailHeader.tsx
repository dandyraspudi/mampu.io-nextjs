import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface UserDetailHeaderProps {
  userName: string;
}

export default function UserDetailHeader({ userName }: UserDetailHeaderProps) {
  return (
    <div>
      <Link
        href="/users"
        className="flex items-center text-sm font-semibold text-blue-600 hover:underline dark:text-blue-300"
      >
        <ChevronLeft className="mr-2 inline" />
        Back to Users
      </Link>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">
        User Details
      </h1>
      <p className="text-slate-600 dark:text-slate-300">
        View detailed information and activity for user <b>{userName}</b>.
      </p>
    </div>
  );
}
