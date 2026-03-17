"use client";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(201,169,110,0.1)", padding: "2rem 0" }}>
      <div
        className="container-wide"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--color-text-muted)",
            fontSize: "0.75rem",
            opacity: 0.6,
          }}
        >
          © 2026 Sarah Olson
        </span>
        <a
          href="https://github.com/sarahlynnx"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--color-text-muted)",
            fontSize: "0.75rem",
            opacity: 0.6,
            textDecoration: "none",
          }}
        >
          github.com/sarahlynnx
        </a>
      </div>
    </footer>
  );
}
