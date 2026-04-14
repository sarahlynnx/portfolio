"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      style={{
        fontSize: "0.8rem",
        fontFamily: "var(--font-geist-mono), monospace",
        color: "#7a5c2e",
        background: "none",
        cursor: "pointer",
        padding: "0.4rem 0.9rem",
        border: "1px solid #7a5c2e",
        borderRadius: "2px",
      }}
    >
      Print / Save PDF
    </button>
  );
}
