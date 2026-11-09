export type TSkillItem = {
  name: string
  iconKey: string
}

export type TSkillGroup = {
  title: string
  headerIcon: string
  description: string
  skills: string[]
  items: TSkillItem[]
}

export const skillset: TSkillGroup[] = [
  {
    title: 'Languages',
    headerIcon: 'code',
    description:
      'For overall design and development, I use my favorite programming and markup languages.',
    skills: ['html5', 'css3', 'javascript', 'typescript', 'es6', 'php'],
    items: [
      { name: 'HTML5', iconKey: 'html5' },
      { name: 'CSS3', iconKey: 'css3' },
      { name: 'JavaScript', iconKey: 'javascript' },
      { name: 'TypeScript', iconKey: 'typescript' },
      { name: 'ES6', iconKey: 'es6' },
      { name: 'PHP', iconKey: 'php' }
    ]
  },
  {
    title: 'Frontend Development',
    headerIcon: 'monitor',
    description:
      'For frontend development, I use the latest technologies and libraries.',
    skills: [
      'reactjs',
      'nextjs',
      'tailwindcss',
      'redux',
      'framer-motion',
      'bootstrap'
    ],
    items: [
      { name: 'React.js', iconKey: 'reactjs' },
      { name: 'Next.js', iconKey: 'nextjs' },
      { name: 'Tailwind CSS', iconKey: 'tailwindcss' },
      { name: 'Redux', iconKey: 'redux' },
      { name: 'Framer Motion', iconKey: 'framer-motion' },
      { name: 'Bootstrap', iconKey: 'bootstrap' }
    ]
  },
  {
    title: 'Backend Development',
    headerIcon: 'server',
    description:
      'For architecting and developing backend projects, I use efficient technologies.',
    skills: ['nodejs', 'expressjs', 'mongodb', 'mysql', 'postgresql', 'prisma'],
    items: [
      { name: 'Node.js', iconKey: 'nodejs' },
      { name: 'Express.js', iconKey: 'expressjs' },
      { name: 'MongoDB', iconKey: 'mongodb' },
      { name: 'MySQL', iconKey: 'mysql' },
      { name: 'PostgreSQL', iconKey: 'postgresql' },
      { name: 'Prisma', iconKey: 'prisma' }
    ]
  },
  {
    title: 'Utility Packages',
    headerIcon: 'package',
    description:
      'To make the job easy, I use different professional tools and packages.',
    skills: [
      'reactrouter',
      'reacthooks',
      'context',
      'charts',
      'animations',
      'formhandlers'
    ],
    items: [
      { name: 'React Router', iconKey: 'reactrouter' },
      { name: 'React Hooks', iconKey: 'reacthooks' },
      { name: 'Context API', iconKey: 'context' },
      { name: 'Charts', iconKey: 'charts' },
      { name: 'Animations', iconKey: 'animations' },
      { name: 'Form Handlers', iconKey: 'formhandlers' }
    ]
  },
  {
    title: 'Productivity Tools',
    headerIcon: 'terminal',
    description:
      'To keep my development operation smooth, I prefer some productivity tools.',
    skills: ['git', 'github', 'docker', 'vscode', 'figma', 'postman'],
    items: [
      { name: 'Git', iconKey: 'git' },
      { name: 'GitHub', iconKey: 'github' },
      { name: 'Docker', iconKey: 'docker' },
      { name: 'VS Code', iconKey: 'vscode' },
      { name: 'Figma', iconKey: 'figma' },
      { name: 'Postman', iconKey: 'postman' }
    ]
  },
  {
    title: 'Familiarity',
    headerIcon: 'star',
    description:
      "I'm also available at some other languages and library/frameworks.",
    skills: ['php', 'laravel', 'electronjs', 'shopify', 'firebase', 'vercel'],
    items: [
      { name: 'PHP', iconKey: 'php' },
      { name: 'Laravel', iconKey: 'laravel' },
      { name: 'Electron.js', iconKey: 'electronjs' },
      { name: 'Shopify', iconKey: 'shopify' },
      { name: 'Firebase', iconKey: 'firebase' },
      { name: 'Vercel', iconKey: 'vercel' }
    ]
  }
]
