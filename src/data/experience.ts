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
    role: "Founder & Full-Stack Developer",
    company: "LynnX, Independent Web Consultancy",
    location: "Seattle, WA",
    period: "July 2023 - Present",
    url: "https://lynnx.dev",
    description: "Freelance from July 2023; formalized as LynnX in July 2025.",
    highlights: [
      "Build and ship full-stack production applications end to end (data modeling through API design, payments, and deployment), designing each system around the client's business model instead of a template",
      "Design config-driven platforms that let clients adjust pricing, services, and business rules themselves, so the product absorbs business changes without a developer in the loop",
      "Build for concurrent, transactional workloads: multi-user booking, e-commerce with live inventory and checkout, third-party integrations, ETL pipelines, and SEO-optimized marketing sites",
      "Secure every deployment with OAuth and JWT authentication, role-based access control, server-side validation, and API rate limiting, improving user trust and retention by 40%",
      "Host and maintain client sites post-launch, holding 99.9% uptime and increasing mobile traffic by 50% through responsive, cross-browser design",
      "Establish a first online presence for clients with no prior digital footprint, producing 30% more inquiries and 20% more appointments (olsonbuilds.com)",
      "Automate SDLC workflows with AI tooling backed by CI/CD, automated test suites and shared context memory, and set clear expectations with clients on where AI helps and where it doesn't",
    ],
  },
];
