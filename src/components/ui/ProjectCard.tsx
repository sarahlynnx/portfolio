"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { scaleIn, staggerContainer, fadeUp } from "@/lib/motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -5, transition: { duration: 0.25, ease: "easeOut" } }}
      style={{
        position: "relative",
        padding: "2rem",
        borderRadius: "2px",
        overflow: "hidden",
        background: "var(--color-surface)",
        border: "1px solid rgba(201,169,110,0.1)",
        cursor: "default",
      }}
    >
      {/* Top border accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "var(--color-amber)",
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "1rem",
          marginBottom: "0.35rem",
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
              fontSize: "clamp(1.4rem, 3vw, 1.75rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.8rem",
              marginTop: "2px",
            }}
          >
            {project.subtitle}
          </p>
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            color: project.status === "Live" ? "#7ecb8f" : "var(--color-amber)",
            border: `1px solid ${project.status === "Live" ? "rgba(126,203,143,0.3)" : "rgba(201,169,110,0.3)"}`,
            background: project.status === "Live" ? "rgba(126,203,143,0.05)" : "rgba(201,169,110,0.05)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "3px 8px",
            borderRadius: "2px",
            flexShrink: 0,
            marginTop: "4px",
          }}
        >
          {project.status}
        </span>
      </div>

      {/* Period */}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--color-text-muted)",
          fontSize: "0.7rem",
          letterSpacing: "0.05em",
          marginBottom: "1.25rem",
        }}
      >
        {project.period}
      </div>

      {/* Description */}
      <p
        style={{
          color: "var(--color-text-muted)",
          fontSize: "0.875rem",
          lineHeight: 1.75,
          marginBottom: "1.5rem",
        }}
      >
        {project.description}
      </p>

      {/* Highlights */}
      <motion.ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginBottom: "1.5rem",
        }}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {project.highlights.map((h, i) => (
          <motion.li
            key={i}
            variants={fadeUp}
            style={{
              display: "flex",
              gap: "10px",
              color: "var(--color-text-primary)",
              fontSize: "0.8rem",
              lineHeight: 1.6,
            }}
          >
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "var(--color-amber)",
                flexShrink: 0,
                marginTop: "8px",
              }}
            />
            {h}
          </motion.li>
        ))}
      </motion.ul>

      {/* Tech stack */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          marginBottom: "1.5rem",
        }}
      >
        {project.technologies.map((tech) => (
          <span
            key={tech}
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-amber)",
              background: "rgba(201,169,110,0.08)",
              fontSize: "0.65rem",
              letterSpacing: "0.05em",
              padding: "2px 8px",
              borderRadius: "2px",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
        {project.url && (
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--color-amber)",
              fontSize: "0.875rem",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: "5px",
              textDecoration: "none",
            }}
            whileHover={{ x: 2 }}
          >
            {project.status === "Live" ? "Visit Site" : "Coming Soon"}
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.875rem",
              textDecoration: "none",
            }}
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
