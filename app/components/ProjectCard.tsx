import Link from "next/link";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const isExternal = project.href.startsWith("http");

  return (
    <article className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-xl font-semibold text-zinc-900">{project.name}</h2>
        <span className="rounded-full border border-zinc-300 px-2 py-1 text-xs text-zinc-700">
          {project.status}
        </span>
      </div>

      <p className="mt-2 text-sm text-zinc-700">{project.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded bg-zinc-200 px-2 py-1 text-xs text-zinc-700">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <Link
          href={project.href}
          className="text-sm font-medium text-zinc-900 underline"
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer noopener" : undefined}
        >
          Open project →
        </Link>
      </div>
    </article>
  );
}
