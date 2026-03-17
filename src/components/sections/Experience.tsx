"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ borderTop: "1px solid rgba(201,169,110,0.07)" }}>
      <div className="container-wide">
        <SectionLabel number="03" label="Experience" />
        <div style={{ maxWidth: "720px" }}>
          {experiences.map((item, i) => (
            <TimelineItem
              key={item.company + item.role}
              item={item}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
