export type ResumeLink = {
  label: string;
  value: string;
  href?: string;
};

export type ResumeSkillGroup = {
  title: string;
  items: string[];
};

export type ResumeExperience = {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  technologies?: string[];
};

export type ResumeEducation = {
  degree: string;
  school: string;
  location: string;
  details: string[];
};

export type ResumeData = {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedIn: ResumeLink;
  portfolio: ResumeLink;
  summary: string;
  skills: ResumeSkillGroup[];
  experience: ResumeExperience[];
  leadership: string[];
  education: ResumeEducation;
};
