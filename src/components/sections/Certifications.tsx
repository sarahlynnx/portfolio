"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { certifications } from "@/data/certifications";

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="certifications" className="section-padding" style={{ borderTop: "1px solid rgba(201,169,110,0.07)" }}>
      <div className="container-wide" ref={ref}>
        <SectionLabel number="05" label="Certifications" />

        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
          }}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {certifications.map((group) => (
            <motion.div
              key={group.issuer}
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
                  marginBottom: "1rem",
                }}
              >
                {group.issuer}
              </div>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {group.certs.map((cert) => (
                  <li
                    key={cert}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      color: "var(--color-text-primary)",
                      fontSize: "0.875rem",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "var(--color-amber)",
                        flexShrink: 0,
                        marginTop: "7px",
                      }}
                    />
                    {cert}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
