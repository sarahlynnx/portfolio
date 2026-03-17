"use client";

interface SectionLabelProps {
  number: string;
  label: string;
}

export function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "3rem",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--color-amber)",
          fontSize: "0.7rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
        }}
      >
        {number}
      </span>
      <div
        style={{
          height: "1px",
          width: "32px",
          background: "rgba(201,169,110,0.25)",
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--color-text-muted)",
          fontSize: "0.7rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
}
