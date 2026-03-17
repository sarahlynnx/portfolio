"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { slideInLeft, staggerContainer, fadeUp } from "@/lib/motion";
import type { ExperienceItem } from "@/data/experience";

interface TimelineItemProps {
  item: ExperienceItem;
  isLast?: boolean;
}

export function TimelineItem({ item, isLast = false }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      style={{ position: "relative", paddingLeft: "2.5rem" }}
      variants={slideInLeft}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Timeline line */}
      {!isLast && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "12px",
            bottom: 0,
            width: "1px",
            background: "rgba(201,169,110,0.2)",
          }}
        />
      )}

      {/* Timeline dot */}
      <div
        style={{
          position: "absolute",
          left: "-3px",
          top: "12px",
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          background: "var(--color-amber)",
        }}
      />

      <div style={{ paddingBottom: "3.5rem" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            gap: "8px",
            marginBottom: "4px",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
              fontSize: "1.2rem",
              fontWeight: 600,
            }}
          >
            {item.role}
          </h3>
          {item.badge && (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--color-amber)",
                border: "1px solid rgba(201,169,110,0.4)",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "2px 8px",
                borderRadius: "2px",
                marginTop: "3px",
              }}
            >
              {item.badge}
            </span>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "6px",
            marginBottom: "1rem",
          }}
        >
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--color-amber)",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              {item.company}
            </a>
          ) : (
            <span style={{ color: "var(--color-amber)", fontSize: "0.875rem", fontWeight: 500 }}>
              {item.company}
            </span>
          )}
          <span style={{ color: "var(--color-text-muted)" }}>·</span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-text-muted)",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
            }}
          >
            {item.location}
          </span>
          <span style={{ color: "var(--color-text-muted)" }}>·</span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-text-muted)",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
            }}
          >
            {item.period}
          </span>
        </div>

        {item.description && (
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.875rem",
              lineHeight: 1.7,
              marginBottom: "1rem",
            }}
          >
            {item.description}
          </p>
        )}

        <motion.ul
          style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {item.highlights.map((point, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              style={{
                display: "flex",
                gap: "10px",
                color: "var(--color-text-primary)",
                fontSize: "0.875rem",
                lineHeight: 1.7,
              }}
            >
              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "var(--color-amber)",
                  flexShrink: 0,
                  marginTop: "9px",
                }}
              />
              {point}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}
