import { PortfolioConfig } from '../types';

export const portfolioConfig: PortfolioConfig = {
  developer: {
    name: "Nguyễn Đức Đạt",
    titles: [
      "Software Developer",
      "Full-stack Developer",
      "Backend Developer",
      "Database Enthusiast"
    ],
    headline: "Software Developer",
    subheadline: "I build reliable software, scalable databases and user-focused applications.",
    bio: "I’m a software developer interested in building practical applications, working with databases and turning ideas into reliable software products.",
    extendedBio: [
      "I have hands-on experience building end-to-end software solutions spanning from multi-tier desktop applications to modern cloud-connected web architectures.",
      "My approach balances practical software engineering principles with deep respect for database correctness: clean data access layers (ADO.NET, PDO, Supabase REST), normalized schemas, and structured error boundaries.",
      "Whether developing Windows desktop utilities in C# WinForms, building performant web APIs in PHP/TypeScript, or processing data pipelines in Java and C++, I prioritize maintainability, reliability, and engineering rigor."
    ],
    email: "contact@nguyenducdat.dev",
    github: "https://github.com/doubleD1302",
    linkedin: "https://linkedin.com/in/nguyenducdat",
    location: "Vietnam / Open to Remote & On-site",
    resumeUrl: "/cv.pdf",
    avatarUrl: "/images/avatar.jpg"
  },
  metrics: {
    projectsBuilt: "6+",
    technologiesCount: "15+",
    databasesCount: "5",
    coreFocus: "Full-stack Development"
  },
  pillars: [
    {
      number: "01",
      title: "Software Development",
      description: "Building robust, layered systems with clean separation between UI presentation, business rules, and data access layers.",
      icon: "code"
    },
    {
      number: "02",
      title: "Database Design",
      description: "Architecting normalized schemas, writing indexed relational queries, stored procedures, and ensuring ACID transaction safety.",
      icon: "database"
    },
    {
      number: "03",
      title: "Problem Solving",
      description: "Deconstructing real-world business requirements into modular, testable components with reliable execution guarantees.",
      icon: "cpu"
    }
  ],
  workflow: [
    {
      step: "01",
      title: "Understand the Problem",
      description: "Clarify functional requirements, domain rules, data entities, and system boundaries before writing code.",
      icon: "search"
    },
    {
      step: "02",
      title: "Design the Solution",
      description: "Draft entity-relationship models, API contracts, layered architecture boundaries, and user experience flows.",
      icon: "layers"
    },
    {
      step: "03",
      title: "Build",
      description: "Implement clean, modular code with strict typing, readable naming conventions, and decoupled dependencies.",
      icon: "terminal"
    },
    {
      step: "04",
      title: "Work With Data",
      description: "Configure connection pools, parameterize queries to eliminate injection, and optimize execution plans.",
      icon: "database"
    },
    {
      step: "05",
      title: "Test",
      description: "Validate edge cases, transaction rollback under failure, form constraints, and UI responsiveness across viewports.",
      icon: "check-circle"
    },
    {
      step: "06",
      title: "Improve",
      description: "Profile query bottlenecks, refactor shared utilities, audit security postures, and polish developer documentation.",
      icon: "refresh-cw"
    }
  ]
};
