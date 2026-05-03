"use client";

import { useMemo, useState } from "react";
import { X, Search, ChevronLeft, ChevronRight } from "lucide-react";
import NotFound from "../ui/NotFound";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface UsersModalProps {
  isOpen: boolean;
  onClose: () => void;
  posts: Post[];
  title: string;
  subtitle: string;
  isPosts: boolean;
}

export default function UsersModal({
  isOpen,
  onClose,
  posts,
  title,
  subtitle,
  isPosts,
}: UsersModalProps) {
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage] = useState<number>(5);

  const filteredPosts = useMemo(() => {
    return (posts || []).filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase()),
    );
  }, [posts, search]);

  const totalPages = Math.ceil(filteredPosts.length / perPage);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return filteredPosts.slice(start, start + perPage);
  }, [filteredPosts, currentPage, perPage]);

  if (!isOpen) return null;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const startItem =
    filteredPosts.length === 0 ? 0 : (currentPage - 1) * perPage + 1;

  const endItem = Math.min(currentPage * perPage, filteredPosts.length);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4 backdrop-blur-sm">
      <div className="w-full max-w-6xl rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-200 px-6 py-5 dark:border-slate-700">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {title}
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search */}
        <div className="px-6 py-4">
          <div className="relative max-w-sm">
            <Search
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full rounded-xl border border-slate-200 py-3 pl-4 pr-10 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>
        </div>

        {/* Table */}
        <div className="max-h-[500px] overflow-auto px-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-y border-slate-200 text-left text-slate-500 dark:border-slate-700">
                <th className="py-4">No</th>
                <th>Title</th>
                <th>Subtitle</th>
              </tr>
            </thead>

            <tbody>
              {paginatedPosts.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-10">
                    <NotFound
                      TextNotFound="No posts found."
                      subtitle="We couldn`t find any posts matching your criteria."
                    />
                  </td>
                </tr>
              ) : (
                paginatedPosts.map((post, idx) => (
                  <tr
                    key={post.id}
                    className="border-b border-slate-100 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/40"
                  >
                    <td className="py-4 font-medium text-slate-900 dark:text-white">
                      {idx + 1 + (currentPage - 1) * perPage}
                    </td>

                    <td className="py-4">
                      <p className="font-medium text-slate-900 dark:text-white">
                        {post.title.length > 20
                          ? post.title.substring(0, 20) + "..."
                          : post.title}
                      </p>
                    </td>

                    <td>
                      <p className="text-xs text-slate-500">
                        {post.body.length > 30
                          ? post.body.substring(0, 80) + "..."
                          : post.body}
                      </p>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="flex flex-col gap-4 border-t border-slate-200 px-6 py-5 dark:border-slate-700 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500">
            Showing {startItem} to {endItem} of {filteredPosts.length} data
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1 || totalPages === 0}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 disabled:opacity-40"
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`h-9 min-w-[36px] rounded-lg px-3 text-sm font-medium ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages || totalPages === 0}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 disabled:opacity-40"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
