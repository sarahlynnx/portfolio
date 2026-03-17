"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SkillPill } from "@/components/ui/SkillPill";
import { staggerContainer } from "@/lib/motion";
import { skillCategories } from "@/data/skills";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="skills" className="section-padding" style={{ borderTop: "1px solid rgba(201,169,110,0.07)" }}>
      <div className="container-wide" ref={ref}>
        <SectionLabel number="02" label="Skills" />

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.label}
              style={{
                display: "grid",
                gridTemplateColumns: "160px 1fr",
                gap: "1.5rem",
                alignItems: "flex-start",
                paddingTop: "1.25rem",
                paddingBottom: "1.25rem",
                borderBottom: "1px solid rgba(201,169,110,0.07)",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.07, duration: 0.5, ease: "easeOut" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-amber)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  paddingTop: "4px",
                  flexShrink: 0,
                }}
              >
                {category.label}
              </div>

              <motion.div
                style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {category.skills.map((skill) => (
                  <SkillPill key={skill} skill={skill} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
