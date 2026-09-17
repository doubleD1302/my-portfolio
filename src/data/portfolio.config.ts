import { PortfolioConfig } from '../types';

export const portfolioConfig: PortfolioConfig = {
  developer: {
    name: "Nguyễn Đức Đạt",
    titles: [
      "Full-stack Developer Intern",
      "Software Engineering Intern",
      "Backend Developer Intern",
      "Web Developer Intern"
    ],
    headline: "Full-stack Developer Intern",
    subheadline: "Software Engineering student passionate about building practical web applications, POS systems, and database-driven software.",
    bio: "I’m a Software Engineering student focused on Full-stack Development, with hands-on experience building practical web applications, POS systems, and database-driven software.",
    extendedBio: [
      "I enjoy turning real-world problems into working products — from designing user interfaces and business logic to structuring databases and deploying applications.",
      "Through projects using React, TypeScript, PHP, Node.js, Supabase, MySQL, and MongoDB, I’ve developed a strong interest in building software that is reliable, maintainable, and useful in practice."
    ],
    email: "channelpha2005@gmail.com",
    github: "https://github.com/doubleD1302",
    linkedin: "https://linkedin.com/in/nguyenducdat",
    location: "Vietnam / Open to Intern & Junior Roles",
    resumeUrl: "/CV_Nguyen_Duc_Dat.pdf",
    avatarUrl: "/images/avatar.jpg"
  },
  metrics: {
    projectsBuilt: "3",
    technologiesCount: "12+",
    databasesCount: "4",
    coreFocus: "Full-stack Development"
  },
  pillars: [
    {
      number: "01",
      title: "Full-stack Development",
      description: "Building applications across frontend, backend, business logic, and data layers.",
      icon: "code"
    },
    {
      number: "02",
      title: "Database Design",
      description: "Designing structured data models and integrating relational and NoSQL databases into real applications.",
      icon: "database"
    },
    {
      number: "03",
      title: "Problem Solving",
      description: "Turning real business requirements into practical, maintainable software solutions.",
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
