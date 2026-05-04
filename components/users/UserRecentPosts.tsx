"use client";

import { FileText } from "lucide-react";
import type { Post } from "@/types/user";
import UsersModal from "./UsersModal";
import { useState } from "react";

interface UserRecentPostsProps {
  posts: Post[];
}

export default function UserRecentPosts({ posts }: UserRecentPostsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
        <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-50">
          Recent Posts ({posts.length})
        </h3>

        <div className="grid gap-4 border-t border-slate-200 dark:border-slate-700">
          {posts.slice(0, 5).map((post) => (
            <div
              key={post.id}
              className="flex items-start gap-2 border-b border-slate-200 p-2 dark:border-slate-700"
            >
              <div className="rounded-lg bg-blue-50 p-2 text-blue-500 dark:bg-blue-950 dark:text-blue-300">
                <FileText size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                  {post.title}
                </h4>

                <p className="mt-1 text-xs text-gray-600 dark:text-slate-300">
                  {post.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-5 cursor-pointer rounded-md border border-blue-500 p-2 text-center font-semibold text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950"
          onClick={openModal}
        >
          <p>View all posts</p>
        </div>
      </section>

      {/* modal */}
      <UsersModal
        title="All users posts"
        subtitle="View all posts from registered users"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        posts={posts}
        isPosts={true}
      />
    </div>
  );
}
