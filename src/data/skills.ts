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
    skills: ["Next.js", "React", "React Native", "Expo", "Node.js", "Tailwind CSS", "NativeWind"],
  },
  {
    label: "Databases",
    skills: ["MongoDB", "Mongoose ODM", "PostgreSQL", "PostGIS", "Supabase", "NoSQL"],
  },
  {
    label: "Auth & Security",
    skills: ["JWT", "bcryptjs", "NextAuth (Auth.js)", "RBAC", "reCAPTCHA"],
  },
  {
    label: "APIs & Services",
    skills: ["REST APIs", "Supabase Realtime", "Stripe", "Razorpay", "Webhooks", "Cron Jobs"],
  },
  {
    label: "Mobile",
    skills: ["React Native Reanimated 3", "Expo Router", "Expo SDK", "Gesture Handler", "EAS Build"],
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
