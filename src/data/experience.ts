export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  url?: string;
  badge?: string;
  description?: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Founder & Lead Developer",
    company: "LynnX",
    location: "Seattle, WA",
    period: "Mid 2025 — Present",
    url: "https://lynnx.dev",
    badge: "Founder",
    description:
      "Founded a web design and development company providing custom websites and ongoing maintenance to small businesses in the Seattle/Greater Washington area.",
    highlights: [
      "Architected lynnx.dev — a full-stack Next.js 15 / TypeScript / MongoDB platform with user auth, blog CMS (Quill), real-time messaging, client intake workflows, and email outreach system",
      "Implemented JWT authentication with bcryptjs, protected API routes, and role-based access control",
      "Engineered SEO infrastructure: Schema.org JSON-LD, Open Graph, canonical URLs, auto-generated sitemaps, and critical CSS inlining",
      "Integrated Cloudinary, SendGrid, Nodemailer, and Google reCAPTCHA; deployed on Vercel with Analytics and Speed Insights",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Seattle, WA",
    period: "July 2023 — Present",
    highlights: [
      "Delivered full-cycle web development for clients — from design through deployment and ongoing hosting — increasing client mobile traffic by 50%",
      "Established online presence for clients with no prior digital footprint, resulting in 30% more inquiries and 20% more appointments",
      "Maintained 99.9% uptime across hosted client sites through continuous monitoring and proactive maintenance",
      "Applied industry security standards across all projects, improving user trust and retention by 40%",
    ],
  },
];
