"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { fadeUp } from "@/lib/motion";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="about"
      className="section-padding"
      style={{ borderTop: "1px solid rgba(201,169,110,0.07)" }}
    >
      <div className="container-wide" ref={ref}>
        <SectionLabel number="01" label="About" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
        >
          {/* Left — statement + body */}
          <div style={{ maxWidth: "680px" }}>
            <RevealText
              text="Self-taught, shipping real products for real clients."
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--color-text-primary)",
                fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                fontWeight: 600,
                lineHeight: 1.25,
                marginBottom: "1.5rem",
              }}
              as="h2"
            />

            <RevealText
              text="I started with freeCodeCamp, got my first three certifications, and kept going from there. Three years later I've shipped production apps covering auth, payments, real-time messaging, booking systems with race condition handling, and native mobile. I pick up what a project needs and build it."
              style={{
                color: "var(--color-text-muted)",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "1rem",
              }}
              delay={0.1}
            />

            <RevealText
              text="I started LynnX because I kept seeing small businesses in the area with no website or a bad one. I build what they actually need, handle the hosting, and stick around after launch."
              style={{
                color: "var(--color-text-muted)",
                fontSize: "1rem",
                lineHeight: 1.8,
              }}
              delay={0.2}
            />
          </div>

          {/* Detail cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                label: "Currently",
                value: "Founder & Lead Developer at LynnX",
                sublabel: "lynnx.dev",
                sublink: "https://lynnx.dev",
              },
              {
                label: "Location",
                value: "Seattle, WA",
                sublabel: "Open to remote",
              },
              {
                label: "Focus",
                value: "Full-Stack Web Development",
                sublabel: "Next.js · TypeScript · MongoDB",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.3 + i * 0.12 }}
                style={{
                  padding: "1.25rem 1.5rem",
                  borderRadius: "2px",
                  background: "var(--color-surface)",
                  border: "1px solid rgba(201,169,110,0.1)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-amber)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    color: "var(--color-text-primary)",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.value}
                </div>
                {item.sublink ? (
                  <a
                    href={item.sublink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--color-text-muted)",
                      fontSize: "0.75rem",
                    }}
                  >
                    {item.sublabel}
                  </a>
                ) : (
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--color-text-muted)",
                      fontSize: "0.75rem",
                    }}
                  >
                    {item.sublabel}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
