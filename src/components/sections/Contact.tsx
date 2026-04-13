"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/motion";

const SOCIALS = [
  {
    label: "GitHub",
    handle: "sarahlynnx",
    href: "https://github.com/sarahlynnx",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "sarah-olson-50a1612a0",
    href: "https://www.linkedin.com/in/sarah-olson-50a1612a0/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="contact" className="section-padding" style={{ borderTop: "1px solid rgba(201,169,110,0.07)" }}>
      <div className="container-wide" ref={ref}>
        <SectionLabel number="06" label="Contact" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--color-text-primary)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: "1.25rem",
              }}
            >
              Let&apos;s build something
              <span style={{ color: "var(--color-amber)" }}>.</span>
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
              }}
            >
              I&apos;m currently available for freelance projects and open to new opportunities.
              Whether you need a full-stack web app, want to discuss a project, or just want to
              connect. My inbox is open.
            </p>

            {/* Email */}
            <div style={{ marginBottom: "2.5rem" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-text-muted)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Email
              </div>
              <a
                href="mailto:saraholsonx@gmail.com"
                style={{
                  color: "var(--color-text-primary)",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  borderBottom: "1px solid var(--color-amber)",
                  paddingBottom: "2px",
                }}
              >
                saraholsonx@gmail.com
              </a>
            </div>

            {/* Socials */}
            <motion.div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {SOCIALS.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: "var(--color-text-muted)",
                    textDecoration: "none",
                    width: "fit-content",
                  }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                >
                  <span style={{ color: "var(--color-amber)" }}>{social.icon}</span>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {social.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      @{social.handle}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — availability card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            style={{
              padding: "2rem",
              borderRadius: "2px",
              background: "var(--color-surface)",
              border: "1px solid rgba(201,169,110,0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#7ecb8f",
                  animation: "pulse 2s infinite",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "#7ecb8f",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Available for Work
              </span>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--color-text-primary)",
                fontSize: "1.25rem",
                fontWeight: 600,
                marginBottom: "1rem",
              }}
            >
              What I can help with
            </h3>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              {[
                "Full-stack web applications",
                "Next.js & React development",
                "API design & integrations",
                "Business websites & landing pages",
                "Performance & SEO optimization",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "var(--color-text-primary)",
                    fontSize: "0.875rem",
                  }}
                >
                  <span
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "var(--color-amber)",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="mailto:saraholsonx@gmail.com"
              style={{
                display: "block",
                textAlign: "center",
                padding: "0.75rem 1.5rem",
                background: "var(--color-amber)",
                color: "#0d0c0b",
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                fontWeight: 500,
                borderRadius: "2px",
                textDecoration: "none",
              }}
            >
              Send Me a Message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
