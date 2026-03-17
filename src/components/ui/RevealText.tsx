"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import type { CSSProperties } from "react";
import { wordReveal, staggerContainer } from "@/lib/motion";

interface RevealTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  as?: "p" | "h1" | "h2" | "h3" | "span";
}

export function RevealText({
  text,
  className = "",
  style,
  delay = 0,
  as: Tag = "p",
}: RevealTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const words = text.split(" ");

  return (
    <Tag className={className} style={style} ref={ref}>
      <motion.span
        className="inline"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ display: "inline" }}
        transition={{ delayChildren: delay }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden"
            style={{ verticalAlign: "bottom" }}
          >
            <motion.span className="inline-block" variants={wordReveal}>
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
