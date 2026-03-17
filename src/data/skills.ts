export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    label: "Frameworks",
    skills: ["Next.js", "React", "Node.js", "Tailwind CSS"],
  },
  {
    label: "Databases",
    skills: ["MongoDB", "Mongoose ODM", "NoSQL"],
  },
  {
    label: "Auth & Security",
    skills: ["JWT", "bcryptjs", "NextAuth (Auth.js)", "RBAC", "reCAPTCHA"],
  },
  {
    label: "APIs & Services",
    skills: ["REST APIs", "Stripe", "Razorpay", "Webhooks", "Cron Jobs"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["Vercel", "Cloudinary", "Git", "GitHub", "Docker"],
  },
  {
    label: "Email",
    skills: ["SendGrid", "Nodemailer", "Resend"],
  },
  {
    label: "SEO & Analytics",
    skills: [
      "Schema.org JSON-LD",
      "Open Graph",
      "Google Analytics",
      "Core Web Vitals",
      "Sitemaps",
    ],
  },
];
