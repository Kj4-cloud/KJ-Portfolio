/**
 * Project data with full metadata for the Projects section
 * Each project includes detailed information for the expanded card view
 */
export const projects = [
  {
    id: 'health-record-manager',
    year: 2023,
    title: 'Health Record Management System',
    role: 'Lead Developer',
    scale: '34 commits in 3 months',
    description:
      'A comprehensive health record management system that enables healthcare providers to securely store, manage, and access patient records. The system facilitates efficient patient care by providing features such as appointment scheduling, medical history tracking, prescription management, and secure data sharing among authorized personnel.',
    technologies: ['React Native', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Kj4-cloud/Health-Record-Manager',
    live: 'https://github.com/Kj4-cloud/Health-Record-Manager',
    highlights: [
      'HIPAA-compliant data architecture',
      'Real-time appointment scheduling',
      'Secure multi-role access control',
    ],
  },
  {
    id: 'carbon-x',
    year: 2022,
    title: 'Carbon X',
    role: 'Software Engineer',
    scale: '15 commits in 2 months',
    description:
      'Carbon X is a blockchain-based carbon credit trading platform that verifies farmland using satellite NDVI analysis and issues secure digital credits. Farmers earn income by adopting sustainable practices, while companies purchase verified credits to offset emissions through a transparent, tamper-proof marketplace.',
    technologies: ['React', 'Supabase', 'PostgreSQL'],
    github: 'https://github.com/',
    live: 'https://carbon-x-pi.vercel.app/',
    highlights: [
      'Satellite NDVI farmland verification',
      'Blockchain-secured credit trading',
      'Real-time marketplace dashboard',
    ],
  },
];
