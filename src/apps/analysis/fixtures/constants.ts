export enum SkillArea {
  frontEnd = "frontend",
  backEnd = "backend",
  other = "other",
}

export const SKILLS_FRONTEND: string[] = [
  "JavaScript",
  "TypeScript",
  "Astro",
  "Dart",
  "HTML",
  "CSS",
  "SCSS",
];

export const SKILLS_BACKEND: string[] = [
  "Go",
  "Python",
  "Ruby",
  "Rust",
  "C++",
  "PHP",
  "Java",
];

export const SKILLS_COLORS: Record<string, string> = {
  TypeScript: "#2762ba",
  JavaScript: "#eddd49",
  Astro: "#fc4209",

  Go: "#139dcf",
  Python: "#2a5d93",
  Shell: "#7add40",
  Makefile: "#346714",
};
