import { SkillGroup, Technology } from '../types';

export const technologiesList: Technology[] = [
  // Programming Languages
  { id: 'csharp', name: 'C#', category: 'languages', icon: 'csharp' },
  { id: 'java', name: 'Java', category: 'languages', icon: 'java' },
  { id: 'cpp', name: 'C++', category: 'languages', icon: 'cpp' },
  { id: 'typescript', name: 'TypeScript', category: 'languages', icon: 'typescript' },
  { id: 'javascript', name: 'JavaScript', category: 'languages', icon: 'javascript' },
  { id: 'php', name: 'PHP', category: 'languages', icon: 'php' },
  { id: 'sql', name: 'SQL', category: 'languages', icon: 'sql' },

  // Web & Frontend
  { id: 'react', name: 'React 19', category: 'web', icon: 'react' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'web', icon: 'tailwind' },
  { id: 'bootstrap', name: 'Bootstrap 5', category: 'web', icon: 'bootstrap' },
  { id: 'html5', name: 'HTML5', category: 'web', icon: 'html5' },
  { id: 'css3', name: 'CSS3', category: 'web', icon: 'css3' },

  // Backend & Runtime
  { id: 'nodejs', name: 'Node.js', category: 'backend', icon: 'nodejs' },
  { id: 'express', name: 'Express.js', category: 'backend', icon: 'express' },
  { id: 'docker', name: 'Docker', category: 'backend', icon: 'docker' },

  // Databases
  { id: 'supabase', name: 'Supabase / PostgreSQL', category: 'databases', icon: 'supabase' },
  { id: 'mysql', name: 'MySQL / PDO', category: 'databases', icon: 'mysql' },
  { id: 'mongodb', name: 'MongoDB / Mongoose', category: 'databases', icon: 'mongodb' },
  { id: 'sqlserver', name: 'SQL Server', category: 'databases', icon: 'sqlserver' },

  // .NET / Desktop
  { id: 'winforms', name: 'C# WinForms', category: 'dotnet', icon: 'windows' },
  { id: 'adonet', name: 'ADO.NET', category: 'dotnet', icon: 'adonet' }
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description: 'Modern component-based UI engineering, responsive styling, and typed SPA client architectures.',
    skills: [
      { id: 'react', name: 'React 19', category: 'web', icon: 'react', badge: 'Hooks / SPA / Recharts' },
      { id: 'typescript', name: 'TypeScript', category: 'languages', icon: 'typescript', badge: 'Strict Typing' },
      { id: 'javascript', name: 'JavaScript', category: 'languages', icon: 'javascript', badge: 'ES6+ / Async DOM' },
      { id: 'tailwind', name: 'Tailwind CSS', category: 'web', icon: 'tailwind', badge: 'Utility-first Design' },
      { id: 'bootstrap', name: 'Bootstrap 5', category: 'web', icon: 'bootstrap', badge: 'Grid / Responsive' }
    ]
  },
  {
    id: 'backend-development',
    title: 'Backend & Server Architecture',
    description: 'RESTful APIs, custom MVC patterns, middleware pipelines, and containerized deployments.',
    skills: [
      { id: 'php', name: 'PHP 8.2', category: 'languages', icon: 'php', badge: 'Custom MVC / PDO' },
      { id: 'nodejs', name: 'Node.js', category: 'backend', icon: 'nodejs', badge: 'Runtime & Event Loop' },
      { id: 'express', name: 'Express.js', category: 'backend', icon: 'express', badge: 'REST API & Routing' },
      { id: 'docker', name: 'Docker', category: 'backend', icon: 'docker', badge: 'Containerization / Apache' }
    ]
  },
  {
    id: 'database-systems',
    title: 'Databases & Storage',
    description: 'Relational data modeling, NoSQL document design, transactions, indexing, and offline-first persistence.',
    skills: [
      { id: 'supabase', name: 'PostgreSQL / Supabase', category: 'databases', icon: 'supabase', badge: 'Cloud DB & RLS' },
      { id: 'mysql', name: 'MySQL', category: 'databases', icon: 'mysql', badge: 'Relational 3NF & PDO' },
      { id: 'mongodb', name: 'MongoDB / Mongoose', category: 'databases', icon: 'mongodb', badge: 'NoSQL Aggregation' },
      { id: 'sqlserver', name: 'SQL Server', category: 'databases', icon: 'sqlserver', badge: 'Stored Procs & ACID' }
    ]
  },
  {
    id: 'programming-languages',
    title: 'Core Software Engineering',
    description: 'Solid algorithms, OOP principles, and layered desktop/system programming experience.',
    skills: [
      { id: 'csharp', name: 'C# / WinForms', category: 'languages', icon: 'csharp', badge: 'ADO.NET / 3-Tier' },
      { id: 'java', name: 'Java', category: 'languages', icon: 'java', badge: 'Core OOP / Data Structures' },
      { id: 'cpp', name: 'C++', category: 'languages', icon: 'cpp', badge: 'Algorithms & Memory' }
    ]
  }
];

export const getTechnologyById = (id: string): Technology | undefined => {
  return technologiesList.find(t => t.id === id);
};
