"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Link from "next/link";
import { fetchPost } from "@/lib/api";

export default function PostPage() {
  const { id } = useParams();
  const postId = Number(id);

  const {
    data: post,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts", postId],
    queryFn: () => fetchPost(postId),
    enabled: !!postId,
  });

  if (isLoading) {
    return (
      <main className="max-w-2xl mx-auto px-6 py-10">
        <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded mb-8 animate-pulse" />
        <div className="space-y-4 animate-pulse">
          <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded" />
          <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded" />
          <div className="h-3 w-5/6 bg-gray-100 dark:bg-gray-800 rounded" />
        </div>
      </main>
    );
  }

  if (isError || !post) {
    return (
      <main className="max-w-2xl mx-auto px-6 py-10">
        <Link
          href="/posts"
          className="inline-flex items-center gap-1 text-sm text-indigo-600 dark:text-indigo-400 hover:underline mb-8"
        >
          ← Back to posts
        </Link>
        <div className="rounded-2xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-6 text-red-600 dark:text-red-400">
          <p className="font-semibold">Post not found</p>
          <p className="text-sm mt-1">This post may have been removed or the ID is invalid.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-10">
      <Link
        href="/posts"
        className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline mb-8"
      >
        ← Back to posts
      </Link>

      <article className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
            Post #{post.id}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500">
            User #{post.userId}
          </span>
        </div>
        <h1 className="text-2xl font-bold capitalize text-gray-900 dark:text-white mb-4 leading-snug">
          {post.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
          {post.body}
        </p>
      </article>

      <div className="mt-6 flex justify-between items-center">
        {post.id > 1 ? (
          <Link
            href={`/posts/${post.id - 1}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            ← Previous Post
          </Link>
        ) : (
          <div />
        )}
        {post.id < 100 ? (
          <Link
            href={`/posts/${post.id + 1}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Next Post →
          </Link>
        ) : (
          <Link
            href="/posts"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            All Posts
          </Link>
        )}
      </div>
    </main>
  );
}
