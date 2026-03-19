import { kv } from "@vercel/kv";

export type DailyDigest = {
  date: string;
  summary: string;
  createdAt: string;
};

const DIGESTS_KEY = "daily_digests";

export async function addDigest(entry: DailyDigest) {
  await kv.lpush(DIGESTS_KEY, JSON.stringify(entry));
  await kv.ltrim(DIGESTS_KEY, 0, 364);
}

export async function listDigests(limit = 30): Promise<DailyDigest[]> {
  const rows = (await kv.lrange(DIGESTS_KEY, 0, Math.max(0, limit - 1))) as string[];

  return rows
    .map((row) => {
      try {
        return JSON.parse(row) as DailyDigest;
      } catch {
        return null;
      }
    })
    .filter((d): d is DailyDigest => Boolean(d));
}
