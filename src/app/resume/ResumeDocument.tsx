import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";
import { skillCategories } from "@/data/skills";
import { education } from "@/data/education";

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 48,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#000",
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 12,
    borderBottomWidth: 1.5,
    borderBottomColor: "#000",
    paddingBottom: 8,
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    lineHeight: 1.1,
    marginBottom: 6,
  },
  title: {
    fontSize: 11,
    color: "#000",
    marginBottom: 4,
  },
  contactRow: {
    fontSize: 9.5,
    color: "#000",
    marginTop: 2,
  },
  section: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    borderBottomWidth: 0.75,
    borderBottomColor: "#000",
    paddingBottom: 2,
    marginBottom: 4,
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.5,
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 2,
  },
  skillLabel: {
    fontFamily: "Helvetica-Bold",
    width: 100,
    fontSize: 9.5,
  },
  skillValue: {
    flex: 1,
    fontSize: 9.5,
  },
  entry: {
    marginBottom: 6,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  entryTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10.5,
  },
  entryPeriod: {
    fontSize: 9.5,
  },
  entryMeta: {
    fontSize: 9.5,
    fontStyle: "italic",
    marginBottom: 3,
  },
  entryDesc: {
    fontSize: 9.5,
    marginBottom: 3,
    lineHeight: 1.45,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 2,
    paddingLeft: 8,
  },
  bulletDash: {
    width: 10,
    fontSize: 9.5,
  },
  bulletText: {
    flex: 1,
    fontSize: 9.5,
    lineHeight: 1.45,
  },
  techLine: {
    fontSize: 9,
    marginBottom: 3,
    fontStyle: "italic",
  },
  link: {
    color: "#000",
    textDecoration: "underline",
  },
});

function Bullet({ children }: { children: string }) {
  return (
    <View style={styles.bullet}>
      <Text style={styles.bulletDash}>•</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );
}

export function ResumeDocument() {
  return (
    <Document
      title="Sarah Olson — Resume"
      author="Sarah Olson"
      subject="Full-Stack Developer Resume"
    >
      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>Sarah Olson</Text>
          <Text style={styles.title}>Full-Stack Developer</Text>
          <Text style={styles.contactRow}>
            Seattle, WA  |  701.331.4416  |{" "}
            <Link src="mailto:saraholsonx@gmail.com" style={styles.link}>
              saraholsonx@gmail.com
            </Link>
            {"  |  "}
            <Link src="https://github.com/sarahlynnx" style={styles.link}>
              github.com/sarahlynnx
            </Link>
            {"  |  "}
            <Link src="https://www.linkedin.com/in/sarahlynnx" style={styles.link}>
              linkedin.com/in/sarahlynnx
            </Link>
          </Text>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.summary}>
            Full-stack developer with 3 years shipping production systems end to
            end, from database design and authentication to payment systems and
            deployment. Comfortable across web and mobile, with experience
            writing tested code, securing API routes, and handling concurrent
            database access in real-world workloads.
          </Text>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((edu) => (
            <View key={edu.school} style={styles.entry}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>{edu.school}</Text>
                <Text style={styles.entryPeriod}>{edu.period}</Text>
              </View>
              <Text style={styles.entryMeta}>
                {edu.location}
                {edu.details ? `  ·  ${edu.details}` : ""}
              </Text>
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          {skillCategories.map(({ label, skills }) => (
            <View key={label} style={styles.skillRow}>
              <Text style={styles.skillLabel}>{label}:</Text>
              <Text style={styles.skillValue}>{skills.join(", ")}</Text>
            </View>
          ))}
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experiences.map((exp) => (
            <View key={exp.company + exp.role} style={styles.entry} wrap={false}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>
                  {exp.role} — {exp.company}
                </Text>
                <Text style={styles.entryPeriod}>{exp.period}</Text>
              </View>
              <Text style={styles.entryMeta}>{exp.location}</Text>
              {exp.description && (
                <Text style={styles.entryDesc}>{exp.description}</Text>
              )}
              {exp.highlights.map((h, i) => (
                <Bullet key={i}>{h}</Bullet>
              ))}
            </View>
          ))}
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {projects.map((p) => (
            <View key={p.title} style={styles.entry} wrap={false}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>
                  {p.title} — {p.subtitle}
                </Text>
                <Text style={styles.entryPeriod}>
                  {p.status} · {p.period}
                </Text>
              </View>
              {p.url && (
                <Text style={styles.entryMeta}>
                  <Link src={p.url} style={styles.link}>
                    {p.url.replace("https://", "")}
                  </Link>
                </Text>
              )}
              <Text style={styles.techLine}>{p.technologies.join(", ")}</Text>
              <Text style={styles.entryDesc}>{p.description}</Text>
              {p.highlights.map((h, i) => (
                <Bullet key={i}>{h}</Bullet>
              ))}
            </View>
          ))}
        </View>

        {/* Certifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          {certifications.map((group) => (
            <View key={group.issuer} style={{ marginBottom: 3 }}>
              <Text style={{ fontSize: 9.5 }}>
                <Text style={{ fontFamily: "Helvetica-Bold" }}>
                  {group.issuer}:
                </Text>{" "}
                {group.certs.join(", ")}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
