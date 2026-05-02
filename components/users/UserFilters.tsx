type Props = {
  search: string;
  setSearch: (v: string) => void;
  filter: string;
  setFilter: (v: string) => void;
};

export default function UserFilters({
  search,
  setSearch,
  filter,
  setFilter,
}: Props) {
  return (
    <div className="flex flex-col gap-3 md:flex-row">
      <input
        className="w-full rounded-lg border bg-white px-4 py-2 text-slate-900 placeholder-gray-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-400"
        placeholder="Search name/email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="rounded-lg border bg-white px-4 py-2 text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All Users</option>
        <option value="pending">Has Pending Todos</option>
        <option value="completed0">No Completed Todos</option>
        <option value="active">Active Posters</option>
      </select>
    </div>
  );
}
