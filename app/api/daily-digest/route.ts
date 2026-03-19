import { NextResponse } from "next/server";
import { addDigest, listDigests } from "@/lib/digests";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const limit = Number(url.searchParams.get("limit") ?? "30");
  const digests = await listDigests(Number.isNaN(limit) ? 30 : limit);
  return NextResponse.json({ digests });
}

export async function POST(req: Request) {
  const apiKey = req.headers.get("x-api-key");

  if (!process.env.DIGEST_API_KEY || apiKey !== process.env.DIGEST_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json()) as { date?: string; summary?: string };

  if (!body.date || !body.summary) {
    return NextResponse.json(
      { error: "date and summary are required" },
      { status: 400 }
    );
  }

  await addDigest({
    date: body.date,
    summary: body.summary,
    createdAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
