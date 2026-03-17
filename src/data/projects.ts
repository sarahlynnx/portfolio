export interface Project {
  title: string;
  subtitle: string;
  status: string;
  period: string;
  url?: string;
  githubUrl?: string;
  technologies: string[];
  description: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    title: "PlayFlex",
    subtitle: "Court Booking & Management Platform",
    status: "Pending Launch",
    period: "Early 2026",
    url: "https://playflex.in",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "NextAuth",
      "Razorpay",
      "Tailwind CSS 4",
      "Resend",
      "Vercel",
    ],
    description:
      "Production-grade full-stack booking platform for a pickleball courts business in India — replacing all manual and third-party booking processes with a custom system.",
    highlights: [
      "End-to-end court reservations with real-time availability checking, time slot conflict detection, and date-based scheduling",
      "Razorpay payment processing: intent creation, webhook handling, and server-side verification for secure transactions",
      "Admin dashboard for managing bookings, dynamic pricing rules, promotional codes, and court restrictions",
      "Recurring events, group booking validation, automated email confirmations via Resend, and scheduled cron jobs",
      "8 MongoDB schemas: Booking, CourtRestriction, GroupValidationType, PaymentIntent, PricingRule, Promotion, RecurringEvent, User",
    ],
  },
  {
    title: "Olson Construction & Concrete",
    subtitle: "Business Website",
    status: "Live",
    period: "End of 2024",
    url: "https://olsonbuilds.com",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Nodemailer", "Vercel"],
    description:
      "Complete multi-page business website for a construction company in North Dakota — built from zero, establishing their first-ever digital presence.",
    highlights: [
      "Multi-page site (home, about, services, careers, contact) built from scratch — the business's first digital footprint",
      "Job application and careers system with server-side form handling and automated email notifications via Nodemailer",
      "Custom Node.js image optimization pipeline to process and convert assets for web performance",
      "SEO metadata, Open Graph tags, auto-generated sitemaps, and fully responsive design across all device sizes",
    ],
  },
];
