import projects from '~/constants/projects'

export default function ProjectSchema() {
  const schemas = projects.map((project) => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.heading,
    description: project.description,
    url: project.link,
    image: `https://rabiussunny.com${project.image}`,
    applicationCategory: 'WebApplication',
    author: {
      '@type': 'Person',
      name: 'Rabius Sunny Rezoan',
      url: 'https://rabiussunny.com'
    },
    keywords: project.keywords.join(', ')
  }))

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
