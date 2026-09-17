export type ProjectCategory = 'All' | 'Web' | 'Desktop' | 'Backend' | 'Database';

export interface Technology {
  id: string;
  name: string;
  category: 'languages' | 'web' | 'dotnet' | 'databases' | 'backend';
  icon: string;
}

export interface ProjectArchitecture {
  client: string;
  application: string;
  dataLayer: string;
  database: string;
  diagramSteps: string[];
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  myRole: string;
  systemArchitecture: string;
  databaseDesign: string;
  keyFeatures: string[];
  challenges: string[];
  whatILearned: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  category: Exclude<ProjectCategory, 'All'>;
  technologies: Technology[];
  thumbnail?: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  architecture?: ProjectArchitecture;
  caseStudy?: ProjectCaseStudy;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  icon: string;
  badge?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  technologies: string[];
  type: 'experience' | 'education';
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: string;
  status?: 'unread' | 'read' | 'archived';
}

export interface CodeSnippet {
  id: string;
  language: 'csharp' | 'java' | 'typescript' | 'php' | 'sql' | 'cpp';
  label: string;
  fileName: string;
  code: string;
  description: string;
  highlights: string[];
}

export interface DatabaseCapability {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  architectureRole: string;
  badge: string;
  icon: string;
}

export interface PortfolioConfig {
  developer: {
    name: string;
    titles: string[];
    headline: string;
    subheadline: string;
    bio: string;
    extendedBio: string[];
    email: string;
    github: string;
    linkedin: string;
    location: string;
    resumeUrl: string;
    avatarUrl?: string;
  };
  metrics: {
    projectsBuilt: string;
    technologiesCount: string;
    databasesCount: string;
    coreFocus: string;
  };
  pillars: Array<{
    number: string;
    title: string;
    description: string;
    icon: string;
  }>;
  workflow: Array<{
    step: string;
    title: string;
    description: string;
    icon: string;
  }>;
}
