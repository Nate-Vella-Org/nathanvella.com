# natevella.com

Personal home base deployed on Vercel.

## What this repo does
- Renders Nate Vella's personal landing page.
- Links to public profile/contact destinations.
- Includes a `/projects` page backed by static project metadata.

## Project architecture
- `app/page.tsx` -> primary landing page
- `app/projects/page.tsx` -> projects page
- `app/data/projects.ts` -> source of truth for project cards
- `app/components/ProjectCard.tsx` -> reusable card UI
- `app/components/Main.tsx` -> renders project cards
- `next.config.mjs` -> security headers

## Security posture
- The current app is static and does not require environment variables.
- Browser hardening headers are configured in `next.config.mjs`.
- CI runs production dependency audit, lint, and production build checks.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Add a new project card
Edit `app/data/projects.ts` and add a new project object.
