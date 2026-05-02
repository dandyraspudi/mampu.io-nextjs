import { FolderSearch } from "lucide-react";

export default function NotFound({ TextNotFound, subtitle }: { TextNotFound: string, subtitle: string }) {
  return (
    <div className="flex text-center flex-col items-center justify-center gap-2 py-10">
      <FolderSearch className="text-slate-400 dark:text-slate-500" size={48} />
      <p className="text-lg text-slate-700 dark:text-slate-300 font-bold">
        {TextNotFound}
      </p>
      <p className="text-md text-slate-500 dark:text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}
