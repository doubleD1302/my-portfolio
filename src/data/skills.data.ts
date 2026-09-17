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

  // Web Development
  { id: 'html5', name: 'HTML5', category: 'web', icon: 'html5' },
  { id: 'css3', name: 'CSS3', category: 'web', icon: 'css3' },
  { id: 'bootstrap', name: 'Bootstrap 5', category: 'web', icon: 'bootstrap' },

  // .NET / Desktop
  { id: 'winforms', name: 'C# WinForms', category: 'dotnet', icon: 'windows' },
  { id: 'adonet', name: 'ADO.NET', category: 'dotnet', icon: 'adonet' },

  // Databases
  { id: 'sqlserver', name: 'SQL Server', category: 'databases', icon: 'sqlserver' },
  { id: 'mysql', name: 'MySQL', category: 'databases', icon: 'mysql' },
  { id: 'tidb', name: 'TiDB Cloud', category: 'databases', icon: 'tidb' },
  { id: 'supabase', name: 'Supabase', category: 'databases', icon: 'supabase' },

  // Backend Services
  { id: 'firebase', name: 'Firebase', category: 'backend', icon: 'firebase' }
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    description: 'Strong foundation in statically typed, compiled, object-oriented, and scripted languages.',
    skills: [
      { id: 'csharp', name: 'C#', category: 'languages', icon: 'csharp', badge: '.NET 8 / Framework' },
      { id: 'java', name: 'Java', category: 'languages', icon: 'java', badge: 'Core OOP / JDBC' },
      { id: 'cpp', name: 'C++', category: 'languages', icon: 'cpp', badge: 'Algorithms / Systems' },
      { id: 'typescript', name: 'TypeScript', category: 'languages', icon: 'typescript', badge: 'Strict Typing' },
      { id: 'javascript', name: 'JavaScript', category: 'languages', icon: 'javascript', badge: 'ES6+ / DOM' },
      { id: 'php', name: 'PHP', category: 'languages', icon: 'php', badge: 'Modern PDO / API' },
      { id: 'sql', name: 'SQL', category: 'languages', icon: 'sql', badge: 'Complex Queries' }
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Semantic markup, modern styling architectures, responsive layouts, and typed client-side scripting.',
    skills: [
      { id: 'html5', name: 'HTML5', category: 'web', icon: 'html5', badge: 'Semantic & A11y' },
      { id: 'css3', name: 'CSS3', category: 'web', icon: 'css3', badge: 'Flexbox / Grid / Tokens' },
      { id: 'javascript', name: 'JavaScript', category: 'web', icon: 'javascript', badge: 'Async / Fetch / Events' },
      { id: 'typescript', name: 'TypeScript', category: 'web', icon: 'typescript', badge: 'Interfaces & Generics' },
      { id: 'bootstrap', name: 'Bootstrap 5', category: 'web', icon: 'bootstrap', badge: 'Grid & Responsive Utilities' }
    ]
  },
  {
    id: 'dotnet-desktop',
    title: '.NET / Desktop',
    description: 'Layered Windows desktop development with strong separation of presentation, business rules, and data access.',
    skills: [
      { id: 'csharp', name: 'C#', category: 'dotnet', icon: 'csharp', badge: 'Core & Linq' },
      { id: 'winforms', name: 'C# WinForms', category: 'dotnet', icon: 'windows', badge: 'Desktop UI & Controls' },
      { id: 'adonet', name: 'ADO.NET', category: 'dotnet', icon: 'adonet', badge: 'Data Access Layer (DAL)' }
    ]
  },
  {
    id: 'databases',
    title: 'Databases',
    description: 'Relational data modeling, ACID transactions, stored procedures, indexing, and distributed cloud SQL.',
    skills: [
      { id: 'sqlserver', name: 'SQL Server', category: 'databases', icon: 'sqlserver', badge: 'Enterprise RDBMS' },
      { id: 'mysql', name: 'MySQL', category: 'databases', icon: 'mysql', badge: 'Relational / InnoDB' },
      { id: 'tidb', name: 'TiDB Cloud', category: 'databases', icon: 'tidb', badge: 'Distributed SQL' },
      { id: 'supabase', name: 'Supabase (PostgreSQL)', category: 'databases', icon: 'supabase', badge: 'Cloud DB & RLS' }
    ]
  },
  {
    id: 'backend-cloud',
    title: 'Backend & Cloud Services',
    description: 'Cloud backend platforms, realtime data streams, authentication, and managed database integrations.',
    skills: [
      { id: 'supabase', name: 'Supabase', category: 'backend', icon: 'supabase', badge: 'PostgreSQL / REST / Realtime' },
      { id: 'firebase', name: 'Firebase', category: 'backend', icon: 'firebase', badge: 'Firestore / Auth / Realtime' }
    ]
  }
];

export const getTechnologyById = (id: string): Technology | undefined => {
  return technologiesList.find(t => t.id === id);
};
