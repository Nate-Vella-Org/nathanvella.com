export type ProjectStatus = "Live" | "Building" | "Planned";

export type Project = {
  slug: string;
  name: string;
  description: string;
  status: ProjectStatus;
  category: string;
  lastUpdated: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "daily-digest",
    name: "Daily Digest",
    description:
      "Central log of Walter's daily brain/codebase updates for traceability, review, and historical context.",
    status: "Building",
    category: "Operations",
    lastUpdated: "2026-03-19",
    tags: ["Traceability", "Ops", "Vercel"],
    githubUrl: "https://github.com/Nate-Vella-Org/daily-digest",
    liveUrl: "https://daily-digest.natevella.com",
  },
  {
    slug: "project-template-1",
    name: "Project Atlas",
    description: "Planned: workflow intelligence hub for multi-repo project visibility and handoff summaries.",
    status: "Planned",
    category: "Productivity",
    lastUpdated: "Planned",
    tags: ["Planning", "Dashboard"],
    githubUrl: "https://github.com/Nate-Vella-Org",
  },
  {
    slug: "project-template-2",
    name: "Signal Monitor",
    description: "Planned: lightweight event monitor with daily anomaly digest and configurable thresholds.",
    status: "Planned",
    category: "Observability",
    lastUpdated: "Planned",
    tags: ["Monitoring", "Alerts"],
    githubUrl: "https://github.com/Nate-Vella-Org",
  },
];
