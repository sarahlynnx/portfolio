"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";

interface SkillPillProps {
  skill: string;
}

export function SkillPill({ skill }: SkillPillProps) {
  return (
    <motion.span
      variants={fadeUp}
      className="inline-block px-3 py-1.5 text-xs rounded-sm cursor-default transition-all duration-300"
      style={{
        fontFamily: "var(--font-mono)",
        color: "var(--color-text-primary)",
        border: "1px solid rgba(201,169,110,0.2)",
        background: "rgba(201,169,110,0.04)",
        letterSpacing: "0.05em",
      }}
      whileHover={{
        background: "rgba(201,169,110,0.1)",
        borderColor: "rgba(201,169,110,0.5)",
        color: "#c9a96e",
        y: -2,
        transition: { duration: 0.15 },
      }}
    >
      {skill}
    </motion.span>
  );
}
