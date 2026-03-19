import Link from "next/link";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const isExternal = project.href.startsWith("http");

  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="rounded-lg border border-zinc-200 bg-white/70 p-5 h-full">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl font-bold text-zinc-900">{project.name}</h2>
          <span className="text-xs px-2 py-1 rounded-full border border-zinc-300 text-zinc-700">
            {project.status}
          </span>
        </div>

        <p className="text-sm mt-2 text-zinc-700">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded bg-zinc-100 text-zinc-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4">
          <Link
            href={project.href}
            className="text-sm underline text-zinc-900"
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer noopener" : undefined}
          >
            Open project →
          </Link>
        </div>
      </div>
    </div>
  );
}
