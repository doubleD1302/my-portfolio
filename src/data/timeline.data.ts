import { TimelineEntry } from '../types';

export const timelineData: TimelineEntry[] = [
  {
    id: 'exp-1',
    type: 'experience',
    period: '2023 - Present',
    title: 'Software Developer Intern / Project Contributor',
    organization: '[YOUR ORGANIZATION / TECH COMPANY]',
    description: 'Collaborated on developing modular software modules and data integration pipelines. Authored parameterized database queries, engineered business logic layers, and ensured system stability across client implementations.',
    technologies: ['C#', 'WinForms', 'ADO.NET', 'SQL Server', 'TypeScript', 'MySQL']
  },
  {
    id: 'exp-2',
    type: 'experience',
    period: '2022 - 2024',
    title: 'Full-stack & Database Project Developer',
    organization: 'Independent Engineering & Academic Projects',
    description: 'Designed and deployed full-stack web solutions and distributed database experiments. Implemented PostgreSQL Row Level Security with Supabase, evaluated NewSQL queries on TiDB Cloud, and constructed high-throughput batch processors in Java.',
    technologies: ['TypeScript', 'Supabase', 'PostgreSQL', 'TiDB Cloud', 'Java', 'PHP', 'Firebase']
  },
  {
    id: 'edu-1',
    type: 'education',
    period: '2021 - Present',
    title: 'Bachelor of Science in Software Engineering / IT',
    organization: '[YOUR UNIVERSITY]',
    description: 'Rigorous academic training in core computer science disciplines including Object-Oriented Analysis & Design, Relational Database Systems, Operating Systems, Algorithm Complexity, and Software Quality Assurance.',
    technologies: ['Data Structures', 'C++', 'Java', 'SQL', 'C#', 'Software Architecture']
  }
];
