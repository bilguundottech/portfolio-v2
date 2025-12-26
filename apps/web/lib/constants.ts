export const SITE_CONFIG = {
  name: "Bilguun Ganzurkh",
  title: "Software Engineer",
  tagline: "Building maintainable systems with clear data flow and real constraints",
  email: "bilguunganzurh@gmail.com",
  location: "Ulaanbaatar, Mongolia",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/bilguundottech",
    iconName: "github" as const,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bilguundottech/",
    iconName: "linkedin" as const,
  },
  {
    name: "Twitter",
    url: "https://x.com/bilguundottech",
    iconName: "twitter" as const,
  },
  {
    name: "Email",
    url: "mailto:bilguunganzurh@gmail.com",
    iconName: "mail" as const,
  },
] as const;

// TODO: Replace with your real projects
export const PROJECTS = [
  {
    id: 1,
    title: "Project Name",
    description:
      "Brief description of what this project does and the problem it solves.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    year: "2024",
    link: "https://github.com/bilguundottech",
    featured: true,
  },
  {
    id: 2,
    title: "Project Name",
    description:
      "Brief description of what this project does and the problem it solves.",
    tags: ["React", "NestJS", "Supabase"],
    year: "2024",
    link: "https://github.com/bilguundottech",
    featured: true,
  },
  {
    id: 3,
    title: "Project Name",
    description:
      "Brief description of what this project does and the problem it solves.",
    tags: ["TypeScript", "Firebase", "Turborepo"],
    year: "2023",
    link: "https://github.com/bilguundottech",
    featured: false,
  },
] as const;

export const SKILLS = {
  languages: ["TypeScript", "JavaScript", "Python"],
  frontend: ["React", "Next.js", "Tailwind CSS"],
  backend: ["NestJS", "Supabase", "Firebase"],
  tools: ["Git", "pnpm", "Turborepo", "Vercel"],
} as const;

export const ABOUT = {
  bio: "Frontend engineer with a background in computer science and experience working on production systems in TypeScript and React. I focus on building readable, maintainable systems. I care more about correctness, clarity, and long-term maintainability than visual polish or trends.",
  currentFocus: [
    "Designing frontend architecture for Next.js applications in monorepos",
    "Improving TypeScript strictness and API contracts",
    "Deepening system-level understanding across frontend, backend, and infrastructure boundaries",
  ],
} as const;
