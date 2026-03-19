# nathanvella.com

Personal home base deployed on Vercel.

## What this repo does
- Renders a project-card homepage.
- Keeps project metadata in a single data file for easy updates.
- Hosts the first project: **Daily Digest**.

## Project architecture
- `app/data/projects.ts` → source of truth for homepage cards
- `app/components/ProjectCard.tsx` → reusable card UI
- `app/components/Main.tsx` → renders all project cards
- `app/digests/page.tsx` → digest viewer page
- `app/api/daily-digest/route.ts` → API to read/write digest entries
- `lib/digests.ts` → digest store helpers

## Daily Digest store (Vercel-managed KV)
This project stores daily digests in KV and exposes:

- `GET /api/daily-digest?limit=30`
- `POST /api/daily-digest` with header `x-api-key: <DIGEST_API_KEY>`

POST body:

```json
{
  "date": "2026-03-19",
  "summary": "Daily Brain Digest ..."
}
```

### Required environment variables
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`
- `DIGEST_API_KEY`

> In Vercel, add KV/Redis integration and set the env vars in Project Settings.

## Local development

```bash
npm install --legacy-peer-deps
npm run dev
```

Open `http://localhost:3000`.

## Add a new project card
Edit `app/data/projects.ts` and add a new project object.
