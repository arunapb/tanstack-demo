import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <main className="flex flex-col items-center text-center gap-8 max-w-2xl">
        <div className="flex flex-col items-center gap-3">
          <span className="text-5xl">📝</span>
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            TanStack Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
            A demo blog powered by{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              TanStack Query
            </span>{" "}
            and{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Next.js
            </span>
            . Browse posts fetched from JSONPlaceholder.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/posts"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold text-base shadow-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            View Posts →
          </Link>
          <a
            href="https://medium.com/@aruna_pb/building-a-next-js-app-with-tanstack-query-a-beginners-walkthrough-c71830a04714"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-indigo-300 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300 font-semibold text-base hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
          >
            Read Article
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-4">
          {[
            { icon: "⚡", label: "Fast Queries", desc: "Automatic caching and background refetching" },
            { icon: "🔄", label: "Stale-While-Revalidate", desc: "Data stays fresh with configurable stale time" },
            { icon: "🛠️", label: "DevTools", desc: "Inspect query state with the built-in devtools" },
          ].map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/70 dark:bg-gray-800/60 shadow-sm border border-white dark:border-gray-700"
            >
              <span className="text-2xl">{f.icon}</span>
              <span className="font-semibold text-gray-800 dark:text-gray-100 text-sm">{f.label}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 text-center">{f.desc}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
