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
      "Production-grade full-stack booking platform for a pickleball courts business in India, replacing all manual and third-party booking processes with a custom system.",
    highlights: [
      "End-to-end court reservations with real-time availability checking, time slot conflict detection, and date-based scheduling",
      "Razorpay payment processing: intent creation, webhook handling, and server-side verification for secure transactions",
      "Admin dashboard for managing bookings, dynamic pricing rules, promotional codes, and court restrictions",
      "Recurring events, group booking validation, automated email confirmations via Resend, and scheduled cron jobs",
      "8 MongoDB schemas: Booking, CourtRestriction, GroupValidationType, PaymentIntent, PricingRule, Promotion, RecurringEvent, User",
    ],
  },
  {
    title: "Social Snout",
    subtitle: "Location-Based Social App for Pets",
    status: "Portfolio Project",
    period: "2025",
    githubUrl: "https://github.com/sarahlynnx/Social-Snout",
    technologies: [
      "React Native",
      "Expo SDK 54",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "PostGIS",
      "Supabase Realtime",
      "React Native Reanimated 3",
      "Expo Router",
      "NativeWind v4",
      "Jest",
    ],
    description:
      "Full-stack mobile app for pets and their people: location-based discovery, swipe-to-match, realtime chat, and a neighborhood social feed built entirely on Supabase.",
    highlights: [
      "Location-aware pet discovery using PostGIS ST_DWithin queries on geography columns; swipe deck shows pets within a configurable radius, sorted by distance",
      "Atomic match detection via a single SQL transaction: records a swipe, checks for mutual interest, and creates a match with a normalized constraint to prevent duplicates under concurrent writes",
      "60fps gesture-driven swipe deck using Reanimated 3 worklets on the native UI thread; runOnJS bridges to Supabase only for network calls, keeping animations smooth",
      "Realtime chat between matched pets powered by Supabase Realtime subscriptions, with multi-pet profiles, photo uploads, prompts, and temperament tags",
      "Neighborhood social feed supporting post types: playdates, lost pet alerts, photos, and events, all scoped to the user's radius",
      "6 Jest test suites covering auth, swipe logic, matching, messaging, storage, and UI components",
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
      "Complete multi-page business website for a construction company in North Dakota, built from zero, establishing their first-ever digital presence.",
    highlights: [
      "Multi-page site (home, about, services, careers, contact) built from scratch; the business's first digital footprint",
      "Job application and careers system with server-side form handling and automated email notifications via Nodemailer",
      "Custom Node.js image optimization pipeline to process and convert assets for web performance",
      "SEO metadata, Open Graph tags, auto-generated sitemaps, and fully responsive design across all device sizes",
    ],
  },
];
