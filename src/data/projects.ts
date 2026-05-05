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
    status: "Beta — Live on Vercel",
    period: "March 2026",
    url: "https://playflex.vercel.app",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "NextAuth",
      "Razorpay",
      "Tailwind CSS",
      "Resend",
      "Vitest",
      "Vercel",
    ],
    description:
      "Full-stack booking platform for a pickleball courts business, replacing all manual and third-party booking processes with a custom system.",
    highlights: [
      "Razorpay payment processing: intent creation, webhook handling, and server-side verification for secure transactions",
      "Dynamic pricing engine combining base rates, time-of-day rules, day-of-week rules, and promotional codes, with a deterministic resolution order so identical inputs always produce the same total",
      "Vitest test suite (49 tests) covering booking logic, timezone utilities, and the pricing engine; CI runs lint, typecheck, and tests on every PR via GitHub Actions",
    ],
  },
  {
    title: "LynnX",
    subtitle: "Web Design & Development Platform",
    status: "Live",
    period: "July 2025",
    url: "https://lynnx.dev",
    githubUrl: "https://github.com/sarahlynnx/lynnxDevelopment",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Anthropic SDK (Claude)",
      "Quill",
      "Cloudinary",
      "Resend",
      "Vercel",
    ],
    description:
      "The company site for LynnX, built to run the business: client intake, project messaging, an AI-assisted blog, admin dashboard with AI-assisted email outreach, and role-based auth all in one app.",
    highlights: [
      "AI-assisted blog drafting via the Anthropic SDK: Claude suggests topic ideas grounded in recent post titles to keep voice consistent and avoid duplicates, then drafts a full post that prefills the Quill editor for manual review",
      "AI-assisted outreach drafting: Claude generates a personalized subject and email body from structured prospect context, with editable output, a static-template fallback, and generation metadata persisted alongside each send",
      "End-to-end client engagement workflow: 4-step intake form persists structured prospect context, opens a threaded conversation between client and admin, and powers an admin dashboard with send-status tracking, retry counts, and per-sender outreach settings",
    ],
  },
  {
    title: "Social Snout",
    subtitle: "Location-Based Social App for Pets",
    status: "Portfolio Project",
    period: "April 2026",
    githubUrl: "https://github.com/sarahlynnx/Social-Snout",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "PostGIS",
      "Supabase Realtime",
      "React Native Reanimated",
      "Expo Router",
      "NativeWind",
      "Jest",
    ],
    description:
      "Full-stack mobile app for pets and their people: location-based discovery, swipe-to-match, realtime chat, and a neighborhood social feed built entirely on Supabase.",
    highlights: [
      "Location-aware pet discovery using PostGIS ST_DWithin queries on geography columns; swipe deck shows pets within a configurable radius, sorted by distance",
      "Atomic match detection via a single SQL transaction: records a swipe, checks for mutual interest, and creates a match with a normalized constraint to prevent duplicates under concurrent writes",
      "60fps gesture-driven swipe deck using Reanimated 3 worklets on the native UI thread; runOnJS bridges to Supabase only for network calls, keeping animations smooth",
    ],
  },
];
