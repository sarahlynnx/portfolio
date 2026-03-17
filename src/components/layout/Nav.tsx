"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const activeSection = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  return (
    <>
      <motion.nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backdropFilter: "blur(12px)",
          background: "rgba(13,12,11,0.9)",
        }}
      >
        {/* Bottom border that fades in on scroll */}
        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "rgba(201,169,110,0.15)",
            opacity: borderOpacity,
          }}
        />

        <div
          className="container-wide"
          style={{
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-amber)",
              fontSize: "1.5rem",
              fontWeight: 700,
              fontStyle: "italic",
              lineHeight: 1,
              textDecoration: "none",
            }}
          >
            SO
          </a>

          {/* Desktop nav */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map(({ href, label }) => {
              const sectionId = href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={href} style={{ position: "relative" }}>
                  <a
                    href={href}
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: isActive ? "var(--color-text-primary)" : "var(--color-text-muted)",
                      fontSize: "0.875rem",
                      letterSpacing: "0.02em",
                      textDecoration: "none",
                      paddingBottom: "4px",
                      display: "block",
                      transition: "color 0.2s",
                    }}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "1px",
                          background: "var(--color-amber)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="mobile-menu-btn"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <motion.span
              style={{ display: "block", width: "20px", height: "1px", background: "var(--color-text-primary)" }}
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            />
            <motion.span
              style={{ display: "block", width: "20px", height: "1px", background: "var(--color-text-primary)" }}
              animate={{ opacity: menuOpen ? 0 : 1 }}
            />
            <motion.span
              style={{ display: "block", width: "20px", height: "1px", background: "var(--color-text-primary)" }}
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "var(--color-ground)",
        }}
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
          {NAV_LINKS.map(({ href, label }, i) => (
            <motion.li
              key={href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 20 }}
              transition={{ delay: menuOpen ? i * 0.07 : 0 }}
            >
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--color-text-primary)",
                  fontSize: "2.5rem",
                  fontWeight: 600,
                  fontStyle: "italic",
                  textDecoration: "none",
                }}
              >
                {label}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}
