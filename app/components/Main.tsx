import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Main() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
