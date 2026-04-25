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
    period: "Mid 2025 - Present",
    url: "https://lynnx.dev",
    badge: "Founder",
    highlights: [
      "Built lynnx.dev from scratch: Next.js 15, TypeScript, MongoDB, with JWT auth, bcryptjs password hashing, a blog with comments and likes, real-time messaging, client intake forms, and an email outreach system",
      "Locked down all API routes with role-based access control and wrote middleware to enforce CORS, validate request origins, and keep sensitive endpoints inaccessible without auth",
      "Set up Schema.org JSON-LD (LocalBusiness + WebSite), Open Graph tags, canonical URLs, auto-generated sitemaps, and critical CSS inlining for page load performance",
      "Wired up Cloudinary for image management, SendGrid and Nodemailer for transactional email, Google reCAPTCHA on contact forms, and deployed to Vercel with Analytics and Speed Insights",
      "Ship ~40% faster by pairing with Claude Code and Cursor for scaffolding, test generation, and refactors while owning all architectural decisions",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Seattle, WA",
    period: "July 2023 - Present",
    highlights: [
      "Built Olson Construction's first website from zero; the business went from no online presence to 5-8 inbound email leads per month and 431 Google Business profile views in the first five months",
      "Secured all projects with HTTPS, server-side input validation, env vars for all API keys, and route-level auth checks, never relying solely on client-side validation",
      "Handled race conditions in booking and payment flows, rate limiting through Supabase, and fallback logic for edge cases across multiple production projects",
    ],
  },
];
