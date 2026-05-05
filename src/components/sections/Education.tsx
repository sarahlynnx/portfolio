"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { education } from "@/data/education";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="education"
      className="section-padding"
      style={{ borderTop: "1px solid rgba(201,169,110,0.07)" }}
    >
      <div className="container-wide" ref={ref}>
        <SectionLabel number="06" label="Education" />

        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.25rem",
            maxWidth: "720px",
          }}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {education.map((item) => (
            <motion.div
              key={item.school}
              variants={fadeUp}
              style={{
                padding: "1.5rem",
                borderRadius: "2px",
                background: "var(--color-surface)",
                border: "1px solid rgba(201,169,110,0.09)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-amber)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                {item.period}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--color-text-primary)",
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  marginBottom: "0.35rem",
                  lineHeight: 1.3,
                }}
              >
                {item.school}
              </div>
              <div
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.875rem",
                  marginBottom: item.details ? "0.5rem" : 0,
                }}
              >
                {item.location}
              </div>
              {item.details && (
                <div
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.875rem",
                    lineHeight: 1.5,
                  }}
                >
                  {item.details}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
