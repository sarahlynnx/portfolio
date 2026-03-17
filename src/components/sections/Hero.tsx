"use client";

import { motion } from "motion/react";
import { charReveal, staggerContainer, fadeUp } from "@/lib/motion";

const NAME = "Sarah Olson";

export function Hero() {
  const chars = NAME.split("");

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "72px",
        overflow: "hidden",
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(201,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid lines */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          opacity: 0.025,
          backgroundImage:
            "linear-gradient(var(--color-amber) 1px, transparent 1px), linear-gradient(90deg, var(--color-amber) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-wide" style={{ position: "relative", zIndex: 10 }}>
        {/* Top label */}
        <motion.div
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2.5rem" }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div style={{ width: "32px", height: "1px", background: "var(--color-amber)" }} />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-amber)",
              fontSize: "0.7rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
            }}
          >
            Full-Stack Developer
          </span>
        </motion.div>

        {/* Name — character-by-character reveal */}
        <div style={{ overflow: "hidden", marginBottom: "1.5rem", perspective: "800px" }}>
          <motion.h1
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
              fontSize: "clamp(3.5rem, 10vw, 8.5rem)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {chars.map((char, i) => (
              <motion.span
                key={i}
                style={{
                  display: "inline-block",
                  ...(char === " " ? { width: "0.3em" } : {}),
                }}
                variants={charReveal}
                transition={{ delay: 0.4 + i * 0.04 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.div
          style={{ overflow: "hidden", marginBottom: "2.5rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: "480px",
            }}
          >
            Self-taught engineer building production-grade web applications.
            Founder of{" "}
            <a
              href="https://lynnx.dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-amber)" }}
            >
              LynnX
            </a>
            . Based in Seattle, WA.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "5rem" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <motion.a
            href="#projects"
            style={{
              fontFamily: "var(--font-sans)",
              background: "var(--color-amber)",
              color: "#0d0c0b",
              padding: "0.75rem 1.5rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              letterSpacing: "0.03em",
              borderRadius: "2px",
              textDecoration: "none",
              display: "inline-block",
            }}
            whileHover={{ scale: 1.02, opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--color-amber)",
              border: "1px solid rgba(201,169,110,0.4)",
              background: "transparent",
              padding: "0.75rem 1.5rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              letterSpacing: "0.03em",
              borderRadius: "2px",
              textDecoration: "none",
              display: "inline-block",
            }}
            whileHover={{
              background: "rgba(201,169,110,0.08)",
              borderColor: "rgba(201,169,110,0.7)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        >
          {[
            { value: "3+", label: "Years Experience" },
            { value: "10+", label: "Projects Shipped" },
            { value: "99.9%", label: "Uptime SLA" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--color-amber)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-text-muted)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative vertical text */}
      <div
        style={{
          position: "absolute",
          right: "2.5rem",
          top: "50%",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "translateY(-50%) rotate(180deg)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--color-text-primary)",
            fontSize: "0.6rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            opacity: 0.15,
          }}
        >
          Portfolio 2026
        </span>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--color-text-muted)",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            opacity: 0.5,
          }}
        >
          Scroll
        </span>
        <motion.div
          style={{
            width: "1px",
            height: "32px",
            background: "linear-gradient(to bottom, rgba(201,169,110,0.5), transparent)",
          }}
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
