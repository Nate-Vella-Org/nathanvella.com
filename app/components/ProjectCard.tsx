import Link from "next/link";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.41-4.04-1.41-.55-1.37-1.34-1.73-1.34-1.73-1.1-.74.08-.73.08-.73 1.21.09 1.84 1.22 1.84 1.22 1.08 1.83 2.84 1.3 3.53 1 .11-.77.42-1.3.77-1.6-2.67-.3-5.47-1.31-5.47-5.84 0-1.29.47-2.34 1.23-3.16-.12-.3-.53-1.52.12-3.16 0 0 1-.32 3.3 1.21a11.6 11.6 0 0 1 6 0c2.3-1.53 3.3-1.21 3.3-1.21.65 1.64.24 2.86.12 3.16.76.82 1.23 1.87 1.23 3.16 0 4.54-2.8 5.54-5.48 5.84.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v7h-7" />
      <path d="M3 10V3h7" />
      <path d="M3 21h7v-7" />
      <path d="M3 3 14 14" />
    </svg>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-emerald-200 bg-white p-5 shadow-sm dark:border-emerald-900 dark:bg-zinc-900">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{project.name}</h2>
        <span className="rounded-full border border-emerald-300 px-2 py-1 text-xs text-emerald-800 dark:border-emerald-700 dark:text-emerald-300">
          {project.status}
        </span>
      </div>

      <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{project.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded bg-emerald-100 px-2 py-1 text-xs text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center text-zinc-700 hover:text-emerald-700 dark:text-zinc-300 dark:hover:text-emerald-300"
          aria-label={`${project.name} GitHub repository`}
          title="GitHub repo"
        >
          <GithubIcon />
        </Link>

        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1 text-sm font-medium text-zinc-800 hover:text-emerald-700 dark:text-zinc-100 dark:hover:text-emerald-300"
          >
            Live Site <ExternalIcon />
          </Link>
        )}
      </div>
    </article>
  );
}
