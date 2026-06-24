# TanStack Query + Next.js Demo

A beginner-friendly demo project built with Next.js App Router and TanStack Query. This project was built as part of the Medium article:

**[Building a Next.js App with TanStack Query: A Beginner's Walkthrough](#)**

---

## What This Project Covers

- Setting up TanStack Query in a Next.js App Router project
- Creating a QueryClient provider
- Fetching a list of posts with `useQuery`
- Fetching a single post by ID with dynamic query keys
- Handling loading and error states
- Understanding the cache with staleTime
- Server side prefetching with `HydrationBoundary`

---

## Tech Stack

- [Next.js 14](https://nextjs.org/) with App Router
- [TanStack Query v5](https://tanstack.com/query/latest)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) for mock data

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/arunapb/tanstack-demo.git
cd tanstack-demo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000/posts](http://localhost:3000/posts) in your browser.

---

## Project Structure

```
tanstack-demo/
├── app/
│   ├── layout.tsx          # Wraps app with QueryClient provider
│   ├── providers.tsx       # QueryClient setup
│   └── posts/
│       ├── page.tsx        # Posts list page
│       └── [id]/
│           └── page.tsx    # Single post page
├── lib/
│   └── api.ts              # Fetch functions and types
├── next.config.ts
└── package.json
```

---

## Key Concepts

**queryKey** — A unique identifier for each query. TanStack Query uses this to cache and look up data.

**queryFn** — The async function that fetches your data. Always throw an error if the request fails.

**staleTime** — How long fetched data stays fresh before TanStack Query considers it outdated.

**enabled** — Pauses a query from running until a condition is met.

**HydrationBoundary** — Passes server prefetched data into the client cache so components render instantly.

---

## Learn More

- [TanStack Query Docs](https://tanstack.com/query/latest/docs/framework/react/overview)
- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [Full Article on Medium](https://medium.com/@aruna_pb/building-a-next-js-app-with-tanstack-query-a-beginners-walkthrough-c71830a04714)
