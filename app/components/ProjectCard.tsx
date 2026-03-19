import Link from "next/link";
import type { Project, ProjectStatus } from "../data/projects";

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

function statusStyles(status: ProjectStatus) {
  if (status === "Live") {
    return {
      dot: "bg-brand-500",
      chip: "border-brand-300 text-brand-800 dark:border-brand-700 dark:text-brand-300",
    };
  }
  if (status === "Building") {
    return {
      dot: "bg-amber-500",
      chip: "border-amber-300 text-amber-800 dark:border-amber-700 dark:text-amber-300",
    };
  }
  return {
    dot: "bg-zinc-400",
    chip: "border-zinc-300 text-zinc-700 dark:border-zinc-700 dark:text-zinc-300",
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const styles = statusStyles(project.status);

  return (
    <article className="rounded-xl border border-brand-200 bg-white p-5 shadow-sm dark:border-brand-900 dark:bg-zinc-900">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{project.name}</h2>
        <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs ${styles.chip}`}>
          <span className={`h-2 w-2 rounded-full ${styles.dot}`} aria-hidden="true" />
          {project.status}
        </span>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-600 dark:text-zinc-400">
        <span>Category: {project.category}</span>
        <span>•</span>
        <span>Updated: {project.lastUpdated}</span>
      </div>

      <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">{project.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-brand-100 px-2 py-1 text-xs text-brand-900 dark:bg-brand-950 dark:text-brand-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        {project.liveUrl ? (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md bg-brand-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-700"
          >
            Visit Live Site
          </Link>
        ) : (
          <span className="rounded-md bg-zinc-200 px-3 py-1.5 text-sm text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            Live site coming soon
          </span>
        )}

        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center text-zinc-700 hover:text-brand-700 dark:text-zinc-300 dark:hover:text-brand-300"
          aria-label={`${project.name} GitHub repository`}
          title="GitHub repo"
        >
          <GithubIcon />
        </Link>
      </div>
    </article>
  );
}
