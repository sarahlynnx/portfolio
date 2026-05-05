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
    role: "Full-Stack Developer",
    company: "LynnX",
    location: "Seattle, WA",
    period: "July 2025 - Present",
    url: "https://lynnx.dev",
    highlights: [
      "Build and ship full-stack production applications end to end, covering database design, API development, authentication, payments, and deployment, while choosing the right tools for each project's needs",
      "Design responsive, accessible user interfaces in React and Next.js with TypeScript, optimizing for Core Web Vitals, mobile-first layouts, and consistent cross-browser behavior",
      "Implement secure server-side logic including JWT and OAuth authentication, role-based access control, server-side input validation, and protection against common OWASP vulnerabilities",
      "Integrate third-party services including Stripe and Razorpay for payments, Cloudinary for media, Resend for transactional email, and the Anthropic SDK for AI-assisted features",
      "Maintain code quality through CI/CD pipelines (GitHub Actions), automated test suites in Vitest and Jest, ESLint and Prettier enforcement, and code reviews on every change",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    location: "Seattle, WA",
    period: "July 2023 - Present",
    highlights: [
      "Built Olson Construction's first website from zero; the business went from no online presence to 5-8 inbound email leads per month and 431 Google Business profile views in the first five months",
      "Secured all projects with HTTPS, server-side input validation, env vars for all API keys, and route-level auth checks, never relying solely on client-side validation",
      "Handled race conditions in booking and payment flows, rate limiting through Supabase, and fallback logic for edge cases across multiple production projects",
    ],
  },
];
