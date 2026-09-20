export type Project = {
  id: string;
  title: string;
  category:
    | "AI & Automation"
    | "Web Development"
    | "Design"
    | "Writing"
    | "Other";
  description: string;
  image: string;
  technologies: string[];
  year: string;
  link?: string;
  github?: string;
  featured?: boolean;
  problem?: string;
  solution?: string;
  features?: string[];
  contribution?: string;
  results?: string;
};

export type PillarItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  tools: string[];
  link?: string;
  caseStudy?: string;
  type?: "web" | "graphic";
};

export type WriteItem = {
  id: string;
  title: string;
  description: string;
  image?: string;
  date?: string;
  category: string;
  readingTime: string;
  link?: string;
  type?: "writing";
};
