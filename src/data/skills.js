/**
 * Skills data organized by category
 * Each skill has a name used for display and categorization
 */
export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Building pixel-perfect, performant user interfaces',
    icon: 'Monitor',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Zustand',
      'React Query',
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Scalable server-side architecture and APIs',
    icon: 'Server',
    skills: [
      'Node.js',
      'Express.js',
      'Django',
      'Flask',
      'PostgreSQL',
      'REST APIs',
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Cloud infrastructure and deployment automation',
    icon: 'Cloud',
    skills: [
      'Docker',
      'Kubernetes',
      'Jenkins',
      'Vercel',
      'AWS',
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Development workflow and collaboration',
    icon: 'Wrench',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
    ],
  },
];
