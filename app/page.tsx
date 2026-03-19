import { Suspense } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <a
        href="#main-content"
        className="sr-only absolute left-2 top-2 rounded bg-white px-3 py-1 text-sm text-zinc-900 focus:not-sr-only"
      >
        Skip to main content
      </a>

      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[300px_1fr]">
          <aside className="rounded-2xl bg-white shadow-sm ring-1 ring-brand-200 dark:bg-zinc-900 dark:ring-brand-900">
            <Suspense>
              <Header />
            </Suspense>
          </aside>

          <main
            id="main-content"
            className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-brand-200 md:p-6 dark:bg-zinc-900 dark:ring-brand-900"
          >
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-zinc-900 md:text-3xl dark:text-zinc-100">Projects</h1>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                Everything we build together gets indexed here.
              </p>
            </div>
            <Main />
          </main>
        </div>
      </div>
    </div>
  );
}
