import type { Metadata } from "next";
import Link from "next/link";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";
import { skillCategories } from "@/data/skills";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "Resume — Sarah Olson",
  description: "Full-stack developer based in Seattle, WA.",
};

export default function ResumePage() {
  return (
    <div className="resume-root">
      <style>{`
        :root {
          --r-text: #1a1a1a;
          --r-muted: #555;
          --r-border: #d4d4d4;
          --r-accent: #7a5c2e;
          --r-bg: #fff;
        }

        .resume-root {
          background: var(--r-bg);
          color: var(--r-text);
          font-family: var(--font-dm-sans), system-ui, sans-serif;
          min-height: 100vh;
          padding: 3rem 2rem 4rem;
        }

        .resume-wrap {
          max-width: 780px;
          margin: 0 auto;
        }

        /* Print button — hidden in print */
        .resume-actions {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 2rem;
          gap: 0.75rem;
        }

        @media print {
          .resume-actions { display: none; }
          .resume-root { padding: 0; }
        }

        /* Header */
        .r-header {
          border-bottom: 2px solid var(--r-text);
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
        }

        .r-name {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 2.25rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          line-height: 1;
          margin-bottom: 0.35rem;
          color: var(--r-text);
        }

        .r-title {
          font-size: 0.875rem;
          color: var(--r-muted);
          margin-top: 0.6rem;
          margin-bottom: 0.4rem;
          font-weight: 400;
        }

        .r-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 0.25rem 1rem;
          font-size: 0.8rem;
          color: var(--r-muted);
          font-family: var(--font-geist-mono), monospace;
        }

        .r-contact a {
          color: var(--r-accent);
          text-decoration: none;
        }

        /* Section */
        .r-section {
          margin-bottom: 1.75rem;
        }

        .r-section-title {
          font-size: 0.65rem;
          font-family: var(--font-geist-mono), monospace;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--r-accent);
          border-bottom: 1px solid var(--r-border);
          padding-bottom: 0.3rem;
          margin-bottom: 1rem;
        }

        /* Summary */
        .r-summary {
          font-size: 0.9rem;
          line-height: 1.75;
          color: var(--r-muted);
        }

        /* Skills */
        .r-skills-grid {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          font-size: 0.8rem;
        }

        .r-skill-row {
          display: flex;
          gap: 1rem;
        }

        .r-skill-label {
          color: var(--r-muted);
          width: 130px;
          flex-shrink: 0;
          font-family: var(--font-geist-mono), monospace;
          font-size: 0.75rem;
          padding-top: 0.05rem;
        }

        .r-skill-value {
          color: var(--r-text);
          line-height: 1.5;
        }

        /* Experience */
        .r-exp {
          margin-bottom: 1.25rem;
        }

        .r-exp:last-child {
          margin-bottom: 0;
        }

        .r-exp-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 0.15rem;
        }

        .r-exp-role {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--r-text);
        }

        .r-exp-period {
          font-family: var(--font-geist-mono), monospace;
          font-size: 0.72rem;
          color: var(--r-muted);
          white-space: nowrap;
        }

        .r-exp-company {
          font-size: 0.8rem;
          color: var(--r-accent);
          margin-bottom: 0.4rem;
          font-family: var(--font-geist-mono), monospace;
        }

        .r-exp-desc {
          font-size: 0.82rem;
          color: var(--r-muted);
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }

        .r-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .r-bullets li {
          font-size: 0.82rem;
          color: var(--r-muted);
          line-height: 1.6;
          padding-left: 1rem;
          position: relative;
        }

        .r-bullets li::before {
          content: "–";
          position: absolute;
          left: 0;
          color: var(--r-accent);
        }

        /* Projects */
        .r-project {
          margin-bottom: 1.1rem;
        }

        .r-project:last-child {
          margin-bottom: 0;
        }

        .r-project-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.15rem;
        }

        .r-project-name {
          font-weight: 600;
          font-size: 0.88rem;
          color: var(--r-text);
        }

        .r-project-status {
          font-family: var(--font-geist-mono), monospace;
          font-size: 0.7rem;
          color: var(--r-muted);
        }

        .r-project-sub {
          font-size: 0.78rem;
          color: var(--r-muted);
          margin-bottom: 0.25rem;
          font-family: var(--font-geist-mono), monospace;
        }

        .r-project-tech {
          font-size: 0.75rem;
          color: var(--r-muted);
          margin-bottom: 0.4rem;
          font-family: var(--font-geist-mono), monospace;
        }

        .r-project-desc {
          font-size: 0.82rem;
          color: var(--r-muted);
          line-height: 1.6;
        }

        /* Certifications */
        .r-cert-group {
          margin-bottom: 0.6rem;
        }

        .r-cert-issuer {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--r-text);
          margin-bottom: 0.2rem;
        }

        .r-cert-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .r-cert-list li {
          font-size: 0.8rem;
          color: var(--r-muted);
          padding-left: 1rem;
          position: relative;
          line-height: 1.7;
        }

        .r-cert-list li::before {
          content: "–";
          position: absolute;
          left: 0;
          color: var(--r-accent);
        }

        @media (max-width: 600px) {
          .r-name {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <div className="resume-wrap">
        {/* Actions */}
        <div className="resume-actions">
          <Link
            href="/"
            style={{
              fontSize: "0.8rem",
              fontFamily: "var(--font-geist-mono), monospace",
              color: "var(--r-muted)",
              textDecoration: "none",
              padding: "0.4rem 0.9rem",
              border: "1px solid var(--r-border)",
              borderRadius: "2px",
            }}
          >
            ← Portfolio
          </Link>
          <PrintButton />
        </div>

        {/* Header */}
        <header className="r-header">
          <h1 className="r-name">Sarah Olson</h1>
          <p className="r-title">Full-Stack Developer</p>
          <div className="r-contact">
            <span>Seattle, WA</span>
            <span>701.331.4416</span>
            <a href="mailto:saraholsonx@gmail.com">saraholsonx@gmail.com</a>
            <a
              href="https://lynnx.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              lynnx.dev
            </a>
            <a
              href="https://github.com/sarahlynnx"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/sarahlynnx
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="r-section">
          <h2 className="r-section-title">Summary</h2>
          <p className="r-summary">
            Full-stack developer with 3+ years building and shipping production
            systems in Next.js, TypeScript, React Native, and MongoDB. I own
            projects end to end, from database design and auth to payments and
            deployment, and I use tools like Claude Code, Cursor, and Copilot
            daily to ship faster.
          </p>
        </section>

        {/* Skills */}
        <section className="r-section">
          <h2 className="r-section-title">Technical Skills</h2>
          <div className="r-skills-grid">
            {skillCategories.map(({ label, skills }) => (
              <div key={label} className="r-skill-row">
                <span className="r-skill-label">{label}</span>
                <span className="r-skill-value">{skills.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="r-section">
          <h2 className="r-section-title">Experience</h2>
          {experiences.map((exp) => (
            <div key={exp.company + exp.role} className="r-exp">
              <div className="r-exp-header">
                <span className="r-exp-role">{exp.role}</span>
                <span className="r-exp-period">{exp.period}</span>
              </div>
              <div className="r-exp-company">
                {exp.company}
                {exp.location ? ` · ${exp.location}` : ""}
                {exp.url ? (
                  <>
                    {" "}
                    ·{" "}
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--r-accent)" }}
                    >
                      {exp.url.replace("https://", "")}
                    </a>
                  </>
                ) : null}
              </div>
              {exp.description && (
                <p className="r-exp-desc">{exp.description}</p>
              )}
              <ul className="r-bullets">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="r-section">
          <h2 className="r-section-title">Projects</h2>
          {projects.map((p) => (
            <div key={p.title} className="r-project">
              <div className="r-project-header">
                <span className="r-project-name">
                  {p.title}
                  {p.url && (
                    <>
                      {" "}
                      ·{" "}
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--r-accent)",
                          fontWeight: 400,
                          fontSize: "0.78rem",
                          fontFamily: "var(--font-geist-mono), monospace",
                        }}
                      >
                        {p.url.replace("https://", "")}
                      </a>
                    </>
                  )}
                </span>
                <span className="r-project-status">
                  {p.status} · {p.period}
                </span>
              </div>
              <div className="r-project-sub">{p.subtitle}</div>
              <div className="r-project-tech">{p.technologies.join(" · ")}</div>
              <p className="r-project-desc">{p.description}</p>
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section className="r-section">
          <h2 className="r-section-title">Certifications</h2>
          <p
            style={{
              fontSize: "0.82rem",
              color: "var(--r-muted)",
              lineHeight: 1.7,
            }}
          >
            {certifications
              .flatMap((group) =>
                group.certs.map((c) => `${c} (${group.issuer})`)
              )
              .join(" · ")}
          </p>
        </section>
      </div>
    </div>
  );
}
