import { Suspense } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[300px_1fr]">
          <aside className="rounded-2xl bg-white shadow-sm ring-1 ring-emerald-200 dark:bg-zinc-900 dark:ring-emerald-900">
            <Suspense>
              <Header />
            </Suspense>
          </aside>

          <main className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-emerald-200 md:p-6 dark:bg-zinc-900 dark:ring-emerald-900">
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Projects</h1>
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
