import Link from "next/link";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="rounded-lg border border-zinc-200 p-5 h-full">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl font-bold">{project.name}</h2>
          <span className="text-xs px-2 py-1 rounded-full border border-zinc-300">
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
          <Link href={project.href} className="text-sm underline">
            Open project →
          </Link>
        </div>
      </div>
    </div>
  );
}
