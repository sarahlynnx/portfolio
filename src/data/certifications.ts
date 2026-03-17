export interface CertGroup {
  issuer: string;
  certs: string[];
}

export const certifications: CertGroup[] = [
  {
    issuer: "freeCodeCamp",
    certs: [
      "JavaScript Algorithms & Data Structures",
      "Front End Development Libraries",
      "Responsive Web Design",
    ],
  },
  {
    issuer: "MongoDB University",
    certs: ["MongoDB Node.js Developer Path"],
  },
  {
    issuer: "Educative.io",
    certs: ["Node.js, Express & MongoDB Development"],
  },
];
