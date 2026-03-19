export type Project = {
  slug: string;
  name: string;
  description: string;
  status: "Live" | "Building" | "Planned";
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
    tags: ["Traceability", "Ops", "Vercel"],
    githubUrl: "https://github.com/Nate-Vella-Org/daily-digest",
    liveUrl: "https://daily-digest.natevella.com",
  },
];
