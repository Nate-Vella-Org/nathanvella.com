export type Project = {
  slug: string;
  name: string;
  description: string;
  href: string;
  status: "Live" | "Building" | "Planned";
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "daily-digest",
    name: "Daily Digest",
    description:
      "Central log of Walter's daily brain/codebase updates for traceability, review, and historical context.",
    href: "https://github.com/Nate-Vella-Org/daily-digest",
    status: "Building",
    tags: ["Traceability", "Ops", "Vercel"],
  },
];
