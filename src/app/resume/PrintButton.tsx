export function PrintButton() {
  return (
    <a
      href="/api/resume"
      download="sarah-olson-resume.pdf"
      style={{
        fontSize: "0.8rem",
        fontFamily: "var(--font-geist-mono), monospace",
        color: "#7a5c2e",
        background: "none",
        cursor: "pointer",
        padding: "0.4rem 0.9rem",
        border: "1px solid #7a5c2e",
        borderRadius: "2px",
        textDecoration: "none",
        display: "inline-block",
        lineHeight: 1.2,
      }}
    >
      Download PDF
    </a>
  );
}
