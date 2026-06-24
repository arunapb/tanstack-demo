"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { fetchPosts } from "@/lib/api";

export default function PostsList() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Blog Posts</h1>
        <ul className="space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i} className="rounded-2xl border border-gray-200 dark:border-gray-700 p-5 animate-pulse">
              <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-3" />
              <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded mb-1" />
              <div className="h-3 w-5/6 bg-gray-100 dark:bg-gray-800 rounded" />
            </li>
          ))}
        </ul>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-10">
        <div className="rounded-2xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-6 text-red-600 dark:text-red-400">
          <p className="font-semibold">Failed to load posts</p>
          <p className="text-sm mt-1">{error.message}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Blog Posts</h1>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {posts?.length} posts
        </span>
      </div>
      <ul className="space-y-4">
        {posts?.map((post) => (
          <li key={post.id}>
            <Link
              href={`/posts/${post.id}`}
              className="group block rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-600 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium text-indigo-500 dark:text-indigo-400 mb-1 block">
                    Post #{post.id}
                  </span>
                  <h2 className="text-base font-semibold capitalize text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 line-clamp-2 leading-relaxed">
                    {post.body}
                  </p>
                </div>
                <span className="text-gray-400 dark:text-gray-600 group-hover:text-indigo-500 transition-colors text-lg shrink-0">
                  →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}