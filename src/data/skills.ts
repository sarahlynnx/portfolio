export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "HTML", "CSS", "SQL"],
  },
  {
    label: "Frameworks",
    skills: ["React", "Next.js", "React Native", "Node.js", "Express", "Tailwind CSS"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Mongoose"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["AWS", "Vercel", "Docker", "Git", "GitHub Actions CI/CD"],
  },
  {
    label: "Testing",
    skills: ["Jest", "Vitest"],
  },
  {
    label: "APIs & Auth",
    skills: ["REST APIs", "JWT", "OAuth", "Stripe", "Razorpay"],
  },
  {
    label: "AI Integration",
    skills: ["Anthropic SDK (Claude)"],
  },
];
