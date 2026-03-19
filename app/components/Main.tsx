import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Main() {
  return (
    <div className="container flex flex-wrap w-full">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
