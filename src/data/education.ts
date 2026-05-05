export interface EducationItem {
  school: string;
  location: string;
  period: string;
  details?: string;
}

export const education: EducationItem[] = [
  {
    school: "Northland Community & Technical College",
    location: "East Grand Forks, MN",
    period: "January 2015 - December 2017",
  },
];
