import { listDigests } from "@/lib/digests";

export const dynamic = "force-dynamic";

export default async function DigestsPage() {
  let digests = [] as Awaited<ReturnType<typeof listDigests>>;
  let error: string | null = null;

  try {
    digests = await listDigests(60);
  } catch {
    error =
      "Digest store is not configured yet. Add Vercel KV env vars to enable this page.";
  }

  return (
    <main className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold">Daily Digest</h1>
      <p className="text-sm text-zinc-600 mt-2">
        Stored digests for traceability. Newest first.
      </p>

      {error && (
        <div className="mt-6 rounded border border-amber-300 bg-amber-50 p-4 text-sm">
          {error}
        </div>
      )}

      {!error && digests.length === 0 && (
        <div className="mt-6 rounded border border-zinc-200 p-4 text-sm">
          No digests yet.
        </div>
      )}

      <div className="mt-6 space-y-4">
        {digests.map((digest, idx) => (
          <article key={`${digest.date}-${idx}`} className="rounded border border-zinc-200 p-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold">{digest.date}</h2>
              <span className="text-xs text-zinc-500">{digest.createdAt}</span>
            </div>
            <pre className="mt-3 whitespace-pre-wrap text-sm font-sans">{digest.summary}</pre>
          </article>
        ))}
      </div>
    </main>
  );
}
