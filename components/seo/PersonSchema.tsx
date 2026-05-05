export default function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rabius Sunny Rezoan',
    alternateName: 'Rabius Sunny',
    url: 'https://rabiussunny.com',
    image: 'https://rabiussunny.com/images/me-compact.png',
    sameAs: [
      'https://github.com/rabius-sunny',
      'https://linkedin.com/in/rabius-sunny',
      'https://fb.com/rabibinsalam'
    ],
    jobTitle: 'Full Stack Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance'
    },
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Laravel',
      'Docker',
      'AWS',
      'PostgreSQL',
      'MongoDB',
      'Prisma',
      'DevOps',
      'Microservices',
      'RabbitMQ',
      'Apache Kafka',
      'Nginx',
      'AI Agent',
      'CI/CD'
    ],
    email: 'rabiussunny10@gmail.com'
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
