import { TimelineEntry } from '../types';

export const timelineData: TimelineEntry[] = [
  {
    id: 'dev-journey-1',
    type: 'experience',
    period: 'Personal & Academic Projects',
    title: 'Independent Full-stack Development',
    organization: 'Full-stack Web & POS Applications',
    description: 'Building practical web applications and POS systems across frontend, backend, databases, and deployment.',
    technologies: ['React', 'TypeScript', 'PHP', 'Node.js', 'Supabase', 'MySQL', 'MongoDB']
  },
  {
    id: 'edu-1',
    type: 'education',
    period: 'Expected Graduation: 2027',
    title: 'Software Engineering',
    organization: 'Van Hien University',
    description: 'Studying software development, database systems, object-oriented programming, algorithms, and software engineering fundamentals.',
    technologies: ['Software Engineering', 'OOP', 'Database', 'Algorithms', 'SQL']
  }
];
