export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
  achievements: string[];
}

export interface Skill {
  id: string;
  name: string;
  level: string;
  category: string;
  yearsOfExperience: number;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  githubUrl: string;
  projectUrl: string;
  role: string;
  highlights: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  location: string;
  achievements: string[];
}